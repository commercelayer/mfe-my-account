#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const workspaceRoot = process.cwd();
const rootPackageJsonPath = path.join(workspaceRoot, "package.json");
const lockfilePath = path.join(workspaceRoot, "pnpm-lock.yaml");
const dependencySections = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
];
const ignoredDirectories = new Set([
  ".git",
  ".idea",
  ".next",
  ".turbo",
  ".vscode",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "test-results",
]);

const args = new Set(process.argv.slice(2));
const isDryRun = args.has("--dry-run");
const shouldShowHelp = args.has("--help") || args.has("-h");

if (shouldShowHelp) {
  printHelp();
  process.exit(0);
}

main().catch((error) => {
  console.error("Dependency minor audit failed.");
  console.error(
    error instanceof Error ? (error.stack ?? error.message) : String(error),
  );
  process.exit(1);
});

async function main() {
  assertWorkspaceRoot();

  const manifestPaths = findPackageJsonFiles(workspaceRoot);
  const initialManifestSnapshot = readManifestSnapshot(manifestPaths);
  const initialLockfile = readTextIfExists(lockfilePath);
  const rootPackageJson = readJson(rootPackageJsonPath);
  const originalResolutions = { ...(rootPackageJson.resolutions ?? {}) };
  const report = createReport(manifestPaths);

  printStep("Workspace manifests");
  for (const manifestPath of manifestPaths) {
    console.log(`- ${relativePath(manifestPath)}`);
  }

  report.audit.initial = runAudit("Initial audit", report);

  runCommand("Minor dependency update", "pnpm", ["dep:minor"], report);
  runCommand("Install after minor update", "pnpm", ["install"], report);

  const postMinorManifestSnapshot = readManifestSnapshot(manifestPaths);
  const postMinorLockfile = readTextIfExists(lockfilePath);
  report.packages.directUpdates = diffManifestSnapshots(
    initialManifestSnapshot,
    postMinorManifestSnapshot,
  );
  report.packages.transitiveUpdates = diffLockfileSnapshots(
    initialLockfile,
    postMinorLockfile,
  );
  report.audit.afterMinor = runAudit("Audit after minor update", report);

  if (Object.keys(originalResolutions).length === 0) {
    report.resolutions.removed = [];
    report.audit.withoutResolutions = report.audit.afterMinor;
    report.audit.final = report.audit.afterMinor;
  } else {
    report.resolutions.removed = Object.entries(originalResolutions).map(
      ([name, version]) => ({
        name,
        version,
      }),
    );

    updateRootResolutions({}, report);
    runCommand("Install without resolutions", "pnpm", ["install"], report);
    report.audit.withoutResolutions = runAudit(
      "Audit without resolutions",
      report,
    );

    const regressions = diffVulnerabilities(
      report.audit.afterMinor.normalized,
      report.audit.withoutResolutions.normalized,
    );

    const directInstallAttempts = tryInstallDetectedPackages({
      manifestPaths,
      vulnerabilities: regressions.added,
      originalResolutions,
      report,
    });

    if (directInstallAttempts.length > 0) {
      report.installAttempts = directInstallAttempts;
      runCommand(
        "Install after direct dependency fixes",
        "pnpm",
        ["install"],
        report,
      );
    }

    const afterInstallAudit = runAudit(
      "Audit after direct dependency fixes",
      report,
    );
    const remainingRegressions = diffVulnerabilities(
      report.audit.afterMinor.normalized,
      afterInstallAudit.normalized,
    );

    const selectedResolutions = chooseResolutionsToRestore({
      baseAudit: report.audit.afterMinor.normalized,
      currentAudit: afterInstallAudit.normalized,
      originalResolutions,
      report,
    });

    if (selectedResolutions.changed) {
      runCommand(
        "Install after resolution restore",
        "pnpm",
        ["install"],
        report,
      );
    }

    report.audit.final = runAudit("Final audit", report);

    const finalRegressions = diffVulnerabilities(
      report.audit.afterMinor.normalized,
      report.audit.final.normalized,
    );

    if (
      finalRegressions.added.length > 0 &&
      Object.keys(selectedResolutions.applied).length <
        Object.keys(originalResolutions).length
    ) {
      const fallbackResolutions = { ...originalResolutions };
      updateRootResolutions(fallbackResolutions, report);
      runCommand(
        "Install with fallback resolutions",
        "pnpm",
        ["install"],
        report,
      );
      report.audit.final = runAudit(
        "Final audit after fallback resolutions",
        report,
      );
      report.resolutions.final = Object.entries(fallbackResolutions).map(
        ([name, version]) => ({ name, version }),
      );
      report.resolutions.fallbackApplied = true;
    }

    if (remainingRegressions.added.length > 0) {
      report.warnings.push(
        `Direct install attempts did not remove all regressions after cleaning resolutions (${remainingRegressions.added.length} remaining before resolution restore).`,
      );
    }
  }

  const remediationAttempt = applyAuditDrivenResolutions(report);

  if (remediationAttempt.applied.length > 0) {
    runCommand(
      "Install after adding audit-driven resolutions",
      "pnpm",
      ["install"],
      report,
    );
    const auditAfterRemediation = runAudit(
      "Final audit after audit-driven resolutions",
      report,
    );

    if (
      auditAfterRemediation.normalized.total <=
      report.audit.final.normalized.total
    ) {
      report.audit.final = auditAfterRemediation;
      report.resolutions.auditAdded = remediationAttempt.applied;
    } else {
      updateRootResolutions(remediationAttempt.previousResolutions, report);
      runCommand(
        "Install after rolling back audit-driven resolutions",
        "pnpm",
        ["install"],
        report,
      );
      report.audit.final = runAudit("Final audit after rollback", report);
      report.warnings.push(
        "Audit-driven resolutions increased vulnerability count and were rolled back.",
      );
    }
  }

  printReport(report);

  if (report.errors.length > 0) {
    process.exitCode = 1;
  }
}

function printHelp() {
  console.log("Usage: pnpm dep:minor:audit [--dry-run]");
  console.log("");
  console.log(
    "Runs workspace-wide minor dependency updates, audits vulnerabilities, cleans root resolutions,",
  );
  console.log(
    "tries direct installs for detected vulnerable packages, restores remaining needed resolutions,",
  );
  console.log("and prints a final debug report.");
}

function assertWorkspaceRoot() {
  if (!fs.existsSync(rootPackageJsonPath)) {
    throw new Error(`No package.json found in ${workspaceRoot}`);
  }
}

function createReport(manifestPaths) {
  return {
    dryRun: isDryRun,
    manifestPaths: manifestPaths.map(relativePath),
    audit: {
      initial: createEmptyAuditRun(),
      afterMinor: createEmptyAuditRun(),
      withoutResolutions: createEmptyAuditRun(),
      final: createEmptyAuditRun(),
    },
    packages: {
      directUpdates: [],
      transitiveUpdates: [],
    },
    resolutions: {
      removed: [],
      restored: [],
      final: [],
      auditAdded: [],
      fallbackApplied: false,
    },
    installAttempts: [],
    commands: [],
    warnings: [],
    errors: [],
  };
}

function createEmptyAuditRun() {
  const normalized = normalizeAuditReport(null);

  return {
    command: "pnpm audit --json",
    stdout: "",
    stderr: "",
    exitCode: 0,
    normalized,
    commandFailed: false,
    skipped: false,
  };
}

function findPackageJsonFiles(startDirectory) {
  const manifestPaths = [];
  walkDirectory(startDirectory, manifestPaths);

  return manifestPaths.sort((left, right) => left.localeCompare(right));
}

function walkDirectory(currentDirectory, manifestPaths) {
  const entries = fs.readdirSync(currentDirectory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(currentDirectory, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        walkDirectory(absolutePath, manifestPaths);
      }

      continue;
    }

    if (entry.isFile() && entry.name === "package.json") {
      manifestPaths.push(absolutePath);
    }
  }
}

function readManifestSnapshot(manifestPaths) {
  return Object.fromEntries(
    manifestPaths.map((manifestPath) => {
      const json = readJson(manifestPath);

      return [
        relativePath(manifestPath),
        {
          name: json.name ?? relativePath(manifestPath),
          sections: Object.fromEntries(
            dependencySections.map((section) => [
              section,
              { ...(json[section] ?? {}) },
            ]),
          ),
        },
      ];
    }),
  );
}

function diffManifestSnapshots(before, after) {
  const updates = [];
  const manifestPaths = new Set([
    ...Object.keys(before),
    ...Object.keys(after),
  ]);

  for (const manifestPath of Array.from(manifestPaths).sort()) {
    const beforeManifest = before[manifestPath]?.sections ?? {};
    const afterManifest = after[manifestPath]?.sections ?? {};

    for (const section of dependencySections) {
      const beforeDependencies = beforeManifest[section] ?? {};
      const afterDependencies = afterManifest[section] ?? {};
      const packageNames = new Set([
        ...Object.keys(beforeDependencies),
        ...Object.keys(afterDependencies),
      ]);

      for (const packageName of Array.from(packageNames).sort()) {
        const beforeVersion = beforeDependencies[packageName] ?? null;
        const afterVersion = afterDependencies[packageName] ?? null;

        if (beforeVersion === afterVersion) {
          continue;
        }

        updates.push({
          manifestPath,
          section,
          packageName,
          beforeVersion,
          afterVersion,
          changeType:
            beforeVersion == null
              ? "added"
              : afterVersion == null
                ? "removed"
                : "updated",
        });
      }
    }
  }

  return updates;
}

function diffLockfileSnapshots(beforeText, afterText) {
  const beforePackages = parseLockfilePackages(beforeText);
  const afterPackages = parseLockfilePackages(afterText);
  const packageNames = new Set([
    ...beforePackages.keys(),
    ...afterPackages.keys(),
  ]);
  const updates = [];

  for (const packageName of Array.from(packageNames).sort()) {
    const beforeVersions = beforePackages.get(packageName) ?? new Set();
    const afterVersions = afterPackages.get(packageName) ?? new Set();
    const added = Array.from(afterVersions)
      .filter((version) => !beforeVersions.has(version))
      .sort();
    const removed = Array.from(beforeVersions)
      .filter((version) => !afterVersions.has(version))
      .sort();

    if (added.length === 0 && removed.length === 0) {
      continue;
    }

    updates.push({
      packageName,
      added,
      removed,
    });
  }

  return updates;
}

function parseLockfilePackages(lockfileText) {
  const packages = new Map();

  if (!lockfileText) {
    return packages;
  }

  const lines = lockfileText.split(/\r?\n/);
  let inPackagesSection = false;

  for (const line of lines) {
    if (line === "packages:") {
      inPackagesSection = true;
      continue;
    }

    if (inPackagesSection && line.length > 0 && !line.startsWith(" ")) {
      break;
    }

    if (!inPackagesSection || !line.startsWith("  ") || !line.endsWith(":")) {
      continue;
    }

    const rawKey = line.slice(2, -1).trim().replace(/^'/, "").replace(/'$/, "");

    if (!rawKey.includes("@")) {
      continue;
    }

    const separatorIndex = rawKey.lastIndexOf("@");

    if (separatorIndex <= 0) {
      continue;
    }

    const packageName = rawKey.slice(0, separatorIndex);
    const version = normalizeVersion(rawKey.slice(separatorIndex + 1));

    if (!packages.has(packageName)) {
      packages.set(packageName, new Set());
    }

    packages.get(packageName).add(version);
  }

  return packages;
}

function normalizeVersion(version) {
  return version.split("(")[0];
}

function runAudit(label, report) {
  const run = runCommand(label, "pnpm", ["audit", "--json"], report, {
    auditCommand: true,
  });
  const raw = parseAuditJson(run.stdout || run.stderr);
  const normalized = normalizeAuditReport(raw);

  return {
    command: run.command,
    stdout: run.stdout,
    stderr: run.stderr,
    exitCode: run.exitCode,
    raw,
    normalized,
    commandFailed: run.exitCode !== 0 && normalized.items.length === 0,
    skipped: run.skipped,
  };
}

function applyAuditDrivenResolutions(report) {
  const rootPackageJson = readJson(rootPackageJsonPath);
  const previousResolutions = { ...(rootPackageJson.resolutions ?? {}) };
  const candidates = deriveResolutionCandidatesFromAudit(
    report.audit.final,
    previousResolutions,
  );

  if (candidates.length === 0) {
    return {
      previousResolutions,
      applied: [],
    };
  }

  const nextResolutions = { ...previousResolutions };
  for (const candidate of candidates) {
    nextResolutions[candidate.name] = candidate.version;
  }

  updateRootResolutions(nextResolutions, report);

  return {
    previousResolutions,
    applied: candidates,
  };
}

function deriveResolutionCandidatesFromAudit(auditRun, existingResolutions) {
  if (!auditRun?.raw || typeof auditRun.raw !== "object") {
    return [];
  }

  const candidates = new Map();
  const actions = Array.isArray(auditRun.raw.actions)
    ? auditRun.raw.actions
    : [];
  for (const action of actions) {
    if (action?.action !== "update" || !action?.module || !action?.target) {
      continue;
    }

    const version = toResolutionRange(String(action.target));
    if (!version) {
      continue;
    }

    upsertCandidate(candidates, {
      name: String(action.module),
      version,
      source: "audit-action-update",
    });
  }

  const advisories =
    auditRun.raw.advisories && typeof auditRun.raw.advisories === "object"
      ? Object.values(auditRun.raw.advisories)
      : [];

  for (const advisory of advisories) {
    const moduleName = String(advisory?.module_name ?? "");
    const minVersion = extractMinPatchedVersion(
      String(advisory?.patched_versions ?? ""),
    );

    if (!moduleName || !minVersion) {
      continue;
    }

    const version = toResolutionRange(minVersion);
    if (!version) {
      continue;
    }

    upsertCandidate(candidates, {
      name: moduleName,
      version,
      source: "audit-advisory",
    });
  }

  return Array.from(candidates.values()).filter((candidate) => {
    return existingResolutions[candidate.name] !== candidate.version;
  });
}

function upsertCandidate(candidates, candidate) {
  if (!candidates.has(candidate.name)) {
    candidates.set(candidate.name, candidate);
    return;
  }

  const current = candidates.get(candidate.name);
  if (current.source === "audit-action-update") {
    return;
  }

  if (candidate.source === "audit-action-update") {
    candidates.set(candidate.name, candidate);
  }
}

function extractMinPatchedVersion(patchedVersions) {
  const direct = patchedVersions.match(/>=\s*([0-9]+\.[0-9]+\.[0-9][^\s,]*)/);
  if (direct?.[1]) {
    return direct[1];
  }

  const fallback = patchedVersions.match(/([0-9]+\.[0-9]+\.[0-9][^\s,]*)/);
  if (fallback?.[1]) {
    return fallback[1];
  }

  return "";
}

function toResolutionRange(version) {
  const trimmed = version.trim();

  if (!trimmed) {
    return "";
  }

  if (/^[0-9]+\.[0-9]+\.[0-9]+([-.][A-Za-z0-9.]+)?$/.test(trimmed)) {
    return `^${trimmed}`;
  }

  if (/^[~^><=]/.test(trimmed)) {
    return trimmed;
  }

  return "";
}

function parseAuditJson(rawOutput) {
  if (!rawOutput) {
    return null;
  }

  const trimmed = rawOutput.trim();

  if (trimmed.length === 0) {
    return null;
  }

  try {
    return JSON.parse(trimmed);
  } catch {
    const lines = trimmed
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
    const parsedItems = [];

    for (const line of lines) {
      try {
        parsedItems.push(JSON.parse(line));
      } catch {}
    }

    if (parsedItems.length === 1) {
      return parsedItems[0];
    }

    if (parsedItems.length > 1) {
      return parsedItems.at(-1);
    }
  }

  return null;
}

function normalizeAuditReport(auditJson) {
  const items = [];

  if (Array.isArray(auditJson)) {
    for (const entry of auditJson) {
      const normalized = normalizeAuditReport(entry);
      items.push(...normalized.items);
    }
  } else if (auditJson && typeof auditJson === "object") {
    if (Array.isArray(auditJson.vulnerabilities)) {
      for (const vulnerability of auditJson.vulnerabilities) {
        items.push(normalizeVulnerability(vulnerability));
      }
    }

    if (
      auditJson.vulnerabilities &&
      !Array.isArray(auditJson.vulnerabilities)
    ) {
      for (const [packageName, vulnerability] of Object.entries(
        auditJson.vulnerabilities,
      )) {
        items.push(normalizeVulnerability(vulnerability, packageName));
      }
    }

    if (auditJson.advisories && typeof auditJson.advisories === "object") {
      for (const advisory of Object.values(auditJson.advisories)) {
        items.push(normalizeVulnerability(advisory));
      }
    }
  }

  const deduplicated = deduplicateVulnerabilities(items);
  const counts = countBySeverity(deduplicated);

  return {
    items: deduplicated,
    counts,
    total: deduplicated.length,
  };
}

function normalizeVulnerability(vulnerability, fallbackPackageName = "") {
  const packageName = String(
    vulnerability?.package ??
      vulnerability?.name ??
      vulnerability?.module_name ??
      fallbackPackageName,
  );
  const severity = normalizeSeverity(vulnerability?.severity);
  const via = normalizeVia(vulnerability?.via);
  const title = String(
    vulnerability?.title ??
      vulnerability?.overview ??
      via.map((entry) => entry.title).filter(Boolean)[0] ??
      "Unknown vulnerability",
  );
  const range = String(
    vulnerability?.range ??
      vulnerability?.vulnerable_versions ??
      vulnerability?.effects?.join(",") ??
      "",
  );
  const fixVersion = extractFixVersion(vulnerability?.fixAvailable);
  const url = String(
    vulnerability?.url ??
      via.map((entry) => entry.url).filter(Boolean)[0] ??
      "",
  );

  return {
    packageName,
    severity,
    title,
    range,
    url,
    via,
    fixVersion,
    fingerprint: [packageName, severity, title, range, url].join("|"),
  };
}

function normalizeSeverity(severity) {
  const normalized = String(severity ?? "unknown").toLowerCase();

  if (normalized === "moderate") {
    return "moderate";
  }

  if (["critical", "high", "moderate", "low", "info"].includes(normalized)) {
    return normalized;
  }

  return "unknown";
}

function normalizeVia(via) {
  if (!Array.isArray(via)) {
    return [];
  }

  return via
    .map((entry) => {
      if (typeof entry === "string") {
        return {
          source: entry,
          title: entry,
          url: "",
        };
      }

      return {
        source: String(entry?.source ?? entry?.name ?? ""),
        title: String(entry?.title ?? entry?.name ?? ""),
        url: String(entry?.url ?? ""),
      };
    })
    .filter((entry) => entry.source || entry.title || entry.url);
}

function extractFixVersion(fixAvailable) {
  if (!fixAvailable) {
    return "";
  }

  if (typeof fixAvailable === "string") {
    return fixAvailable;
  }

  if (typeof fixAvailable === "object") {
    return String(fixAvailable.version ?? fixAvailable.name ?? "");
  }

  return "";
}

function deduplicateVulnerabilities(items) {
  const fingerprints = new Set();
  const deduplicated = [];

  for (const item of items) {
    if (!item.packageName) {
      continue;
    }

    if (fingerprints.has(item.fingerprint)) {
      continue;
    }

    fingerprints.add(item.fingerprint);
    deduplicated.push(item);
  }

  return deduplicated.sort((left, right) =>
    left.packageName.localeCompare(right.packageName),
  );
}

function countBySeverity(items) {
  const counts = {
    critical: 0,
    high: 0,
    moderate: 0,
    low: 0,
    info: 0,
    unknown: 0,
  };

  for (const item of items) {
    counts[item.severity] = (counts[item.severity] ?? 0) + 1;
  }

  return counts;
}

function diffVulnerabilities(previousAudit, nextAudit) {
  const previousFingerprints = new Set(
    previousAudit.items.map((item) => item.fingerprint),
  );
  const nextFingerprints = new Set(
    nextAudit.items.map((item) => item.fingerprint),
  );

  return {
    added: nextAudit.items.filter(
      (item) => !previousFingerprints.has(item.fingerprint),
    ),
    removed: previousAudit.items.filter(
      (item) => !nextFingerprints.has(item.fingerprint),
    ),
  };
}

function tryInstallDetectedPackages({
  manifestPaths,
  vulnerabilities,
  originalResolutions,
  report,
}) {
  const vulnerableNames = new Set(
    vulnerabilities.map((item) => item.packageName),
  );
  const attempts = [];

  if (vulnerableNames.size === 0) {
    return attempts;
  }

  for (const manifestPath of manifestPaths) {
    const packageJson = readJson(manifestPath);
    let changed = false;

    for (const section of dependencySections) {
      const dependencies = packageJson[section];

      if (!dependencies || typeof dependencies !== "object") {
        continue;
      }

      for (const packageName of Object.keys(dependencies)) {
        if (!vulnerableNames.has(packageName)) {
          continue;
        }

        const targetVersion =
          originalResolutions[packageName] ??
          vulnerabilities.find((item) => item.packageName === packageName)
            ?.fixVersion;

        if (!targetVersion || dependencies[packageName] === targetVersion) {
          continue;
        }

        dependencies[packageName] = targetVersion;
        changed = true;
        attempts.push({
          manifestPath: relativePath(manifestPath),
          section,
          packageName,
          targetVersion,
        });
      }
    }

    if (changed) {
      writeJson(manifestPath, packageJson, report);
    }
  }

  if (attempts.length === 0) {
    report.warnings.push(
      "No direct dependency install attempt was possible for the vulnerabilities detected after removing resolutions.",
    );
  }

  return attempts;
}

function chooseResolutionsToRestore({
  baseAudit,
  currentAudit,
  originalResolutions,
  report,
}) {
  const applied = {};
  let activeAudit = currentAudit;

  for (const [packageName, version] of Object.entries(originalResolutions)) {
    const currentDiff = diffVulnerabilities(baseAudit, activeAudit);
    const relevantRegression = currentDiff.added.some((item) => {
      if (item.packageName === packageName) {
        return true;
      }

      return item.via.some(
        (entry) =>
          entry.source === packageName || entry.title.includes(packageName),
      );
    });

    if (!relevantRegression) {
      continue;
    }

    const nextResolutions = {
      ...applied,
      [packageName]: version,
    };

    updateRootResolutions(nextResolutions, report);
    runCommand(
      `Install while evaluating resolution ${packageName}`,
      "pnpm",
      ["install"],
      report,
    );
    const candidateAudit = runAudit(
      `Audit with resolution ${packageName}`,
      report,
    ).normalized;
    const candidateDiff = diffVulnerabilities(baseAudit, candidateAudit);

    if (candidateDiff.added.length < currentDiff.added.length) {
      applied[packageName] = version;
      activeAudit = candidateAudit;
      report.resolutions.restored.push({
        name: packageName,
        version,
        reason: "reduced regressions",
      });
      continue;
    }

    updateRootResolutions(applied, report);
    runCommand(
      `Reinstall after discarding resolution ${packageName}`,
      "pnpm",
      ["install"],
      report,
    );
  }

  updateRootResolutions(applied, report);
  report.resolutions.final = Object.entries(applied).map(([name, version]) => ({
    name,
    version,
  }));

  return {
    changed: report.resolutions.restored.length > 0,
    applied,
  };
}

function updateRootResolutions(nextResolutions, report) {
  const rootPackageJson = readJson(rootPackageJsonPath);

  if (Object.keys(nextResolutions).length === 0) {
    delete rootPackageJson.resolutions;
  } else {
    rootPackageJson.resolutions = nextResolutions;
  }

  writeJson(rootPackageJsonPath, rootPackageJson, report);
}

function runCommand(label, command, commandArgs, report, options = {}) {
  const renderedCommand = [command, ...commandArgs].join(" ");

  if (isDryRun) {
    report.commands.push({
      label,
      command: renderedCommand,
      exitCode: 0,
      stdout: "",
      stderr: "",
      skipped: true,
    });

    return {
      command: renderedCommand,
      exitCode: 0,
      stdout: "",
      stderr: "",
      skipped: true,
    };
  }

  const result = spawnSync(command, commandArgs, {
    cwd: workspaceRoot,
    encoding: "utf8",
    stdio: "pipe",
  });

  const stdout = result.stdout ?? "";
  const stderr = result.stderr ?? "";
  const exitCode = result.status ?? 1;

  report.commands.push({
    label,
    command: renderedCommand,
    exitCode,
    stdout,
    stderr,
    skipped: false,
  });

  if (exitCode !== 0 && !options.auditCommand) {
    report.errors.push(
      `${label} failed with exit code ${exitCode}: ${renderedCommand}`,
    );
  }

  return {
    command: renderedCommand,
    exitCode,
    stdout,
    stderr,
    skipped: false,
  };
}

function printStep(title) {
  console.log("");
  console.log(title);
  console.log("=".repeat(title.length));
}

function printReport(report) {
  const resolvedVulnerabilities = diffVulnerabilities(
    report.audit.initial.normalized,
    report.audit.final.normalized,
  ).removed;
  const introducedVulnerabilities = diffVulnerabilities(
    report.audit.initial.normalized,
    report.audit.final.normalized,
  ).added;

  printStep("Dependency minor audit report");
  console.log(`Dry run: ${report.dryRun ? "yes" : "no"}`);
  console.log(`Workspace manifests: ${report.manifestPaths.length}`);
  console.log(`Commands executed: ${report.commands.length}`);

  printStep("Packages updated");
  console.log(
    `Direct dependency changes: ${report.packages.directUpdates.length}`,
  );
  for (const update of report.packages.directUpdates) {
    console.log(
      `- ${update.manifestPath} | ${update.section} | ${update.packageName}: ${formatVersion(update.beforeVersion)} -> ${formatVersion(update.afterVersion)}`,
    );
  }

  console.log(
    `Transitive lockfile changes: ${report.packages.transitiveUpdates.length}`,
  );
  for (const update of report.packages.transitiveUpdates.slice(0, 50)) {
    console.log(
      `- ${update.packageName}: +[${update.added.join(", ") || "-"}] -[${update.removed.join(", ") || "-"}]`,
    );
  }
  if (report.packages.transitiveUpdates.length > 50) {
    console.log(
      `- ... ${report.packages.transitiveUpdates.length - 50} more transitive changes omitted`,
    );
  }

  printStep("Vulnerability summary");
  printAuditSummary("Initial", report.audit.initial.normalized);
  printAuditSummary("After minor update", report.audit.afterMinor.normalized);
  printAuditSummary(
    "Without resolutions",
    report.audit.withoutResolutions.normalized,
  );
  printAuditSummary("Final", report.audit.final.normalized);

  console.log(`Resolved vulnerabilities: ${resolvedVulnerabilities.length}`);
  for (const vulnerability of resolvedVulnerabilities) {
    console.log(
      `- ${vulnerability.packageName} | ${vulnerability.severity} | ${vulnerability.title}`,
    );
  }

  console.log(
    `Remaining introduced vulnerabilities: ${introducedVulnerabilities.length}`,
  );
  for (const vulnerability of introducedVulnerabilities) {
    console.log(
      `- ${vulnerability.packageName} | ${vulnerability.severity} | ${vulnerability.title}`,
    );
  }

  printStep("Resolution cleanup");
  console.log(`Removed root resolutions: ${report.resolutions.removed.length}`);
  for (const resolution of report.resolutions.removed) {
    console.log(`- removed ${resolution.name}@${resolution.version}`);
  }

  console.log(`Restored root resolutions: ${report.resolutions.final.length}`);
  for (const resolution of report.resolutions.final) {
    console.log(`- restored ${resolution.name}@${resolution.version}`);
  }
  console.log(
    `Audit-driven resolutions added: ${report.resolutions.auditAdded.length}`,
  );
  for (const resolution of report.resolutions.auditAdded) {
    console.log(
      `- added ${resolution.name}@${resolution.version} (${resolution.source})`,
    );
  }
  if (report.resolutions.fallbackApplied) {
    console.log("- fallback applied: all original resolutions restored");
  }

  console.log(`Direct install attempts: ${report.installAttempts.length}`);
  for (const attempt of report.installAttempts) {
    console.log(
      `- ${attempt.manifestPath} | ${attempt.section} | ${attempt.packageName}@${attempt.targetVersion}`,
    );
  }

  if (report.warnings.length > 0) {
    printStep("Warnings");
    for (const warning of report.warnings) {
      console.log(`- ${warning}`);
    }
  }

  if (report.errors.length > 0) {
    printStep("Errors");
    for (const error of report.errors) {
      console.log(`- ${error}`);
    }
  }
}

function printAuditSummary(label, audit) {
  const counts = audit.counts;

  console.log(
    `${label}: total=${audit.total}, critical=${counts.critical}, high=${counts.high}, moderate=${counts.moderate}, low=${counts.low}, info=${counts.info}, unknown=${counts.unknown}`,
  );
}

function formatVersion(version) {
  return version ?? "-";
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value, report) {
  if (isDryRun) {
    report.commands.push({
      label: "Write JSON",
      command: `write ${relativePath(filePath)}`,
      exitCode: 0,
      stdout: "",
      stderr: "",
      skipped: true,
    });

    return;
  }

  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function readTextIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return "";
  }

  return fs.readFileSync(filePath, "utf8");
}

function relativePath(filePath) {
  const relative = path.relative(workspaceRoot, filePath);

  return relative.length === 0 ? "." : relative;
}

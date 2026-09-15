import { existsSync } from "node:fs"
import { join, resolve } from "node:path"
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { loadEnv, type PluginOption } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import { defineConfig } from "vitest/config"

// --- react-components local mode --------------------------------------------
// Set CL_RC_LOCAL_PATH in .env.local to the path of a commercelayer-react-
// components checkout to run this app against that checkout's build instead of
// the published package. Mirrors what mfe-checkout does in next.config.js.
//
// The library's own node_modules holds its own react/react-dom/sdk, so every
// shared package is forced to resolve from this app — two copies of React or of
// the SDK break hooks and instanceof checks in ways that look like app bugs.
const rcPackages = [
  "@commercelayer/react-components",
  "@commercelayer/core-components",
  "@commercelayer/react-hooks-components",
]
const rcSingletons = [
  "react",
  "react-dom",
  "@commercelayer/sdk",
  "@commercelayer/organization-config",
]

function resolveRcLocalAliases(rcLocalRoot: string | undefined) {
  if (rcLocalRoot == null || rcLocalRoot === "") {
    return null
  }

  const aliases: Record<string, string> = {}
  for (const name of rcPackages) {
    const entry = join(
      rcLocalRoot,
      "packages",
      name.replace("@commercelayer/", ""),
      "dist/index.js",
    )
    if (!existsSync(entry)) {
      throw new Error(
        `react-components local mode: ${entry} does not exist. ` +
          `Run \`pnpm build\` inside ${rcLocalRoot} first.`,
      )
    }
    aliases[name] = entry
  }
  for (const name of rcSingletons) {
    aliases[name] = resolve(__dirname, "node_modules", name)
  }
  return aliases
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const analyzeBundle = env.ANALYZE_BUNDLE === "true"
  const basePath =
    env.PUBLIC_PROJECT_PATH != null ? `/${env.PUBLIC_PROJECT_PATH}` : ""

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const rcLocalRoot = env.CL_RC_LOCAL_PATH
  const rcLocalAliases = resolveRcLocalAliases(rcLocalRoot)
  if (rcLocalAliases != null) {
    console.log(
      `\n▲ @commercelayer/react-components: LOCAL -> ${rcLocalRoot}\n`,
    )
  }

  return {
    plugins: preparePlugins({ analyzeBundle }),
    envPrefix: "PUBLIC_",
    resolve: {
      ...(rcLocalAliases != null ? { alias: rcLocalAliases } : {}),
      dedupe: rcSingletons,
    },
    // Vite pre-bundles dependencies into node_modules/.vite and does not
    // invalidate that cache when the aliased dist/ changes underneath it, so the
    // local packages are kept out of it entirely.
    ...(rcLocalAliases != null
      ? { optimizeDeps: { exclude: rcPackages } }
      : {}),
    server: {
      port: 3000,
      ...(rcLocalRoot != null && rcLocalRoot !== ""
        ? { fs: { allow: [resolve(__dirname, "../.."), rcLocalRoot] } }
        : {}),
    },
    base: `${basePath}/`,
    build: {
      sourcemap: false,
      target: "es2020",
      outDir: "build",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: [
              "react",
              "react-dom",
              "react-helmet-async",
              "wouter",
              "react-i18next",
            ],
            commercelayer: [
              "@commercelayer/sdk",
              "@commercelayer/react-components",
            ],
          },
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      // Node 25+ ships a native (file-backed) `localStorage` global that throws
      // unless `--localstorage-file` is set, shadowing the one provided by jsdom.
      // Disable Node's experimental Web Storage so jsdom owns localStorage.
      // https://nodejs.org/api/cli.html#--experimental-webstorage
      execArgv: ["--no-experimental-webstorage"],
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
    },
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
        define: {
          global: "globalThis",
        },
        plugins: [
          // add node.JS builtin lib polyfills for ESbuild
          // https://github.com/browserify/node-util/issues/43#issuecomment-1046110526
          NodeGlobalsPolyfillPlugin({
            // buffer: true,
            process: true,
          }),
        ],
      },
    },
  }
})

function preparePlugins({ analyzeBundle }: { analyzeBundle: boolean }) {
  const plugins: PluginOption[] = [
    react(),
    tsconfigPaths(),
    analyzeBundle &&
      visualizer({
        filename: resolve(__dirname, "./build/stats.html"),
        open: true,
        title: "Bundle Stats",
      }),
  ].filter(Boolean)

  return plugins
}

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { loadEnv, PluginOption } from "vite"
import { defineConfig } from "vitest/config"

import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "")
  const analyzeBundle = env.ANALYZE_BUNDLE === "true"
  const basePath =
    env.PUBLIC_PROJECT_PATH != null ? `/${env.PUBLIC_PROJECT_PATH}` : ""

  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    plugins: preparePlugins({ analyzeBundle }),
    envPrefix: "PUBLIC_",
    server: {
      port: 3000,
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
    resolve: {
      alias: {
        "#styles": resolve(__dirname, "./src/styles"),
        "#pages": resolve(__dirname, "./src/pages"),
        "#components": resolve(__dirname, "./src/components"),
        "#hooks": resolve(__dirname, "./src/hooks"),
        "#context": resolve(__dirname, "./src/context"),
        "#providers": resolve(__dirname, "./src/providers"),
        "#assets": resolve(__dirname, "./src/assets"),
        "#utils": resolve(__dirname, "./src/utils"),
        "#types": resolve(__dirname, "./src/types"),
        "#specs": resolve(__dirname, "./specs"),
        util: "rollup-plugin-node-polyfills/polyfills/util",
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
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
    react({
      babel: {
        plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
      },
    }),
    // babel(),
    // macrosPlugin(),
    analyzeBundle &&
      visualizer({
        filename: resolve(__dirname, "./build/stats.html"),
        open: true,
        title: "Bundle Stats",
      }),
  ].filter(Boolean)

  return plugins
}

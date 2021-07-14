const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

const path = require("path")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer({}),
  webpack: (config) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias["@commercelayer/js-sdk"] = path.resolve(
      __dirname,
      "node_modules",
      "@commercelayer/js-sdk"
    )
    config.resolve.alias["@babel/runtime"] = path.resolve(
      __dirname,
      "node_modules",
      "@babel/runtime"
    )
    config.resolve.alias["strip-ansi"] = path.resolve(
      __dirname,
      "node_modules",
      "next/dist/compiled/strip-ansi"
    )
    config.resolve.alias["react-is"] = path.resolve(
      __dirname,
      "node_modules",
      "react-is"
    )
    return config
  },
}

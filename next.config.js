const shouldAnalyzeBundles = process.env.ANALYZE === "true"

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000",
  },
]

let nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orders",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
  eslint: {},
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  poweredByHeader: false,
  swcMinify: true,
  webpack: (config) => {
    return config
  },
}

if (shouldAnalyzeBundles) {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  })
  nextConfig = withBundleAnalyzer(nextConfig)
}

module.exports = nextConfig

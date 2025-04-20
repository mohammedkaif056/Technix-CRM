/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Environment variables for Clerk
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: 'pk_test_mock-key-for-build-only',
    CLERK_SECRET_KEY: 'sk_test_mock-key-for-build-only',
  },
}

module.exports = nextConfig

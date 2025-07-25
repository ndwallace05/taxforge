/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  transpilePackages: ['@taxforge/ui'],   // if you use monorepo pkgs
  experimental: {
    // leave empty – appDir removed
  },
  // any other valid keys
};

module.exports = nextConfig;
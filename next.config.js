/** @type {import('next').NextConfig} */
// move the pages directory to src/pages and add the following to next.config.js:
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/src',
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
};

module.exports = nextConfig;

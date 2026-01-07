/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Performance optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Reduce bundle size
    modularizeImports: {
        'react-icons/fi': {
            transform: 'react-icons/fi/{{member}}',
        },
        'react-icons/fa': {
            transform: 'react-icons/fa/{{member}}',
        },
        'react-icons/si': {
            transform: 'react-icons/si/{{member}}',
        },
    },
}

module.exports = nextConfig

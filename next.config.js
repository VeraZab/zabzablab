/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingRoot: __dirname,
    async redirects() {
        return [
            {
                source: '/designs',
                destination: '/',
                permanent: false,
            },
            {
                source: '/mystery-box',
                destination: '/the-match',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig

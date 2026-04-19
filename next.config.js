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
        ]
    },
}

module.exports = nextConfig

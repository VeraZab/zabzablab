/** @type {import('next').NextConfig} */
const nextConfig = {
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

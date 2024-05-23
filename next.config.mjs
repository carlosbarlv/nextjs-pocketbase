/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'localhost',
                port: '8090'
            }
        ]
    }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "source.unsplash.com",
            },
            {
                hostname: "i.imgur.com",
            },
            {
                hostname: "upload.wikimedia.org",
            },
            {
                hostname: "placeimg.com",
            },
            {
                hostname: "images.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig
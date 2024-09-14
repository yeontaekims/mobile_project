/** @type {import('next').NextConfig} */
import withTwin from "./withTwin.mjs";
const nextConfig = withTwin({
    // withTwin 적용
    reactStrictMode: true,

    images: {
        domains: ["images.theirmood.com", "res.cloudinary.com"],
    },
});

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_NAME: "EWave",
    API_URL: "http://ewaveonline.com:4040/api/v1/",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

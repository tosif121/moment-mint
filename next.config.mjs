/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_HANKO_API_URL: 'https://763ea2b4-f03c-466b-8615-370d5384abc4.hanko.io',
  },
};

export default nextConfig;

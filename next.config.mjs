/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.istockphoto.com",
      "feeds.abplive.com",
      "abp-mahakumbh-hindi.s3.dualstack.us-east-1.amazonaws.com",
      "abp-mahakumbh-hindi.s3.us-east-1.amazonaws.com",
    ],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;

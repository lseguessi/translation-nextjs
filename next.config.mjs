/** @type {import('next').NextConfig} */
import i18n from './next-i18next.config.mjs';

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  i18n,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const securite = [
  { key: 'Content-Security-Policy', value: "default-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.livi.app; frame-ancestors 'none'" },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
export default {
  transpilePackages: ['@livi/core', '@livi/asset-classes', '@livi/market-data', '@livi/design-tokens'],
  async headers() { return [{ source: '/(.*)', headers: securite }]; },
};

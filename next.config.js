/** @type {import('next').NextConfig} */

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline'
    https://www.googletagmanager.com
    https://cdn.jsdelivr.net
    https://d3mkw6s8thqya7.cloudfront.net
    https://www.youtube.com
    https://www.youtube-nocookie.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https: blob: https://img.youtube.com;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https: https://www.youtube.com https://www.youtube-nocookie.com;
  form-action 'self';
  frame-ancestors 'none';
  frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
  media-src 'self' https:;
  object-src 'none';
  manifest-src 'self';
  worker-src 'self' blob:;
  base-uri 'self';
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeader.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
];

const nextConfig = {
  poweredByHeader: false,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "navneettoptech.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
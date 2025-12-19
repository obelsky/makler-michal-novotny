/** @type {import('next').NextConfig} */
const nextConfig = {
  // Základní konfigurace
  reactStrictMode: true,
  
  // Image optimalizace
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'zfpreality.cz',
      'zfpgroup.cz',
      // Přidejte další domény podle potřeby
    ],
  },
  
  // Komprese
  compress: true,
  
  // Webpack optimalizace
  webpack: (config, { isServer }) => {
    // Optimalizace bundlu
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Experimental features
  experimental: {
    // Optimalizace fontů
    optimizeFonts: true,
  },
  
  // Headers pro bezpečnost
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects (pokud potřeba)
  async redirects() {
    return [
      // Příklad: přesměrování starých URL
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;

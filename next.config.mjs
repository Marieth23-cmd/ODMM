import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const withNextIntl = createNextIntlPlugin();

// 🔹 Obter __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'i.imgur.com',
      'raw.githubusercontent.com',
      'flagcdn.com',
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt',
        permanent: true,
      },
    ];
  },

  // 🔹 Configuração do alias @ para Webpack
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

export default withNextIntl(nextConfig);

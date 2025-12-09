import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.pixabay.com',
      'i.imgur.com',
      'raw.githubusercontent.com',
    ],
  },

  async redirects() {
    return [
      {
        source: '/',           // raiz do site
        destination: '/pt',    // redireciona para idioma padrão
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

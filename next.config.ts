import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const posthogHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
    const url = new URL(posthogHost);
    const target = `${url.origin}/`;
    return [
      {
        source: '/panopticon/:path*',
        destination: `${target}:path*`,
      },
    ];
  },
};

export default nextConfig;

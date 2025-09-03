import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const posthogHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

    try {
      const url = new URL(posthogHost);
      const target = `${url.origin}/`;

      return [
        {
          source: '/panopticon/:path*',
          destination: `${target}panopticon/:path*`,
        },
      ];
    } catch (error) {
      console.error('Invalid PostHog URL:', posthogHost);
      return [];
    }
  },
};

export default nextConfig;

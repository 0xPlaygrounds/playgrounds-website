'use client';

import posthog from 'posthog-js';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {
  children: React.ReactNode;
};

export function PostHogClientProvider({ children }: Props) {
  const [isInitialized, setIsInitialized] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || isInitialized) return;

    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
      capture_pageview: false,
      autocapture: true,
    });
    setIsInitialized(true);
    posthog.capture('$pageview');
  }, [isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    posthog.capture('$pageview');
  }, [pathname, searchParams, isInitialized]);

  return <>{children}</>;
}

export type OpenGraphData = {
  title?: string;
  description?: string;
  image?: string;
};

const META_PATTERNS: Array<[keyof OpenGraphData, RegExp[]]> = [
  [
    'title',
    [
      /<meta[^>]+property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:title["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      /<title>([^<]+)<\/title>/i,
    ],
  ],
  [
    'description',
    [
      /<meta[^>]+property=["']og:description["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:description["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    ],
  ],
  [
    'image',
    [
      /<meta[^>]+property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i,
      /<meta[^>]+name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i,
    ],
  ],
];

function extractFirst(html: string, regexes: RegExp[]): string | undefined {
  for (const rx of regexes) {
    const match = html.match(rx);
    if (match && match[1]) return match[1].trim();
  }
  return undefined;
}

export async function fetchOpenGraph(
  url: string,
  timeoutMs = 5000
): Promise<OpenGraphData> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      // Let the platform cache this request when called server-side
      next: { revalidate: 60 * 60 },
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
        'accept-language': 'en-US,en;q=0.9',
      },
      signal: controller.signal,
    });
    const html = await res.text();
    const og: OpenGraphData = {};
    for (const [key, patterns] of META_PATTERNS) {
      const value = extractFirst(html, patterns);
      if (value) og[key] = value;
    }
    return og;
  } catch {
    return {};
  } finally {
    clearTimeout(timeout);
  }
}

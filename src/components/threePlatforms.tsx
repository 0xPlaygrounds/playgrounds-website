import Image from 'next/image';

export const ThreePlatforms = () => {
  const buildUtmUrl = (base: string, content: string) => {
    const url = new URL(base);
    url.searchParams.set('utm_source', 'playgrounds.network');
    url.searchParams.set('utm_medium', 'referral');
    url.searchParams.set('utm_campaign', 'homepage');
    url.searchParams.set('utm_content', content);
    return url.toString();
  };

  const platforms = [
    {
      name: 'Rig',
      logo: '/assets/projects/rig-logo.webp',
      bgImage: '/assets/projects/rig-bg.webp',
      href: buildUtmUrl('https://rig.rs/', 'three_platforms_rig'),
      description:
        'Build AI agents in Rust. One typed API across 20+ model providers, with tools, streaming, and RAG built in. MIT licensed.',
    },
    {
      name: 'Arc',
      logo: '/assets/projects/arc-logo.webp',
      bgImage: '/assets/projects/arc-bg.webp',
      href: buildUtmUrl('https://arc.fun/', 'three_platforms_arc'),
      description:
        'AI Rig Complex. The community around Rig: contributors, partners, and the projects people ship with it.',
    },
    {
      name: 'Ryzome',
      logo: '/assets/projects/ryzome-logo.webp',
      bgImage: '/assets/projects/ryzome-bg.webp',
      href: buildUtmUrl('https://ryzome.ai/', 'three_platforms_ryzome'),
      isNew: true,
      description:
        'Stop repeating yourself to AI. Ryzome keeps your docs, notes, and conversations in one context library and loads what each chat needs.',
    },
  ];

  return (
    <div
      className="flex flex-col items-center gap-y-5 md:gap-y-8 px-4 md:px-[112px] md:pt-[96px] md:pb-[112px]"
      id="products"
    >
      <div className="flex items-center leading-none text-[28px] md:text-[52px] flex-col text-center justify-center">
        <span>
          Three products. One{' '}
          <span className="italic font-ivypresto">stack</span>.
        </span>
      </div>
      <span className="text-[18px] text-[#D4D4D4]">
        Start at the layer you need. Each one stands on its own.
      </span>
      <div className="max-w-[1216px] flex-col gap-y-6 md:flex-row pt-12 md:pt-16 flex gap-x-4">
        {platforms.map((platform, index) => {
          const Card = (
            <div className="flex flex-col gap-y-6">
              <div className="relative w-full h-[296px] border border-[#333333] rounded-lg overflow-hidden group">
                <Image
                  src={platform.bgImage}
                  alt=""
                  fill
                  className="object-cover transition-opacity duration-[1000ms] opacity-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={250}
                    height={250}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <span className="flex items-center gap-x-2 text-[18px]">
                {platform.name}
                {platform.isNew && (
                  <span className="rounded-full border border-[#333333] px-2 py-0.5 text-[11px] uppercase tracking-wide text-[#D4D4D4]">
                    New
                  </span>
                )}
              </span>
              <span className="text-[#808080]">{platform.description}</span>
            </div>
          );

          return platform.href ? (
            <a
              key={index}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              {Card}
            </a>
          ) : (
            <div key={index}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
};

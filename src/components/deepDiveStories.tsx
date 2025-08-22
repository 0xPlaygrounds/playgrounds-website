import { fetchOpenGraph } from '@/lib/og';
import type { OpenGraphData } from '@/lib/og';

type PostItem = {
  href: string;
  title: string;
  description: string;
  source: 'x' | 'linkedin';
};

const POSTS: PostItem[] = [
  {
    href: 'https://www.linkedin.com/pulse/hidden-cost-scattered-thoughts-why-your-best-ideas-deserve-akene-zeu6c/?trackingId=SePJ%2BRYdR0CU7tQiT%2Bve9g%3D%3D',
    title:
      'The Hidden Cost of Scattered Thoughts: Why Your Best Ideas Deserve a Better Home',
    description:
      'Introducing Ryzome — an infinite canvas that turns fragmented AI chats into a living map of your mind.',
    source: 'linkedin',
  },
  {
    href: 'https://x.com/0thTachi/status/1950349215634170007',
    title: 'X thread',
    description: 'Read the post on X.',
    source: 'x',
  },
  {
    href: 'https://x.com/0thTachi/status/1958923122255515680',
    title: 'X thread',
    description: 'Read the post on X.',
    source: 'x',
  },
  {
    href: 'https://x.com/0thTachi/status/1957520984375972111',
    title: 'X thread',
    description: 'Read the post on X.',
    source: 'x',
  },

  {
    href: 'https://x.com/0thTachi/status/1953206742755754132',
    title: 'X thread',
    description: 'Read the post on X.',
    source: 'x',
  },
];

const SourceBadge = ({ source }: { source: PostItem['source'] }) => (
  <span className="text-[12px] text-[#9CA3AF]">
    {source === 'x' ? 'X' : 'LinkedIn'}
  </span>
);

type ResolvedPostItem = PostItem & { image?: string };

const MainArticle = ({
  item,
  className = '',
}: {
  item: ResolvedPostItem;
  className?: string;
}) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-shrink-0 w-[280px] lg:w-[528px] flex gap-y-6 flex-col group cursor-pointer ${className}`}
  >
    <div className="overflow-hidden rounded-lg border border-[#333333]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image ?? '/assets/articles/main-article-placeholder.webp'}
        width={528}
        height={352}
        alt={item.title}
        className="w-full md:w-full md:h-auto h-[186px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col">
      <SourceBadge source={item.source} />
      <span className="text-[18px] md:text-[28px] group-hover:underline transition-all duration-300">
        {item.title}
      </span>
      <span className="text-[#808080] text-[14px] md:text-base">
        {item.description}
      </span>
    </div>
  </a>
);

const Article = ({
  item,
  className = '',
}: {
  item: ResolvedPostItem;
  className?: string;
}) => (
  <a
    href={item.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-shrink-0 w-[280px] md:w-full flex gap-y-6 md:gap-y-2 flex-col md:flex-row md:items-center md:gap-x-4 group cursor-pointer ${className}`}
  >
    <div className="overflow-hidden rounded-lg border border-[#333333] md:flex-shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image ?? '/assets/articles/main-article-placeholder.webp'}
        width={280}
        height={186}
        alt={item.title}
        className="w-[280px] h-[186px] md:w-[160px] md:h-[106px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex gap-y-2 flex-col">
      <SourceBadge source={item.source} />
      <span className="text-[18px] group-hover:underline transition-all duration-300">
        {item.title}
      </span>
      <span className="text-[#808080] text-[14px] md:text-base">
        {item.description}
      </span>
    </div>
  </a>
);

export const DeepDiveStories = async () => {
  const ogResults = await Promise.all(
    POSTS.map((p) => fetchOpenGraph(p.href).catch(() => ({}) as OpenGraphData))
  );
  const resolved: ResolvedPostItem[] = POSTS.map((p, i) => {
    const og = ogResults[i] ?? {};
    return {
      ...p,
      title: og.title ?? p.title,
      description: og.description ?? p.description,
      image: og.image,
    };
  });
  const [main, ...rest] = resolved;

  return (
    <div className="flex flex-col w-full pl-4 pr-4 md:px-[112px] pb-32 md:pb-[112px] md:py-[112px] items-center justify-center gap-y-[80px]">
      <div className="flex max-w-[1216px] items-center justify-center gap-y-[80px]">
        <div className="flex text-[28px] md:text-[52px] text-center flex-col">
          <div>
            <span className="italic font-ivypresto">Deep dive</span> into our
            stories.
          </div>
          <span className="text-[18px] text-[#D4D4D4]">
            Take a look into the myriad of uses for our platforms.
          </span>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="w-full max-w-[1216px] hidden md:flex gap-x-4 mx-auto">
        <MainArticle item={main} />
        <div className="flex flex-1 gap-y-4 flex-col">
          {rest.map((item, index) => (
            <Article key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="w-full md:hidden -mr-4">
        <div className="flex gap-x-4 overflow-x-auto pb-4 pl-0">
          <MainArticle item={main} />
          {rest.map((item, index) => (
            <Article key={index} item={item} />
          ))}
        </div>
      </div>

      <a
        href="https://x.com/0thTachi"
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit px-4 h-8 bg-white rounded-lg cursor-pointer hover:bg-white/80 text-black text-[13px] items-center justify-center font-medium flex transition duration-300 ease-in-out"
      >
        View all posts
      </a>
    </div>
  );
};

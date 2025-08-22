import Image from 'next/image';

const MainArticle = ({ className = '' }: { className?: string }) => (
  <div
    className={`flex-shrink-0 w-[280px] lg:w-[528px] flex gap-y-6 flex-col group cursor-pointer ${className}`}
  >
    <div className="overflow-hidden rounded-lg border border-[#333333]">
      <Image
        src="/assets/articles/main-article-placeholder.webp"
        width="528"
        height="352"
        alt="article main"
        className="w-full md:w-full md:h-auto h-[186px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-col">
      <span className="text-[18px] md:text-[28px] group-hover:underline transition-all duration-300">
        Performance improvements
      </span>
      <span className="text-[#808080] text-[14px] md:text-base">
        We&apos;ve enhanced our platforms to bring you the best possible
        experience. Check out the latest improvements.
      </span>
    </div>
  </div>
);

const Article = ({ className = '' }: { className?: string }) => (
  <div
    className={`flex-shrink-0 w-[280px] md:w-full flex gap-y-6 md:gap-y-2 flex-col md:flex-row md:items-center md:gap-x-4 group cursor-pointer ${className}`}
  >
    <div className="overflow-hidden rounded-lg border border-[#333333] md:flex-shrink-0">
      <Image
        src="/assets/articles/main-article-placeholder.webp"
        width="280"
        height="186"
        alt="article"
        className="w-[280px] h-[186px] md:w-[160px] md:h-[106px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex gap-y-2 flex-col">
      <span className="text-[18px] group-hover:underline transition-all duration-300">
        Update to our features
      </span>
      <span className="text-[#808080] text-[14px] md:text-base">
        We&apos;ve been working tirelessly to bring you the best version of our
        platforms. Take a look at our new features.
      </span>
    </div>
  </div>
);

export const DeepDiveStories = () => {
  const articles = Array(4).fill(null);

  return (
    <div className="flex flex-col w-full pl-4 pr-4 md:px-[112px] pb-32 md:pb-[112px] md:py-[112px] items-center justify-center w-full gap-y-[80px]">
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
        <MainArticle />
        <div className="flex flex-1 gap-y-4 flex-col">
          {articles.map((_, index) => (
            <Article key={index} />
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="w-full md:hidden -mr-4">
        <div className="flex gap-x-4 overflow-x-auto pb-4 pl-0">
          <MainArticle />
          {articles.map((_, index) => (
            <Article key={index} />
          ))}
        </div>
      </div>

      <div className="w-fit px-4 h-8 bg-white rounded-lg cursor-pointer hover:bg-white/80 text-black text-[13px] items-center justify-center font-medium flex transition duration-300 ease-in-out">
        View all article
      </div>
    </div>
  );
};

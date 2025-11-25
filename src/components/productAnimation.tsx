import Image from 'next/image';

export const ProductAnimation = () => {
  return (
    <div className="relative">
      {/* Video background - extends beyond content to show the wave */}
      <video
        src="/assets/videoanimation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-x-0 top-0 w-full h-[130%] md:h-[115%] object-cover z-0"
        style={{ objectPosition: 'center 55%' }}
      />

      {/* Top gradient fade */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#010101] to-transparent z-10" />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center pt-[96px] px-4 md:px-0">
        {/* Header text */}
        <div className="flex w-full items-center justify-center gap-y-6 flex-col">
          <div className="flex text-center leading-none text-[52px] md:text-[90px] flex-col">
            <span>
              Open and <span className="font-ivypresto italic">fearless</span>.
            </span>
            <span>This is AI&apos;s future.</span>
          </div>
          <span className="text-[18px] text-[#D4D4D4]">
            Redefining how AI is built. Open to all, and fast as ever.
          </span>
        </div>

        {/* Product image */}
        <div className="pt-6 md:pt-[64px] pb-8 md:pb-16">
          <Image
            src="/assets/header-product.webp"
            alt="Product header"
            width={800}
            height={400}
            className="object-contain w-full md:w-auto"
          />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-32 bg-gradient-to-t from-[#010101] to-transparent z-10" />
    </div>
  );
};

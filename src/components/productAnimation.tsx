import Image from 'next/image';

export const ProductAnimation = () => {
  return (
    <div className="flex flex-col p-4 pt-6 md:pt-[64px] items-center justify-center h-full relative">
      <video
        src="/assets/videoanimation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full md:h-screen object-cover z-0 translate-y-4 lg:-translate-y-6 xl:translate-y-0 2xl:translate-y-0" 
      />
      <div className="pointer-events-none absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#010101] to-transparent z-10" />
      <Image
        src="/assets/header-product.webp"
        alt="Product header"
        width={800}
        height={400}
        className="object-contain w-full md:w-auto relative z-10"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 md:bottom-auto md:top-[calc(100vh-128px)] w-full h-32 bg-gradient-to-t from-[#010101] to-transparent z-10" />
    </div>
  );
};

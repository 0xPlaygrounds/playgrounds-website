import Image from 'next/image';

export const ProductAnimation = () => {
  return (
    <div className="flex flex-col pt-12 md:pt-0 p-4 md:pt-[64px] items-center justify-center h-full relative">
      <video
        src="/assets/videoanimation.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#010101] to-transparent z-10" />
      <Image
        src="/assets/header-product.webp"
        alt="Product header"
        width={800}
        height={400}
        className="object-contain w-full md:w-auto relative z-10"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010101] to-transparent z-10"
        style={{ top: 'calc(100vh - 128px)' }}
      />
    </div>
  );
};

import Image from 'next/image'

export const ProductAnimation = () => {
    return (
        <div className="flex flex-col pt-20 md:pt-0 p-4 md:pt-[112px] items-center justify-center relative overflow-hidden">
            <video 
                src="/assets/videoanimation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className="absolute top-[-32px] left-0 w-full h-12 bg-[#010101] blur-lg z-10" />
            <Image 
                src="/assets/header-product.webp" 
                alt="Product header" 
                width={800} 
                height={400}
                className="object-contain w-full md:w-auto relative z-10"
            />
            <div className="absolute bottom-[-32px] left-0 w-full h-12 bg-[#010101] blur-lg z-10" />
        </div>
    )
}

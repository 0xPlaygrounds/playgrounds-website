import Image from 'next/image'

export const ProductAnimation = () => {
    return (
        <div className="flex flex-col pt-20 md:pt-0 p-4 md:pt-[112px] bg-[url('/assets/videoanimation.webp')] bg-cover bg-center bg-no-repeat items-center justify-center relative">
            <div className="absolute top-[-32px] left-0 w-full h-12 bg-[#010101] blur-lg" />
            <Image 
                src="/assets/header-product.webp" 
                alt="Product header" 
                width={800} 
                height={400}
                className="object-contain w-full md:w-auto"
            />
            <div className="absolute bottom-[-32px] left-0 w-full h-12 bg-[#010101] blur-lg" />
        </div>
    )
}

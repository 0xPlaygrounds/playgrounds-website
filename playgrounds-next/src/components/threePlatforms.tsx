import Image from "next/image";

export const ThreePlatforms = () => {
    const platforms = [
        {
            name: "Rig",
            logo: "/assets/projects/rig-logo.webp",
            bgImage: "/assets/different-bg.webp",
            description:
                "Open-source Rust LLM framework providing high-performance, modular APIs for building scalable AI applications with type safety and lightning-fast execution.",
        },
        {
            name: "Arc",
            logo: "/assets/projects/arc-logo.webp",
            bgImage: "/assets/different-bg.webp",
            description:
                "Open-source Rust LLM framework providing high-performance, modular APIs for building scalable AI applications with type safety and lightning-fast execution.",
        },
        {
            name: "Ryzome",
            logo: "/assets/projects/ryzome-logo.webp",
            bgImage: "/assets/different-bg.webp",
            description:
                "Open-source Rust LLM framework providing high-performance, modular APIs for building scalable AI applications with type safety and lightning-fast execution.",
        },
    ];

    return (
        <div className="flex flex-col items-center gap-y-5 md:gap-y-8 px-4 md:px-[112px] md:py-[112px]">
            <div className="flex items-center leading-none text-[28px] md:text-[52px] flex-col text-center justify-center">
                <span>
                    A triad of platforms to{" "}
                    <span className="italic font-ivypresto">elevate</span>
                </span>
                <span>your experience.</span>
            </div>
            <span className="text-[18px] text-[#D4D4D4]">
                Pick and choose what you want to create.
            </span>
            <div className="max-w-[1216px] flex-col gap-y-6 md:flex-row pt-12 md:pt-16 flex gap-x-4">
                {platforms.map((platform, index) => (
                    <div key={index} className="flex flex-col gap-y-6">
                        <div className="relative w-full h-[296px] border border-[#333333] rounded-lg overflow-hidden group">
                            <Image
                                src={platform.bgImage}
                                alt=""
                                fill
                                className="object-cover transition-opacity duration-[1000ms] opacity-0 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-black/50"></div>
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
                        <span className="text-[18px]">{platform.name}</span>
                        <span className="text-[#808080]">{platform.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

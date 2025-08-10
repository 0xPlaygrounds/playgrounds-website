import Image from 'next/image'

export const DeepDiveStories = () => {
    return (
        <div className="flex flex-col w-full px-4 md:px-[112px] md:py-[112px] items-center justify-center w-full gap-y-[80px]">
            <div className="flex max-w-[1216px] items-center justify-center gap-y-[80px]">
                <div className="flex text-[28px] md:text-[52px] text-center flex-col">
                    <div><span className="italic font-ivypresto">Deep dive</span> into our stories.</div>
                    <span className="text-[18px] text-[#D4D4D4]">Take a look into the myriad of uses for our platforms.</span>
                </div>
            </div>
            <div className="w-full max-w-[1216px] flex gap-x-4 mx-auto">
                <div className="w-max-[528px] flex gap-y-6 flex-col">
                    <Image src="/assets/articles/main-article-placeholder.webp" width="528" height="352" alt="article main" className="rounded-lg border border-[#333333] w-full" />
                    <div className="flex flex-col">
                        <span className="text-[28px]">Performance improvements</span>
                        <span className="text-[#808080]">We&apos;ve enhanced our platforms to bring you the best possible experience. Check out the latest improvements.</span>
                    </div>
                </div>
                <div className="flex max-w-[672px] gap-y-4 flex-col">
                    <div className="flex items-center gap-x-4">
                        <Image src="/assets/articles/main-article-placeholder.webp" width="160" height="108" alt="article main" className="rounded-lg border border-[#333333] w-[160px] h-[108px] object-cover" />
                        <div className="flex gap-y-2 flex-col">
                            <span className="text-[18px]">Update to our features</span>
                            <span className="text-[#808080]">We&apos;ve been working tirelessly to bring you the best version of our platforms. Take a look at our new features.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Image src="/assets/articles/main-article-placeholder.webp" width="160" height="108" alt="article main" className="rounded-lg border border-[#333333] w-[160px] h-[108px] object-cover" />
                        <div className="flex gap-y-2 flex-col">
                            <span className="text-[18px]">Update to our features</span>
                            <span className="text-[#808080]">We&apos;ve been working tirelessly to bring you the best version of our platforms. Take a look at our new features.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Image src="/assets/articles/main-article-placeholder.webp" width="160" height="108" alt="article main" className="rounded-lg border border-[#333333] w-[160px] h-[108px] object-cover" />
                        <div className="flex gap-y-2 flex-col">
                            <span className="text-[18px]">Update to our features</span>
                            <span className="text-[#808080]">We&apos;ve been working tirelessly to bring you the best version of our platforms. Take a look at our new features.</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Image src="/assets/articles/main-article-placeholder.webp" width="160" height="108" alt="article main" className="rounded-lg border border-[#333333] w-[160px] h-[108px] object-cover" />
                        <div className="flex gap-y-2 flex-col">
                            <span className="text-[18px]">Update to our features</span>
                            <span className="text-[#808080]">We&apos;ve been working tirelessly to bring you the best version of our platforms. Take a look at our new features.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-fit px-4 h-8 bg-white rounded-lg text-black text-[13px] items-center justify-center font-medium flex">
                View all article
            </div>
        </div>
    )
}

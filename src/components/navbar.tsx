'use client'

import Image from 'next/image'

export const Navbar = () => {
    return (
        <div className="h-[64px] bg-transparent z-50 flex fixed w-full items-center">
            <div className="flex justify-between items-center w-full max-w-[1376px] mx-auto px-4 md:px-8">
                <Image
                    src="/assets/playgrounds-logo-full-white.webp"
                    alt="Playgrounds logo"
                    width={136}
                    height={28}
                />
                <div className="flex font-medium gap-x-2 items-center">
                    <a
                        href="https://github.com/0xPlaygrounds"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 cursor-pointer flex border bg-black border-[#333333] hover:border-white/50 transition duration-300 ease-in-out rounded items-center px-3 text-[13px] justify-center"
                    >
                        Github
                    </a>
                    <div className="h-8 cursor-pointer transition duration-300 ease-in-out hover:bg-white/80 flex bg-white px-3 text-[13px] rounded text-[#030304] items-center justify-center" onClick={() => {
                        const element = document.getElementById("products");
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                        }
                    }}>
                        Products
                    </div>
                </div>
            </div>
        </div>
    )
}

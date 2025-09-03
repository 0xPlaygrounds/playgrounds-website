import Image from 'next/image';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants/socialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col bg-[#16161A] gap-y-[80px] py-20 md:py-0 p-4 md:py-[112px] md:px-[64px]">
      <div className="w-full flex border border-[#333333]" />
      <div className="w-full max-w-[1312px] mx-auto">
        <div className="flex w-full">
          <div className="w-full md:w-1/2 flex flex-col gap-y-8 md:gap-y-[144px]">
            <div className="flex gap-y-4 md:gap-y-6 flex-col">
              <span className="text-[14px] text-[#D4D4D4] uppercase">
                playgrounds
              </span>
              <span className="w-full flex text-[20px] md:hidden pb-4">
                Create, combine and take control of Artificial Intelligence
              </span>
              <div className="md:flex flex-col hidden leading-none text-[32px]">
                <span>Create, combine and take control </span>
                <span>of Artificial Intelligence.</span>
              </div>
              <div className="w-1/2 flex md:hidden gap-y-8 flex-col h-full justify-between">
                <div className="md:hidden flex flex-col gap-y-4">
                  <span className="uppercase text-[#D4D4D4]">contact</span>
                  <div className="flex flex-col gap-y-4">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="hover:underline"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex md:hidden flex-col gap-y-4">
                  <span className="uppercase text-[#D4D4D4]">follow us</span>
                  <div className="flex flex-col gap-y-4">
                    <span>Instagram</span>
                    <span>Youtube</span>
                    <span>X</span>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src="/assets/playgrounds-logo-full-white.webp"
              alt="Playgrounds logo"
              width={312}
              height={64}
              className="flex"
            />
            <div className="flex md:hidden gap-x-6 font-light text-[16px] items-center">
              <span>© {currentYear} Playgrounds</span>
            </div>
          </div>

          <div className="w-1/2 md:flex hidden gap-x-6">
            <div className="w-1/2 flex flex-col h-full justify-between">
              <div className="flex-col flex gap-y-6">
                <span className="uppercase text-[#D4D4D4]">contact</span>
                <div className="flex flex-col gap-y-4">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <span className="font-light flex text-[14px]">
                © {currentYear} Playgrounds
              </span>
            </div>

            <div className="w-1/2 flex flex-col h-full justify-between">
              <div className="flex flex-col flex gap-y-6">
                <span className="uppercase text-[#D4D4D4]">follow us</span>
                <div className="flex flex-col gap-y-4">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    className="hover:underline"
                  >
                    Github
                  </a>
                  <a
                    href={SOCIAL_LINKS.youtube}
                    target="_blank"
                    className="hover:underline"
                  >
                    Youtube
                  </a>
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    className="hover:underline"
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

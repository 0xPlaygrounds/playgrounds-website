'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

const team: TeamMember[] = [
  { name: 'Tachi', title: 'CEO', image: '/assets/team/tachi.webp' },
  { name: 'Thierry', title: 'CPO', image: '/assets/team/thierry.webp' },
  { name: 'Stopher', title: 'CTO', image: '/assets/team/stopher.webp' },
  {
    name: 'Garance',
    title: 'Lead Developer',
    image: '/assets/team/garance.webp',
  },
  { name: 'Mateo', title: 'Product Manager', image: '/assets/team/mateo.webp' },
  {
    name: 'Mochan',
    title: 'Founding Engineer',
    image: '/assets/team/mochan.webp',
  },
  { name: 'Josh', title: 'Devrel Engineer', image: '/assets/team/josh.webp' },
  {
    name: 'Natasha',
    title: 'Marketing Director',
    image: '/assets/team/natasha.webp',
  },
  {
    name: 'Mateusz',
    title: 'Design Engineer',
    image: '/assets/team/mateusz.webp',
  },
];

const TeamMemberCard = ({ name, title, image }: TeamMember) => {
  return (
    <div className="relative w-[302px] h-[362px] overflow-hidden rounded-lg group flex-shrink-0">
      <Image
        src={image || '/placeholder.svg'}
        alt={name}
        width={302}
        height={362}
        className="w-full h-full object-cover filter grayscale transition duration-500 group-hover:grayscale-0"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="absolute bottom-4 left-4 flex flex-col">
        <span className="text-white">{name}</span>
        <span className="uppercase text-white/80">{title}</span>
      </div>
    </div>
  );
};

export const MeetTeam = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    e.preventDefault(); // Prevent default drag behavior
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = 'auto';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  return (
    <div className="flex flex-col gap-y-[80px] pt-32 bg-gradient-to-b from-[#0A0A0A] from-65% to-[#16161A]">
      <div className="flex text-[28px] md:text-[52px] text-center flex-col px-4 md:px-[112px]">
        <span>
          Meet the team behind the{' '}
          <span className="italic font-ivypresto">magic</span>.
        </span>
        <span className="text-[18px] text-[#D4D4D4]">
          A dedicated team, constantly improving what we have to offer.
        </span>
      </div>
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto mr-4 custom-scrollbar cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onDragStart={(e) => e.preventDefault()} // Prevent default drag on container
      >
        <div className="flex gap-x-4 flex-nowrap max-w-fit mx-auto px-4 md:px-[112px] pb-[112px]">
          {team.map((member, i) => (
            <div
              key={i}
              className={i === team.length - 1 ? 'pr-4 md:pr-[112px]' : ''}
            >
              <TeamMemberCard
                title={member.title}
                image={member.image}
                name={member.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';

import Image from 'next/image';
import { useState } from 'react';

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
    name: 'Marie',
    title: 'Lead Engineer',
    image: '/assets/team/garance.webp',
  },
  {
    name: 'Mateo',
    title: 'Product Manager & Engineer',
    image: '/assets/team/mateo.webp',
  },
  {
    name: 'Mochan',
    title: 'Founding Engineer',
    image: '/assets/team/mochan.webp',
  },
  {
    name: 'Mateusz',
    title: 'Design Engineer',
    image: '/assets/team/mateusz.webp',
  },
  {
    name: 'Stephen',
    title: 'Project Lead (RIG)',
    image: '/assets/team/stephen.webp',
  },
  {
    name: 'Fay',
    title: 'Backend Engineer',
    image: '/assets/team/fay.webp',
  },
  {
    name: 'Frank',
    title: 'Full Stack Engineer',
    image: '/assets/team/frank.webp',
  },
  {
    name: 'Kezo',
    title: 'Growth Lead',
    image: '/assets/team/kezo.webp',
  },
  {
    name: 'Yav',
    title: 'Full stack Engineer',
    image: '/assets/team/yavens.webp',
  },
];

type TeamMemberCardProps = TeamMember & {
  isActive: boolean;
  onActivate: () => void;
};

const TeamMemberCard = ({
  name,
  title,
  image,
  isActive,
  onActivate,
}: TeamMemberCardProps) => {
  return (
    <div
      className="relative w-full max-w-[192px] aspect-[5/6] overflow-hidden rounded-lg group cursor-pointer justify-self-center"
      onClick={onActivate}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onActivate();
        }
      }}
    >
      <Image
        src={image || '/placeholder.svg'}
        alt={name}
        width={480}
        height={576}
        className={`w-full h-full object-cover filter transition duration-500 ${
          isActive ? 'grayscale-0' : 'grayscale'
        } group-hover:grayscale-0`}
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMemberToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-y-[80px] pt-32 bg-gradient-to-b from-[#0A0A0A] from-65% to-[#16161A]">
      <div className="flex text-[28px] md:text-[52px] text-center flex-col px-4 md:px-[112px]">
        <span>
          The <span className="italic font-ivypresto">people</span> behind it.
        </span>
        <span className="text-[18px] text-[#D4D4D4]">
          A small team across engineering, product, and growth.
        </span>
      </div>
      <div className="w-full px-4 md:px-[112px] pb-[112px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
          {team.map((member, i) => (
            <TeamMemberCard
              key={member.name}
              title={member.title}
              image={member.image}
              name={member.name}
              isActive={activeIndex === i}
              onActivate={() => handleMemberToggle(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

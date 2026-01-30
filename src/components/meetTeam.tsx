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
    name: 'Tanit',
    title: 'Marketing Director',
    image: '/assets/team/natasha.webp',
  },
  {
    name: 'Mateusz',
    title: 'Design Engineer',
    image: '/assets/team/mateusz.webp',
  },
  {
    name: 'Josh',
    title: 'Project Lead (Rig)',
    image: '/assets/team/josh.webp',
  },
  {
    name: 'Fay',
    title: 'Backend Engineer (Rig)',
    image: '/assets/team/fay.jpeg',
  },
  {
    name: 'Frank',
    title: 'Full Stack Engineer',
    image: '/assets/team/frank.webp',
  },
  {
    name: 'Eric',
    title: 'Engineer',
    image: '/assets/team/eric.jpeg',
  },
  {
    name: 'Yavens',
    title: 'Engineer (intern)',
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
      className="relative w-[240px] h-[288px] overflow-hidden rounded-lg group flex-shrink-0 cursor-pointer"
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
        width={240}
        height={288}
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
          Meet the team behind the{' '}
          <span className="italic font-ivypresto">magic</span>.
        </span>
        <span className="text-[18px] text-[#D4D4D4]">
          A dedicated team, constantly improving what we have to offer.
        </span>
      </div>
      <div className="w-full px-4 md:px-[112px] pb-[112px]">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap justify-center gap-4">
            {team.slice(0, 7).map((member, i) => (
              <TeamMemberCard
                key={i}
                title={member.title}
                image={member.image}
                name={member.name}
                isActive={activeIndex === i}
                onActivate={() => handleMemberToggle(i)}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {team.slice(7).map((member, i) => (
              <TeamMemberCard
                key={i + 7}
                title={member.title}
                image={member.image}
                name={member.name}
                isActive={activeIndex === i + 7}
                onActivate={() => handleMemberToggle(i + 7)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

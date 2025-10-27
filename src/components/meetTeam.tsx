'use client';

import Image from 'next/image';

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
    title: 'Lead Developer',
    image: '/assets/team/garance.webp',
  },
  {
    name: 'Mateo',
    title: 'Product Manager (Founding)',
    image: '/assets/team/mateo.webp',
  },
  {
    name: 'Mochan',
    title: 'Engineer (Founding)',
    image: '/assets/team/mochan.webp',
  },
  { name: 'Josh', title: 'Devrel Engineer', image: '/assets/team/josh.webp' },
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
    name: 'Frank',
    title: 'BackendEngineer',
    image: '/assets/team/frank.webp',
  },
  {
    name: 'Yavens',
    title: 'Engineer (intern)',
    image: '/assets/team/yavens.webp',
  },
];

const TeamMemberCard = ({ name, title, image }: TeamMember) => {
  return (
    <div className="relative w-[240px] h-[288px] overflow-hidden rounded-lg group flex-shrink-0">
      <Image
        src={image || '/placeholder.svg'}
        alt={name}
        width={240}
        height={288}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
          {team.map((member, i) => (
            <TeamMemberCard
              key={i}
              title={member.title}
              image={member.image}
              name={member.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

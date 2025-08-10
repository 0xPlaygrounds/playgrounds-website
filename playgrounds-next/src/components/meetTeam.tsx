import Image from "next/image"

type TeamMember = {
    name: string
    title: string
    image: string
}

const team: TeamMember[] = [
    { name: "Alice Johnson", title: "CTO", image: "/assets/team/member_placeholder.webp" },
    { name: "Michael Brown", title: "CFO", image: "/assets/team/member_placeholder.webp" },
    { name: "Sophia Miller", title: "Product Manager", image: "/assets/team/member_placeholder.webp" },
    { name: "James Taylor", title: "Lead Developer", image: "/assets/team/member_placeholder.webp" },
    { name: "Emily White", title: "UX Designer", image: "/assets/team/member_placeholder.webp" },
    { name: "Daniel Green", title: "Marketing Lead", image: "/assets/team/member_placeholder.webp" },
    { name: "Olivia Black", title: "HR Manager", image: "/assets/team/member_placeholder.webp" },
    { name: "William King", title: "Sales Director", image: "/assets/team/member_placeholder.webp" },
    { name: "Ava Scott", title: "Data Scientist", image: "/assets/team/member_placeholder.webp" },
    { name: "Ava Scott", title: "Data Scientist", image: "/assets/team/member_placeholder.webp" },
]

const TeamMemberCard = ({ name, title, image }: TeamMember) => {
    return (
        <div className="relative w-[302px] h-[362px] overflow-hidden rounded-lg group flex-shrink-0">
            <Image
                src={image || "/placeholder.svg"}
                alt={name}
                width={302}
                height={362}
                className="w-full h-full object-cover filter grayscale transition duration-500 group-hover:grayscale-0"
            />
            <div className="absolute bottom-4 left-4 flex flex-col">
                <span className="text-white">{name}</span>
                <span className="uppercase text-[#818181]">{title}</span>
            </div>
        </div>
    )
}

export const MeetTeam = () => {
    return (
        <div className="flex flex-col gap-y-[80px]">
            <div className="flex text-[28px] md:text-[52px] text-center flex-col px-4 md:px-[112px]">
                <span>
                    Meet the team behind the <span className="italic font-ivypresto">magic</span>.
                </span>
                <span className="text-[18px] text-[#D4D4D4]">
                    A dedicated team, constantly improving what we have to offer.
                </span>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex gap-x-6 flex-nowrap max-w-fit mx-auto px-4 md:px-[112px] pb-4">
                    {team.map((member, i) => (
                        <TeamMemberCard key={i} {...member} />
                    ))}
                </div>
            </div>

        </div>
    )
}

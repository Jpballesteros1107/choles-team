import Image from "next/image";

import { Sponsor } from "./sponsor.types";

interface Props {
  sponsor: Sponsor;
}

export function SponsorCard({ sponsor }: Props) {
  return (
    <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        className="
            group
            flex
            h-40
            w-72
            shrink-0
            items-center
            justify-center
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            transition-all
            duration-500
            hover:-translate-y-2
            hover:bg-white/10
            hover:border-secondary
            hover:shadow-[0_0_40px_rgba(220,38,38,.25)]
        "
    >
    <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={180}
        height={90}
            className="
            max-h-20
            w-auto
            object-contain
            grayscale
            opacity-80
            transition-all
            duration-500
            group-hover:grayscale-0
            group-hover:opacity-100
            group-hover:scale-110
        "
    />
    </a>
  );
}
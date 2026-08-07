import { sponsors } from "./sponsors.data";
import { SponsorCard } from "./SponsorCard";

export function SponsorsCarousel() {
  const items = [...sponsors, ...sponsors];

  return (
    <div className="relative overflow-hidden">
      <div className="animate-marquee flex w-max gap-8">
        {items.map((sponsor, index) => (
          <SponsorCard
            key={`${sponsor.id}-${index}`}
            sponsor={sponsor}
          />
        ))}
      </div>
    </div>
  );
}
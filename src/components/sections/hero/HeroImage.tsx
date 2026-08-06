import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative w-full max-w-130">
      <Image
        src="/images/hero/hero.png"
        alt="Equipo principal Choles Team"
        width={520}
        height={700}
        priority
        className="h-auto w-full rounded-3xl object-cover shadow-2xl"
      />
    </div>
  );
}
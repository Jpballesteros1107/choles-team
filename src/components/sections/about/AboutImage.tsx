import Image from "next/image";

export function AboutImage() {
  return (
    <div className="overflow-hidden rounded-3xl shadow-2xl">
      <Image
        src="/images/club/team.jpeg"
        alt="Equipo Choles Team"
        width={700}
        height={800}
        className="h-full w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  );
}
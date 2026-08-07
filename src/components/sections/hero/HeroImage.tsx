import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#D71920] blur-2xl opacity-70" />
      <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#071A3D] blur-2xl opacity-70" />

      <div className="relative rounded-[2rem] border border-white/25 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <Image
            src="/images/hero/hero.png"
            alt="Equipo principal Choles Team"
            width={520}
            height={520}
            priority
            sizes="(max-width: 768px) 92vw, 520px"
            className="h-auto w-full object-cover"
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#04132F]/90 via-[#04132F]/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Choles Team
            </p>

            <p className="mt-1 font-heading text-2xl uppercase leading-none text-white md:text-3xl">
              Pasión que se entrena
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-3 rounded-xl border border-white/20 bg-[#D71920] px-4 py-3 text-white shadow-xl md:-right-7">
        <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
          Formación
        </p>

        <p className="font-heading text-xl uppercase leading-none">
          7 a 14 años
        </p>
      </div>
    </div>
  );
}
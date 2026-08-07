import { Container } from "@/components/shared/Container";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { HeroBadge } from "./HeroBadge";
import { HeroImage } from "./HeroImage";

export function HeroContent() {
  return (
    <Container className="relative z-10">
      <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-28 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <HeroBadge>Más que un club</HeroBadge>

          <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
            <span className="block">Somos</span>

            <span className="block">
              una <span className="text-[#D71920]">familia</span>
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Formamos atletas con disciplina, pasión y compromiso dentro y fuera
            de la cancha.
          </p>

          <HeroActions />

          <HeroStats />
        </div>

        <div className="relative lg:justify-self-end">
          <HeroImage />
        </div>
      </div>
    </Container>
  );
}
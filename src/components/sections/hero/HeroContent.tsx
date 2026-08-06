import { Container } from "@/components/shared/Container";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { HeroBadge } from "./HeroBadge";
import { HeroImage } from "./HeroImage";

export function HeroContent() {
  return (
    <Container className="relative z-10">
      <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2">

        {/* Columna izquierda */}
        <div className="space-y-8">

          <HeroBadge>
            Más que un club
          </HeroBadge>

          <div className="space-y-2">
            <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
              Somos
            </h1>

            <h1 className="font-heading text-6xl uppercase leading-none text-white md:text-8xl">
              una familia
            </h1>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-300">
            Formamos atletas con disciplina, pasión y compromiso dentro y fuera
            de la cancha.
          </p>

          <HeroActions />

          <HeroStats />

        </div>

        {/* Columna derecha */}
       <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-2xl">
          <HeroImage />
        </div>

      </div>
    </Container>
  );
}
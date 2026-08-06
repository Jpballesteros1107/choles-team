import { Container } from "@/components/shared/Container";

import { coaches } from "./coaches.data";
import { CoachCard } from "./CoachCard";

export function Coaches() {
  const featuredCoach = coaches.find((coach) => coach.featured);

  const assistantCoaches = coaches.filter(
    (coach) => !coach.featured
  );

  return (
    <section
      id="coaches"
      className="bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32"
    >
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-secondary">
            Equipo Técnico
          </span>

          <h2 className="mt-4 font-heading text-5xl uppercase text-primary md:text-6xl">
            Conoce a nuestros entrenadores
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Nuestro cuerpo técnico trabaja para desarrollar atletas íntegros,
            fomentando la disciplina, el respeto y la pasión por el baloncesto.
          </p>
        </div>

        {featuredCoach && (
          <div className="mb-16">
            <CoachCard
              coach={featuredCoach}
              featured
            />
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {assistantCoaches.map((coach) => (
            <CoachCard
              key={coach.id}
              coach={coach}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
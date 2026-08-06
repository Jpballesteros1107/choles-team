import Image from "next/image";

import { Coach } from "./coach.types";
import { CoachBadge } from "./CoachBadge";

interface Props {
  coach: Coach;
  featured?: boolean;
}

export function CoachCard({
  coach,
  featured = false,
}: Props) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured ? "mx-auto max-w-5xl" : ""
      }`}
    >
      <div
        className={`${
          featured
            ? "grid lg:grid-cols-2"
            : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${
            featured ? "h-[550px]" : "h-96"
          }`}
        >
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

          {featured && (
            <span className="absolute left-6 top-6 rounded-full bg-secondary px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg">
              Head Coach
            </span>
          )}
        </div>

        <div
          className={`flex flex-col justify-center space-y-6 p-8 ${
            featured ? "lg:p-14" : ""
          }`}
        >
          <CoachBadge role={coach.role} />

          <div>
            <h3
              className={`font-heading uppercase text-primary ${
                featured
                  ? "text-6xl"
                  : "text-4xl"
              }`}
            >
              {coach.name}
            </h3>

            <p className="mt-2 text-lg font-semibold text-secondary">
              {coach.experience} de experiencia
            </p>
          </div>

          <p className="text-lg leading-8 text-muted-foreground">
            {coach.description}
          </p>

          {featured && (
            <div className="flex gap-4 pt-4">
              <button className="rounded-xl bg-primary px-6 py-3 text-white transition hover:bg-primary/90">
                Ver trayectoria
              </button>

              <button className="rounded-xl border border-primary px-6 py-3 text-primary transition hover:bg-primary hover:text-white">
                Contactar
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
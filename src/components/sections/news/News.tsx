import { Container } from "@/components/shared/Container";

import { NewsGrid } from "./NewsGrid";

export function News() {
  return (
    <section
      id="news"
      className="bg-white py-20 lg:py-28"
    >
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-[#D71920]">
            Últimas Noticias
          </span>

          <h2 className="mt-4 font-heading text-5xl uppercase text-[#071A3D] md:text-6xl">
            Mantente informado
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Conoce las últimas novedades, competencias, entrenamientos y
            actividades del Club Choles Team.
          </p>

        </div>

        <NewsGrid />

      </Container>
    </section>
  );
}
import { Container } from "@/components/shared/Container";

import { GalleryGrid } from "./GalleryGrid";
import { GalleryCTA } from "./GalleryCTA";
import { GalleryStats } from "./GalleryStats";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-50 py-24 lg:py-32"
    >
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="font-semibold uppercase tracking-[0.3em] text-secondary">
            Galería
          </span>

          <h2 className="mt-4 font-heading text-5xl uppercase text-primary md:text-6xl">
            Vive la pasión del baloncesto
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Revive nuestros entrenamientos, partidos, torneos y momentos más
            importantes dentro y fuera de la cancha.
          </p>

        </div>

        <GalleryGrid />

        <GalleryStats />

        <GalleryCTA />

      </Container>
    </section>
  );
}
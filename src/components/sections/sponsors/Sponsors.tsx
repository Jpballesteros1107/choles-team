import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";
import { SponsorsCarousel } from "./SponsorsCarousel";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="bg-[#F7F9FC] py-20 lg:py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.3em] text-[#D71920]">
            Nuestros aliados
          </span>

          <h2 className="mt-4 font-heading text-5xl uppercase text-[#071A3D] md:text-6xl">
            Gracias por creer en Choles Team
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Cada patrocinador impulsa el crecimiento de nuestros deportistas y
            fortalece el desarrollo del baloncesto en nuestra comunidad.
          </p>
        </div>

        <div className="mt-20">
          <SponsorsCarousel />
        </div>

        <div className="mt-20 rounded-3xl border border-[#071A3D]/15 bg-white p-8 text-center shadow-sm md:p-12">
          <h3 className="font-heading text-4xl uppercase text-[#071A3D]">
            ¿Quieres apoyar al club?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Estamos abiertos a crear alianzas con empresas y organizaciones
            comprometidas con el deporte y la formación de niños y jóvenes.
          </p>

          <div className="mt-10">
            <Button
              size="lg"
              className="bg-[#D71920] hover:bg-[#B9141A]"
            >
              Convertirse en patrocinador
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
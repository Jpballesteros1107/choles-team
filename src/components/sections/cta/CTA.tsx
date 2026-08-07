import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/Button";

const paymentOptions = [
  { period: "Trimestral", price: "$193.000", detail: "3 meses" },
  { period: "Semestral", price: "$386.000", detail: "6 meses" },
  { period: "Anual", price: "$772.000", detail: "12 meses" },
];

export function CTA() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#071A3D] py-20 text-white lg:py-28"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#D71920]/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.28em] text-white/70">
            Inscripciones abiertas
          </span>

          <h2 className="mt-4 font-heading text-5xl uppercase leading-none text-white md:text-7xl">
            Haz parte de la familia
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Club de baloncesto para niños y niñas de 7 a 14 años, con formación
            deportiva y preparación competitiva.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Valor de inscripción
            </p>

            <p className="mt-2 font-heading text-5xl text-white md:text-6xl">
              $180.000
              <span className="ml-2 text-xl text-white/70">COP</span>
            </p>

            <div className="mt-6 border-t border-white/15 pt-6">
              <p className="font-semibold text-white">Incluye:</p>

              <ul className="mt-3 space-y-2 text-white/75">
                <li>• Inscripción al club.</li>
                <li>• Primera mensualidad.</li>
                <li>• Uniforme oficial.</li>
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-[#D71920]/40 bg-[#D71920]/15 p-4">
              <p className="text-sm font-semibold text-white">
                Mensualidad: $70.000 COP
              </p>

              <p className="mt-1 text-sm leading-6 text-white/70">
                Los pagos anticipados son opcionales y no obligatorios.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-[#04132f]/70 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
              Pagos anticipados opcionales
            </p>

            <div className="mt-5 space-y-3">
              {paymentOptions.map((option) => (
                <div
                  key={option.period}
                  className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3"
                >
                  <div>
                    <p className="font-semibold text-white">{option.period}</p>
                    <p className="text-sm text-white/65">{option.detail}</p>
                  </div>

                  <p className="font-heading text-2xl text-white">
                    {option.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 border-t border-white/15 pt-6 text-sm leading-6 text-white/75">
              <p>
                <span className="font-semibold text-white">Horarios:</span>{" "}
                martes y jueves, 4:00 PM; sábados, 8:30 AM.
              </p>

              <p className="mt-2">
                <span className="font-semibold text-white">Cancha:</span>{" "}
                Parque Garupal, Valledupar.
              </p>

              <p className="mt-2">
                <span className="font-semibold text-white">Información:</span>{" "}
                +57 301 373 9651.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/inscripcion">
            <Button
              size="lg"
              className="min-w-48 bg-[#D71920] hover:bg-[#B9141A]"
            >
              Inscríbete ahora
            </Button>
          </Link>

          <a href="tel:+573013739651">
            <Button
              variant="outline"
              size="lg"
              className="min-w-48 border-white text-white hover:bg-white hover:text-[#071A3D]"
            >
              Solicitar información
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
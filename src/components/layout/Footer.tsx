import Link from "next/link";

import { Logo } from "@/components/common/Logo";
import { Container } from "@/components/shared/Container";
import { navigation } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04132F] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div>
            <Logo />

            <p className="mt-6 max-w-sm leading-7 text-white/65">
              Formamos atletas con disciplina, pasión y compromiso dentro y
              fuera de la cancha.
            </p>

            <Link
              href="/inscripcion"
              className="mt-6 inline-flex text-sm font-semibold text-[#D71920] transition-colors hover:text-white"
            >
              Inscríbete a Choles Team →
            </Link>
          </div>

          <div>
            <h3 className="font-heading text-xl uppercase text-white">
              Navegación
            </h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-[#D71920]"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-heading text-xl uppercase text-white">
              Contáctanos
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-6 text-white/65">
              <p>
                Parque Garupal
                <br />
                Valledupar, Cesar
              </p>

              <p>
                Martes y jueves: 4:00 PM
                <br />
                Sábados: 8:30 AM
              </p>

              <a
                href="tel:+573013739651"
                className="block font-semibold text-white transition-colors hover:text-[#D71920]"
              >
                +57 301 373 9651
              </a>

              <a
                href="https://wa.me/573013739651"
                target="_blank"
                rel="noreferrer"
                className="inline-flex font-semibold text-[#D71920] transition-colors hover:text-white"
              >
                Escríbenos por WhatsApp →
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center text-sm text-white/50 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Choles Team. Todos los derechos
            reservados.
          </p>

          <p>Valledupar, Colombia</p>
        </div>
      </Container>
    </footer>
  );
}
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label="Ir al inicio de Choles Team"
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <Image
          src="/images/logos/logo-choles-team.png"
          alt="Escudo de Choles Team"
          width={112}
          height={112}
          className="h-14 w-14 object-contain"
          priority
        />
      </div>

      <div className="leading-tight">
        <p className="font-heading text-xl uppercase tracking-wide text-white">
          Choles Team
        </p>

        <p className="mt-0.5 text-xs text-white/65">
          Club de Baloncesto
        </p>
      </div>
    </Link>
  );
}
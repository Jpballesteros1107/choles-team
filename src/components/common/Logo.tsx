import Link from "next/link";

interface LogoProps {
  showText?: boolean;
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo temporal */}
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white font-bold">
        CT
      </div>

      {showText && (
        <div>
          <h1 className="font-heading text-xl uppercase">
            Choles Team
          </h1>

          <p className="text-xs text-muted-foreground">
            Club de Baloncesto
          </p>
        </div>
      )}
    </Link>
  );
}
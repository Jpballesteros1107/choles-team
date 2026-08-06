import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
          Error 404
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Página no encontrada
        </h1>

        <p className="mb-8 text-muted-foreground">
          La página que buscas no existe.
        </p>

        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 font-medium text-primary-foreground transition hover:bg-primary/90"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
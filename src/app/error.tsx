"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">
        Ocurrió un error
      </h1>

      <p className="text-muted-foreground">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-primary px-6 py-2 text-white"
      >
        Intentar nuevamente
      </button>
    </main>
  );
}
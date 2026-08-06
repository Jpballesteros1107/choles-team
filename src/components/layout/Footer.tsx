export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Choles Team. Todos los derechos reservados.
      </div>
    </footer>
  );
}
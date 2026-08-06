import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AboutFeatures } from "./AboutFeatures";

export function AboutContent() {
  return (
    <div className="space-y-8">
      <Badge>Sobre Nosotros</Badge>

      <h2 className="font-heading text-5xl uppercase text-primary">
        Formando atletas,
        <br />
        formando personas
      </h2>

      <p className="text-lg leading-8 text-muted-foreground">
        En Choles Team creemos que el baloncesto es una herramienta para
        desarrollar disciplina, liderazgo y trabajo en equipo. Nuestro objetivo
        es acompañar a cada deportista en su crecimiento dentro y fuera de la
        cancha.
      </p>

      <AboutFeatures />

      <Button variant="secondary">
        Conoce nuestra historia
      </Button>
    </div>
  );
}
import { Container } from "@/components/shared/Container";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
}
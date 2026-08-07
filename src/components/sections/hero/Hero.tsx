import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden"
    >
      <HeroBackground />
      <HeroContent />
    </section>
  );
}
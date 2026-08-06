import { Button } from "@/components/ui/Button";

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="secondary"
        className="rounded-full px-8"
      >
        Inscríbete
      </Button>

      <Button
        variant="outline"
        className="rounded-full border-white text-white hover:bg-white hover:text-primary"
      >
        Conócenos
      </Button>
    </div>
  );
}
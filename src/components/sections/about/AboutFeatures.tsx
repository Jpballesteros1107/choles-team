import { CheckCircle2 } from "lucide-react";
import { aboutFeatures } from "./about.data";

export function AboutFeatures() {
  return (
    <div className="grid gap-4">
      {aboutFeatures.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-3"
        >
          <CheckCircle2 className="size-5 text-secondary" />

          <span>{feature}</span>
        </div>
      ))}
    </div>
  );
}
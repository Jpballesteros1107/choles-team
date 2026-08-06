import { heroStats } from "./hero.data";

export function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8">
      {heroStats.map((item) => (
        <div key={item.label}>
          <h3 className="font-heading text-4xl text-secondary">
            {item.value}
          </h3>

          <p className="text-sm text-gray-300">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
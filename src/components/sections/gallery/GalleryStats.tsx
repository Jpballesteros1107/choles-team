export function GalleryStats() {
  const stats = [
    {
      value: "12+",
      label: "Torneos",
    },
    {
      value: "200+",
      label: "Jugadores",
    },
    {
      value: "6",
      label: "Categorías",
    },
    {
      value: "500+",
      label: "Momentos",
    },
  ];

  return (
    <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl bg-white p-8 text-center shadow-lg"
        >
          <h3 className="font-heading text-6xl text-primary">
            {stat.value}
          </h3>

          <p className="mt-3 uppercase tracking-wider text-secondary">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
import Image from "next/image";

import { News } from "./news.types";
import { NewsBadge } from "./NewsBadge";

interface Props {
  news: News;
}

export function NewsCard({ news }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      </div>

      <div className="space-y-5 p-6">
        <NewsBadge category={news.category} />

        <div>
          <p className="text-sm font-semibold text-secondary">
            {news.date}
          </p>

          <h3 className="mt-2 font-heading text-3xl uppercase text-primary">
            {news.title}
          </h3>
        </div>

        <p className="leading-7 text-muted-foreground">
          {news.excerpt}
        </p>

        <button className="font-semibold text-secondary transition hover:text-primary">
          Leer más →
        </button>
      </div>
    </article>
  );
}
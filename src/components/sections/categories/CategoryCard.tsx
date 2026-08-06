import Image from "next/image";

import { Category } from "./category.types";
import { CategoryBadge } from "./CategoryBadge";

interface Props {
  category: Category;
}

export function CategoryCard({ category }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative h-72 overflow-hidden">

        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />

      </div>

      <div className="space-y-4 p-6">

        <CategoryBadge gender={category.gender} />

        <div>
          <h3 className="font-heading text-4xl uppercase text-primary">
            {category.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {category.maxAge
              ? `${category.minAge} - ${category.maxAge} años`
              : `${category.minAge}+ años`}
          </p>
        </div>

        <p className="text-sm leading-7 text-muted-foreground">
          {category.description}
        </p>

      </div>

    </article>
  );
}
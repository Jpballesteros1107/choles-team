import { news } from "./news.data";
import { NewsCard } from "./NewsCard";

export function NewsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}
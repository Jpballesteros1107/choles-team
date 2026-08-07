import { Container } from "@/components/shared/Container";
import { CategoryCard } from "./CategoryCard";
import { categories } from "./categories.data";

export function Categories() {
  return (
    <section
      id="categories"
      className="bg-[#F7F9FC] py-20 lg:py-28"
    >
      <Container>

        <div className="mx-auto mb-16 max-w-2xl text-center">

          <h2 className="font-heading text-5xl uppercase text-[#071A3D] md:text-6xl">
            Nuestras Categorías
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Contamos con categorías para todas las edades, promoviendo el
            aprendizaje, la disciplina y el crecimiento deportivo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}
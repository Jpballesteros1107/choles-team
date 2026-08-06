import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Categories } from "@/components/sections/categories/Categories";
import { Coaches } from "@/components/sections/coaches/Coaches";
import { Gallery } from "@/components/sections/gallery/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Coaches />
      <Gallery />
    </>
  );
}
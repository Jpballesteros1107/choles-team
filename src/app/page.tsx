import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Categories } from "@/components/sections/categories/Categories";
import { Coaches } from "@/components/sections/coaches/Coaches";
import { Gallery } from "@/components/sections/gallery/Gallery";
import { News } from "@/components/sections/news/News";
import { Sponsors } from "@/components/sections/sponsors/Sponsors";
import { CTA } from "@/components/sections/cta/CTA";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <Coaches />
      <Gallery />
      <News />
      <Sponsors />
      <CTA />
    </>
  );
}
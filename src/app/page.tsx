import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Categories } from "@/components/sections/categories/Categories";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
    </>
  );
}
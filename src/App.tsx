import { BrandStory } from "@/components/sections/BrandStory";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact, Footer } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { Reach } from "@/components/sections/Reach";

export default function App() {
  return (
    <>
      <main>
        <Hero />
        <BrandStory />
        <Capabilities />
        <ProductGallery />
        <Reach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

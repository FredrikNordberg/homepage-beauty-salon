

import Hero from "@/app/components/Hero";

import Services from "@/app/components/Services";

import About from "./about/page";
import Prices from "./prices/page";
import Gallery from "./gallery/page";





export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Prices />
      <Gallery />
    </>
  );
}

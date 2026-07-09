// app/page.tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustBand from "@/components/TrustBand";
import Testimonials from "@/components/Testimonials";
import FAQ from "./FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <TrustBand />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

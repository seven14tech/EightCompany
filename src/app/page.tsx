import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Industries />
      <About />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}

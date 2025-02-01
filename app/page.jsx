import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

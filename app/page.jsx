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
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

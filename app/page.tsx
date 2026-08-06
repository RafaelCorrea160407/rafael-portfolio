import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-black" id="top">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

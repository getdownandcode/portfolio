import Nav from "@/features/portfolio/components/Nav";
import Hero from "@/features/portfolio/components/Hero";
import About from "@/features/portfolio/components/About";
import Work from "@/features/portfolio/components/Work";
import Skills from "@/features/portfolio/components/Skills";
import Education from "@/features/portfolio/components/Education";
import Contact from "@/features/portfolio/components/Contact";
import Footer from "@/features/portfolio/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

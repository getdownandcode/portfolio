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
    <main className="relative min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-foreground">
      {/* Global Background Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-[-1] flex justify-center">
        <div className="w-full max-w-7xl h-full border-x border-border/40 grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
          <div className="h-full"></div>
          <div className="h-full"></div>
          <div className="h-full hidden md:block"></div>
          <div className="h-full hidden md:block"></div>
        </div>
      </div>
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] grain mix-blend-multiply"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Nav />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;

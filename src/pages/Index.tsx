import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-forest-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">United Fence Systems</h3>
              <p className="text-white/80 text-sm">
                30 years of excellence in electric fencing solutions. 
                Protecting wildlife and securing properties across South India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Wildlife Protection Fencing</li>
                <li>Agricultural Security Systems</li>
                <li>Government Project Solutions</li>
                <li>Emergency Repair Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Coverage Areas</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Kerala - All Districts</li>
                <li>Tamil Nadu - Major Areas</li>
                <li>Karnataka - Selected Regions</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 United Fence Systems. All rights reserved. Established 1996.
            </p>
            <p className="text-sm text-white/60">
              Authorized Dealer: Fenceline Gallagher (New Zealand)
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>
          United Fence Systems | Electric Fencing Experts in South India
        </title>

        <meta
          name="description"
          content="India’s trusted electric fencing company since 1996. Wildlife-safe, ISO certified fencing solutions across Kerala, Tamil Nadu & Karnataka."
        />

        <meta
          name="keywords"
          content="electric fencing India, wildlife fencing Kerala, solar electric fencing, elephant fencing, government fencing contractor, United Fence Systems"
        />

        <link rel="canonical" href="https://united-fencing.vercel.app/" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="United Fence Systems | 30 Years of Electric Fencing Excellence"
        />
        <meta
          property="og:description"
          content="Protecting wildlife, securing properties, and safeguarding communities with ISO-certified electric fencing solutions across South India."
        />
        <meta property="og:url" content="https://united-fencing.vercel.app/" />
        <meta
          property="og:image"
          content="https://united-fencing.vercel.app/og-image.png"
        />
        <meta property="og:site_name" content="United Fence Systems" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="United Fence Systems | Electric Fencing Experts"
        />
        <meta
          name="twitter:description"
          content="ISO-certified electric fencing solutions for wildlife sanctuaries, agriculture and government projects across South India."
        />
        <meta
          name="twitter:image"
          content="https://united-fencing.vercel.app/og-image.png"
        />
        
      </Helmet>

      <Header />
      <WhatsAppButton />

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

        <section id="clients">
          <Clients />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-forest-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                United Fence Systems
              </h3>
              <p className="text-white/80 text-sm mb-4">
                30 years of excellence in electric fencing solutions. Protecting
                wildlife and securing properties across South India.
              </p>
              <div className="space-y-1 text-xs text-white/70">
                <p className="font-medium text-white/90 mb-2">
                  Business Address:
                </p>
                <p>Ground Floor, 12/355</p>
                <p>KAROTTUKUNNEL Building</p>
                <p>Velliyamattom, Thodupuzha</p>
                <p>Idukki - 685588, Kerala</p>
                <p className="mt-2">GSTIN: 32AAIFU0806G1ZJ</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2 text-sm text-white/80">
                <div>
                  <p className="font-medium text-white/90">Phone Numbers:</p>
                  <p>+91 9447022577</p>
                  <p>+91 8075684443</p>
                  <p>+91 9446597577</p>
                </div>
                <div className="mt-3">
                  <p className="font-medium text-white/90">Email:</p>
                  <p>unitedfencesystems@gmail.com</p>
                </div>
              </div>
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
                <li>Other States - On Request</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © 2024 United Fence Systems. All rights reserved. Established
              1994.
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

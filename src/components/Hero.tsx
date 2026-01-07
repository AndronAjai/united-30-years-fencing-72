import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-electric-fencing.jpg";

const Hero = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/80 via-primary/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center lg:text-left">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            {/* Established Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              <span className="text-gold font-semibold">Est. 1996</span>
              <span className="mx-2 sm:mx-3 text-gold/60">•</span>
              <span className="text-gold font-semibold">30 Years of Excellence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-gold">United Fence</span>
              <span className="block">Systems</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              India's trusted partner in electric fencing solutions. Protecting wildlife, securing properties, and safeguarding communities across Kerala, Tamil Nadu, Karnataka, and other states as needed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-0">
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="hero" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Get Quote Today
              </Button>
              <Button onClick={() => scrollToSection('projects')} size="lg" variant="outline-gold" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                View Our Projects
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>ISO Certified Quality</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Wildlife Conservation Partner</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Gallagher Authorized Partner</span>
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/20 text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">30+</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/20 text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">500+</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/20 text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">100%</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">Wildlife Safe</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 lg:p-6 rounded-lg border border-white/20 text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gold mb-1 sm:mb-2">4+</div>
              <div className="text-white/90 text-xs sm:text-sm lg:text-base">States Covered</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
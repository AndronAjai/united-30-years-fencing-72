import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import isoLogo from "@/assets/logos/ISO-logo.png";

const About = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-forest-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About United Fence Systems
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Three Decades of <span className="text-primary">Trust & Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Since November 1996, we've been the pioneering force in electric fencing solutions across South India, 
            protecting wildlife and securing properties with innovative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Card className="bg-gradient-to-br from-card to-accent border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  Our Heritage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Established in <strong className="text-primary">November 1996</strong>, United Fence Systems has grown 
                  from a small enterprise to become the most trusted name in electric fencing across Kerala, Tamil Nadu, and Karnataka.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary">1996</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-primary">30</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-card to-accent border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  Exclusive Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gold/10 p-3 sm:p-4 rounded-lg border border-gold/20">
                  <h4 className="font-semibold text-gold mb-2 text-sm sm:text-base">Only Authorized Dealer</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    <strong>Ibex Gallagher (Now Fenceline Gallagher)</strong> - New Zealand
                  </p>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Ibex Gallagher, a joint venture with Gallagher Group Ltd, New Zealand, are the pioneers 
                  in electrified perimeter fencing systems in India. We provide effective solutions for 
                  farming, wildlife management, and security establishments nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ISO Certification */}
        <div className="mt-8 sm:mt-12">
          <Card className="bg-gradient-to-br from-gold/10 to-primary/5 border-gold/30 shadow-card overflow-hidden">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={isoLogo} 
                    alt="ISO 9001:2015 Certified" 
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Badge className="mb-3 bg-gold/20 text-gold border-gold/30">ISO Certified Company</Badge>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Quality Management Systems Certified</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Assessed by RAPL and certified to comply with <strong className="text-primary">ISO 9001:2015</strong> standards for:
                  </p>
                  <p className="text-xs sm:text-sm text-foreground/80 italic leading-relaxed">
                    "PWD Civil Contractor for Designing, Preparation of Projects, Supply, Installation, Testing and Commissioning of Solar Electric Fencing System"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 sm:mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-forest-light/30 border-primary/20">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">Government Sector</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Securing borders, tribal settlements, and government tourist properties in forest areas
                  </p>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">Private Sector</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Protecting plantations, farms, and agricultural properties from wildlife intrusion
                  </p>
                </div>
                <div className="sm:col-span-2 md:col-span-1">
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">Customizable Solutions</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Hanging, security, and horizontal fencing tailored to target specific animals
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-forest-light/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About United Fence Systems
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Three Decades of <span className="text-primary">Trust & Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since November 1996, we've been the pioneering force in electric fencing solutions across South India, 
            protecting wildlife and securing properties with innovative technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gradient-to-br from-card to-accent border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  Our Heritage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Established in <strong className="text-primary">November 1996</strong>, United Fence Systems has grown 
                  from a small enterprise to become the most trusted name in electric fencing across Kerala, Tamil Nadu, and Karnataka.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">1996</div>
                    <div className="text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">30</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gradient-to-br from-card to-accent border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  Exclusive Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gold/10 p-4 rounded-lg border border-gold/20">
                  <h4 className="font-semibold text-gold mb-2">Only Authorized Dealer</h4>
                  <p className="text-sm text-muted-foreground">
                    <strong>Ibex Gallagher (Now Fenceline Gallagher)</strong> - New Zealand
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Ibex Gallagher, a joint venture with Gallagher Group Ltd, New Zealand, are the pioneers 
                  in electrified perimeter fencing systems in India. We provide effective solutions for 
                  farming, wildlife management, and security establishments nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-forest-light/30 border-primary/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Government Sector</h3>
                  <p className="text-muted-foreground text-sm">
                    Securing borders, tribal settlements, and government tourist properties in forest areas
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Private Sector</h3>
                  <p className="text-muted-foreground text-sm">
                    Protecting plantations, farms, and agricultural properties from wildlife intrusion
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Customizable Solutions</h3>
                  <p className="text-muted-foreground text-sm">
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
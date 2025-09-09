import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Hanging Fencing",
      description: "Specialized hanging fence systems for uneven terrain and sensitive wildlife areas",
      features: ["Minimal ground disturbance", "Wildlife-friendly design", "Suitable for forest areas", "Quick installation"],
      icon: "🔗"
    },
    {
      title: "Security Fencing", 
      description: "High-security electric fencing for government properties and sensitive installations",
      features: ["Maximum security levels", "Government approved", "BSNL tower protection", "Perimeter security"],
      icon: "🔒"
    },
    {
      title: "Horizontal Fencing",
      description: "Traditional horizontal electric fencing for agricultural and plantation protection",
      features: ["Crop protection", "Livestock management", "Plantation security", "Cost-effective"],
      icon: "📏"
    }
  ];

  const customizations = [
    {
      title: "Animal-Specific Design",
      description: "Fence height and line configuration based on target animals",
      examples: ["Elephants: 4-6 lines", "Wild boars: 4-6 lines", "Wild buffalo: 5-7 lines", "Deer: 5-7 lines"]
    },
    {
      title: "Terrain Adaptation", 
      description: "Solutions for various geographical challenges",
      examples: ["Hilly terrain", "Wetlands", "Forest edges", "Agricultural boundaries"]
    },
    {
      title: "Power Solutions",
      description: "Reliable power systems for remote locations",
      examples: ["Solar powered", "Battery backup", "Grid connection", "Hybrid systems"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Comprehensive <span className="text-primary">Fencing Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From wildlife protection to agricultural security, we provide customized electric fencing 
            solutions tailored to your specific needs and local wildlife patterns.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-to-b from-card to-accent/50 border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customization Options */}
        <div className="bg-gradient-to-r from-forest-light/20 to-accent/30 rounded-2xl p-8 border border-border">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Customization Options</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is unique. We customize our solutions based on the specific wildlife threats, 
              terrain challenges, and security requirements of your location.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customizations.map((custom, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-primary mb-3">{custom.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{custom.description}</p>
                <div className="space-y-2">
                  {custom.examples.map((example, idx) => (
                    <Badge key={idx} variant="outline" className="mr-2 mb-2 text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-forest-dark/5 border-primary/20 p-8">
            <CardContent className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Ready to Secure Your Property?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contact our experts for a free consultation and customized fencing solution 
                designed specifically for your wildlife protection needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="professional">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Site Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
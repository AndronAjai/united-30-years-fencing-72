import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Import logos
import keralaGovLogo from "@/assets/logos/kerala-government.png";
import nddbLogo from "@/assets/logos/National_Dairy_Development_Board.gif";
import bsnlLogo from "@/assets/logos/bsnl-logo.png";
import kfdcLogo from "@/assets/logos/KFDC.png";
import periyarLogo from "@/assets/logos/periyar-tiger-reserve.png";
import tnForestLogo from "@/assets/logos/tn-forest-dept.png";

const Clients = () => {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });
  
  const clients = [
    {
      name: "Kerala State Government",
      logo: keralaGovLogo,
      category: "Government",
      description: "Wildlife protection projects across multiple sanctuaries"
    },
    {
      name: "Kerala Forest Development Corporation",
      logo: kfdcLogo,
      category: "Government",
      description: "Plantation protection and wildlife corridor management"
    },
    {
      name: "NDDB (National Dairy Development Board)",
      logo: nddbLogo,
      category: "Government",
      description: "Alamadhi Semen Station security fencing"
    },
    {
      name: "BSNL",
      logo: bsnlLogo,
      category: "Telecom",
      description: "Communication tower security across multiple states"
    },
    {
      name: "Periyar Tiger Reserve",
      logo: periyarLogo,
      category: "Wildlife",
      description: "Complete perimeter protection system"
    },
    {
      name: "Tamil Nadu Forest Department",
      logo: tnForestLogo,
      category: "Government",
      description: "Wildlife protection and forest boundary security"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Government':
        return 'border-blue-500/50 text-blue-700 bg-blue-50';
      case 'Wildlife':
        return 'border-green-500/50 text-green-700 bg-green-50';
      case 'Agricultural':
        return 'border-orange-500/50 text-orange-700 bg-orange-50';
      case 'Telecom':
        return 'border-purple-500/50 text-purple-700 bg-purple-50';
      default:
        return 'border-primary/50 text-primary bg-primary/10';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-forest-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Satisfied Customers
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Trusted by <span className="text-primary">Leading Organizations</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of successful partnerships with government institutions, wildlife sanctuaries, 
            and agricultural enterprises across South India and other states as needed.
          </p>
        </div>

        {/* Clients Carousel */}
        <Carousel
          plugins={[plugin]}
          className="w-full max-w-6xl mx-auto"
          onMouseEnter={() => plugin.stop()}
          onMouseLeave={() => plugin.reset()}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-card transition-all duration-300 hover:scale-105 text-center h-full">
                  {/* Logo */}
                  <div className="w-22 h-22 sm:w-22 sm:h-22 mx-auto mb-4 rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm flex items-center justify-center p-2">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 leading-tight">
                    {client.name}
                  </h3>
                  
                  <Badge 
                    variant="outline" 
                    className={`text-xs mb-3 ${getCategoryColor(client.category)}`}
                  >
                    {client.category}
                  </Badge>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-forest-dark/5 rounded-2xl p-6 sm:p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Govt. Partnerships</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Wildlife Reserves</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
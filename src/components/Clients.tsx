import { Badge } from "@/components/ui/badge";

const Clients = () => {
  const clients = [
    {
      name: "Kerala State Government",
      category: "Government",
      description: "Wildlife protection projects across multiple sanctuaries"
    },
    {
      name: "Kerala Forest Development Corporation",
      category: "Government",
      description: "Plantation protection and wildlife corridor management"
    },
    {
      name: "NDDB (National Dairy Development Board)",
      category: "Government",
      description: "Alamadhi Semen Station security fencing"
    },
    {
      name: "BSNL",
      category: "Telecom",
      description: "Communication tower security across multiple states"
    },
    {
      name: "Periyar Tiger Reserve",
      category: "Wildlife",
      description: "Complete perimeter protection system"
    },
    {
      name: "Silent Valley National Park", 
      category: "Wildlife",
      description: "Wildlife corridor and boundary fencing"
    },
    {
      name: "PCK Rubber Estate",
      category: "Agricultural",
      description: "Large-scale plantation security"
    },
    {
      name: "AVT Group",
      category: "Agricultural", 
      description: "Premium spice plantation protection"
    },
    {
      name: "Thrissur Zoo",
      category: "Wildlife",
      description: "Zoo expansion and animal enclosure systems"
    },
    {
      name: "Tamil Nadu Forest Department",
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

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:shadow-card transition-all duration-300 hover:scale-105 text-center"
            >
              {/* Logo placeholder - could be replaced with actual logos */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
                <div className="text-lg sm:text-xl font-bold text-primary">
                  {client.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </div>
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
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-forest-dark/5 rounded-2xl p-6 sm:p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
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
              <div className="text-sm text-muted-foreground">Agricultural Sites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
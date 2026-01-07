import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("wildlife");

  const categories = [
    { id: "wildlife", name: "Wildlife Sanctuaries", count: "15+" },
    { id: "government", name: "Government", count: "25+" },
    { id: "agricultural", name: "Agricultural", count: "100+" },
    { id: "current", name: "Current Projects", count: "5" }
  ];

  const projects = {
    wildlife: [
      {
        name: "Periyar Tiger Reserve",
        location: "Thekkady, Kerala",
        description: "Complete perimeter fencing for tiger and elephant protection",
        type: "National Park",
        year: "2020-2023"
      },
      {
        name: "Silent Valley National Park",
        location: "Attapady, Kerala", 
        description: "Wildlife corridor protection and boundary fencing",
        type: "National Park",
        year: "2018-2022"
      },
      {
        name: "Idukki Wildlife Sanctuary",
        location: "Idukki, Kerala",
        description: "Multi-species protection fencing system",
        type: "Wildlife Sanctuary",
        year: "2019-2021"
      },
      {
        name: "Thattekad Bird Sanctuary",
        location: "Ernakulam, Kerala",
        description: "Bird-safe fencing with minimal visual impact",
        type: "Bird Sanctuary", 
        year: "2017-2020"
      },
      {
        name: "Parambikulam Wildlife Sanctuary",
        location: "Palakkad, Kerala",
        description: "Tiger reserve boundary protection",
        type: "Tiger Reserve",
        year: "2016-2019"
      },
      {
        name: "Wayanad Wildlife Sanctuary",
        location: "Wayanad, Kerala",
        description: "Elephant corridor management system",
        type: "Wildlife Sanctuary",
        year: "2015-2018"
      }
    ],
    government: [
      {
        name: "NDDB Dairy Services",
        location: "Chennai, Tamil Nadu",
        description: "Alamadhi Semen Station perimeter security fencing",
        type: "Government Facility",
        year: "2022-2023"
      },
      {
        name: "BSNL Tower Networks",
        location: "Multi-State",
        description: "Communication tower security across different states",
        type: "Infrastructure",
        year: "2018-Ongoing"
      },
      {
        name: "Elephant Rehabilitation Centre",
        location: "Kottor, Trivandrum",
        description: "Specialized fencing for elephant care facility",
        type: "Rehabilitation",
        year: "2021-2022"
      },
      {
        name: "Sandal Forest Division",
        location: "Marayur, Kerala",
        description: "Sandalwood plantation protection system",
        type: "Forest Department",
        year: "2020-2021"
      },
      {
        name: "Neyyar Wildlife Sanctuary",
        location: "Trivandrum, Kerala",
        description: "Government tourism area protection",
        type: "Tourism",
        year: "2019-2020"
      }
    ],
    agricultural: [
      {
        name: "Gavi Cardamom Plantation",
        location: "Kerala Forest Development Corporation",
        description: "High-value spice plantation protection from wildlife",
        type: "Spice Plantation",
        year: "2022-2023"
      },
      {
        name: "AVT Vanilla Plantation",
        location: "Vandiperiyar, Kerala",
        description: "Premium vanilla cultivation protection system", 
        type: "Plantation",
        year: "2021-2022"
      },
      {
        name: "Nelliyampathy Orange Farm",
        location: "Agricultural Department, Kerala",
        description: "Citrus and vegetable farm protection",
        type: "Government Farm",
        year: "2020-2021"
      },
      {
        name: "PCK Rubber Estate",
        location: "Punchakolly, Nilambur",
        description: "Large-scale rubber plantation fencing",
        type: "Rubber Plantation",
        year: "2019-2020"
      },
      {
        name: "Kasargod Cashew Plantation",
        location: "Panathur, Kerala",
        description: "Cashew cultivation area protection",
        type: "Cashew Plantation", 
        year: "2018-2019"
      }
    ],
    current: [
      {
        name: "Thrissur Zoo Expansion",
        location: "Puthur, Thrissur",
        description: "New zoo cages across 350 acres housing 439 species",
        type: "Zoo Development",
        year: "2024-Ongoing",
        status: "In Progress"
      },
      {
        name: "Thrissur Pattikad Forest Range",
        location: "Pattikad, Thrissur",
        description: "Comprehensive elephant fencing system for forest range protection",
        type: "Forest Protection",
        year: "2024-Ongoing",
        status: "In Progress"
      }
    ]
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-forest-light/20 to-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Three Decades of <span className="text-primary">Successful Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From protecting India's most precious wildlife sanctuaries to securing government facilities 
            and agricultural lands across Kerala, Tamil Nadu, Karnataka, and beyond.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "professional" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
            >
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              <Badge variant={activeCategory === category.id ? "default" : "outline"} className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects[activeCategory as keyof typeof projects].map((project, index) => (
            <Card key={index} className="bg-gradient-to-b from-card to-accent/30 border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${
                        activeCategory === 'wildlife' ? 'border-green-500 text-green-600' :
                        activeCategory === 'government' ? 'border-blue-500 text-blue-600' :
                        activeCategory === 'agricultural' ? 'border-orange-500 text-orange-600' :
                        'border-purple-500 text-purple-600'
                      }`}
                    >
                      {project.type}
                    </Badge>
                    {project.status && (
                      <Badge variant="outline" className="border-gold text-gold text-xs">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">{project.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-xs text-primary font-medium">Completed Successfully</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-primary/5 to-forest-dark/5 rounded-2xl p-4 sm:p-6 lg:p-8 border border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Wildlife Sanctuaries</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">350+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Acres Protected</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">439</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Species Safeguarded</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">Join Our Success Stories</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Ready to protect your property with proven electric fencing solutions? 
            Let's discuss your project requirements.
          </p>
          <Button size="lg" variant="professional" onClick={() => {
            const element = document.getElementById('contact');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
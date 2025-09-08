import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Contact Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Protect Your Property</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our experts for a free consultation. We'll assess your needs 
            and provide a customized electric fencing solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-card to-accent/30 border-border shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Get Free Quote</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name *</label>
                  <Input placeholder="Your full name" className="border-border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone *</label>
                  <Input placeholder="+91 9876543210" className="border-border" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input type="email" placeholder="your@email.com" className="border-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Location *</label>
                <Input placeholder="City, District, State" className="border-border" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Type *</label>
                <select className="w-full p-3 rounded-md border border-border bg-background">
                  <option value="">Select project type</option>
                  <option value="wildlife">Wildlife Protection</option>
                  <option value="agricultural">Agricultural/Plantation</option>
                  <option value="security">Security Fencing</option>
                  <option value="government">Government Project</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Details</label>
                <Textarea 
                  placeholder="Describe your fencing requirements, area size, target animals, etc."
                  className="border-border min-h-[100px]"
                />
              </div>
              
              <Button size="lg" variant="professional" className="w-full">
                Send Inquiry
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Details */}
            <Card className="bg-gradient-to-br from-card to-accent/30 border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                  United Fence Systems
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="text-gold border-gold">Est. 1996</Badge>
                  <Badge variant="outline" className="text-primary border-primary">30 Years</Badge>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Address</h4>
                    <p className="text-muted-foreground text-sm">[Address will be provided here]</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">GST Number</h4>
                    <p className="text-muted-foreground text-sm">[GST Number will be provided here]</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Service Areas</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Kerala</Badge>
                      <Badge variant="outline">Tamil Nadu</Badge>
                      <Badge variant="outline">Karnataka</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="bg-gradient-to-br from-gold/5 to-gold/10 border-gold/20 shadow-card">
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gold mb-2">Authorized Dealer</h3>
                  <p className="text-lg font-bold text-primary mb-2">Fenceline Gallagher</p>
                  <p className="text-sm text-muted-foreground">
                    (Formerly Ibex Gallagher)
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Joint venture with Gallagher Group Ltd, New Zealand
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-gradient-to-br from-primary/5 to-forest-dark/5 border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-primary mb-4">Quick Contact</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      📞
                    </div>
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">[Phone number]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      📧
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">[Email address]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-card/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      ⏰
                    </div>
                    <div>
                      <p className="text-sm font-medium">Working Hours</p>
                      <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-forest-dark to-primary border-0 text-white shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Emergency Fence Repair Service</h3>
              <p className="mb-6 opacity-90">
                Fence down? Wildlife breach? We provide 24/7 emergency repair services 
                for critical wildlife and security installations.
              </p>
              <Button variant="outline-gold" size="lg">
                Call Emergency Helpline
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
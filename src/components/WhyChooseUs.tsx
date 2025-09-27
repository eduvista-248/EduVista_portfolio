import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Lightbulb, 
  Users, 
  Rocket, 
  Heart
} from "lucide-react";

export function WhyChooseUs() {
  const differentiators = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "As a startup, we bring fresh ideas and modern technology to solve traditional problems in education.",
      gradient: "from-primary/20 to-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "User-Focused Design",
      description: "We design with students and teachers in mind, ensuring dashboards are simple and impactful.",
      gradient: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary"
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      description: "Our solutions grow with schools, ensuring long-term adaptability and continuous innovation.",
      gradient: "from-accent/20 to-accent/5",
      iconColor: "text-accent"
    },
    {
      icon: Heart,
      title: "Dedicated Team",
      description: "A small but passionate team committed to delivering excellence and building trust with every school.",
      gradient: "from-chart-5/20 to-chart-5/5",
      iconColor: "text-chart-5"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-muted/30 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Makes Us Different</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a startup focused on education, we bring unique advantages to every partnership
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative p-8 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-background/80 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Bottom highlight */}
                <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`}></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Startup Journey Section */}
        <div className="bg-card rounded-2xl p-8 border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Startup Journey</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building something special - one school at a time. Here's what drives us every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold">Fresh Perspective</h4>
              <p className="text-sm text-muted-foreground">
                We approach education technology with new eyes, unconstrained by legacy thinking
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold">Close Partnership</h4>
              <p className="text-sm text-muted-foreground">
                As a small team, we work directly with schools to understand their unique needs
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold">Rapid Innovation</h4>
              <p className="text-sm text-muted-foreground">
                We move fast, iterate quickly, and implement feedback immediately
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
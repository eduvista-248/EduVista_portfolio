import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Smartphone, 
  MessageSquare, 
  Brain, 
  Building2,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function Roadmap() {
  const milestones = [
    {
      quarter: "Q1 2025",
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Student and teacher mobile applications",
      features: ["iOS & Android apps", "Offline capabilities", "Push notifications", "Mobile-first design"],
      status: "in-progress"
    },
    {
      quarter: "Q2 2025",
      icon: MessageSquare,
      title: "Parent Portal & Communication",
      description: "Two-way messaging and parent engagement",
      features: ["Parent dashboard", "Real-time messaging", "Progress notifications", "Event calendars"],
      status: "planned"
    },
    {
      quarter: "Q3 2025",
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Performance suggestions & early-warning alerts",
      features: ["Predictive analytics", "Personalized recommendations", "Risk identification", "Smart reporting"],
      status: "planned"
    },
    {
      quarter: "Q4 2025",
      icon: Building2,
      title: "Government Integration",
      description: "National/state education system connections",
      features: ["Government reporting", "Compliance tools", "Data standardization", "Multi-district support"],
      status: "research"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-progress':
        return <Badge className="bg-secondary/10 text-secondary border-secondary/20">In Progress</Badge>;
      case 'planned':
        return <Badge variant="outline">Planned</Badge>;
      case 'research':
        return <Badge variant="secondary">Research</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    if (status === 'in-progress') {
      return <CheckCircle2 className="w-6 h-6 text-secondary" />;
    }
    return <div className="w-6 h-6 rounded-full border-2 border-muted-foreground"></div>;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Roadmap / Future Vision</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Product evolution and next steps in educational technology
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center">
                  {getStatusIcon(milestone.status)}
                </div>
                
                {/* Content */}
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <milestone.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.quarter}</p>
                        </div>
                      </div>
                      {getStatusBadge(milestone.status)}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{milestone.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-2">
                      {milestone.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Join Our Pilot Program</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be first to get new features and help shape the future of education technology. 
              Limited slots available each quarter.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="group"
            >
              Start Pilot Program
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
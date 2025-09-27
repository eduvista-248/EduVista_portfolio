import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: "Student Dashboard Development",
      description: "Custom dashboards designed for students to track performance, attendance, assignments, and learning progress seamlessly.",
      features: ["Performance tracking", "Attendance monitoring", "Assignment management", "Progress visualization"],
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: BookOpen,
      title: "Teacher Dashboard Development", 
      description: "Powerful dashboards for teachers to manage classes, monitor student progress, and simplify academic planning.",
      features: ["Class management", "Student progress monitoring", "Academic planning tools", "Report generation"],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Users,
      title: "Admin & School Management Solutions",
      description: "Helping school administrators manage attendance, grades, reports, and communication through intuitive dashboards.",
      features: ["Administrative oversight", "Grade management", "Communication tools", "Comprehensive reporting"],
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Sparkles,
      title: "Future Enhancements",
      description: "Integration of AI, analytics, and mobile accessibility to ensure dashboards evolve with educational needs.",
      features: ["AI-powered insights", "Advanced analytics", "Mobile accessibility", "Predictive features"],
      gradient: "from-chart-5/20 to-chart-5/5"
    }
  ];

  const scrollToBookDemo = () => {
    const element = document.getElementById('book-demo');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive dashboard solutions tailored for the modern educational environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0">
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${service.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center border">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your School's Data Management?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our dashboard solutions can be customized to meet your school's specific needs 
            and help improve educational outcomes for all stakeholders.
          </p>
          <Button 
            size="lg" 
            onClick={scrollToBookDemo}
            className="group"
          >
            Book a Demo Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  MousePointer, 
  Shield, 
  TrendingUp, 
  Zap
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import feature1 from "../assets/easy_to_use.jpg";
import feature2 from "../assets/secure.jpg";
import feature3 from "../assets/realTime_insights.jpg";
import feature4 from "../assets/scalable.jpg";


export function Features() {
  const features = [
    {
      icon: MousePointer,
      title: "Easy to Use",
      description: "Simple, clean, and intuitive interface designed for students, teachers, and administrators. No training required - just log in and start using.",
      image: feature1,
      reverse: false
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Data protection and security at the core, ensuring student and teacher information is always safe. Enterprise-grade encryption and regular backups.",
      image: feature2,
      reverse: true
    },
    {
      icon: TrendingUp,
      title: "Real-Time Insights",
      description: "Track attendance, performance, and activities instantly with real-time updates. Get the information you need when you need it most.",
      image: feature3,
      reverse: false
    },
    {
      icon: Zap,
      title: "Scalable & Flexible",
      description: "Built for institutions of all sizes, adaptable to future growth and evolving needs. Our platform grows with your institution.",
      image: feature4,
      reverse: true
    }
  ];

  return (
    <section id="features" className="py-24 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Key Features</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Our Dashboards Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Designed with educators in mind, built for real classroom needs
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative ${feature.reverse ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <ImageWithFallback
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Feature icon overlay */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                {/* Floating element */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-4 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <feature.icon className="w-5 h-5" />
                    <span className="font-semibold">{feature.title}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${feature.reverse ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline">{`Feature ${index + 1}`}</Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* Benefits list */}
                <Card className="p-6 bg-muted/30">
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {index === 0 && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Minimal learning curve for all users</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Consistent interface across all devices</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">GDPR-compliant data storage</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Regular security audits and updates</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Live data synchronization</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Instant report generation</span>
                        </div>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Cloud-based infrastructure</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">Easy integration with existing systems</span>
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
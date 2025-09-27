import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Users, HeartHandshake, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-background min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596496638398-967ac30381f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTc0MDE0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students and teachers using educational technology"
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground rounded-lg p-3 shadow-lg">
              <HeartHandshake className="w-6 h-6" />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About EduVista</h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are a passionate startup dedicated to transforming the way schools manage and 
                  interact with data. With our first project, we aim to simplify student and teacher 
                  dashboards, making education more transparent, accessible, and impactful.
                </p>
                
                <p>
                  Though we are just beginning, our vision is strong—to empower schools with digital 
                  solutions that truly make a difference. We believe that better data leads to better 
                  decisions, and better decisions lead to better outcomes for students.
                </p>
                
                <p>
                  <strong className="text-foreground">Our Mission:</strong> To revolutionize how educational 
                  data is accessed and used by creating intuitive, powerful dashboards that serve everyone 
                  in the school ecosystem.
                </p>
                
                <p>
                  <strong className="text-foreground">Our Vision:</strong> A world where every student, 
                  teacher, and administrator has instant access to the insights they need to succeed.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Student-Centered</h3>
                    <p className="text-sm text-muted-foreground">Everything we build serves learners first</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Privacy First</h3>
                    <p className="text-sm text-muted-foreground">Data security and privacy are non-negotiable</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Collaborative</h3>
                    <p className="text-sm text-muted-foreground">We work hand-in-hand with educators</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chart-5/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-chart-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Always Learning</h3>
                    <p className="text-sm text-muted-foreground">We iterate based on real feedback</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
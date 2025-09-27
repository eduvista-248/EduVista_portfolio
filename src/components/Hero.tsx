import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, BarChart3, Users, Calendar, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 dark:from-background dark:via-primary/10 dark:to-secondary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Smart Dashboards for 
                <span className="text-primary"> Smarter Schools</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                We build next-generation dashboards that empower students, teachers, and schools 
                with insights that drive learning and growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="group font-semibold px-8 py-4"
              >
                Explore Our Vision
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('book-demo')}
                className="px-8 py-4 rounded-[7px]"
              >
                Book a Demo Call
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <div className="relative">
              {/* Main Dashboard Mockup */}
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-500">
                <div className="bg-muted px-6 py-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-semibold">EduVista Dashboard</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors">
                      <div className="text-2xl font-bold text-primary">94%</div>
                      <div className="text-sm text-muted-foreground">Attendance</div>
                    </div>
                    <div className="bg-secondary/10 rounded-lg p-4 text-center hover:bg-secondary/20 transition-colors">
                      <div className="text-2xl font-bold text-secondary">87</div>
                      <div className="text-sm text-muted-foreground">Avg Grade</div>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4 text-center hover:bg-accent/20 transition-colors">
                      <div className="text-2xl font-bold text-accent">12</div>
                      <div className="text-sm text-muted-foreground">Assignments</div>
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-muted/50 rounded-lg p-4 h-32 flex items-end justify-between space-x-2">
                    {[65, 80, 75, 90, 85, 95, 88].map((height, i) => (
                      <div 
                        key={i} 
                        className="bg-gradient-to-t from-primary to-primary/60 rounded-t flex-1 transition-all duration-1000 ease-out hover:from-secondary hover:to-secondary/60"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${i * 100}ms`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 hover:bg-muted/30 rounded px-2 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                        <span className="text-sm">Math Quiz - Grade 10A</span>
                      </div>
                      <span className="text-xs text-muted-foreground">2 min ago</span>
                    </div>
                    <div className="flex items-center justify-between py-2 hover:bg-muted/30 rounded px-2 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500"></div>
                        <span className="text-sm">Attendance Updated</span>
                      </div>
                      <span className="text-xs text-muted-foreground">5 min ago</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg shadow-lg p-3 animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>
              
              {/* Performance indicator */}
              <div className="absolute -left-4 top-1/2 bg-card border border-border rounded-lg shadow-lg p-3">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium">Performance ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
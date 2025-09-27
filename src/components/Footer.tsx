import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = {
    company: [
      { label: "About Us", action: () => scrollToSection('about') },
      { label: "Our Team", action: () => scrollToSection('team') },
      { label: "Careers", action: () => console.log('Careers') },
      { label: "Blog", action: () => console.log('Blog') }
    ],
    services: [
      { label: "Custom Dashboards", action: () => scrollToSection('services') },
      { label: "System Integration", action: () => scrollToSection('services') },
      { label: "Cloud Hosting", action: () => scrollToSection('services') },
      { label: "Training & Support", action: () => scrollToSection('services') }
    ],
    resources: [
      { label: "Pilot Results", action: () => scrollToSection('testimonials') },
      { label: "Documentation", action: () => console.log('Documentation') },
      { label: "Support Center", action: () => console.log('Support') },
      { label: "Privacy Policy", action: () => console.log('Privacy') }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-2xl">EduVista</span>
              </div>
              
              <p className="text-muted-foreground">
                Building dashboards that transform education.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>hello@eduvista.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Tech City, TC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="w-10 h-10 p-0"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-3 gap-8">
                {/* Company */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Company</h3>
                  <ul className="space-y-3">
                    {footerSections.company.map((item, index) => (
                      <li key={index}>
                        <button 
                          onClick={item.action}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Services</h3>
                  <ul className="space-y-3">
                    {footerSections.services.map((item, index) => (
                      <li key={index}>
                        <button 
                          onClick={item.action}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Resources</h3>
                  <ul className="space-y-3">
                    {footerSections.resources.map((item, index) => (
                      <li key={index}>
                        <button 
                          onClick={item.action}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 EduVista. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted-foreground">
              <button className="hover:text-foreground transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-foreground transition-colors">
                Privacy Policy
              </button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="w-10 h-10 p-0"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
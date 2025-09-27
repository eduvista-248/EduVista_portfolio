import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "features", "why-choose-us", "team", "contact", "book-demo"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[rgba(62,11,230,1)] rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="currentColor"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-bold text-2xl">EduVista</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'home' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'about' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              About
              {activeSection === 'about' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'services' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Services
              {activeSection === 'services' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'features' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Features
              {activeSection === 'features' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'why-choose-us' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Why Choose Us
              {activeSection === 'why-choose-us' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'team' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Team
              {activeSection === 'team' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`relative pb-2 transition-colors ${
                activeSection === 'contact' 
                  ? 'text-primary font-medium' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
          </nav>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button onClick={() => scrollToSection('book-demo')}>Book a Demo Call</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-left transition-colors ${
                  activeSection === 'home' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left transition-colors ${
                  activeSection === 'about' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-left transition-colors ${
                  activeSection === 'services' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className={`text-left transition-colors ${
                  activeSection === 'features' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className={`text-left transition-colors ${
                  activeSection === 'why-choose-us' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className={`text-left transition-colors ${
                  activeSection === 'team' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-left transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-primary font-medium' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                Contact
              </button>
              <div className="flex items-center justify-between mt-4">
                <ThemeToggle />
                <Button onClick={() => scrollToSection('book-demo')}>
                  Book a Demo Call
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
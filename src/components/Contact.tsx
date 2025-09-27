import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("❌ Please fill in all required fields.");
      return;
    }

    if (!form.current) return;

    emailjs
      .sendForm("service_7q4dncf", "template_a7qf9gx", form.current, {
        publicKey: "tF8eXMh4jafLcb8pr",
      })
      .then(
        () => {
          setStatus("✅ Message sent successfully! We'll get back to you within 24 hours.");
          form.current?.reset();
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send message. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "contact@eduvista.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      subtitle: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Tech Hub, Innovation City, India",
      subtitle: "By appointment only"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build the Future of Education Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a school administrator, teacher, or partner, we'd love to hear from you. 
            Let's discuss how our dashboards can make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-sm font-medium">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Partnership Card */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <h3 className="font-semibold text-primary">Partnership Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Interested in partnering with us? We're always looking for education consultants, 
                  technology integrators, and forward-thinking schools to collaborate with.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Partnership Inquiry
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your school's needs and how we can help transform your data management.
                </p>
              </CardHeader>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your school, current challenges, and how we can help..."
                    className="min-h-32 transition-all duration-200 focus:scale-[1.02]"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
                
                {status && (
                  <div className="mt-4 p-4 rounded-lg bg-muted text-center">
                    <p className="text-sm">{status}</p>
                  </div>
                )}
                
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24 hours. For urgent inquiries, please call us directly.
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">

        </div>
      </div>
    </section>
  );
}
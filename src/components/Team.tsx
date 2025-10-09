import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import somesh from "../assets/somesh.jpeg";
import bharath from "../assets/bharath3.jpeg";
import surya from "../assets/surya.jpeg";
// import kgf from "../assets/kgf1.jpeg";
import kgf from "../assets/kgf.jpeg";

export function Team() {
  const teamMembers = [
    {
      name: "Bharath M",
      image: bharath,
      social: {
        email: "maheshbharath916@gmail.com"
      },
      designation: "Co-Founder and back-end specialist"
    },
    {
      name: "Somesh Pramod Kolluru",
      image: somesh,
      social: {
        email: "someshkolluru723@gmail.com"
      },
      designation: "Co-Founder and Lead Developer"
    },
    {
      name: "Surya Kiran K",
      image: surya,
      social: {
        email: "suryakongara2002@gmail.com"
      },
      designation: "C.O.O and DataBase Administrator"
    },
     {
      name: "Deekshit B Reddy",
      image: kgf,
      social: {
        email: "18deekshithreddy@gmail.com"
      },
      designation: "C.M.O & Designer"
    },
  ];

  return (
    <section id="team" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet the Innovators
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, 
            design, and business to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2 justify-center">
                    {/* <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20">
                      <Github className="h-4 w-4" />
                    </Button> */}
                    <Button size="sm" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/20">
                      <a href={`mailto:${member.social.email}`}><Mail className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                </div>
                <div className="text-center">
                  <h5 className="text-sm font-normal text-gray-400">{member.designation}</h5>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
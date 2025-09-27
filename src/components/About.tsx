import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzA3NTM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Blockchain education pioneer with 8+ years in web3 development."
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzA3NTM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Former Ethereum core developer, passionate about decentralized learning."
    },
    {
      name: "Michael Kim",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzA3NTM0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Award-winning UX designer specializing in educational interfaces."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About</h2>
          
          <div className="max-w-4xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              EduVista was founded with a simple yet revolutionary idea: to democratize 
              education through blockchain technology. We believe that learning should be 
              verifiable, portable, and owned by the learner. Our platform combines 
              cutting-edge web3 infrastructure with intuitive educational tools to create 
              the future of decentralized learning.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-12">
              From NFT certificates to tokenized achievements, we're building an ecosystem 
              where knowledge truly becomes power, and learners have complete control over 
              their educational journey.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 overflow-hidden group hover:bg-gray-800 transition-colors">
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-sm text-gray-400">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50K+</div>
            <div className="text-gray-400">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400">NFT Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">200+</div>
            <div className="text-gray-400">Partner Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-400 italic">
            "Building the infrastructure for the future of education, one block at a time."
          </p>
        </div>
      </div>
    </section>
  );
}
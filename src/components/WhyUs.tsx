import { Badge } from "./ui/badge";

export function WhyUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <Badge variant="secondary" className="mb-6 bg-gray-800 text-gray-300">Why Us?</Badge>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                At EduVista, we're not just building educational tools - we're creating 
                the infrastructure for the future of learning in the web3 era. Our 
                platform combines blockchain technology with innovative educational 
                methodologies to create truly decentralized learning experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe that education should be accessible, verifiable, and owned 
                by the learners themselves. That's why we're pioneering solutions that 
                put students at the center of their educational journey.
              </p>
            </div>

            {/* Right Content - Circular Diagram */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Main Circle */}
                <div className="absolute inset-8 border border-gray-600 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Our Vision</div>
                    <div className="text-sm text-gray-400">Decentralized Education</div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">Skill</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Growth</span>
                  </div>
                </div>
                
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-primary rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">Web3</span>
                  </div>
                </div>
                
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">Future</span>
                  </div>
                </div>
                
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
                  <circle cx="192" cy="192" r="120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
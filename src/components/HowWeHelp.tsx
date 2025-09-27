import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HowWeHelp() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How we can
            <br />
            help grow
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Product clarity</h3>
                  <p className="text-gray-400">
                    We help define clear learning objectives and create structured pathways 
                    that guide students through their educational journey with precision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Great design</h3>
                  <p className="text-gray-400">
                    Our intuitive interfaces and engaging visual design create immersive 
                    learning experiences that keep students motivated and focused.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Manage process</h3>
                  <p className="text-gray-400">
                    Streamlined workflows and automated systems help educators manage 
                    courses efficiently while providing students with seamless access to resources.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-9-5z"/>
                    </svg>
                  </div>
                  <div className="text-white font-bold text-lg">Growth Strategy</div>
                  <div className="text-gray-400 text-sm mt-2">
                    Scalable solutions that grow with your educational needs
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-bounce"></div>
            </div>
            
            <div className="mt-6 text-right">
              <p className="text-gray-400 text-sm">
                <span className="text-primary">Best practices</span> of the most 
                advanced web3 education platforms worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
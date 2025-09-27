export function StudioFooter() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web3 product studio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Creating the next generation of decentralized educational experiences
          </p>
        </div>

        {/* Geometric Background Elements */}
        <div className="relative h-64">
          {/* Large Blue Circle */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80"></div>
          
          {/* Medium Green Circle */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-70"></div>
          
          {/* Small Purple Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60"></div>
          
          {/* Additional accent circles */}
          <div className="absolute top-16 left-16 w-16 h-16 bg-gradient-to-br from-primary to-cyan-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-40"></div>
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-9-5z"/>
                </svg>
              </div>
              <div className="text-white font-bold text-lg">Innovation Hub</div>
            </div>
          </div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 256">
            <path 
              d="M50 200 Q 200 100 350 50" 
              stroke="white" 
              strokeWidth="1" 
              fill="none" 
              strokeDasharray="4 4"
            />
            <path 
              d="M100 50 Q 200 150 300 200" 
              stroke="white" 
              strokeWidth="1" 
              fill="none" 
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Powered by blockchain technology • Built for the future of education
          </p>
        </div>
      </div>
    </section>
  );
}
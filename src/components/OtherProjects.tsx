import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function OtherProjects() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Other projects</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project 1 - Dashboard */}
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="bg-gray-700 rounded-lg p-4 mb-4 h-40 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-2 h-full">
                  <div className="space-y-2">
                    <div className="bg-gray-600 rounded h-4 w-full"></div>
                    <div className="bg-gray-600 rounded h-4 w-3/4"></div>
                    <div className="bg-primary/50 rounded h-8 w-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-gray-600 rounded-full h-12 w-12"></div>
                    <div className="bg-gray-600 rounded h-2 w-full"></div>
                    <div className="bg-gray-600 rounded h-2 w-2/3"></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-white font-bold mb-2">Learning Dashboard</h3>
              <p className="text-gray-400 text-sm">Comprehensive analytics and progress tracking for educators and students.</p>
            </div>
          </Card>

          {/* Project 2 - Management System */}
          <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-blue-700 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="bg-black/30 rounded-lg p-4 mb-4 h-40 relative">
                <div className="text-center">
                  <div className="text-purple-400 text-2xl font-bold mb-2">Web3 LMS</div>
                  <div className="space-y-2">
                    <div className="bg-purple-500/30 rounded h-3 w-full"></div>
                    <div className="bg-blue-500/30 rounded h-3 w-4/5 mx-auto"></div>
                    <div className="bg-purple-500/30 rounded h-3 w-3/5 mx-auto"></div>
                  </div>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">Management System</h3>
              <p className="text-gray-400 text-sm">Decentralized learning management with blockchain integration.</p>
            </div>
          </Card>

          {/* Project 3 - Mobile App */}
          <Card className="bg-gradient-to-br from-purple-600 to-blue-600 border-purple-500 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="p-6">
              <div className="bg-white/10 rounded-lg p-4 mb-4 h-40 flex items-center justify-center">
                <div className="bg-white/20 rounded-2xl p-3 w-24 h-36">
                  <div className="bg-purple-400 rounded h-4 w-full mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-white/30 rounded h-2 w-full"></div>
                    <div className="bg-white/30 rounded h-2 w-3/4"></div>
                    <div className="bg-white/30 rounded h-2 w-1/2"></div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="bg-white/20 rounded h-4"></div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold mb-2">EduVista Mobile</h3>
              <p className="text-gray-400 text-sm">Learn anywhere with our comprehensive mobile learning platform.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
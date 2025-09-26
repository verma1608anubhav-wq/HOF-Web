import { Button } from "./ui/button";
import { Play, GamepadIcon, Users, Smartphone, Trophy, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-hof-light-cream via-white to-hof-cream py-24 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Global Opportunities Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-hof-orange to-hof-red rounded-full px-6 py-3 text-white shadow-lg">
              <span className="text-2xl">🌍</span>
              <span className="text-sm font-poppins font-semibold text-[rgba(4,0,0,1)]">Gateway to Global Opportunities</span>
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-anton text-black leading-tight tracking-wide">
                UNLOCK YOUR
                <br />
                <span className="text-hof-orange">GLOBAL FUTURE</span>
              </h1>
              <p className="text-xl text-gray-800 max-w-2xl font-poppins leading-relaxed">
                Master French not just as a language, but as your key to studying abroad, 
                securing PR, and embracing cultural adventures. From DELF success to 
                international opportunities – your journey starts here! 🎯
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-hof-orange hover:bg-hof-red text-white font-poppins font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
              >
                🚀 Start Your Global Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-black text-black hover:bg-hof-cream font-poppins font-semibold px-8 py-4 rounded-full"
                onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🎁 Grab Free Resources
              </Button>
            </div>

            {/* Success Stories Tagline */}
            <div className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-hof-orange">
                  <div className="text-lg font-anton text-black">DELF SUCCESS</div>
                  <div className="text-sm text-gray-700 font-poppins">Exam-focused training</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-hof-red">
                  <div className="text-lg font-anton text-black">STUDY ABROAD</div>
                  <div className="text-sm text-gray-700 font-poppins">University prep support</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-hof-brown">
                  <div className="text-lg font-anton text-black">PR PATHWAY</div>
                  <div className="text-sm text-gray-700 font-poppins">Immigration goals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Opportunities Card */}
          <div className="relative">
            <Card className="bg-white border-hof-orange shadow-2xl p-10 rounded-3xl transform rotate-1 hover:rotate-0 transition-all duration-300">
              {/* Success Stories Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hof-orange to-hof-red rounded-full px-4 py-2 text-white mb-4">
                  <span className="text-lg">🏆</span>
                  <span className="font-poppins font-semibold text-sm">Student Success Stories</span>
                </div>
                <h3 className="text-3xl font-anton text-black text-center leading-tight">
                  REAL STUDENTS,
                  <br />
                  <span className="text-hof-orange">REAL RESULTS</span>
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-r from-hof-light-cream to-hof-cream rounded-xl p-5">
                  <div className="text-2xl">🇨🇦</div>
                  <div>
                    <div className="text-black font-poppins font-semibold">Canada PR Success</div>
                    <div className="text-sm text-gray-700 font-poppins">TEF exam cleared • Immigration approved</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-hof-light-cream to-hof-cream rounded-xl p-5">
                  <div className="text-2xl">🎓</div>
                  <div>
                    <div className="text-black font-poppins font-semibold">University in France</div>
                    <div className="text-sm text-gray-700 font-poppins">DELF B2 achieved • Scholarship secured</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-hof-light-cream to-hof-cream rounded-xl p-5">
                  <div className="text-2xl">💼</div>
                  <div>
                    <div className="text-black font-poppins font-semibold">Corporate Career</div>
                    <div className="text-sm text-gray-700 font-poppins">Multinational job • Global opportunities</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gradient-to-r from-hof-light-cream to-hof-cream rounded-xl p-5">
                  <div className="text-2xl">✈️</div>
                  <div>
                    <div className="text-black font-poppins font-semibold">Cultural Immersion</div>
                    <div className="text-sm text-gray-700 font-poppins">Exchange programs • Travel confidence</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
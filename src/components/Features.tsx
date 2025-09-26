import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Plane, Users, Award, Clock, Target, CheckCircle, TrendingUp } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: "DELF/TEF Success",
      description: "Exam-focused training with proven strategies and practice tests for guaranteed results.",
      color: "from-hof-orange to-hof-red",
      highlights: ["Mock Tests", "Speaking Practice", "Writing Skills"],
    },
    {
      icon: Plane,
      title: "Study Abroad Prep",
      description: "Complete university application support and cultural preparation for France & Canada.",
      color: "from-hof-red to-hof-brown",
      highlights: ["University Guidance", "Visa Support", "Cultural Training"],
    },
    {
      icon: Target,
      title: "PR Pathway Guidance",
      description: "Strategic language training aligned with immigration requirements and point systems.",
      color: "from-hof-brown to-hof-gray",
      highlights: ["TEF Coaching", "Immigration Points", "Document Prep"],
    },
    {
      icon: Users,
      title: "1-on-1 Personal Coaching",
      description: "Individual attention with customized learning plans for your specific goals.",
      color: "from-hof-orange to-hof-brown",
      highlights: ["Custom Plans", "Flexible Schedule", "Personal Mentor"],
    },
    {
      icon: Clock,
      title: "Flexible Global Schedule",
      description: "Learn at your convenience with classes that fit your busy international lifestyle.",
      color: "from-hof-red to-hof-orange",
      highlights: ["Any Timezone", "Weekend Classes", "Recording Access"],
    },
    {
      icon: Award,
      title: "Success Guarantee",
      description: "Proven track record of student success stories and achievement milestones.",
      color: "from-hof-brown to-hof-red",
      highlights: ["Money Back", "Progress Tracking", "Milestone Rewards"],
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-white via-hof-light-cream to-hof-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-hof-orange text-white rounded-full px-6 py-3 mb-6">
            <span className="text-lg">🎯</span>
            <span className="font-poppins font-semibold">Three Pillars of Success</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-anton text-black mb-6 tracking-wide">
            EDUCATION • ASPIRATION • OPPORTUNITY
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto font-poppins leading-relaxed">
            We don't just teach French – we open doors to your global dreams. From daily vocabulary 
            building to DELF success, from cultural immersion to PR pathways, every lesson is designed 
            with your international aspirations in mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 border-hof-cream hover:border-hof-orange hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden group">
                {/* Color Strip */}
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>

                {/* Card Header */}
                <CardHeader className="text-center pb-8 pt-12 px-10">
                  {/* Icon Container */}
                  <div className={`mx-auto mb-10 p-4 bg-gradient-to-br ${feature.color} rounded-2xl w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-10 w-10 text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Title */}
                  <CardTitle className="text-3xl font-anton text-black tracking-wide mb-8 font-bold leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="space-y-12 px-10 pb-12">
                  {/* Description */}
                  <CardDescription className="text-center text-gray-800 font-poppins text-xl leading-loose font-semibold px-4">
                    {feature.description}
                  </CardDescription>

                  {/* Key Highlights */}
                  <div className="space-y-8">
                    <h4 className="text-lg font-anton text-black tracking-wide text-center font-bold mb-6">
                      KEY FEATURES:
                    </h4>
                    <div className="space-y-6">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-6 justify-center py-2">
                          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                          <span className="text-lg text-gray-800 font-poppins font-semibold">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-hof-orange max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 gap-4 h-full">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="bg-hof-orange rounded-full"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-hof-orange to-hof-red text-white px-8 py-4 rounded-full shadow-lg mb-8">
                <span className="text-2xl">🚀</span>
                <span className="font-poppins font-semibold">Transform Your Life Today</span>
                <span className="text-2xl">✨</span>
              </div>
              
              <h3 className="text-4xl font-anton text-black mb-6 tracking-wide">
                READY TO UNLOCK YOUR POTENTIAL?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-lg font-anton text-black">GOAL-ORIENTED</div>
                  <div className="text-sm text-gray-600 font-poppins">Tailored to your dreams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-lg font-anton text-black">FAST RESULTS</div>
                  <div className="text-sm text-gray-600 font-poppins">See progress in weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌟</div>
                  <div className="text-lg font-anton text-black">PROVEN METHOD</div>
                  <div className="text-sm text-gray-600 font-poppins">30+ success stories</div>
                </div>
              </div>
              
              <p className="text-gray-700 font-poppins mb-8 text-lg leading-relaxed">
                Join our exclusive community of French learners who've transformed their lives through strategic language mastery. 
                Your global journey starts with a single click!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
                  className="bg-gradient-to-r from-hof-orange to-hof-red text-white font-poppins font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                >
                  🚀 Book Your Success Journey
                </button>
                <button 
                  onClick={() => window.open('https://forms.gle/bmnncxqaWY4VUW3t8', '_blank')}
                  className="border-2 border-black text-black hover:bg-black hover:text-white font-poppins font-bold px-10 py-4 rounded-full transition-all duration-300 text-lg"
                >
                  📚 Get Free Resources
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
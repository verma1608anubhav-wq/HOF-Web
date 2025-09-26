import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Video, FileText, Headphones, Play, Download, Clock } from "lucide-react";

export function FreeResources() {
  const resources = [
    {
      icon: Video,
      title: "DELF Grammar Mastery",
      description: "Essential grammar patterns and exam strategies for DELF success",
      type: "Video Series",
      emoji: "🎥",
      cardBg: "bg-gradient-to-br from-hof-orange to-hof-red",
      contentBg: "from-hof-light-cream to-hof-cream",
      iconBg: "bg-hof-orange",
      iconColor: "text-white",
      textColor: "text-black",
      badgeColor: "bg-hof-orange text-white"
    },
    {
      icon: FileText,
      title: "PR Pathway Guide",
      description: "Complete roadmap for using French skills in your immigration journey",
      type: "PDF Guide",
      emoji: "📖",
      cardBg: "bg-gradient-to-br from-hof-brown to-hof-gray",
      contentBg: "from-hof-light-cream to-hof-cream",
      iconBg: "bg-hof-brown",
      iconColor: "text-hof-light-cream",
      textColor: "text-black",
      badgeColor: "bg-hof-brown text-hof-light-cream"
    },
    {
      icon: Headphones,
      title: "Cultural Immersion Audio",
      description: "Real conversations and cultural insights from native speakers",
      type: "Audio Pack",
      emoji: "🎧",
      cardBg: "bg-gradient-to-br from-hof-red to-hof-brown",
      contentBg: "from-hof-light-cream to-hof-cream",
      iconBg: "bg-hof-red",
      iconColor: "text-white",
      textColor: "text-black",
      badgeColor: "bg-hof-red text-white"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-gradient-to-br from-hof-light-cream via-hof-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-hof-orange text-white rounded-full px-6 py-3 mb-6">
            <span className="text-lg">🎁</span>
            <span className="font-poppins font-semibold">Free Learning Resources</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-anton text-black mb-6 tracking-wide">
            KICKSTART YOUR GLOBAL JOURNEY
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto font-poppins leading-relaxed">
            Get instant access to our premium learning materials designed to accelerate your French mastery. 
            From DELF prep to cultural insights - everything you need to begin your transformation! 🚀
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className={`border-2 border-hof-cream shadow-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden ${resource.cardBg}`}>
                <CardContent className="p-0">
                  {/* Header Section */}
                  <div className="p-10 text-center">

                    <div className={`inline-flex p-5 rounded-3xl ${resource.iconBg} shadow-xl`}>
                      <Icon className={`h-10 w-10 ${resource.iconColor}`} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`bg-gradient-to-br ${resource.contentBg} p-8 space-y-6`}>
                    <h3 className={`text-2xl font-anton ${resource.textColor} tracking-wide text-center`}>
                      {resource.title}
                    </h3>
                    <p className={`text-base font-poppins leading-relaxed ${resource.textColor} text-center`}>
                      {resource.description}
                    </p>
                    
                    {/* Type Badge */}
                    <div className="flex justify-center pt-4">
                      <span className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-poppins font-semibold ${resource.badgeColor} shadow-lg`}>
                        {resource.type === "Video Series" && <Play className="h-4 w-4" />}
                        {resource.type === "PDF Guide" && <Download className="h-4 w-4" />}
                        {resource.type === "Audio Pack" && <Clock className="h-4 w-4" />}
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-hof-orange max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-hof-orange to-hof-red text-white px-8 py-4 rounded-full shadow-lg mb-8">
              <span className="text-2xl">🇫🇷</span>
              <span className="font-poppins font-semibold text-[rgba(0,0,0,1)]">Beginner to Advanced • All Levels Welcome</span>
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-3xl font-anton text-black mb-6 tracking-wide">
              READY TO TRANSFORM YOUR FUTURE?
            </h3>
            <p className="text-gray-700 font-poppins mb-8 text-lg leading-relaxed">
              Download all resources instantly and start building the French skills that will open doors to your dreams
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-hof-orange to-hof-red hover:from-hof-red hover:to-hof-brown text-[rgba(190,67,60,1)] font-poppins font-bold shadow-xl px-10 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://forms.gle/bmnncxqaWY4VUW3t8', '_blank')}
            >
              <Download className="h-5 w-5 mr-3" />
              Get All Resources FREE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
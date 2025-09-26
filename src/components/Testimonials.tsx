import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  // Signal color for stars
  const signalColor = '#FFCC00';

  // Simple Star Rating Component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= Math.floor(rating)) {
            // Full star
            return (
              <Star
                key={star}
                className="h-5 w-5"
                style={{
                  fill: signalColor,
                  color: signalColor
                }}
              />
            );
          } else if (star === Math.ceil(rating) && rating % 1 !== 0) {
            // Partial star - simplified approach
            return (
              <div key={star} className="relative">
                <Star
                  className="h-5 w-5"
                  style={{
                    fill: 'none',
                    color: '#d1d5db'
                  }}
                />
                <Star
                  className="h-5 w-5 absolute top-0 left-0"
                  style={{
                    fill: signalColor,
                    color: signalColor,
                    clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)`
                  }}
                />
              </div>
            );
          } else {
            // Empty star
            return (
              <Star
                key={star}
                className="h-5 w-5"
                style={{
                  fill: 'none',
                  color: '#d1d5db'
                }}
              />
            );
          }
        })}
      </div>
    );
  };

  const testimonials = [
    {
      name: "Gurpreet Kaur",
      role: "Canada PR Successful | TEF B2",
      rating: 4.5,
      achievement: "🇨🇦 PR Approved",
      text: "House of French made my Canada PR dream come true! The TEF preparation was spot-on and I scored exactly what I needed. Now living my best life in Toronto! 🍁"
    },
    {
      name: "Simranjeet Singh",
      role: "University of Lyon | DELF B2",
      rating: 4.8,
      achievement: "🎓 Studying in France",
      text: "From zero French to university admission in Lyon! The DELF coaching was incredible. Now I'm pursuing my Master's in France and loving every moment! 🇫🇷"
    },
    {
      name: "Jaskaran Singh",
      role: "Multinational Corp | Business French",
      rating: 5.0,
      achievement: "💼 Global Career",
      text: "My French skills opened doors to international projects at work. House of French didn't just teach me language - they built my global career! 🚀"
    },
    {
      name: "Gauri Verma",
      role: "Cultural Exchange | A2 to B2",
      rating: 4.7,
      achievement: "✈️ Exchange Program",
      text: "From struggling with basics to confidently navigating Paris during my exchange! The cultural preparation was as valuable as the language training. Merci beaucoup! 💫"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-hof-cream via-white to-hof-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hof-orange to-hof-red text-white rounded-full px-6 py-3 mb-6">
            <span className="text-lg">🏆</span>
            <span className="font-poppins font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-anton text-black mb-6 tracking-wide">
            REAL DREAMS • REAL RESULTS
          </h2>
          <p className="text-xl text-gray-800 max-w-4xl mx-auto font-poppins leading-relaxed">
            These aren't just testimonials - they're proof that French can transform your life. 
            From PR approvals to university admissions, from global careers to cultural adventures - 
            your success story starts here! 🌟
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 border-hof-orange hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  {/* Achievement Badge */}
                  <div className="bg-gradient-to-r from-hof-orange to-hof-red text-white rounded-full px-4 py-2 text-sm font-poppins font-semibold mb-4 inline-block">
                    {testimonial.achievement}
                  </div>
                  
                  <Quote className="h-10 w-10 text-hof-orange mb-4" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-sm font-poppins font-semibold" style={{ color: signalColor }}>
                      {testimonial.rating}/5
                    </span>
                  </div>
                  
                  <p className="text-gray-800 font-poppins italic mb-6 text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="border-t border-hof-cream pt-4">
                  <p className="text-black font-anton text-lg tracking-wide">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-poppins font-medium">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 pt-12 border-t-4 border-hof-orange">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-hof-cream">
            <h3 className="text-3xl font-anton text-black text-center mb-12 tracking-wide">
              THE NUMBERS SPEAK FOR THEMSELVES
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-anton text-hof-orange mb-3 group-hover:scale-110 transition-transform duration-300">30+</div>
                <div className="text-sm text-gray-700 font-poppins font-medium">Global Success Stories</div>
              </div>
              <div className="group">
                <div className="text-5xl font-anton text-hof-red mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-sm text-gray-700 font-poppins font-medium">Goal Achievement Rate</div>
              </div>
              <div className="group">
                <div className="text-5xl font-anton text-hof-brown mb-3 group-hover:scale-110 transition-transform duration-300">4.8★</div>
                <div className="text-sm text-gray-700 font-poppins font-medium">Student Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-5xl font-anton text-hof-orange mb-3 group-hover:scale-110 transition-transform duration-300">1:1</div>
                <div className="text-sm text-gray-700 font-poppins font-medium">Personal Coaching</div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-12">
              <p className="text-gray-700 font-poppins mb-6 text-lg">Ready to become our next success story?</p>
              <button 
                onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
                className="bg-gradient-to-r from-hof-orange to-hof-red text-white font-poppins font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🎯 Join the Success Club
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
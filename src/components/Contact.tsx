import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { SocialLinks, ContactInfo } from "./SocialLinks";

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 via-blue-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? Need more info? Hit us up! We're here to help you 
            on your French learning journey. 📧
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Card */}
          <Card className="border-2 border-blue-300 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-blue-200 to-rose-200 rounded-2xl p-8 inline-block mb-6">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl text-blue-800">Let's Connect!</h3>
                  <p className="text-blue-700">Reach out to us anytime</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl text-primary mb-6">Contact Information</h3>
                  <ContactInfo />
                </div>
                
                <div>
                  <h3 className="text-xl text-primary mb-6">Follow Us</h3>
                  <SocialLinks variant="footer" />
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg text-blue-800 mb-4">Ready to Start Learning?</h4>
                    <Button 
                      size="lg" 
                      className="w-full bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold"
                      onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
                    >
                      📅 Schedule Your Free Demo
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function DemoBooking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    level: "",
    preferredTime: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const leadData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        type: 'demo',
        message: `Level: ${formData.level}, Preferred Time: ${formData.preferredTime}. Goals: ${formData.message}`,
        source: 'demo_booking_form'
      };

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3d2f8d09/leads`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit demo booking');
      }

      const result = await response.json();
      console.log("Demo booking submitted successfully:", result);
      
      setSubmitMessage("🎉 Redirecting you to complete your booking...");
      setFormData({
        name: "",
        email: "",
        phone: "",
        level: "",
        preferredTime: "",
        message: ""
      });

      // Redirect to Google form after a short delay
      setTimeout(() => {
        window.open('https://forms.gle/bmnncxqaWY4VUW3t8', '_blank');
      }, 1500);

    } catch (error) {
      console.error("Error submitting demo booking:", error);
      setSubmitMessage("❌ Sorry, there was an error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="demo-booking" className="py-20 bg-gradient-to-br from-rose-50 via-amber-25 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">
            Book Your Free Trial Class
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our teaching method with a free 30-minute trial lesson. 
            No commitment required! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <div className="bg-gradient-to-br from-blue-200 to-rose-200 rounded-2xl p-8 mb-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl text-blue-800 mb-2">Your Free Trial Includes:</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-6 w-6 text-blue-400 mt-1" />
                  <div>
                    <h4 className="text-lg">Level Assessment</h4>
                    <p className="text-muted-foreground">
                      We'll determine your current level to personalize your learning
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-rose-400 mt-1" />
                  <div>
                    <h4 className="text-lg">Mini Personalized Lesson</h4>
                    <p className="text-muted-foreground">
                      A lesson tailored to your interests and needs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-amber-400 mt-1" />
                  <div>
                    <h4 className="text-lg">Learning Roadmap</h4>
                    <p className="text-muted-foreground">
                      Personalized advice to reach your French goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <Card className="border-2 border-blue-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Book Your Free Trial
              </CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll contact you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <Input
                  type="tel"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />

                <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Your current French level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner (A1)</SelectItem>
                    <SelectItem value="elementary">Elementary (A2)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (B1)</SelectItem>
                    <SelectItem value="advanced">Advanced (B2+)</SelectItem>
                    <SelectItem value="unsure">Not sure</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am-12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (2pm-5pm)</SelectItem>
                    <SelectItem value="evening">Evening (6pm-9pm)</SelectItem>
                    <SelectItem value="weekend">Weekend</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us about your learning goals (optional)"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={3}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-blue-300 hover:bg-blue-400 text-blue-900"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Booking Your Trial..." : "Book My Free Trial"}
                </Button>
                
                {submitMessage && (
                  <p className={`text-sm text-center p-3 rounded-lg ${
                    submitMessage.includes('❌') 
                      ? 'bg-red-50 text-red-700' 
                      : 'bg-green-50 text-green-700'
                  }`}>
                    {submitMessage}
                  </p>
                )}
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    No commitment • 24h response • 100% free
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-slate-600 mb-2">Prefer to book directly?</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => window.open('https://forms.gle/bmnncxqaWY4VUW3t8', '_blank')}
                      className="text-blue-700 border-blue-300 hover:bg-blue-50"
                    >
                      📅 Quick Book via Google Form
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
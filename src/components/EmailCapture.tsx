import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Download, Mail, Gift } from "lucide-react";
import { useState } from "react";
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const leadData = {
        email,
        type: 'newsletter',
        message: 'Requested free French learning resources',
        source: 'email_capture_form'
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
        throw new Error('Failed to submit email');
      }

      const result = await response.json();
      console.log("Email submitted successfully:", result);
      
      setSubmitMessage("🎉 Thanks! You'll receive your free resources via email soon.");
      setEmail("");

    } catch (error) {
      console.error("Error submitting email:", error);
      setSubmitMessage("❌ Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="email-capture" className="py-20 bg-gradient-to-r from-blue-200 via-amber-100 to-rose-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl overflow-hidden border-4 border-white">
          <div className="bg-gradient-to-br from-white via-blue-25 to-rose-25">
            <CardHeader className="text-center pb-6">
              <div className="mx-auto w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
                <Gift className="h-10 w-10 text-gray-700" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-primary flex items-center justify-center gap-3">
                <span className="text-3xl">🇫🇷</span>
                Get Your Free French Resources
                <span className="text-3xl">📚</span>
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join 1,000+ students and get instant access to our complete collection 
                of French learning materials. No spam, just great content! 
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              {/* Benefits List with Pastel French Flag Colors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl border-2 border-blue-100">
                  <div className="text-3xl mb-2">🎥</div>
                  <h4 className="text-sm font-semibold mb-1 text-blue-800">10 Video Lessons</h4>
                  <p className="text-xs text-blue-700">Grammar basics made easy</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl border-2 border-amber-200">
                  <div className="text-3xl mb-2">📖</div>
                  <h4 className="text-sm font-semibold text-amber-800 mb-1">Conversation Guide</h4>
                  <p className="text-xs text-amber-700">100 essential phrases</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-rose-200 to-pink-300 rounded-xl border-2 border-rose-100">
                  <div className="text-3xl mb-2">🎧</div>
                  <h4 className="text-sm font-semibold mb-1 text-rose-800">Audio Exercises</h4>
                  <p className="text-xs text-rose-700">Improve your listening</p>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-white border-2 border-gray-200 focus:border-blue-500 h-12"
                  />
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-blue-300 hover:bg-blue-400 text-blue-900 font-semibold shadow-lg px-8 h-12"
                    disabled={isSubmitting}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Get Free Access"}
                  </Button>
                </div>
                
                {submitMessage && (
                  <div className={`text-center mt-4 p-3 rounded-lg ${
                    submitMessage.includes('❌') 
                      ? 'bg-red-50 text-red-700' 
                      : 'bg-green-50 text-green-700'
                  }`}>
                    <p className="text-sm">{submitMessage}</p>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    ✨ Instant download • No spam • Unsubscribe anytime
                  </p>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FreeResources } from "./components/FreeResources";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { LeadDashboard } from "./components/LeadDashboard";
import { Button } from "./components/ui/button";

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Simple admin access (in production, use proper authentication)
  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "maisonfrancaise2024") {
      setIsAdmin(true);
      setShowDashboard(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (showDashboard && isAdmin) {
    return (
      <div className="min-h-screen">
        <div className="bg-white border-b border-hof-cream p-4 flex justify-between items-center shadow-sm">
          <h1 className="text-xl font-anton text-hof-brown tracking-wide">HOUSE OF FRENCH - ADMIN DASHBOARD</h1>
          <Button 
            onClick={() => setShowDashboard(false)}
            variant="outline"
            className="border-hof-orange text-hof-brown hover:bg-hof-cream font-poppins"
          >
            Back to Website
          </Button>
        </div>
        <LeadDashboard />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <FreeResources />
        <Testimonials />
      </main>
      <Footer />
      
      {/* Admin Access Button (hidden in bottom corner) */}
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-4 right-4 w-8 h-8 bg-hof-brown hover:bg-hof-red rounded-full text-xs opacity-20 hover:opacity-100 transition-all duration-200 text-white shadow-lg"
        title="Admin Access"
      >
        🔑
      </button>
    </div>
  );
}
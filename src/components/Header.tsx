import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { SocialLinks } from "./SocialLinks";
import logo from "figma:asset/0b54e9d320774ebbb00840a0b1b28c4d69717ad1.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg border-b border-hof-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white rounded-full p-1 shadow-lg border border-hof-cream overflow-hidden">
              <img 
                src={logo} 
                alt="House of French Logo" 
                className="h-20 w-20 object-cover object-center rounded-full"
              />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-anton text-black leading-tight tracking-wide">
                HOUSE OF FRENCH
              </h1>
              <p className="text-sm text-gray-800 font-poppins font-medium">Your Gateway to Global Opportunities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-hof-orange transition-colors font-poppins font-medium">
              Home
            </a>
            <a href="#resources" className="text-black hover:text-hof-orange transition-colors font-poppins font-medium">
              Free Resources
            </a>
          </nav>

          {/* CTA Button & Social Links */}
          <div className="hidden md:flex items-center gap-4">
            <SocialLinks variant="header" size="sm" />
            <Button 
              className="bg-hof-orange hover:bg-hof-red text-white font-poppins font-semibold px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
            >
              🚀 Start Your Journey
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-black" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-hof-cream bg-hof-light-cream">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-black hover:text-hof-orange transition-colors py-2 font-poppins font-medium">
                Home
              </a>
              <a href="#resources" className="text-black hover:text-hof-orange transition-colors py-2 font-poppins font-medium">
                Free Resources
              </a>
              <Button 
                className="bg-hof-orange hover:bg-hof-red text-white w-full mt-4 font-poppins font-semibold rounded-full"
                onClick={() => window.open('https://calendar.app.google/f7xM4DowwHioNWrS6', '_blank')}
              >
                🚀 Start Your Journey
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
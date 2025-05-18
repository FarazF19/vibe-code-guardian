
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Menu, X, Upload, FileText, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-slate-950/90 shadow-lg shadow-vibeblue-900/10' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2 relative group">
          <div className="absolute -inset-1 rounded-full blur-sm bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 rounded-full p-2">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text relative">VibeSafe</span>
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/#features" className="text-slate-300 hover:text-vibeblue-400 transition-colors">
            Features
          </Link>
          <Link to="/#demo" className="text-slate-300 hover:text-vibeblue-400 transition-colors">
            Demo
          </Link>
          <Link to="/#pricing" className="text-slate-300 hover:text-vibeblue-400 transition-colors">
            Pricing
          </Link>
          <Link to="/dashboard" className="text-slate-300 hover:text-vibeblue-400 transition-colors">
            Dashboard
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-vibeblue-400 transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-slate-700 text-vibeblue-400 hover:bg-slate-800 hover:border-vibeblue-500">
            Log In
          </Button>
          <Button className="glass-card bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border border-slate-800 backdrop-blur-xl">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#demo" 
              className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              to="/#pricing" 
              className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/contact" 
              className="px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t border-slate-800">
              <Button variant="outline" className="border-slate-700 text-vibeblue-400">
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Glowing line at bottom of navbar when scrolled */}
      {scrolled && (
        <div className="h-px bg-gradient-to-r from-transparent via-vibeblue-500/50 to-transparent w-full"></div>
      )}
    </nav>
  );
};

export default Navbar;

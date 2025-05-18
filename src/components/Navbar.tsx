
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Menu, X, Upload, FileText, Bell, Settings, Sun, Moon, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();

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

  // Apply theme to document
  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.hash === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-slate-950/90 shadow-lg shadow-vibeblue-900/10' : 'bg-transparent'
    } ${theme === 'light' ? 'light-nav' : ''}`}>
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
          <Link 
            to="/#features" 
            className={`transition-colors ${isActive('#features') ? 'text-vibeblue-400' : 'text-slate-300 hover:text-vibeblue-400'}`}
          >
            Features
          </Link>
          <Link 
            to="/#demo" 
            className={`transition-colors ${isActive('#demo') ? 'text-vibeblue-400' : 'text-slate-300 hover:text-vibeblue-400'}`}
          >
            Demo
          </Link>
          <Link 
            to="/#pricing" 
            className={`transition-colors ${isActive('#pricing') ? 'text-vibeblue-400' : 'text-slate-300 hover:text-vibeblue-400'}`}
          >
            Pricing
          </Link>
          <Link 
            to="/dashboard" 
            className={`transition-colors ${isActive('/dashboard') ? 'text-vibeblue-400' : 'text-slate-300 hover:text-vibeblue-400'}`}
          >
            Dashboard
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors ${isActive('/contact') ? 'text-vibeblue-400' : 'text-slate-300 hover:text-vibeblue-400'}`}
          >
            Contact
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            variant="outline" 
            className="border-slate-700 text-vibeblue-400 hover:bg-slate-800 hover:border-vibeblue-500"
          >
            Log In
          </Button>
          <Button 
            className="glass-card bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white"
          >
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
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
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border border-slate-800 backdrop-blur-xl">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/#features" 
              className={`px-4 py-2 rounded-md transition-colors ${isActive('#features') ? 'bg-slate-800 text-vibeblue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#demo" 
              className={`px-4 py-2 rounded-md transition-colors ${isActive('#demo') ? 'bg-slate-800 text-vibeblue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              to="/#pricing" 
              className={`px-4 py-2 rounded-md transition-colors ${isActive('#pricing') ? 'bg-slate-800 text-vibeblue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 rounded-md transition-colors ${isActive('/dashboard') ? 'bg-slate-800 text-vibeblue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-md transition-colors ${isActive('/contact') ? 'bg-slate-800 text-vibeblue-400' : 'text-slate-300 hover:bg-slate-800 hover:text-vibeblue-400'}`}
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

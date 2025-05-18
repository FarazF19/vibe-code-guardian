
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 dark:bg-slate-950/80 border-b border-slate-800/50 transition-all duration-300 light:bg-white/80 light:border-slate-200/80">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 h-8 w-8 rounded-lg mr-2"></div>
            <span className="text-xl font-bold text-white light:text-slate-800">Vibe<span className="text-vibeblue-500">Safe</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className={`text-sm font-medium ${isActive('/') ? 'text-white light:text-slate-900' : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'} transition-colors`}>Home</Link>
            <Link to="/#features" className={`text-sm font-medium text-slate-300 hover:text-white transition-colors light:text-slate-600 light:hover:text-slate-900`}>Features</Link>
            <Link to="/#pricing" className={`text-sm font-medium text-slate-300 hover:text-white transition-colors light:text-slate-600 light:hover:text-slate-900`}>Pricing</Link>
            <Link to="/dashboard" className={`text-sm font-medium ${isActive('/dashboard') ? 'text-white light:text-slate-900' : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'} transition-colors`}>Dashboard</Link>
            <Link to="/contact" className={`text-sm font-medium ${isActive('/contact') ? 'text-white light:text-slate-900' : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'} transition-colors`}>Contact</Link>
            
            <Button 
              variant="outline"
              size="icon"
              className="border-slate-700 hover:border-slate-600 rounded-full w-8 h-8 ml-2 light:border-slate-300 light:hover:border-slate-400"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </Button>
            
            <Link to="/login">
              <Button size="sm" variant="ghost" className="text-white light:text-slate-700">
                Login
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white">
                Try Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <Button 
              variant="outline"
              size="icon"
              className="border-slate-700 hover:border-slate-600 rounded-full w-8 h-8 light:border-slate-300 light:hover:border-slate-400"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-700" />
              )}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="text-slate-200 p-2 hover:text-white light:text-slate-600 light:hover:text-slate-900"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden py-4 px-4 bg-slate-900/95 border-t border-slate-800/50 light:bg-white/95 light:border-slate-200/50"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-sm font-medium py-2 px-4 rounded-md ${isActive('/') ? 'bg-slate-800 text-white light:bg-slate-100 light:text-slate-900' : 'text-slate-300 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#features" 
              className="text-sm font-medium py-2 px-4 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="text-sm font-medium py-2 px-4 rounded-md text-slate-300 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium py-2 px-4 rounded-md ${isActive('/dashboard') ? 'bg-slate-800 text-white light:bg-slate-100 light:text-slate-900' : 'text-slate-300 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium py-2 px-4 rounded-md ${isActive('/contact') ? 'bg-slate-800 text-white light:bg-slate-100 light:text-slate-900' : 'text-slate-300 hover:bg-slate-800 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full border-slate-700 hover:border-slate-600 light:border-slate-300 light:hover:border-slate-400">
                  Login
                </Button>
              </Link>
              <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white">
                  Try Free
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

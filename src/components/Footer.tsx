
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-vibeblue-500/30 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-vibeblue-900/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vibeviolet-900/10 rounded-full blur-[100px]"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 rounded-full p-1">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">VibeSafe</span>
            </Link>
            <p className="text-slate-400 mb-4">
              Your AI-powered code guardian. Scan, fix, and ship secure code with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-vibeblue-400 transition-colors border border-slate-800">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-vibeblue-400 transition-colors border border-slate-800">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-vibeblue-400 transition-colors border border-slate-800">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Pricing</Link></li>
              <li><Link to="/docs" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Documentation</Link></li>
              <li><Link to="/changelog" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Community</Link></li>
              <li><Link to="/support" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Support</Link></li>
              <li><Link to="/status" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-vibeblue-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-slate-400 hover:text-vibeblue-400 transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} VibeSafe. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-slate-500 px-3 py-1 glass-card rounded-full border border-slate-800">
                <span className="inline-block w-2 h-2 bg-vibeblue-500 rounded-full animate-pulse mr-1"></span>
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Upload, Github, Lock, Code, Eye } from 'lucide-react';

const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0,
  size = 24 
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
  size?: number;
}) => (
  <div 
    className={`absolute opacity-70 ${className}`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${6 + Math.random() * 4}s`
    }}
  >
    <Icon size={size} className="text-vibeblue-400 dark:text-vibeblue-500" />
  </div>
);

const HeroSection = () => {
  return (
    <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden" id="hero">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-vibeblue-50 via-vibeviolet-50 to-vibeblue-50 dark:from-slate-950 dark:via-vibeviolet-950 dark:to-slate-950 animate-gradient-y bg-300%"
        style={{ opacity: 0.8 }}
      />
      
      {/* Floating security icons */}
      <FloatingIcon icon={ShieldCheck} className="animate-float top-1/4 left-1/5" size={32} />
      <FloatingIcon icon={Lock} className="animate-float-delayed top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon={Code} className="animate-float top-2/3 left-1/4" delay={2} size={28} />
      <FloatingIcon icon={Eye} className="animate-float-delayed bottom-1/4 right-1/5" delay={1.5} />
      <FloatingIcon icon={ShieldCheck} className="animate-float bottom-1/3 left-1/3" delay={0.5} size={20} />
      <FloatingIcon icon={Lock} className="animate-float-delayed top-1/2 right-1/3" delay={2.5} size={24} />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Secure. Fix. Ship.</span>
            <br />
            <span className="text-slate-800 dark:text-white">VibeSafe.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            The AI-powered code security assistant for solo builders, non-tech founders, and developers who want to ship faster with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 hover:from-vibeblue-600 hover:to-vibeviolet-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-vibeblue-500/20">
              <Upload className="mr-2 h-5 w-5" /> Upload Code
            </Button>
            <Button variant="outline" className="border-2 border-slate-300 dark:border-slate-700 hover:border-vibeblue-500 dark:hover:border-vibeblue-500 px-8 py-6 text-lg rounded-xl">
              <Github className="mr-2 h-5 w-5" /> Connect GitHub
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-vibeblue-500 flex items-center justify-center text-white text-xs">JD</div>
              <div className="w-8 h-8 rounded-full bg-vibeviolet-500 flex items-center justify-center text-white text-xs">KM</div>
              <div className="w-8 h-8 rounded-full bg-vibeblue-700 flex items-center justify-center text-white text-xs">TR</div>
              <div className="w-8 h-8 rounded-full bg-vibeviolet-700 flex items-center justify-center text-white text-xs">+</div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Trusted by <span className="font-semibold">1,000+</span> developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

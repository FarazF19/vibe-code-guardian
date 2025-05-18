
import React from 'react';
import { Upload, ShieldCheck, FileText, Lock, Terminal, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="vibrant-card p-6 hover-lift glow backdrop-blur-md bg-slate-900/40">
      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-vibeblue-600 to-vibeviolet-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-vibeblue-900/20">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 shimmer-text">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Terminal,
      title: "One-Click Security Scan",
      description: "Our AI engine detects vulnerabilities, bugs, and code smells across all major languages and frameworks in seconds."
    },
    {
      icon: ShieldCheck,
      title: "AI-Powered Fixes",
      description: "VibeSafe automatically generates and applies fixes for detected issues with one click, no deep technical knowledge required."
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Get comprehensive analysis with severity ratings, affected files, and recommended fixes for all identified issues."
    }
  ];

  const secondaryFeatures = [
    {
      icon: Upload,
      title: "Instant Deployment",
      description: "Upload your codebase, connect GitHub, or scan local files. Start securing your project in under a minute."
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your code never leaves your machine. All scanning and fixing happens locally for maximum security."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "View before/after comparisons of all fixes. Accept, modify, or reject any changes with full control."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-vibeblue-950 to-vibeviolet-950 relative overflow-hidden" id="features">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibeblue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-vibeviolet-600/20 rounded-full blur-[100px]"></div>
      
      {/* Background mesh pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzODlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNLTI5LjU5OSAxNy4zOThsMTYwLTkzLjYwMU0tMjEuNTk5IDI2LjE5OGwxNjAtOTMuNjAyTS0xMy41OTkgMzQuOTk4bDE2MC05My42MDJNLTUuNTk5IDQzLjc5OGwxNjAtOTMuNjAyTTIuNDAxIDUyLjU5OGwxNjAtOTMuNjAyTTEwLjQwMSA2MS4zOThsMTYwLTkzLjYwMk0xOC40MDEgNzAuMTk4bDE2MC05My42MDJNMjYuNDAxIDc4Ljk5OGwxNjAtOTMuNjAyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Intelligent Security</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            VibeSafe combines AI and security expertise to protect your code automatically
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-card backdrop-blur-lg bg-slate-900/40 text-vibeblue-400 font-medium text-sm">
            <span className="mr-2">✨</span>
            <span>Protecting code in 20+ programming languages</span>
          </div>
          
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-8">
            {['JavaScript', 'Python', 'Ruby', 'Go', 'Java', 'PHP'].map((lang, idx) => (
              <div key={idx} className="text-slate-400 font-mono text-sm">
                {lang}
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <Button className="glass-card glow bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white px-8 py-6 text-lg rounded-xl">
              <ShieldCheck className="mr-2 h-5 w-5" /> Start Free Scan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

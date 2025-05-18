
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ShieldCheck, Code, Terminal, Lock } from 'lucide-react';

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayClick = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the video to play
    setTimeout(() => {
      setIsPlaying(false);
    }, 500);
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden" id="demo">
      {/* Abstract mesh background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzAwNzNmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNLTI5LjU5OSAxNy4zOThsMTYwLTkzLjYwMU0tMjEuNTk5IDI2LjE5OGwxNjAtOTMuNjAyTS0xMy41OTkgMzQuOTk4bDE2MC05My42MDJNLTUuNTk5IDQzLjc5OGwxNjAtOTMuNjAyTTIuNDAxIDUyLjU5OGwxNjAtOTMuNjAyTTEwLjQwMSA2MS4zOThsMTYwLTkzLjYwMk0xOC40MDEgNzAuMTk4bDE2MC05My42MDJNMjYuNDAxIDc4Ljk5OGwxNjAtOTMuNjAyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-vibeblue-600/20 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-vibeviolet-600/20 rounded-full blur-[80px]"></div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">See VibeSafe In Action</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Watch how our AI identifies and fixes security vulnerabilities in real-time
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Video placeholder with glowing border */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden p-[1px] bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500">
              <div className="bg-slate-900 h-full w-full rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Button 
                    onClick={handlePlayClick}
                    className={`w-16 h-16 rounded-full glass-card bg-gradient-to-br from-vibeblue-600 to-vibeviolet-600 text-white hover:scale-110 transition-transform duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                  >
                    <Play className="h-8 w-8" />
                  </Button>
                  <p className="mt-4 text-slate-300">
                    Watch Demo (2:45)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Glowing effect */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-r from-vibeblue-600/30 to-vibeviolet-600/30 blur-2xl rounded-2xl transform scale-105 opacity-60"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-vibeblue-500/50 flex items-center justify-center">
              <ShieldCheck className="h-4 w-4 text-vibeblue-500" />
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-vibeviolet-500/50 flex items-center justify-center">
              <Lock className="h-4 w-4 text-vibeviolet-500" />
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full border border-vibeblue-500/50 flex items-center justify-center">
              <Code className="h-4 w-4 text-vibeblue-500" />
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-vibeviolet-500/50 flex items-center justify-center">
              <Terminal className="h-4 w-4 text-vibeviolet-500" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button className="glass-card glow bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white px-8 py-6 rounded-xl">
            Try For Free
          </Button>
          <Button variant="outline" className="glass-card border-slate-700 hover:border-vibeblue-500 px-8 py-6 rounded-xl">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

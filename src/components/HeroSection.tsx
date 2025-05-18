
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Github, ShieldCheck, Lock, Code, Eye, Terminal, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <Icon size={size} className="text-vibeblue-400 drop-shadow-[0_0_8px_rgba(0,115,255,0.8)]" />
  </div>
);

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const text = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(text.substring(0, currentText.length + 1));
        
        if (currentText.length === text.length) {
          // Delay before deleting
          setTypingSpeed(1500);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(text.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed]);

  return (
    <div className="h-8 md:h-10">
      <span className="text-lg md:text-xl font-semibold text-vibeblue-400">{currentText}<span className="animate-pulse">|</span></span>
    </div>
  );
};

const TerminalAnimation = () => {
  const [terminalText, setTerminalText] = useState<string[]>([
    '> scanning codebase for vulnerabilities...',
  ]);

  useEffect(() => {
    const steps = [
      { text: '> found 3 critical vulnerabilities in ./src/auth/login.js', delay: 1500 },
      { text: '> analyzing injection vulnerability in line 42...', delay: 1000 },
      { text: '> generating fix...', delay: 800 },
      { text: '> fix applied: sanitized user input before db query', delay: 1200 },
      { text: '> scanning for additional issues...', delay: 1000 },
      { text: '> all critical issues resolved ✓', delay: 1000 },
    ];

    let timeout: NodeJS.Timeout;
    let currentStep = 0;

    const addNextLine = () => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];
        setTerminalText(prev => [...prev, step.text]);
        currentStep++;
        timeout = setTimeout(addNextLine, step.delay);
      } else {
        // Reset after completion
        setTimeout(() => {
          setTerminalText(['> scanning codebase for vulnerabilities...']);
          currentStep = 0;
          timeout = setTimeout(addNextLine, 1000);
        }, 3000);
      }
    };

    timeout = setTimeout(addNextLine, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="terminal glass-card p-4 h-52 overflow-hidden font-mono text-sm text-vibeblue-400 border border-vibeblue-900">
      <div className="flex gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="terminal-content">
        {terminalText.map((line, index) => (
          <div key={index} className={`mb-1 ${index === terminalText.length - 1 ? 'animate-pulse' : ''}`}>
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

// Animated language marquee
const SupportedLanguages = () => {
  const languages = [
    "JavaScript", "TypeScript", "Python", "Ruby", "Java", "Go", "PHP", "C#", "Rust", "Kotlin", "Swift"
  ];
  
  return (
    <div className="relative w-full overflow-hidden py-4 mt-6 before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-slate-950 after:to-transparent">
      <div className="animate-marquee whitespace-nowrap">
        {[...languages, ...languages].map((language, index) => (
          <span key={index} className="mx-4 text-sm font-medium text-vibeblue-400 px-3 py-1 rounded-full bg-vibeblue-900/20 border border-vibeblue-800/30">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden animated-gradient" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibeblue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibeviolet-600/20 rounded-full blur-[100px]"></div>
      
      {/* Animated security grids (subtle background pattern) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIzIDAgMi4xOTguOTY4IDIuMTk4IDIuMnYxOS42YzAgMS4yMzItLjk2OCAyLjItMi4xOTggMi4ySDE4Yy0xLjIzIDAtMi4yLTEuMTY4LTIuMi0yLjRWMjAuMmMwLTEuMjMyIDEuMTctMi4yIDIuNC0yLjJoMTcuNnoiIHN0cm9rZT0iIzMzODlmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDB6bTAgN2MtMTIuNzAzIDAtMjMgMTAuMjk3LTIzIDIzIDAgMTIuNzAzIDEwLjI5NyAyMyAyMyAyMyAxMi43MDMgMCAyMy0xMC4yOTcgMjMtMjMgMC0xMi43MDMtMTAuMjk3LTIzLTIzLTIzeiIgc3Ryb2tlPSIjODcwMGZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      
      {/* Floating security icons */}
      <FloatingIcon icon={ShieldCheck} className="animate-float top-1/4 left-1/5" size={32} />
      <FloatingIcon icon={Lock} className="animate-float-delayed top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon={Code} className="animate-float top-2/3 left-1/4" delay={2} size={28} />
      <FloatingIcon icon={Eye} className="animate-float-delayed bottom-1/4 right-1/5" delay={1.5} />
      <FloatingIcon icon={Terminal} className="animate-float bottom-1/3 left-1/3" delay={0.5} size={20} />
      <FloatingIcon icon={FileCode} className="animate-float-delayed top-1/2 right-1/3" delay={2.5} size={24} />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 tracking-tight leading-tight"
            >
              <span className="block text-white mb-2">AI-native Security</span>
              <span className="gradient-text">for Vibe Coders.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-300 mb-6 max-w-2xl lg:mx-0 mx-auto"
            >
              Scan, fix, and refactor your codebase with one click. Locally or on GitHub.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <TypewriterText texts={[
                "Fix vulnerabilities in seconds.",
                "Your AI-powered code guardian.",
                "Security. Style. Simplicity."
              ]} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            >
              <Button className="glass-card glow bg-gradient-to-r from-vibeblue-600 to-vibeviolet-600 hover:from-vibeblue-700 hover:to-vibeviolet-700 text-white px-8 py-6 text-lg rounded-xl">
                <ShieldCheck className="mr-2 h-5 w-5" /> Try Free Scan
              </Button>
              <Button variant="outline" className="glass-card border border-slate-700 hover:border-vibeblue-500 hover:bg-slate-800/50 px-8 py-6 text-lg rounded-xl">
                <Github className="mr-2 h-5 w-5" /> Connect with GitHub
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex items-center justify-center lg:justify-start space-x-6"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-vibeblue-500 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-vibeviolet-500 flex items-center justify-center text-white text-xs">KM</div>
                <div className="w-8 h-8 rounded-full bg-vibeblue-700 flex items-center justify-center text-white text-xs">TR</div>
                <div className="w-8 h-8 rounded-full bg-vibeviolet-700 flex items-center justify-center text-white text-xs">+</div>
              </div>
              <p className="text-sm text-slate-400">
                Trusted by <span className="font-semibold text-white">1,000+</span> developers
              </p>
            </motion.div>
            
            {/* Animated Language Support */}
            <SupportedLanguages />
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-full max-w-md"
            >
              <TerminalAnimation />
              
              {/* Glow effect behind terminal */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-vibeblue-500/30 to-vibeviolet-500/30 blur-2xl rounded-2xl transform scale-105 opacity-60"></div>
              
              {/* Decorative lines */}
              <div className="absolute -top-5 -right-5 w-20 h-20 border-t-2 border-r-2 border-vibeblue-500/50 rounded-tr-xl"></div>
              <div className="absolute -bottom-5 -left-5 w-20 h-20 border-b-2 border-l-2 border-vibeviolet-500/50 rounded-bl-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

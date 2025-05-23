
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixBackground from '@/components/MatrixBackground';

const Index = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check for user preference
    const storedTheme = localStorage.getItem('vibe-theme');
    if (storedTheme === 'light') {
      setTheme('light');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.add('light');
      localStorage.setItem('vibe-theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('vibe-theme', 'dark');
    }
  };

  return (
    <div className={`flex flex-col min-h-screen animated-gradient ${theme === 'light' ? 'light' : ''}`}>
      <MatrixBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <DemoSection />
        <TestimonialsSection />
        <div id="pricing">
          <PricingSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

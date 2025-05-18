
import React from 'react';
import { Upload, ShieldCheck, FileText } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="vibrant-card p-6 hover-lift">
      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-vibeblue-500 to-vibeviolet-500 text-white flex items-center justify-center mb-6">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Your Code",
      description: "Simply upload your codebase or connect your GitHub repository to get started. VibeSafe supports all major programming languages and frameworks."
    },
    {
      icon: ShieldCheck,
      title: "One-Click Fix",
      description: "Our AI automatically detects security vulnerabilities and offers one-click fixes. No deep technical knowledge required."
    },
    {
      icon: FileText,
      title: "Detailed Reports",
      description: "Get comprehensive reports on security issues found, fixes applied, and recommendations for further improvements."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-vibeblue-50 dark:from-slate-900 dark:to-slate-950" id="features">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            VibeSafe makes securing your code effortless with our streamlined process
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-vibeblue-100 dark:bg-vibeblue-900/30 text-vibeblue-700 dark:text-vibeblue-300 font-medium text-sm">
            <span className="mr-2">✨</span>
            <span>Supported in 20+ programming languages</span>
          </div>
          
          <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-8">
            {['JavaScript', 'Python', 'Ruby', 'Go', 'Java', 'PHP'].map((lang, idx) => (
              <div key={idx} className="text-slate-500 dark:text-slate-400 font-mono text-sm">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ShieldCheck } from 'lucide-react';

type PricingTierProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
};

const PricingTier = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText = "Get Started"
}: PricingTierProps) => {
  return (
    <div 
      className={`
        relative rounded-2xl overflow-hidden transition-all duration-300
        ${highlighted 
          ? 'border-2 border-vibeblue-500 shadow-lg shadow-vibeblue-500/20' 
          : 'border border-slate-700 dark:border-slate-700 light:border-slate-300'}
      `}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 bg-vibeblue-500 text-white text-sm font-medium rounded-b-lg">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">/mo</span>}
        </div>
        <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-vibeblue-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full ${
            highlighted 
              ? 'bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 hover:from-vibeblue-600 hover:to-vibeviolet-600 text-white' 
              : 'bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700 text-slate-200 light:bg-slate-200 light:hover:bg-slate-300 light:text-slate-800'
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const tiers = [
    {
      name: "Free",
      price: "Free",
      description: "Perfect for trying out VibeSafe",
      features: [
        "2 code scans per month",
        "Basic vulnerability detection",
        "Email support",
        "Community access"
      ],
      buttonText: "Start for Free"
    },
    {
      name: "Pro",
      price: "$20",
      description: "For individual developers",
      features: [
        "Unlimited code scans",
        "Advanced vulnerability detection",
        "One-click fixes",
        "Priority email support",
        "Detailed security reports"
      ],
      highlighted: true
    },
    {
      name: "Team",
      price: "$100",
      description: "For growing development teams",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "SSO Authentication"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-vibeblue-950 via-slate-950 to-vibeviolet-950 relative overflow-hidden" id="pricing">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-vibeblue-600/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vibeviolet-600/10 rounded-full blur-[80px]"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and your team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <PricingTier key={idx} {...tier} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vibeblue-900/30 dark:bg-vibeblue-900/30 border border-vibeblue-800 dark:border-vibeblue-800">
            <ShieldCheck className="h-5 w-5 text-vibeblue-500" />
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm">
              30-day money back guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

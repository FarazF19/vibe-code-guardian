
import React from 'react';
import { Quote } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  initials: string;
  bgColor: string;
};

const TestimonialCard = ({ quote, author, role, initials, bgColor }: TestimonialCardProps) => {
  return (
    <div className="vibrant-card p-6 md:p-8 hover-lift glow relative">
      {/* Quote icon */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-vibeblue-500 to-vibeviolet-500 flex items-center justify-center shadow-lg">
        <Quote className="h-4 w-4 text-white" />
      </div>
      
      <blockquote className="mb-6 text-lg text-slate-300">"{quote}"</blockquote>
      
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center text-white font-medium mr-3 shadow-glow`}>
          {initials}
        </div>
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-slate-400">{role}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "VibeSafe caught 3 major security flaws in my API within minutes. Saved me from a potential breach.",
      author: "Alex Kim",
      role: "Solo Founder, IndieDev",
      initials: "AK",
      bgColor: "bg-vibeblue-600"
    },
    {
      quote: "One-click fixes? Game-changer for our sprint velocity. We're shipping secure code twice as fast now.",
      author: "Mira Patel",
      role: "Team Lead, Fintech Startup",
      initials: "MP",
      bgColor: "bg-vibeviolet-600"
    },
    {
      quote: "Finally, a security tool that gets design. The interface is just as impressive as the tech under the hood.",
      author: "Jordan Lee",
      role: "Full-Stack Developer, Freelance",
      initials: "JL",
      bgColor: "bg-gradient-to-br from-vibeblue-600 to-vibeviolet-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-vibeblue-950 to-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-vibeblue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent to-vibeviolet-500/50"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-vibeblue-600/10 rounded-full blur-[80px]"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Loved by Developers</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of developers who've made security seamless with VibeSafe
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

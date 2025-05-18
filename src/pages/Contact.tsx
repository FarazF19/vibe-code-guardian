
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <div className="pt-16">
        <div className="py-16 bg-gradient-to-br from-vibeblue-950 via-slate-950 to-vibeviolet-950 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-vibeblue-600/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-vibeviolet-600/10 rounded-full blur-[80px]"></div>
          
          <div className="container relative z-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Contact Us</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We'd love to hear from you. Let us know how we can help.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;


import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16">
        <div className="py-16 bg-gradient-to-r from-vibeblue-50 to-vibeviolet-50 dark:from-slate-950 dark:to-slate-900">
          <div className="container text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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

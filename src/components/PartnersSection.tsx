
import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  const partners = [
    { name: "TechVibe", logo: "TV" },
    { name: "CodeFlow", logo: "CF" },
    { name: "SecureStack", logo: "SS" },
    { name: "DevWave", logo: "DW" },
    { name: "ByteFusion", logo: "BF" },
    { name: "CloudPulse", logo: "CP" },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-lg font-medium mb-2 uppercase tracking-wider text-slate-400">Trusted by Industry Leaders</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center w-full"
            >
              <div className="glass-card border border-slate-800/50 py-6 px-10 w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-vibeblue-500/30 to-vibeviolet-500/30 rounded-full flex items-center justify-center mb-2 font-bold text-white">
                    {partner.logo}
                  </div>
                  <span className="text-sm font-medium text-slate-300">{partner.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

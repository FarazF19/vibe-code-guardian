
import React from 'react';
import { motion } from 'framer-motion';

const PartnersSection = () => {
  // Extended partner list to create a continuous flow effect
  const partners = [
    { name: "TechVibe", logo: "TV", color: "from-vibeblue-500 to-vibeblue-600" },
    { name: "CodeFlow", logo: "CF", color: "from-vibeviolet-500 to-vibeviolet-600" },
    { name: "SecureStack", logo: "SS", color: "from-vibeblue-600 to-vibeviolet-500" },
    { name: "DevWave", logo: "DW", color: "from-vibeviolet-600 to-vibeblue-500" },
    { name: "ByteFusion", logo: "BF", color: "from-vibeblue-500 to-vibeviolet-500" },
    { name: "CloudPulse", logo: "CP", color: "from-vibeviolet-500 to-vibeblue-500" },
  ];

  // Duplicate the partners to create a continuous flow
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mb-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h3 className="text-lg font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">Trusted by Industry Leaders</h3>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-6 before:absolute before:left-0 before:top-0 before:z-10 before:w-20 before:h-full before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:w-20 after:h-full after:bg-gradient-to-l after:from-background after:to-transparent">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {allPartners.map((partner, index) => (
            <div key={index} className="mx-6 flex-shrink-0">
              <div className="glass-card border py-4 px-6 w-40 flex items-center justify-center hover-lift">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-full flex items-center justify-center mb-2 font-bold text-white`}>
                    {partner.logo}
                  </div>
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

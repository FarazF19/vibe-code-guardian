
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const DemoSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50" id="demo">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">See VibeSafe In Action</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Watch how easy it is to secure your code with VibeSafe
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Video placeholder with gradient border */}
          <div className="aspect-video rounded-2xl overflow-hidden p-1 bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500">
            <div className="bg-slate-200 dark:bg-slate-800 h-full w-full rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Button 
                  className="w-16 h-16 rounded-full bg-white dark:bg-slate-700 text-vibeblue-500 hover:bg-vibeblue-500 hover:text-white transition-all duration-300"
                >
                  <Play className="h-8 w-8" />
                </Button>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  Watch Demo (2:45)
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-vibeblue-100 dark:bg-vibeblue-900/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-vibeviolet-100 dark:bg-vibeviolet-900/30 rounded-full blur-2xl"></div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button className="bg-gradient-to-r from-vibeblue-500 to-vibeviolet-500 hover:from-vibeblue-600 hover:to-vibeviolet-600 text-white px-8 py-6 rounded-xl">
            Try For Free
          </Button>
          <Button variant="outline" className="border-vibeblue-500 text-vibeblue-500 px-8 py-6 rounded-xl">
            View Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

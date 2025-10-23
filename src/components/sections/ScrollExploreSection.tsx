'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ScrollExploreSectionProps {
  className?: string;
}

const ScrollExploreSection: React.FC<ScrollExploreSectionProps> = ({ className }) => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#empathy-tech-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={cn("py-16 bg-white border-t border-gray-100", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Stats Section - Moved from separate component */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Card with 4:3 aspect ratio */}
                  <div className="aspect-[4/3] p-8 flex flex-col justify-center items-center text-center relative">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                        className="mb-4"
                      >
                        <span className="text-4xl lg:text-5xl font-bold text-primary-500 group-hover:text-primary-600 transition-colors duration-300">
                          {stat.number}
                        </span>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {stat.label}
                        </p>
                      </motion.div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-orange-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll to Explore */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <p className="text-lg text-gray-600 mb-6">
              Trusted by Industry Leaders
            </p>

            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center space-y-2 text-gray-700 hover:text-primary-500 transition-colors duration-300"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 rounded-full border-2 border-gray-600 group-hover:border-primary-500 transition-colors duration-300"
              >
                <ChevronDown className="w-5 h-5 text-gray-700 group-hover:text-primary-500" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollExploreSection;

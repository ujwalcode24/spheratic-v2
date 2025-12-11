'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '@/lib/constants';

const TrustedBySection = () => {
  const stats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      sublabel: "Worldwide",
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      sublabel: "Reliability",
      color: "from-purple-500 to-pink-500"
    },
    {
      value: "24/7",
      label: "Support Available",
      sublabel: "Expert assistance",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Trusted by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Leading companies across industries trust Spheratic to power their digital transformation and innovation initiatives.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-slate-700 font-medium">{stat.label}</p>
              <p className="text-slate-400 text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;


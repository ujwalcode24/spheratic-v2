'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const TrustedBySection = () => {

  return (
    <FullWidthSection variant="white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Trusted by <span className="text-primary-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-accent-gray-700 max-w-2xl mx-auto">
            Leading companies across industries trust Spheratic to power their digital transformation and innovation initiatives.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">500+</div>
            <p className="text-black font-medium">Enterprise Clients</p>
            <p className="text-accent-gray-600 text-sm mt-1">Worldwide</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">99.9%</div>
            <p className="text-black font-medium">Uptime Guarantee</p>
            <p className="text-accent-gray-600 text-sm mt-1">Reliability</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">24/7</div>
            <p className="text-black font-medium">Support Available</p>
            <p className="text-accent-gray-600 text-sm mt-1">Expert assistance</p>
          </div>
        </motion.div>
      </div>
    </FullWidthSection>
  );
};

export default TrustedBySection;


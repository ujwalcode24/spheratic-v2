'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ANIMATIONS } from '@/lib/constants';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  badge = 'Featured',
  children,
}) => {
  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            animate={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-primary-500/20 text-primary-600">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              {badge}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">{title}</span>
              <br />
              <span className="gradient-text">{subtitle}</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      {children}
    </div>
  );
};

export default PageTemplate;


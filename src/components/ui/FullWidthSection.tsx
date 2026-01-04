'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FullWidthSectionProps {
  children: React.ReactNode;
  variant?: 'orange' | 'blue' | 'purple' | 'black' | 'white';
  className?: string;
  decorative?: boolean;
  geometric?: boolean;
  id?: string;
}

const FullWidthSection: React.FC<FullWidthSectionProps> = ({
  children,
  variant = 'white',
  className = '',
  decorative = true,
  geometric = false,
  id
}) => {
  const sectionClasses = {
    orange: 'section-orange',
    blue: 'section-blue',
    purple: 'section-purple',
    black: 'section-black',
    white: 'bg-white text-accent-gray-900'
  };

  return (
    <section
      id={id}
      className={cn(
        'section-full-width py-20 relative',
        sectionClasses[variant],
        className
      )}
    >
      {/* Decorative background elements */}
      {decorative && variant !== 'white' && (
        <div className="section-decoration-lines"></div>
      )}

      {/* Geometric shapes */}
      {geometric && (
        <div className="section-decoration">
          <div className="geometric-shape w-32 h-32 top-10 right-20 animate-float"></div>
          <div className="geometric-shape w-20 h-20 bottom-20 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="geometric-lines top-1/4 right-1/4 rotate-45"></div>
          <div className="geometric-lines bottom-1/3 left-1/4 -rotate-12"></div>
        </div>
      )}

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// Domain section component for tech domains
interface DomainSectionProps {
  title: string;
  description: string;
  features: string[];
  variant: 'orange' | 'black' | 'white' | 'blue' | 'purple';
  icon?: string;
  image?: string | React.ReactNode;
  reverse?: boolean;
  id?: string;
}

export const DomainSection: React.FC<DomainSectionProps> = ({
  title,
  description,
  features,
  variant,
  icon,
  reverse = false,
  id
}) => {
  // Determine if this is a light background variant
  const isLightVariant = variant === "white" || variant === "orange" || variant === "blue" || variant === "purple";

  return (
    <FullWidthSection variant={variant} geometric id={id}>
      <div className={cn(
        'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px] overflow-visible',
        reverse ? 'lg:grid-flow-col-dense' : ''
      )}>
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={reverse ? 'lg:col-start-2' : ''}
        >
          {icon && (
            <div className="text-6xl mb-6">{icon}</div>
          )}

          <h2 className={cn(
            "text-4xl md:text-5xl font-bold leading-tight mb-4",
            isLightVariant ? "text-slate-900" : "text-white"
          )}>
            {title}
          </h2>

          <p className={cn(
            "text-lg md:text-lg leading-relaxed mb-6",
            isLightVariant ? "text-slate-600" : "text-white/90"
          )}>
            {description}
          </p>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "flex items-start text-lg",
                  isLightVariant ? "text-slate-700" : "text-white"
                )}
              >
                <span className={cn(
                  "text-2xl mr-3 flex-shrink-0 leading-none",
                  isLightVariant ? "text-blue-500" : "text-white"
                )}>•</span>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <button
              className={cn(
                "px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-lg",
                isLightVariant
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  : "bg-white text-slate-800 hover:bg-gray-100"
              )}
            >
              Explore Solutions
            </button>
          </motion.div>
        </motion.div>

        {/* Visual/Image - SVG Illustration Display */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={cn(
            'flex items-center justify-center',
            reverse ? 'lg:col-start-1 lg:row-start-1' : ''
          )}
        >
          <div className="w-full h-full flex items-center justify-center p-4">
            <div className="relative w-64 h-64 md:w-80 md:h-80 transition-all duration-300 hover:scale-105">
              {title === "Empathy Tech" ? (
                <Image
                  src="/empathy-tech.svg"
                  alt="Empathy Tech Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : title === "FinTech" ? (
                <Image
                  src="/fin-tech.svg"
                  alt="FinTech Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : title === "Human Tech" ? (
                <Image
                  src="/human-technology.svg"
                  alt="Human Technology Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : title === "AI & Innovation" ? (
                <Image
                  src="/ai-innovation.svg"
                  alt="AI & Innovation Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : title === "Deep Tech" ? (
                <Image
                  src="/deep-tech.svg"
                  alt="Deep Tech Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className={cn(
                  "w-full h-full flex items-center justify-center text-6xl md:text-8xl font-bold",
                  isLightVariant ? "text-slate-400" : "text-white/50"
                )}>
                  {title.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </FullWidthSection>
  );
};

// Feature highlight section
interface FeatureHighlightProps {
  title: string;
  subtitle: string;
  features: Array<{
    title: string;
    description: string;
    icon?: string | React.ComponentType<{ className?: string }>;
    image?: string;
  }>;
  variant: 'orange' | 'black' | 'white';
}

export const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  title,
  subtitle,
  features,
  variant
}) => {
  return (
    <FullWidthSection variant={variant} decorative>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <div className="relative mx-auto mb-6 group cursor-pointer">
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-20 h-20 object-contain filter brightness-0 invert opacity-90 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100 group-hover:rotate-6"
                />
              ) : (
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                  {typeof feature.icon === 'string' ? (
                    <span className="text-2xl">{feature.icon}</span>
                  ) : feature.icon ? (
                    React.createElement(feature.icon, { className: 'w-8 h-8 text-white' })
                  ) : null}
                </div>
              )}
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              {feature.title}
            </h3>
            <p className="opacity-90 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </FullWidthSection>
  );
};

export default FullWidthSection;

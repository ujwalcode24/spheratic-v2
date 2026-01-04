'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { PulsingWaveform, AnimatedWallet, AnimatedAR, AnimatedBrain, QuantumGrid } from '@/components/3d';

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

        {/* Visual/Image */}
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
          {/* Desktop: Show 3D canvas animations */}
          <div className="hidden md:flex w-full h-full items-center justify-center">
            {title === "Empathy Tech" ? (
              <PulsingWaveform isDarkMode={!isLightVariant} />
            ) : title === "FinTech" ? (
              <AnimatedWallet isDarkMode={!isLightVariant} />
            ) : title === "Human Tech" ? (
              <AnimatedAR isDarkMode={!isLightVariant} />
            ) : title === "AI & Innovation" ? (
              <AnimatedBrain isDarkMode={!isLightVariant} />
            ) : title === "Deep Tech" ? (
              <QuantumGrid isDarkMode={!isLightVariant} />
            ) : (
              <div className={cn(
                "w-64 h-64 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105",
                isLightVariant ? "bg-slate-100/80 backdrop-blur-sm border border-slate-200" : "bg-white/10 backdrop-blur-sm border border-white/20"
              )}>
                <div className={cn(
                  "text-8xl font-bold opacity-20",
                  isLightVariant ? "text-slate-400" : "text-white"
                )}>
                  {title.charAt(0)}
                </div>
              </div>
            )}
          </div>

          {/* Mobile: Show simple icon placeholder */}
          <div className="flex md:hidden w-full h-full items-center justify-center">
            <div className={cn(
              "w-32 h-32 rounded-2xl flex items-center justify-center",
              isLightVariant ? "bg-gradient-to-br from-blue-100 to-purple-100 border border-slate-200" : "bg-white/10 backdrop-blur-sm border border-white/20"
            )}>
              <div className={cn(
                "text-5xl font-bold",
                isLightVariant ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" : "text-white"
              )}>
                {title.charAt(0)}
              </div>
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

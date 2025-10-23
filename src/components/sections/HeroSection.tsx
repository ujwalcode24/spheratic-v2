'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import ParticleSystem from '@/components/3d/ParticleSystem';
import { ANIMATIONS } from '@/lib/constants';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations will be added here
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      const floatingElements = heroRef.current.querySelectorAll('.floating-element');
      floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        (element as HTMLElement).style.transform = `translate(${xPos * speed}px, ${yPos * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Particle System Background */}
      <ParticleSystem />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 z-0"></div>

      {/* Additional floating elements for parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-primary-500/10 rounded-full animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-primary-500/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="floating-element absolute bottom-40 left-20 w-16 h-16 bg-primary-500/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-20 right-40 w-24 h-24 bg-primary-500/8 rounded-lg rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          animate={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-primary-500/20 text-primary-600"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Innovation
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Unlock the{' '}
            <span className="gradient-text">Future</span>
            <br />
            of Technology with{' '}
            <span className="text-primary-500">Spheratic</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Experience innovative, human-first technology solutions.
            <br />
            We create applications that matter, anywhere, anytime with real-time impact.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center items-center mb-16"
          >
            <Link href="/company/contact">
              <button
                style={{ backgroundColor: '#FF6B35', color: 'white' }}
                className="px-8 py-4 text-lg rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E74C3C'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6B35'}
              >
                Schedule Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">500+</div>
              <div className="text-accent-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-accent-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">24/7</div>
              <div className="text-accent-gray-600">Support Available</div>
            </div>
          </motion.div> */}
        </motion.div>
      </div>


    </section>
  );
};

export default HeroSection;

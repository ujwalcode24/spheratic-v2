'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      {/* Main Content - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            animate={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            className="text-left"
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
              className="text-lg md:text-xl text-accent-gray-600 mb-12 leading-relaxed"
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
              className="flex items-center"
            >
              <Link href="/company/contact">
                <button
                  style={{ backgroundColor: '#FF6B35', color: 'white', borderRadius: '2px' }}
                  className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1"
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
          </motion.div>

          {/* Right Column - Sketchfab 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-lg overflow-hidden"
            style={{ width: '100%', height: '600px' }}
          >
            <iframe
              title="Worker 12"
              frameBorder={0}
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/9688985db84d447580d40e40e1649407/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1&camera=0&scrollzoom=0"
              className="w-full h-full"
              style={{ border: 'none' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

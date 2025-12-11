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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E8F4FD 50%, #F3E8FF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="floating-element absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="floating-element absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-200/25 to-blue-200/25 rounded-full blur-2xl" />
      </div>

      {/* Left Column - Text Content */}
      <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 lg:pl-16 xl:pl-24">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          animate={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          className="text-left max-w-xl"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800"
          >
            Unlock the{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">Future</span>
            <br />
            of Technology with{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Spheratic</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed"
          >
            Experience innovative, human-first technology solutions.
            <br />
            We create applications that matter, anywhere, anytime with real-time impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Schedule Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            <Link href="/products/ai-platform">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                Explore Products
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - Sketchfab 3D Model (Stuck to right edge) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 xl:w-[55%]"
      >
        <iframe
          title="Worker 12"
          frameBorder={0}
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/9688985db84d447580d40e40e1649407/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1&camera=0&scrollzoom=0"
          className="w-full h-full"
          style={{ border: 'none', minHeight: '100vh' }}
        />
      </motion.div>

      {/* Mobile 3D Model (shown below content on mobile) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="lg:hidden w-full mt-8 px-4"
        style={{ height: '400px' }}
      >
        <iframe
          title="Worker 12 Mobile"
          frameBorder={0}
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/9688985db84d447580d40e40e1649407/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1&camera=0&scrollzoom=0"
          className="w-full h-full rounded-lg"
          style={{ border: 'none' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

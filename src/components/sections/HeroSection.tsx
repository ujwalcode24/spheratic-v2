'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Zap } from 'lucide-react';

import { ANIMATIONS } from '@/lib/constants';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F0F4FF 30%, #E8E0F0 60%, #F5E6F0 100%)' }}
    >
      {/* Aurora/Wave Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main wave effect - pink/purple */}
        <div className="absolute top-1/4 -left-20 w-[120%] h-[400px] bg-gradient-to-r from-pink-300/40 via-purple-300/30 to-transparent rounded-[100%] blur-3xl transform -rotate-6" />

        {/* Secondary wave - cyan/blue */}
        <div className="absolute top-1/3 -right-20 w-[100%] h-[300px] bg-gradient-to-l from-cyan-300/30 via-blue-200/20 to-transparent rounded-[100%] blur-3xl transform rotate-3" />

        {/* Bottom wave - pink gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-pink-200/50 via-purple-100/30 to-transparent" />

        {/* Flowing lines effect */}
        <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c4b5fd" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f9a8d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q250,150 500,200 T1000,200 T1500,180" fill="none" stroke="url(#wave1)" strokeWidth="2" />
          <path d="M0,250 Q300,200 600,250 T1200,230" fill="none" stroke="url(#wave2)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Floating decorative icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute top-24 left-[10%] text-purple-400"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute top-40 left-[8%] text-cyan-400"
      >
        <Zap className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute top-32 right-[12%] text-cyan-400"
      >
        <Sparkles className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute top-1/3 right-[8%] w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
      />

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          animate={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          className="text-center"
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
            className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto"
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
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Schedule Demo
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
    </section>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Zap, Globe, Shield } from 'lucide-react';

import { ANIMATIONS } from '@/lib/constants';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E8F4FD 50%, #F3E8FF 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-200/25 to-blue-200/25 rounded-full blur-2xl" />
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

      {/* Right Column - Visual Design */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:flex absolute right-0 top-0 bottom-0 w-1/2 xl:w-[55%] items-center justify-center"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Main circle with gradient */}
          <div className="relative w-80 h-80 xl:w-96 xl:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-white/80 to-white/40 rounded-full backdrop-blur-sm border border-white/50 shadow-2xl flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Globe className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Shield className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Floating accent circles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-60 blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-50 blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-70"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, FeatureHighlight } from '@/components/ui';
import { AnimatedBackground } from '@/components/3d';
import { ANIMATIONS } from '@/lib/constants';

const AIPlatformPage = () => {
  const features = [
    {
      icon: '🧠',
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities for text analysis, sentiment detection, and language understanding.',
      benefits: ['Real-time text analysis', 'Multi-language support', 'Custom model training']
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Powerful image and video analysis with object detection and recognition.',
      benefits: ['Object detection', 'Facial recognition', 'Image classification']
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Machine learning models for forecasting and predictive insights.',
      benefits: ['Time series forecasting', 'Risk assessment', 'Trend analysis']
    },
    {
      icon: '⚡',
      title: 'AutoML',
      description: 'Automated machine learning for rapid model development and deployment.',
      benefits: ['No-code ML', 'Automated feature engineering', 'Model optimization']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate customer support with intelligent chatbots and ticket routing.',
      industry: 'Retail & E-commerce'
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time fraud detection and prevention for financial transactions.',
      industry: 'Financial Services'
    },
    {
      title: 'Medical Diagnosis Support',
      description: 'AI-powered diagnostic assistance for healthcare professionals.',
      industry: 'Healthcare'
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Optimize inventory and logistics with predictive analytics.',
      industry: 'Manufacturing'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-white/90 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            animate={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-primary-500/20 text-primary-600">
              <span className="text-2xl mr-2">🤖</span>
              AI Platform
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Intelligent</span> AI Platform
              <br />
              <span className="gradient-text">For Enterprise Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI and machine learning platform that empowers businesses to build,
              deploy, and scale intelligent applications with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <button
                  style={{ backgroundColor: '#FF6B35', color: 'white', borderRadius: '2px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E74C3C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6B35'}
                  className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 inline-flex items-center shadow-lg"
                >
                  Start Free Trial
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <button
                style={{ backgroundColor: 'transparent', color: '#FF6B35', border: '2px solid #FF6B35', borderRadius: '2px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
              >
                View Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureHighlight
        title="Powerful AI Capabilities"
        subtitle="Our AI platform provides comprehensive tools and services to build intelligent applications"
        variant="orange"
        features={features.map(feature => ({
          title: feature.title,
          description: feature.description,
          icon: feature.icon
        }))}
      />

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real-World Applications
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              See how our AI platform is transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg border border-accent-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-sm text-primary-500 font-medium mb-2">
                  {useCase.industry}
                </div>
                <h3 className="text-xl font-semibold text-accent-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-accent-gray-600">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FullWidthSection variant="purple">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of companies already using our AI platform to drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/contact">
              <button
                style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started Today
              </button>
            </Link>
            <Link href="/customers/case-studies">
              <button
                style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '2px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
              >
                View Success Stories
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default AIPlatformPage;

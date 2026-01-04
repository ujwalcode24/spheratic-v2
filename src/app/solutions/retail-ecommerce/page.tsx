'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const RetailEcommerceSolutionPage = () => {
  const solutions = [
    {
      title: 'E-commerce Platform',
      description: 'Modern, scalable e-commerce platform with seamless checkout, product management, and mobile optimization.',
      features: ['Product catalog', 'Shopping cart', 'Checkout flow', 'Mobile-first'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50'
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking across all channels with automated replenishment and demand forecasting.',
      features: ['Multi-channel sync', 'Auto-replenishment', 'Demand forecast', 'Stock alerts'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      title: 'Customer Analytics',
      description: 'Advanced customer behavior analytics with segmentation, personalization, and predictive insights.',
      features: ['Behavior tracking', 'Segmentation', 'Personalization', 'Predictive AI'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50'
    },
    {
      title: 'Mobile Commerce',
      description: 'Native mobile apps and PWAs for seamless shopping experiences on any device.',
      features: ['Native apps', 'PWA support', 'Push notifications', 'Mobile payments'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      title: 'Payment Processing',
      description: 'Secure payment processing with multiple gateways, fraud protection, and global currency support.',
      features: ['Multi-gateway', 'Fraud protection', 'Multi-currency', 'One-click pay'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-50'
    },
    {
      title: 'Order Management',
      description: 'End-to-end order fulfillment with real-time tracking, returns management, and shipping integration.',
      features: ['Order tracking', 'Returns portal', 'Shipping APIs', 'Fulfillment'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50'
    },
    {
      title: 'Marketing Automation',
      description: 'Automated marketing campaigns with email, SMS, and social media integration.',
      features: ['Email campaigns', 'SMS marketing', 'Social integration', 'A/B testing'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-50'
    },
    {
      title: 'POS Integration',
      description: 'Unified commerce with seamless integration between online and in-store point of sale systems.',
      features: ['Unified inventory', 'BOPIS support', 'Staff tools', 'Real-time sync'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-50'
    }
  ];

  const useCases = [
    {
      title: 'Fashion & Apparel',
      description: 'Complete fashion commerce solutions with size guides, virtual try-on, and trend analytics.',
      industry: 'Fashion'
    },
    {
      title: 'Electronics & Gadgets',
      description: 'Tech retail solutions with product comparisons, specs management, and warranty tracking.',
      industry: 'Electronics'
    },
    {
      title: 'Grocery & Food',
      description: 'Fresh commerce solutions with delivery scheduling, subscription boxes, and inventory freshness.',
      industry: 'Grocery'
    },
    {
      title: 'Home & Furniture',
      description: 'Furniture retail with AR visualization, room planning, and white-glove delivery.',
      industry: 'Home'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            animate={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Transform</span> Retail
              <br />
              <span className="gradient-text">With Digital Commerce</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive e-commerce and retail solutions for modern businesses.
              Create seamless shopping experiences that drive growth and customer loyalty.
            </p>

            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Schedule Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Powerful Commerce Capabilities
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive suite of retail and e-commerce solutions designed for modern businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex p-2 rounded-lg ${solution.iconBg} ${solution.iconColor} mb-4`}>
                  {solution.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Real-World Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how our retail solutions are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary-500 bg-primary-50 rounded-full mb-3">
                  {useCase.industry}
                </span>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,000+', label: 'Retail Brands' },
              { number: '$5B+', label: 'GMV Processed' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-accent-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <FullWidthSection variant="orange">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600">
            Let&apos;s discuss how our solutions can help you create exceptional shopping experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Start Your Digital Transformation
              </button>
            </Link>
            <Link href="/customers/case-studies">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                View Success Stories
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default RetailEcommerceSolutionPage;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const FinancialServicesPage = () => {
  const solutions = [
    {
      icon: '🏦',
      title: 'Digital Banking Platform',
      description: 'Complete digital banking solution with mobile apps, web portals, and backend systems.',
      features: ['Mobile banking', 'Online account management', 'Payment processing', 'KYC automation']
    },
    {
      icon: '💳',
      title: 'Payment Processing',
      description: 'Secure and scalable payment processing for all types of transactions.',
      features: ['Real-time processing', 'Multi-currency support', 'Fraud detection', 'PCI compliance']
    },
    {
      icon: '🛡️',
      title: 'Risk Management',
      description: 'Advanced risk assessment and management tools for financial institutions.',
      features: ['Credit scoring', 'Risk analytics', 'Compliance monitoring', 'Regulatory reporting']
    },
    {
      icon: '📊',
      title: 'Trading Platform',
      description: 'High-performance trading platform for stocks, forex, and cryptocurrency.',
      features: ['Real-time data', 'Advanced charting', 'Algorithmic trading', 'Portfolio management']
    }
  ];

  const benefits = [
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance with financial regulations including PCI DSS, SOX, and GDPR.',
      icon: '⚖️'
    },
    {
      title: 'Enhanced Security',
      description: 'Multi-layer security with encryption, fraud detection, and secure authentication.',
      icon: '🔒'
    },
    {
      title: 'Scalable Architecture',
      description: 'Cloud-native architecture that scales with your business growth.',
      icon: '📈'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for critical systems.',
      icon: '🕐'
    }
  ];

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
              <span className="text-2xl mr-2">🏦</span>
              Financial Services Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Transform</span> Financial Services
              <br />
              <span className="gradient-text">With Digital Innovation</span>
            </h1>
            
            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions for banks, fintech companies, and financial institutions. 
              Build secure, scalable, and compliant financial services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <Button size="lg" className="px-8 py-3">
                  Schedule Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Button>
              </Link>
              <Link href="/customers/case-studies">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
              Our Financial Solutions
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              Comprehensive suite of financial technology solutions designed for modern banking and finance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full border-2 hover:border-primary-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-2xl">{solution.icon}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {solution.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-accent-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Financial Solutions?
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              Built specifically for the financial industry with security, compliance, and performance in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-accent-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-accent-gray-600 text-sm">
                  {benefit.description}
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
              { number: '500+', label: 'Financial Institutions' },
              { number: '$50B+', label: 'Transactions Processed' },
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
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Modernize Your Financial Services?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how our solutions can help you stay competitive in the digital finance landscape.
            </p>
            <Link href="/company/contact">
              <Button variant="outline" size="lg" className="px-8 py-3 bg-white text-primary-500 border-white hover:bg-accent-gray-50">
                Start Your Digital Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServicesPage;

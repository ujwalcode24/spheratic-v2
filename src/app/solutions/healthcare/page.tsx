'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const HealthcareSolutionPage = () => {
  const features = [
    {
      title: 'Telemedicine Platform',
      description: 'Video consultations and remote patient care',
      icon: '📹'
    },
    {
      title: 'Patient Management',
      description: 'Comprehensive patient record management',
      icon: '👥'
    },
    {
      title: 'Health Analytics',
      description: 'Advanced health data analytics',
      icon: '📊'
    },
    {
      title: 'Medical AI',
      description: 'AI-powered diagnostic assistance',
      icon: '🤖'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Automated appointment management',
      icon: '📅'
    },
    {
      title: 'Prescription Management',
      description: 'Digital prescription tracking',
      icon: '💊'
    }
  ];

  const benefits = [
    { number: '80%', label: 'Faster Wait Times' },
    { number: '500K+', label: 'Virtual Consultations' },
    { number: '99.9%', label: 'Uptime' },
    { number: '40%', label: 'Cost Savings' }
  ];

  const industries = [
    { name: 'Hospitals', icon: '🏥' },
    { name: 'Clinics', icon: '⚕️' },
    { name: 'Telemedicine', icon: '📱' },
    { name: 'Pharma', icon: '💊' }
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
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-primary-500/20 text-primary-600">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Healthcare Solution
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Healthcare <span className="text-primary-500">Solutions</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Digital health platforms and telemedicine solutions for better patient outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-accent-gray-600">
              Comprehensive healthcare solutions for modern providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent-gray-600">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-lg text-accent-gray-600">
              See the impact on patient care and operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {benefit.number}
                </div>
                <div className="text-accent-gray-600">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-accent-gray-600">
              Solutions tailored for different healthcare sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-accent-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold">{industry.name}</h3>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Healthcare Delivery?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss how we can help your healthcare organization.
          </p>
          <Link href="/company/contact">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Schedule Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default HealthcareSolutionPage;


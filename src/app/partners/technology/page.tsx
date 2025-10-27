'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';
import { Cloud, Brain, Briefcase, CreditCard, Phone, Database, Package, Container } from 'lucide-react';

const TechnologyPartnersPage = () => {
  const partners = [
    {
      name: 'AWS',
      category: 'Cloud Infrastructure',
      description: 'Leveraging AWS for scalable cloud solutions',
      icon: Cloud
    },
    {
      name: 'Google Cloud',
      category: 'AI & Machine Learning',
      description: 'Powered by Google Cloud AI services',
      icon: Brain
    },
    {
      name: 'Microsoft Azure',
      category: 'Enterprise Solutions',
      description: 'Enterprise-grade solutions on Azure',
      icon: Briefcase
    },
    {
      name: 'Stripe',
      category: 'Payment Processing',
      description: 'Secure payment solutions with Stripe',
      icon: CreditCard
    },
    {
      name: 'Twilio',
      category: 'Communications',
      description: 'Communication APIs and services',
      icon: Phone
    },
    {
      name: 'MongoDB',
      category: 'Database',
      description: 'NoSQL database solutions',
      icon: Database
    },
    {
      name: 'Kubernetes',
      category: 'Container Orchestration',
      description: 'Container orchestration and management',
      icon: Package
    },
    {
      name: 'Docker',
      category: 'Containerization',
      description: 'Application containerization',
      icon: Container
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology <span className="text-primary-500">Partners</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              We partner with industry-leading technology companies to deliver best-in-class solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow text-center border border-accent-gray-200">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {React.createElement(partner.icon, { className: 'w-12 h-12 text-primary-500' })}
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-primary-500 font-medium">{partner.category}</p>
                    <p className="text-accent-gray-600 text-sm">{partner.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why These Partners?</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              We carefully select partners that align with our commitment to excellence and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Leaders',
                description: 'Partnering with the most trusted names in technology',
                icon: '🏆'
              },
              {
                title: 'Best-in-Class',
                description: 'Access to cutting-edge tools and services',
                icon: '⭐'
              },
              {
                title: 'Proven Track Record',
                description: 'Reliable partners with proven success',
                icon: '✅'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-accent-gray-600">{item.description}</p>
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
            Interested in Partnering?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s explore partnership opportunities together.
          </p>
          <Link href="/partners/join">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Explore Partnership
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

export default TechnologyPartnersPage;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const CustomersPage = () => {
  const customerLinks = [
    {
      id: 'case-studies',
      name: 'Case Studies',
      description: 'Real-world success stories from our clients.',
      icon: '📊',
      href: '/customers/case-studies'
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      description: 'What our clients say about working with us.',
      icon: '💬',
      href: '/customers/testimonials'
    },
    {
      id: 'success-stories',
      name: 'Success Stories',
      description: 'Inspiring stories of customer achievements.',
      icon: '🏆',
      href: '/customers/success-stories'
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
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Our Customers
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Customer Success</span>
              <br />
              <span className="gradient-text">Is Our Success</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how leading companies are transforming their businesses with Spheratic&apos;s innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Links Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={ANIMATIONS.staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {customerLinks.map((link) => (
              <motion.div
                key={link.id}
                variants={ANIMATIONS.fadeInUp}
              >
                <Link href={link.href}>
                  <Card
                    hover
                    className="h-full border-2 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">{link.icon}</span>
                      </div>
                      <CardTitle className="text-xl font-semibold">
                        {link.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p className="text-accent-gray-600 leading-relaxed">
                        {link.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '99.9%', label: 'Satisfaction Rate' },
              { number: '50+', label: 'Industries Served' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join Our Customers?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s discuss how we can help transform your business.
          </p>
          <Link href="/company/contact">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Get Started
              <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default CustomersPage;


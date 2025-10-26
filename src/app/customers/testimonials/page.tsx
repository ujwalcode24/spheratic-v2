'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: 'Spheratic transformed our entire business operations. Their AI Platform has given us insights we never had before.',
      author: 'John Smith',
      role: 'CEO, TechCorp',
      company: 'TechCorp',
      rating: 5,
      icon: '👨‍💼'
    },
    {
      quote: 'The FinTech Suite has revolutionized our payment processing. We\'ve seen a 300% improvement in transaction speed.',
      author: 'Sarah Johnson',
      role: 'CFO, Global Banking',
      company: 'Global Banking',
      rating: 5,
      icon: '👩‍💼'
    },
    {
      quote: 'Outstanding support and innovative solutions. Spheratic is a true partner in our digital transformation journey.',
      author: 'Michael Chen',
      role: 'CTO, HealthPlus',
      company: 'HealthPlus',
      rating: 5,
      icon: '👨‍💻'
    },
    {
      quote: 'The scalability and reliability of their platform is unmatched. We can now handle 10x more traffic without issues.',
      author: 'Emily Rodriguez',
      role: 'VP Operations, RetailMax',
      company: 'RetailMax',
      rating: 5,
      icon: '👩‍💼'
    },
    {
      quote: 'Spheratic\'s team understood our unique challenges and delivered a solution that exceeded our expectations.',
      author: 'David Kumar',
      role: 'Director, DataInsights',
      company: 'DataInsights',
      rating: 5,
      icon: '👨‍💼'
    },
    {
      quote: 'Best investment we\'ve made in technology. The ROI has been incredible and the team is always responsive.',
      author: 'Lisa Anderson',
      role: 'CEO, SecureInsure',
      company: 'SecureInsure',
      rating: 5,
      icon: '👩‍💼'
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
              What Our <span className="text-primary-500">Customers Say</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear from the leaders who trust Spheratic to power their business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    {/* Rating */}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-accent-gray-700 italic leading-relaxed">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-accent-gray-200">
                      <div className="text-3xl">{testimonial.icon}</div>
                      <div>
                        <p className="font-bold text-accent-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-accent-gray-600">{testimonial.role}</p>
                        <p className="text-xs text-primary-500 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '99.9%', label: 'Satisfaction' },
              { number: '50+', label: 'Industries' },
              { number: '24/7', label: 'Support' }
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
            Join Our Community of Satisfied Customers
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the Spheratic difference. Let&apos;s start your transformation today.
          </p>
          <Link href="/company/contact">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Get Started Today
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

export default TestimonialsPage;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';
import { Rocket, Trophy, Globe, Award, CreditCard, Handshake } from 'lucide-react';

const NewsPage = () => {
  const news = [
    {
      title: 'Spheratic Launches New AI Platform',
      date: 'December 2024',
      category: 'Product Launch',
      excerpt: 'We\'re excited to announce the launch of our latest AI Platform with advanced machine learning capabilities.',
      icon: Rocket
    },
    {
      title: 'Spheratic Reaches 500+ Enterprise Clients',
      date: 'November 2024',
      category: 'Milestone',
      excerpt: 'A major milestone as we celebrate serving over 500 enterprise clients worldwide.',
      icon: Trophy
    },
    {
      title: 'Expanding to European Markets',
      date: 'October 2024',
      category: 'Expansion',
      excerpt: 'We\'re opening new offices in London and Berlin to better serve our European clients.',
      icon: Globe
    },
    {
      title: 'Spheratic Wins Innovation Award',
      date: 'September 2024',
      category: 'Award',
      excerpt: 'Recognized for our innovative approach to technology solutions and customer success.',
      icon: Award
    },
    {
      title: 'New FinTech Suite Released',
      date: 'August 2024',
      category: 'Product Launch',
      excerpt: 'Our comprehensive FinTech Suite is now available with enhanced security and compliance features.',
      icon: CreditCard
    },
    {
      title: 'Spheratic Joins Tech Alliance',
      date: 'July 2024',
      category: 'Partnership',
      excerpt: 'We\'ve joined a global tech alliance to collaborate on emerging technologies and industry standards.',
      icon: Handshake
    }
  ];

  const categories = [
    { name: 'All', count: 6 },
    { name: 'Product Launch', count: 2 },
    { name: 'Milestone', count: 1 },
    { name: 'Award', count: 1 },
    { name: 'Partnership', count: 1 },
    { name: 'Expansion', count: 1 }
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
              News & <span className="text-primary-500">Updates</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and insights from Spheratic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-accent-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 py-2 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                {cat.name} ({cat.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border border-accent-gray-200">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <IconComponent className="w-10 h-10 text-primary-500" />
                        <span className="text-xs font-medium bg-primary-100 text-primary-600 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-accent-gray-500">{item.date}</p>
                      <p className="text-accent-gray-600 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <button className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
                        Read More →
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-accent-gray-600 mb-8">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-accent-gray-300 focus:outline-none focus:border-primary-500"
              />
              <button className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
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
            Have a Story to Share?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our press team to discuss partnership opportunities or media inquiries.
          </p>
          <Link href="/company/contact">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Contact Press Team
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

export default NewsPage;


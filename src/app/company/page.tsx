'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';
import { Star, Users, Briefcase, Newspaper } from 'lucide-react';

const CompanyPage = () => {
  const companyLinks = [
    {
      id: 'about',
      name: 'About Us',
      description: 'Learn about Spheratic\'s mission, vision, and values.',
      icon: Star,
      href: '/company/about'
    },
    {
      id: 'team',
      name: 'Our Team',
      description: 'Meet the talented people behind Spheratic.',
      icon: Users,
      href: '/company/team'
    },
    {
      id: 'careers',
      name: 'Careers',
      description: 'Join our team and help shape the future of technology.',
      icon: Briefcase,
      href: '/company/careers'
    },
    {
      id: 'news',
      name: 'News & Updates',
      description: 'Stay updated with our latest announcements and insights.',
      icon: Newspaper,
      href: '/company/news'
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
              About Spheratic
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Building the Future</span>
              <br />
              <span className="gradient-text">One Innovation at a Time</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Spheratic is a technology company dedicated to creating innovative solutions that transform businesses and empower people through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Links Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={ANIMATIONS.staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {companyLinks.map((link) => (
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
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                        {React.createElement(link.icon, { className: 'w-6 h-6 text-primary-500' })}
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
            Get in Touch
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Have questions? We&apos;d love to hear from you. Contact our team today.
          </p>
          <Link href="/company/contact">
            <button
              style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg inline-flex items-center"
            >
              Contact Us
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

export default CompanyPage;


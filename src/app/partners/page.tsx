'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const PartnersPage = () => {
  const partnerLinks = [
    {
      id: 'technology',
      name: 'Technology Partners',
      description: 'Leading technology companies in our ecosystem.',
      icon: '🤖',
      href: '/partners/technology'
    },
    {
      id: 'integration',
      name: 'Integration Partners',
      description: 'API and platform integration specialists.',
      icon: '🔗',
      href: '/partners/integration'
    },
    {
      id: 'join',
      name: 'Become a Partner',
      description: 'Join our growing partner network.',
      icon: '✨',
      href: '/partners/join'
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
              Partner Ecosystem
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Partner</span> with
              <br />
              <span className="gradient-text">Spheratic</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join our ecosystem of technology partners and grow your business together with Spheratic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Links Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={ANIMATIONS.staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {partnerLinks.map((link) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              Grow your business with our comprehensive partner program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Revenue Sharing', description: 'Competitive commission structure', icon: '💰' },
              { title: 'Technical Support', description: 'Dedicated partner support team', icon: '🤝' },
              { title: 'Marketing Resources', description: 'Co-marketing opportunities', icon: '📢' },
              { title: 'Training Programs', description: 'Comprehensive certification programs', icon: '📚' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-accent-gray-600 text-sm">{benefit.description}</p>
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
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's explore how we can grow together.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default PartnersPage;


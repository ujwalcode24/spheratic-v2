'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const SuccessStoriesPage = () => {
  const stories = [
    {
      title: 'From Legacy to Cloud: A Banking Revolution',
      company: 'Global Banking Corp',
      icon: '🏦',
      story: 'Global Banking Corp migrated from legacy systems to our cloud-based FinTech Suite, resulting in 300% faster transactions and 50% cost reduction.',
      metrics: ['300% faster', '50% savings', '99.99% uptime']
    },
    {
      title: 'Healthcare Goes Digital',
      company: 'MedCare Hospital Network',
      icon: '🏥',
      story: 'MedCare implemented our telemedicine platform, enabling 500,000+ virtual consultations and reducing patient wait times by 80%.',
      metrics: ['500K+ consultations', '80% faster', '40% savings']
    },
    {
      title: 'E-commerce Scaling Success',
      company: 'RetailMax Inc',
      icon: '🛒',
      story: 'RetailMax scaled their platform to handle 10x more traffic during peak seasons with zero downtime using our infrastructure solutions.',
      metrics: ['10x capacity', '99.9% uptime', '25% growth']
    },
    {
      title: 'AI-Powered Insights',
      company: 'DataInsights Ltd',
      icon: '📊',
      story: 'DataInsights deployed our AI Platform to automate data analysis, reducing analysis time from weeks to hours.',
      metrics: ['80% faster', '60% savings', 'Real-time']
    },
    {
      title: 'Insurance Claims Automation',
      company: 'SecureInsure Group',
      icon: '🛡️',
      story: 'SecureInsure automated their claims processing with AI, achieving 70% faster processing and 98% accuracy.',
      metrics: ['70% faster', '35% savings', '98% accurate']
    },
    {
      title: 'Manufacturing Excellence',
      company: 'TechManufacture Co',
      icon: '⚙️',
      story: 'TechManufacture implemented IoT sensors with AI monitoring, achieving 45% efficiency gains and predictive maintenance.',
      metrics: ['45% efficiency', '30% waste reduction', 'Predictive']
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
              Success <span className="text-primary-500">Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Inspiring stories of how our customers achieved remarkable results with Spheratic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{story.icon}</div>
                    </div>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-primary-500 font-medium">{story.company}</p>
                    <p className="text-accent-gray-600 leading-relaxed">
                      {story.story}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {story.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 bg-primary-100 text-primary-600 text-xs rounded-full font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              The collective impact of our solutions across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '$2B+', label: 'Value Created' },
              { number: '500+', label: 'Clients Served' },
              { number: '50+', label: 'Industries' },
              { number: '99.9%', label: 'Uptime' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg text-center shadow-md"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {item.number}
                </div>
                <div className="text-accent-gray-600">
                  {item.label}
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
            Your Success Story Starts Here
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let&apos;s create your next success story together.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default SuccessStoriesPage;


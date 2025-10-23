'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const IntegrationPartnersPage = () => {
  const integrations = [
    {
      name: 'Salesforce',
      category: 'CRM Integration',
      description: 'Seamless integration with Salesforce CRM',
      icon: '☁️'
    },
    {
      name: 'SAP',
      category: 'ERP Integration',
      description: 'Enterprise resource planning integration',
      icon: '💼'
    },
    {
      name: 'Slack',
      category: 'Communication',
      description: 'Slack workspace integration',
      icon: '💬'
    },
    {
      name: 'Zapier',
      category: 'Automation',
      description: 'Workflow automation platform',
      icon: '⚡'
    },
    {
      name: 'HubSpot',
      category: 'Marketing',
      description: 'Marketing automation integration',
      icon: '📊'
    },
    {
      name: 'Jira',
      category: 'Project Management',
      description: 'Project management integration',
      icon: '📋'
    },
    {
      name: 'Tableau',
      category: 'Analytics',
      description: 'Data visualization and analytics',
      icon: '📈'
    },
    {
      name: 'Shopify',
      category: 'E-commerce',
      description: 'E-commerce platform integration',
      icon: '🛒'
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
              Integration <span className="text-primary-500">Partners</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Connect Spheratic with your favorite tools and platforms through our extensive integration ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardHeader>
                    <div className="text-5xl mb-4">{integration.icon}</div>
                    <CardTitle className="text-xl">{integration.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-primary-500 font-medium">{integration.category}</p>
                    <p className="text-accent-gray-600 text-sm">{integration.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API & Documentation</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              Comprehensive API documentation and developer resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'REST API',
                description: 'Full-featured REST API for all integrations',
                icon: '🔌'
              },
              {
                title: 'Webhooks',
                description: 'Real-time event notifications',
                icon: '🔔'
              },
              {
                title: 'SDKs',
                description: 'Official SDKs for popular languages',
                icon: '📚'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
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
            Ready to Integrate?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Check out our API documentation and start building.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default IntegrationPartnersPage;


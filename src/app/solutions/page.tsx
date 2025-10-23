'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'financial-services',
      name: 'Financial Services',
      description: 'Digital banking, payment processing, and fintech solutions for modern financial institutions.',
      icon: '🏦',
      features: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Compliance Tools'],
      industries: ['Banking', 'Insurance', 'Investment', 'Payments']
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Digital health platforms, telemedicine, and healthcare management systems.',
      icon: '⚕️',
      features: ['Telemedicine', 'Patient Management', 'Health Analytics', 'Medical AI'],
      industries: ['Hospitals', 'Clinics', 'Pharma', 'Health Tech']
    },
    {
      id: 'insurance',
      name: 'Insurance',
      description: 'InsurTech solutions for policy management, claims processing, and risk assessment.',
      icon: '🛡️',
      features: ['Policy Management', 'Claims Processing', 'Risk Assessment', 'Customer Portal'],
      industries: ['Life Insurance', 'Health Insurance', 'Auto Insurance', 'Property Insurance']
    },
    {
      id: 'retail-ecommerce',
      name: 'Retail & E-commerce',
      description: 'Modern commerce platforms, inventory management, and customer experience solutions.',
      icon: '🛒',
      features: ['E-commerce Platform', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce'],
      industries: ['Retail', 'E-commerce', 'Fashion', 'Electronics']
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Enterprise resource planning, workflow automation, and business intelligence.',
      icon: '🏢',
      features: ['ERP Systems', 'Workflow Automation', 'Business Intelligence', 'Integration Platform'],
      industries: ['Manufacturing', 'Logistics', 'Professional Services', 'Government']
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
              Industry Solutions
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Industry-Specific</span> Solutions
              <br />
              <span className="gradient-text">Built for Your Business</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Tailored technology solutions designed for specific industries.
              We understand your unique challenges and deliver solutions that drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={ANIMATIONS.staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                variants={ANIMATIONS.fadeInUp}
                className="group"
              >
                <Card
                  hover
                  className="h-full border-2 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors duration-300">
                      <span className="text-2xl">{solution.icon}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary-500 transition-colors duration-300">
                      {solution.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-accent-gray-600 leading-relaxed">
                      {solution.description}
                    </p>

                    <div>
                      <h4 className="font-medium text-accent-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-accent-gray-600 flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-accent-gray-900 mb-2">Industries:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary-50 text-primary-600 text-xs rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Link href={`/solutions/${solution.id}`}>
                        <Button className="w-full">
                          Learn More
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              Our solutions power businesses across multiple industries worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Enterprise Clients' },
              { number: '50+', label: 'Industries Served' },
              { number: '99.9%', label: 'Uptime SLA' },
              { number: '24/7', label: 'Global Support' }
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
                <div className="text-accent-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-accent-gray-600 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our industry-specific solutions can help you achieve your business goals.
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
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'financial-services',
      name: 'Financial Services',
      description: 'Digital banking, payment processing, and fintech solutions for modern financial institutions.',
      category: 'Finance',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-100',
      features: ['Digital Banking', 'Payment Processing', 'Risk Management', 'Compliance Tools']
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      description: 'Digital health platforms, telemedicine, and healthcare management systems.',
      category: 'Health',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconColor: 'text-red-500',
      iconBg: 'bg-red-100',
      features: ['Telemedicine', 'Patient Management', 'Health Analytics', 'Medical AI']
    },
    {
      id: 'insurance',
      name: 'Insurance',
      description: 'InsurTech solutions for policy management, claims processing, and risk assessment.',
      category: 'InsurTech',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-100',
      features: ['Policy Management', 'Claims Processing', 'Risk Assessment', 'Customer Portal']
    },
    {
      id: 'retail-ecommerce',
      name: 'Retail & E-commerce',
      description: 'Modern commerce platforms, inventory management, and customer experience solutions.',
      category: 'Commerce',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-100',
      features: ['E-commerce Platform', 'Inventory Management', 'Customer Analytics', 'Mobile Commerce']
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Enterprise resource planning, workflow automation, and business intelligence.',
      category: 'Business',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: 'text-cyan-500',
      iconBg: 'bg-cyan-100',
      features: ['ERP Systems', 'Workflow Automation', 'Business Intelligence', 'Integration Platform']
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
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Solutions</h2>
            <p className="text-lg text-slate-600">
              Explore our industry-specific solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Left side - Icon & Category */}
                  <div className={`${solution.iconBg} p-8 flex flex-col items-center justify-center md:w-1/3 md:min-h-full`}>
                    <div className={`p-4 rounded-xl bg-white/80 ${solution.iconColor} mb-4 shadow-sm`}>
                      {solution.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                      {solution.category}
                    </span>
                  </div>

                  {/* Right side - Content */}
                  <div className="p-8 md:w-2/3 bg-white flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{solution.name}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{solution.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-700">
                          <svg className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link href={`/solutions/${solution.id}`}>
                      <Button className="w-full">
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Schedule Consultation
                </button>
              </Link>
              <Link href="/customers/case-studies">
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                  View Success Stories
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

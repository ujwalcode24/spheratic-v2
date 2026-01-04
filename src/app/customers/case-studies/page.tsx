'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 'fintech-transformation',
      title: 'Digital Banking Transformation',
      client: 'Global Bank',
      industry: 'Financial Services',
      challenge: 'Legacy banking systems limiting digital innovation and customer experience.',
      solution: 'Complete digital banking platform with mobile apps, real-time processing, and AI-powered insights.',
      results: [
        '300% increase in digital transactions',
        '50% reduction in operational costs',
        '95% customer satisfaction score',
        '24/7 automated customer service'
      ],
      technologies: ['React Native', 'Node.js', 'AI/ML', 'Blockchain'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50',
      timeline: '12 months',
      teamSize: '25 developers'
    },
    {
      id: 'healthcare-platform',
      title: 'Telemedicine Platform',
      client: 'Healthcare Network',
      industry: 'Healthcare',
      challenge: 'Need for remote patient care and digital health management during pandemic.',
      solution: 'Comprehensive telemedicine platform with video consultations, patient records, and AI diagnostics.',
      results: [
        '500,000+ virtual consultations',
        '80% reduction in wait times',
        '99.9% platform uptime',
        '40% cost savings for patients'
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'WebRTC'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50',
      timeline: '8 months',
      teamSize: '18 developers'
    },
    {
      id: 'ecommerce-scale',
      title: 'E-commerce Scaling Solution',
      client: 'Retail Giant',
      industry: 'Retail & E-commerce',
      challenge: 'Platform couldn\'t handle peak traffic during sales events, causing revenue loss.',
      solution: 'Scalable microservices architecture with auto-scaling, CDN optimization, and real-time analytics.',
      results: [
        '10x traffic handling capacity',
        '99.99% uptime during peak sales',
        '200% increase in conversion rate',
        '60% faster page load times'
      ],
      technologies: ['Kubernetes', 'AWS', 'Redis', 'GraphQL'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50',
      timeline: '6 months',
      teamSize: '20 developers'
    },
    {
      id: 'insurance-automation',
      title: 'Insurance Claims Automation',
      client: 'Insurance Leader',
      industry: 'Insurance',
      challenge: 'Manual claims processing causing delays and customer dissatisfaction.',
      solution: 'AI-powered claims processing system with document analysis, fraud detection, and automated workflows.',
      results: [
        '90% reduction in processing time',
        '85% automation rate',
        '30% fraud detection improvement',
        '95% customer satisfaction'
      ],
      technologies: ['Python', 'TensorFlow', 'OCR', 'RPA'],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50',
      timeline: '10 months',
      teamSize: '15 developers'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Projects Delivered',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50'
    },
    {
      number: '50+',
      label: 'Industries Served',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      number: '5+',
      label: 'Years of Excellence',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50'
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
              <span className="text-primary-500">Real</span> Success Stories
              <br />
              <span className="gradient-text">From Our Clients</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we&apos;ve helped businesses across industries achieve digital transformation
              and drive measurable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Case Studies</h2>
            <p className="text-lg text-gray-600">
              Explore how we&apos;ve delivered exceptional results across industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Left - Client Info */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-center">
                    <div className={`inline-flex p-3 rounded-lg ${study.iconBg} ${study.iconColor} mb-4 w-fit`}>
                      {study.icon}
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium text-primary-500 bg-primary-50 rounded-full mb-3 w-fit">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{study.title}</p>
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <span className="ml-1 font-medium text-gray-900">{study.timeline}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Team:</span>
                        <span className="ml-1 font-medium text-gray-900">{study.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle - Challenge & Solution */}
                  <div className="p-8 border-b lg:border-b-0 lg:border-r border-gray-200">
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                        Challenge
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        Solution
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right - Results */}
                  <div className="p-8 bg-gray-50">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Key Results
                    </h4>
                    <div className="space-y-3">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <span className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <svg className="w-3 h-3 text-primary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow flex flex-col items-center"
              >
                <div className={`inline-flex p-3 rounded-lg ${stat.iconBg} ${stat.iconColor} mb-4`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Let&apos;s discuss how we can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Start Your Project
              </button>
            </Link>
            <Link href="/products/ai-platform">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                Explore Solutions
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default CaseStudiesPage;

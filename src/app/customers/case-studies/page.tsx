'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
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
      image: '🏦',
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
      image: '⚕️',
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
      image: '🛒',
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
      image: '🛡️',
      timeline: '10 months',
      teamSize: '15 developers'
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
              <span className="text-2xl mr-2">📈</span>
              Success Stories
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Real</span> Success Stories
              <br />
              <span className="gradient-text">From Our Clients</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped businesses across industries achieve digital transformation
              and drive measurable results through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-4">
                    <span className="text-sm text-primary-500 font-medium">
                      {study.industry}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-accent-gray-900 mb-4">
                    {study.title}
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-accent-gray-900 mb-2">Challenge</h3>
                      <p className="text-accent-gray-600">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-accent-gray-900 mb-2">Solution</h3>
                      <p className="text-accent-gray-600">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-accent-gray-900 mb-3">Key Results</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-accent-gray-600">
                            <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Card */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-100 p-8 text-center">
                    <div className="text-6xl mb-6">{study.image}</div>
                    <h3 className="text-xl font-bold text-accent-gray-900 mb-2">
                      {study.client}
                    </h3>
                    <p className="text-accent-gray-600 mb-6">{study.industry}</p>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary-500">{study.timeline}</div>
                        <div className="text-sm text-accent-gray-600">Timeline</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary-500">{study.teamSize}</div>
                        <div className="text-sm text-accent-gray-600">Team Size</div>
                      </div>
                    </div>
                  </Card>
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
              Our Track Record
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Industries Served' },
              { number: '5+', label: 'Years of Excellence' }
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
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/contact">
                <Button variant="outline" size="lg" className="px-8 py-3 bg-white text-primary-500 border-white hover:bg-accent-gray-50">
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="px-8 py-3 text-white border-white/30 hover:bg-white/10">
                Download Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;

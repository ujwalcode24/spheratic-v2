'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ANIMATIONS } from '@/lib/constants';
import { FileText, Download, Calendar, User } from 'lucide-react';

const ResearchPage = () => {
  const whitepapers = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise',
      description: 'Comprehensive analysis of AI adoption trends, challenges, and opportunities in enterprise environments.',
      category: 'AI & ML',
      date: 'March 2024',
      author: 'Dr. Sarah Chen',
      pages: 24,
      image: 'AI Enterprise',
    },
    {
      id: 2,
      title: 'Digital Transformation in Financial Services',
      description: 'Exploring how fintech innovations are reshaping the banking and financial services industry.',
      category: 'FinTech',
      date: 'February 2024',
      author: 'James Mitchell',
      pages: 18,
      image: 'FinTech Transformation',
    },
    {
      id: 3,
      title: 'Healthcare Technology: Telemedicine & Beyond',
      description: 'Deep dive into digital health solutions, telemedicine platforms, and patient data management.',
      category: 'HealthTech',
      date: 'January 2024',
      author: 'Dr. Emily Rodriguez',
      pages: 22,
      image: 'Healthcare Tech',
    },
    {
      id: 4,
      title: 'Blockchain Security & Enterprise Applications',
      description: 'Technical analysis of blockchain technology, security considerations, and enterprise use cases.',
      category: 'Blockchain',
      date: 'December 2023',
      author: 'Alex Kumar',
      pages: 28,
      image: 'Blockchain Security',
    },
    {
      id: 5,
      title: 'Data Analytics: From Insights to Action',
      description: 'Guide to implementing analytics platforms and deriving actionable business intelligence.',
      category: 'Analytics',
      date: 'November 2023',
      author: 'Lisa Wang',
      pages: 20,
      image: 'Data Analytics',
    },
    {
      id: 6,
      title: 'Cloud-Native Architecture for Scalability',
      description: 'Best practices for building scalable, resilient cloud-native applications and infrastructure.',
      category: 'Cloud',
      date: 'October 2023',
      author: 'Michael Torres',
      pages: 26,
      image: 'Cloud Architecture',
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Global Bank Reduces Fraud by 87%',
      description: 'How a leading international bank implemented our AI platform to detect and prevent fraudulent transactions.',
      industry: 'Financial Services',
      result: '87% fraud reduction',
    },
    {
      id: 2,
      title: 'Healthcare Provider Improves Patient Outcomes',
      description: 'Implementation of telemedicine and health analytics platform across 50+ clinics.',
      industry: 'Healthcare',
      result: '45% faster diagnosis',
    },
    {
      id: 3,
      title: 'E-commerce Platform Increases Revenue by 156%',
      description: 'AI-powered recommendation engine and personalization driving significant revenue growth.',
      industry: 'Retail & E-commerce',
      result: '156% revenue increase',
    },
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
              Research & Insights
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Research</span> & White Papers
              <br />
              <span className="gradient-text">Industry Insights & Analysis</span>
            </h1>

            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive collection of white papers, case studies, and research reports on emerging technologies and industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* White Papers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-gray-900 mb-4">
              White Papers
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              In-depth technical and strategic analysis of emerging technologies and industry trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitepapers.map((paper, idx) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-accent-gray-50 rounded-lg p-6 border border-accent-gray-200 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                    {paper.category}
                  </span>
                  <FileText className="w-5 h-5 text-primary-500" />
                </div>

                <h3 className="text-lg font-bold text-accent-gray-900 mb-3">
                  {paper.title}
                </h3>

                <p className="text-accent-gray-600 text-sm mb-4">
                  {paper.description}
                </p>

                <div className="space-y-2 mb-6 text-sm text-accent-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                    {paper.date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-primary-500" />
                    {paper.author}
                  </div>
                </div>

                <button
                  style={{ backgroundColor: '#FF6B35', color: 'white', borderRadius: '2px' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E74C3C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF6B35'}
                  className="w-full px-4 py-2 font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-accent-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto">
              Real-world success stories from our clients across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 border border-accent-gray-200 hover:border-primary-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-semibold rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-accent-gray-900 mb-3">
                  {study.title}
                </h3>

                <p className="text-accent-gray-600 mb-6">
                  {study.description}
                </p>

                <div className="pt-6 border-t border-accent-gray-200">
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {study.result}
                  </div>
                  <div className="text-sm text-accent-gray-600">
                    Key Result
                  </div>
                </div>

                <Link href="/customers/case-studies">
                  <button
                    style={{ backgroundColor: 'transparent', color: '#FF6B35', border: '2px solid #FF6B35', borderRadius: '2px' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    className="w-full mt-6 px-4 py-2 font-medium transition-all duration-300"
                  >
                    Read Full Case Study
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest white papers, case studies, and industry insights.
            </p>
            <Link href="/company/contact">
              <button
                style={{ backgroundColor: 'white', color: '#FF6B35', borderRadius: '2px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Subscribe Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;


'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const AboutPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities to create breakthrough solutions.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-50'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our business dealings and relationships.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      iconColor: 'text-green-500',
      iconBg: 'bg-green-50'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from products to customer service.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      title: 'Impact',
      description: 'We measure success by the positive impact we create for our clients and communities.',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Spheratic Founded',
      description: 'Started with a vision to transform businesses through innovative technology solutions.'
    },
    {
      year: '2021',
      title: 'AI Platform Launch',
      description: 'Launched our flagship AI-powered platform, enabling intelligent automation for enterprises.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 50+ talented professionals across engineering, design, and business.'
    },
    {
      year: '2023',
      title: '500+ Enterprise Clients',
      description: 'Reached a milestone of serving over 500 enterprise clients across multiple industries.'
    },
    {
      year: '2024',
      title: 'FinTech Suite Launch',
      description: 'Expanded our portfolio with comprehensive financial technology solutions.'
    },
    {
      year: '2025',
      title: 'Global Expansion',
      description: 'Extended our presence to international markets, serving clients across continents.'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            animate={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-primary-500">Spheratic</span>
              <br />
              <span className="gradient-text">Innovation Meets Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We&apos;re on a mission to transform businesses through innovative technology solutions
              that are human-centered, scalable, and impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#journey">
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Our Journey
                </button>
              </a>
              <Link href="/company/careers">
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                  Join Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={ANIMATIONS.fadeInLeft.initial}
              whileInView={ANIMATIONS.fadeInLeft.animate}
              transition={ANIMATIONS.fadeInLeft.transition}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-slate-200"
            >
              <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-500 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses and individuals with cutting-edge technology solutions that are not only innovative but also deeply human-centered. We believe that the best technology is the one that enhances human potential and creates meaningful connections.
              </p>
            </motion.div>

            <motion.div
              initial={ANIMATIONS.fadeInRight.initial}
              whileInView={ANIMATIONS.fadeInRight.animate}
              transition={ANIMATIONS.fadeInRight.transition}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-slate-200"
            >
              <div className="inline-flex p-3 rounded-lg bg-purple-50 text-purple-500 mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                To be the leading technology partner for businesses worldwide, known for delivering innovative solutions that drive transformation, create value, and make a positive impact on society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Core Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These values guide everything we do and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className={`inline-flex p-3 rounded-lg ${value.iconBg} ${value.iconColor} mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey Section */}
      <section id="journey" className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Journey</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Key milestones in our growth and development.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block"></div>

            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div className={`${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-md`}>
                      <span className="text-sm font-medium text-slate-500 tracking-wider">{milestone.year}</span>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div className="absolute w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-ping"></div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600">
            Let&apos;s work together to transform your business with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/contact">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Get in Touch
              </button>
            </Link>
            <Link href="/partners/join">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                Become a Partner
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default AboutPage;


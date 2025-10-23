'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const AboutPage = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities to create breakthrough solutions.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency and honesty in all our business dealings and relationships.',
      icon: '🤝'
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from products to customer service.',
      icon: '⭐'
    },
    {
      title: 'Impact',
      description: 'We measure success by the positive impact we create for our clients and communities.',
      icon: '🚀'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Spheratic Founded' },
    { year: '2020', event: 'Launched AI Platform' },
    { year: '2021', event: 'Expanded to 50+ Employees' },
    { year: '2022', event: 'Reached 500+ Enterprise Clients' },
    { year: '2023', event: 'Launched FinTech Suite' },
    { year: '2024', event: 'Global Expansion' }
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
              About <span className="text-primary-500">Spheratic</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re on a mission to transform businesses through innovative technology solutions that are human-centered, scalable, and impactful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={ANIMATIONS.fadeInLeft.initial}
              whileInView={ANIMATIONS.fadeInLeft.animate}
              transition={ANIMATIONS.fadeInLeft.transition}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-accent-gray-600 leading-relaxed">
                To empower businesses and individuals with cutting-edge technology solutions that are not only innovative but also deeply human-centered. We believe that the best technology is the one that enhances human potential and creates meaningful connections.
              </p>
            </motion.div>

            <motion.div
              initial={ANIMATIONS.fadeInRight.initial}
              whileInView={ANIMATIONS.fadeInRight.animate}
              transition={ANIMATIONS.fadeInRight.transition}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-accent-gray-600 leading-relaxed">
                To be the leading technology partner for businesses worldwide, known for delivering innovative solutions that drive transformation, create value, and make a positive impact on society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and define our culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-accent-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-lg border border-primary-200 text-center"
              >
                <div className="text-3xl font-bold text-primary-500 mb-2">{milestone.year}</div>
                <p className="text-lg font-medium text-accent-gray-900">{milestone.event}</p>
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
            Let&apos;s work together to transform your business with innovative technology solutions.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default AboutPage;


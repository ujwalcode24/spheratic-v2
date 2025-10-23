'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const CareersPage = () => {
  const openPositions = [
    {
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      icon: '💻'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      icon: '🎯'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      icon: '🎨'
    },
    {
      title: 'Sales Executive',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      icon: '📈'
    },
    {
      title: 'Customer Success Manager',
      department: 'Support',
      location: 'Remote',
      type: 'Full-time',
      icon: '🤝'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      icon: '⚙️'
    }
  ];

  const benefits = [
    { title: 'Competitive Salary', description: 'Industry-leading compensation packages', icon: '💰' },
    { title: 'Health Insurance', description: 'Comprehensive health and wellness coverage', icon: '🏥' },
    { title: 'Remote Work', description: 'Flexible work arrangements and remote options', icon: '🏠' },
    { title: 'Professional Growth', description: 'Continuous learning and development opportunities', icon: '📚' },
    { title: 'Equity Options', description: 'Share in our company\'s success', icon: '📊' },
    { title: 'Work-Life Balance', description: 'Generous PTO and flexible schedules', icon: '⚖️' }
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
              Join <span className="text-primary-500">Spheratic</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Help us build the future of technology. We're looking for talented individuals who are passionate about innovation and making an impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-accent-gray-600">
              We're hiring talented people across all departments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{position.icon}</div>
                    <CardTitle className="text-xl">{position.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-accent-gray-600">Department</p>
                      <p className="font-medium">{position.department}</p>
                    </div>
                    <div>
                      <p className="text-sm text-accent-gray-600">Location</p>
                      <p className="font-medium">{position.location}</p>
                    </div>
                    <div>
                      <p className="text-sm text-accent-gray-600">Type</p>
                      <p className="font-medium">{position.type}</p>
                    </div>
                    <button className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
                      Apply Now
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              We offer competitive benefits and a great work environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-accent-gray-600">{benefit.description}</p>
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
            Don't See Your Role?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default CareersPage;


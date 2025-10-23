'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech innovation',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Expert in AI and machine learning technologies',
      image: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Product',
      bio: 'Product strategist focused on user experience',
      image: '👩‍🔬'
    },
    {
      name: 'David Kumar',
      role: 'VP Engineering',
      bio: 'Leads our engineering team with excellence',
      image: '👨‍🔧'
    },
    {
      name: 'Lisa Anderson',
      role: 'Head of Sales',
      bio: 'Drives business growth and client relationships',
      image: '👩‍💼'
    },
    {
      name: 'James Wilson',
      role: 'Head of Design',
      bio: 'Creates beautiful and intuitive user interfaces',
      image: '👨‍🎨'
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      description: 'Building robust and scalable technology solutions',
      icon: '⚙️',
      count: '45 engineers'
    },
    {
      name: 'Product',
      description: 'Designing products that solve real problems',
      icon: '🎯',
      count: '12 product specialists'
    },
    {
      name: 'Sales & Marketing',
      description: 'Connecting with clients and growing our business',
      icon: '📈',
      count: '20 professionals'
    },
    {
      name: 'Support',
      description: 'Ensuring customer success and satisfaction',
      icon: '🤝',
      count: '15 support specialists'
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
              Meet Our <span className="text-primary-500">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-accent-gray-600 max-w-4xl mx-auto leading-relaxed">
              Talented individuals united by a passion for innovation and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-accent-gray-600">
              Experienced leaders driving our vision forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                  <p className="text-accent-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-accent-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h2>
            <p className="text-lg text-accent-gray-600 max-w-2xl mx-auto">
              Different teams, unified by a common mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                <p className="text-accent-gray-600 mb-4">{dept.description}</p>
                <p className="text-primary-500 font-medium">{dept.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto leading-relaxed">
              We foster a collaborative environment where innovation thrives, diverse perspectives are valued, and every team member can grow and succeed. We believe in work-life balance, continuous learning, and making a positive impact.
            </p>
          </motion.div>
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
            Join Our Team
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals to join us on our mission.
          </p>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default TeamPage;


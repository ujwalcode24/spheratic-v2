'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ui';
import { COMPANY_INFO, ANIMATIONS } from '@/lib/constants';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      value: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: '📞',
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: COMPANY_INFO.phone,
      action: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: '📍',
      title: 'Visit Us',
      description: 'Come see us at our office',
      value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}`,
      action: '#'
    }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'We respond within 24 hours'
    },
    {
      icon: '🎯',
      title: 'Tailored Solutions',
      description: 'Custom solutions for your needs'
    },
    {
      icon: '🤝',
      title: 'Free Consultation',
      description: 'No-obligation initial consultation'
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
              Get In Touch
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="text-primary-500">Spheratic</span>
              <br />
              <span className="gradient-text">Let's Build Something Amazing</span>
            </h1>
            
            <p className="text-lg md:text-xl text-accent-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with our innovative solutions? Get in touch with our team.
              We're here to help you find the right solution and answer your questions.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-primary-500/20"
                >
                  <div className="text-2xl mb-3">{benefit.icon}</div>
                  <div className="text-lg font-semibold text-accent-gray-900 mb-2">{benefit.title}</div>
                  <div className="text-accent-gray-600 text-sm">{benefit.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={ANIMATIONS.fadeInLeft.initial}
              whileInView={ANIMATIONS.fadeInLeft.animate}
              transition={ANIMATIONS.fadeInLeft.transition}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={ANIMATIONS.fadeInRight.initial}
              whileInView={ANIMATIONS.fadeInRight.animate}
              transition={ANIMATIONS.fadeInRight.transition}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-accent-gray-600 mb-8 leading-relaxed">
                  Whether you're interested in our products, need technical support, 
                  or want to explore partnership opportunities, we're here to help.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-accent-gray-50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                      <span className="text-xl">{method.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-accent-gray-900 mb-1">{method.title}</h3>
                      <p className="text-accent-gray-600 text-sm mb-1">{method.description}</p>
                      <p className="text-primary-500 font-medium">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-accent-gray-50 rounded-lg p-6"
              >
                <h3 className="font-semibold text-accent-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-accent-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-accent-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href={COMPANY_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={COMPANY_INFO.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a
                    href={COMPANY_INFO.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

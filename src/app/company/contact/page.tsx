'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection } from '@/components/ui';
import { COMPANY_INFO, ANIMATIONS, CONTACT_TYPES } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    type: 'general',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Subject: ${formData.subject}
Company: ${formData.company || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Inquiry Type: ${formData.type}

Message:
${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitted(true);
    } catch {
      setErrors({ ...errors, form: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      value: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`,
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50'
    },

    {
      title: 'Visit Us',
      description: 'Come see us at our office',
      value: 'Kolkata, West Bengal, India',
      action: '#',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-50'
    },
    {
      title: 'Office Hours',
      description: 'Monday - Friday',
      value: '9:00 AM - 6:00 PM IST',
      action: '#',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50'
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
              <span className="text-primary-500">Get in</span> Touch
              <br />
              <span className="gradient-text">Let&apos;s Build Together</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Ready to transform your business with innovative technology solutions?
              Our team is here to help you find the right solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact-form">
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Send Message
                </button>
              </a>
              <Link href="/customers/case-studies">
                <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
              Ways to Reach Us
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the most convenient way to connect with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className={`inline-flex p-3 rounded-lg ${method.iconBg} ${method.iconColor} mb-4 group-hover:scale-110 transition-transform`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{method.title}</h3>
                <p className="text-sm text-slate-600 mb-2">{method.description}</p>
                <p className="text-sm font-medium text-primary-500">{method.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Send Us a Message</h2>
            <p className="text-lg text-slate-600">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-flex p-4 rounded-full bg-green-50 text-green-500 mb-6">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 text-sm font-medium rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all`}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all bg-white"
                    >
                      {CONTACT_TYPES.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all`}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>

                {errors.form && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-600">{errors.form}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
            Prefer a Scheduled Call?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-600">
            Book a free consultation with our team to discuss your project requirements in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/partners/join">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                Become a Partner
              </button>
            </Link>
            <Link href="/company/about">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1 rounded-lg bg-white/70 backdrop-blur-sm text-slate-700 border border-slate-200 hover:bg-white hover:shadow-md">
                Learn About Us
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default ContactPage;

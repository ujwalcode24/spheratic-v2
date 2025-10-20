'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Heart,
  Globe,
  Shield,
  Zap,
  Award
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "AI Platform", href: "/products/ai-platform" },
        { name: "FinTech Suite", href: "/products/fintech" },
        { name: "HealthTech", href: "/products/healthtech" },
        { name: "Analytics Dashboard", href: "/products/analytics" },
        { name: "Custom Development", href: "/solutions/custom" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company/about" },
        { name: "Our Team", href: "/company/team" },
        { name: "Careers", href: "/company/careers" },
        { name: "Research", href: "/research" },
        { name: "News & Updates", href: "/company/news" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/resources/docs" },
        { name: "API Reference", href: "/resources/api" },
        { name: "Case Studies", href: "/customers/case-studies" },
        { name: "White Papers", href: "/resources/whitepapers" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/legal/privacy" },
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Cookie Policy", href: "/legal/cookies" },
        { name: "Security", href: "/legal/security" },
        { name: "Compliance", href: "/legal/compliance" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/spheratic" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/spheratic" },
    { name: "GitHub", icon: Github, href: "https://github.com/spheratic" }
  ];

  const features = [
    { icon: Globe, text: "Global Reach" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Zap, text: "Lightning Fast" },
    { icon: Award, text: "Award Winning" }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Company Info Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="inline-block mb-6">
                  <div className="text-3xl font-bold text-white">
                    Spheratic
                  </div>
                </Link>

                <p className="text-gray-300 mb-8 leading-relaxed">
                  Empowering the future through innovative technology solutions.
                  We create human-centered technology that transforms industries
                  and enhances lives.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-2 text-sm text-gray-400"
                    >
                      <feature.icon className="w-4 h-4 text-primary-500" />
                      <span>{feature.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm group flex items-center"
                          >
                            <span>{link.name}</span>
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a href="mailto:hello@spheratic.com" className="text-white text-sm hover:text-primary-500 transition-colors">
                        hello@spheratic.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a href="tel:+1234567890" className="text-white text-sm hover:text-primary-500 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 text-sm">Address</p>
                      <p className="text-white text-sm">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94000
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              <div>
                <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">Get the latest news and updates from Spheratic</p>
              </div>

              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
            >
              <p className="text-gray-400 text-sm">
                © {currentYear} Spheratic. All rights reserved.
              </p>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for a better future</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FullWidthSection, FeatureHighlight } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const ProductsPage = () => {

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary-500">Innovative</span> Products
              <br />
              <span className="gradient-text">Built for the Future</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive suite of technology products designed to transform
              your business and drive innovation across multiple domains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products as Full-Width Sections */}
      <FeatureHighlight
        title="AI Platform"
        subtitle="Comprehensive AI and machine learning platform for enterprise applications"
        variant="orange"
        features={[
          {
            title: "Natural Language Processing",
            description: "Advanced NLP capabilities for text analysis and understanding",
            image: "/images/products/nlp.svg"
          },
          {
            title: "Computer Vision",
            description: "Powerful image and video analysis with object detection",
            image: "/images/products/computer-vision.svg"
          },
          {
            title: "Predictive Analytics",
            description: "Machine learning models for forecasting and insights",
            image: "/images/products/analytics.svg"
          }
        ]}
      />

      <FeatureHighlight
        title="FinTech Suite"
        subtitle="Complete financial technology solutions for modern banking and payments"
        variant="black"
        features={[
          {
            title: "Digital Banking",
            description: "Modern banking platforms with mobile-first design",
            image: "/images/products/banking.svg"
          },
          {
            title: "Payment Processing",
            description: "Secure and scalable payment processing solutions",
            image: "/images/products/payment.svg"
          },
          {
            title: "Fraud Detection",
            description: "AI-powered fraud detection and prevention systems",
            image: "/images/products/security.svg"
          }
        ]}
      />

      <FeatureHighlight
        title="HealthTech Solutions"
        subtitle="Advanced healthcare technology for better patient outcomes"
        variant="white"
        features={[
          {
            title: "Telemedicine",
            description: "Remote healthcare delivery and consultation platforms",
            image: "/images/products/telemedicine.svg"
          },
          {
            title: "Health Analytics",
            description: "Data-driven insights for healthcare optimization",
            image: "/images/products/health-analytics.svg"
          },
          {
            title: "Patient Management",
            description: "Comprehensive patient care and record management",
            image: "/images/products/patient-management.svg"
          }
        ]}
      />

      <FeatureHighlight
        title="Analytics Dashboard"
        subtitle="Real-time analytics and business intelligence platform"
        variant="black"
        features={[
          {
            title: "Real-time Monitoring",
            description: "Live data monitoring and alerting systems",
            image: "/images/products/monitoring.svg"
          },
          {
            title: "Custom Reports",
            description: "Flexible reporting with customizable dashboards",
            image: "/images/products/reports.svg"
          },
          {
            title: "Data Visualization",
            description: "Interactive charts and visual data representation",
            image: "/images/products/visualization.svg"
          }
        ]}
      />

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
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team to learn more about our products and how they can
            transform your business operations with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/company/contact">
              <button
                style={{ backgroundColor: 'transparent', color: 'white', border: '2px solid white', borderRadius: '2px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105"
              >
                Schedule Demo
                <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
            </Link>
            <Link href="/customers/case-studies">
              <button className="px-8 py-3 text-lg font-medium transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 rounded-lg bg-white text-blue-600 hover:bg-slate-50">
                View Case Studies
              </button>
            </Link>
          </div>
        </motion.div>
      </FullWidthSection>
    </div>
  );
};

export default ProductsPage;

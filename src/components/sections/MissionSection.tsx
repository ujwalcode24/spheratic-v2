'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ className }) => {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            To revolutionize the way businesses operate through innovative technology solutions
            that prioritize human connection, empathy, and meaningful impact. We believe technology
            should enhance human potential, not replace it.
          </p>
        </motion.div>

        {/* Mission Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-lg text-black mb-6 leading-relaxed">
              At Spheratic, we're not just creating software – we're crafting experiences that
              matter. Our mission drives us to develop technology that understands, adapts, and
              evolves with human needs.
            </p>
            <p className="text-lg text-black mb-8 leading-relaxed">
              Every line of code we write, every solution we design, and every partnership we
              forge is guided by our commitment to making technology more human, more accessible,
              and more impactful.
            </p>

            {/* Mission Pillars */}
            <div className="space-y-4">
              {[
                "Human-centered design in every solution",
                "Sustainable and scalable technology",
                "Ethical AI and responsible innovation",
                "Empowering businesses to thrive"
              ].map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-lg text-black"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                  {pillar}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Vision & Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Vision */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-black mb-4">Our Vision</h4>
              <p className="text-lg text-black leading-relaxed">
                To be the global leader in empathy-driven technology, creating a world where
                innovation serves humanity's greatest challenges and opportunities.
              </p>
            </div>

            {/* Values */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-black mb-4">Core Values</h4>
              <div className="space-y-3">
                {[
                  { title: "Empathy First", desc: "Understanding human needs drives our innovation" },
                  { title: "Excellence", desc: "Delivering quality that exceeds expectations" },
                  { title: "Collaboration", desc: "Building stronger solutions together" },
                  { title: "Integrity", desc: "Transparent and ethical in all we do" }
                ].map((value, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <h5 className="font-semibold text-black">{value.title}</h5>
                    <p className="text-black">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-black mb-6">
            Ready to be part of our mission?
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Join Our Journey
            <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ className }) => {
  return (
    <section
      className={cn("py-20", className)}
      style={{ background: 'linear-gradient(180deg, #F0F9FF 0%, #ffffff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
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
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Building Tomorrow&apos;s Solutions Today
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Spheratic, we&apos;re not just creating software &ndash; we&apos;re crafting experiences that
              matter. Our mission drives us to develop technology that understands, adapts, and
              evolves with human needs.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
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
                  className="flex items-center text-lg text-slate-700"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4"></div>
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
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800">Our Vision</h4>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be the global leader in empathy-driven technology, creating a world where
                innovation serves humanity&apos;s greatest challenges and opportunities.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-800">Core Values</h4>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Empathy First", desc: "Understanding human needs drives our innovation", color: "blue" },
                  { title: "Excellence", desc: "Delivering quality that exceeds expectations", color: "purple" },
                  { title: "Collaboration", desc: "Building stronger solutions together", color: "cyan" },
                  { title: "Integrity", desc: "Transparent and ethical in all we do", color: "indigo" }
                ].map((value, index) => (
                  <div key={index} className={`border-l-4 pl-4 ${
                    value.color === 'blue' ? 'border-blue-500' :
                    value.color === 'purple' ? 'border-purple-500' :
                    value.color === 'cyan' ? 'border-cyan-500' :
                    'border-indigo-500'
                  }`}>
                    <h5 className="font-semibold text-slate-800">{value.title}</h5>
                    <p className="text-slate-600">{value.desc}</p>
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
          <p className="text-lg text-slate-600 mb-6">
            Ready to be part of our mission?
          </p>
          <button className="px-8 py-3 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
            Join Our Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

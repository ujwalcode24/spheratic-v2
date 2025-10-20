'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DomainSection, FullWidthSection, FeatureHighlight } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const AboutSection = () => {
  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology and creative solutions that transform industries.",
      features: [
        "Cutting-edge research and development",
        "Breakthrough technology solutions",
        "Creative problem-solving approaches",
        "Future-focused innovation mindset"
      ]
    },
    {
      title: "Human-Centered Design",
      description: "Every solution we create puts human needs and experiences at the center of our design process, ensuring technology serves humanity.",
      features: [
        "User experience excellence",
        "Accessibility and inclusion",
        "Empathy-driven development",
        "Human-first technology"
      ]
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, delivering exceptional results.",
      features: [
        "Rigorous quality assurance",
        "Best practice implementation",
        "Continuous improvement culture",
        "Excellence in execution"
      ]
    },
    {
      title: "Scalable Solutions",
      description: "Our technologies are built to grow with your business, from startup to enterprise scale, ensuring long-term success.",
      features: [
        "Enterprise-grade architecture",
        "Flexible scaling capabilities",
        "Performance optimization",
        "Growth-ready infrastructure"
      ]
    },
    {
      title: "Expert Team",
      description: "Our diverse team of experts brings decades of combined experience in technology and innovation to every project.",
      features: [
        "World-class expertise",
        "Collaborative team culture",
        "Continuous learning mindset",
        "Diverse perspectives and skills"
      ]
    },
    {
      title: "Future Ready",
      description: "We anticipate tomorrow's challenges and build solutions that remain relevant and powerful in an ever-evolving digital landscape.",
      features: [
        "Forward-thinking strategies",
        "Emerging technology adoption",
        "Adaptive solution design",
        "Long-term vision planning"
      ]
    }
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* About Header Section */}
      <FullWidthSection variant="white">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="text-primary-500">Spheratic</span>
          </h2>
          <p className="text-lg text-accent-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're <strong>not another tech company</strong> - we're your partners in digital transformation,
            committed to creating solutions that truly make a difference.
          </p>
        </motion.div>
      </FullWidthSection>

      {/* Core Values Sections */}
      {coreValues.map((value, index) => {
        const variants: Array<'orange' | 'black' | 'white'> = ['orange', 'black', 'white', 'orange', 'black', 'white'];
        const variant = variants[index % variants.length];
        return (
          <DomainSection
            key={value.title}
            title={value.title}
            description={value.description}
            features={value.features}
            variant={variant}

            reverse={index % 2 === 1}
          />
        );
      })}

      {/* Stats Section */}
      <FullWidthSection variant="purple">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={ANIMATIONS.fadeInUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Trusted by Industry Leaders
          </h3>
          <p className="text-lg mb-12 opacity-90">
            Our track record speaks for itself
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </FullWidthSection>

      {/* Mission Statement */}
      <FullWidthSection variant="orange">
        <motion.div
          initial={ANIMATIONS.fadeInUp.initial}
          whileInView={ANIMATIONS.fadeInUp.animate}
          transition={{ ...ANIMATIONS.fadeInUp.transition, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Our Mission
          </h3>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
            To empower businesses and individuals with cutting-edge technology solutions that are not only
            innovative but also deeply human-centered. We believe that the best technology is the one that
            enhances human potential and creates meaningful connections.
          </p>
        </motion.div>
      </FullWidthSection>
    </>
  );
};

export default AboutSection;
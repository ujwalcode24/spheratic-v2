'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const AboutSection = () => {
  // Different images for each core value section
  const getImageForIndex = (index: number): string => {
    const images = [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Innovation First
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Human-Centered Design
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Quality Excellence
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Scalable Solutions
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop", // Expert Team
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"  // Future Ready
    ];
    return images[index] || images[0];
  };

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

  const getOverlayColor = (index: number): string => {
    return index % 2 === 0 ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 107, 53, 0.6)';
  };

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
            We&apos;re <strong>not another tech company</strong> - we&apos;re your partners in digital transformation,
            committed to creating solutions that truly make a difference.
          </p>
        </motion.div>
      </FullWidthSection>

      {/* Core Values Sections - 6 Full Width Sections Side by Side */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {coreValues.map((value, index) => {
            const coverImage = getImageForIndex(index);

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-80 overflow-hidden cursor-pointer"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${coverImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Alternating Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    backgroundColor: getOverlayColor(index)
                  }}
                />

                {/* Content - Title and description at bottom */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 + 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-xs leading-relaxed opacity-90 line-clamp-2">
                      {value.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Stats Section */}
      {/* <FullWidthSection variant="purple">
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
      </FullWidthSection> */}
    </>
  );
};

export default AboutSection;
'use client';

import React, { type JSX } from 'react';
import { motion } from 'framer-motion';
import { FullWidthSection } from '@/components/ui';
import { ANIMATIONS } from '@/lib/constants';

const AboutSection = () => {
  const coreValues = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology and creative solutions that transform industries.",
      icon: "lightbulb",
      color: "#FF6B35"
    },
    {
      title: "Human-Centered Design",
      description: "Every solution we create puts human needs and experiences at the center of our design process, ensuring technology serves humanity.",
      icon: "users",
      color: "#8B5CF6"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, delivering exceptional results.",
      icon: "star",
      color: "#3B82F6"
    },
    {
      title: "Scalable Solutions",
      description: "Our technologies are built to grow with your business, from startup to enterprise scale, ensuring long-term success.",
      icon: "trending-up",
      color: "#10B981"
    },
    {
      title: "Expert Team",
      description: "Our diverse team of experts brings decades of combined experience in technology and innovation to every project.",
      icon: "briefcase",
      color: "#F59E0B"
    },
    {
      title: "Future Ready",
      description: "We anticipate tomorrow's challenges and build solutions that remain relevant and powerful in an ever-evolving digital landscape.",
      icon: "zap",
      color: "#EF4444"
    }
  ];

  const getIconSVG = (iconName: string, color: string) => {
    const iconProps = {
      width: 32,
      height: 32,
      viewBox: "0 0 24 24",
      fill: color,
      stroke: "none"
    };

    const icons: { [key: string]: JSX.Element } = {
      lightbulb: (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
      ),
      users: (
        <svg {...iconProps}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      star: (
        <svg {...iconProps}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ),
      "trending-up": (
        <svg {...iconProps}>
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 10 11.41l4 4 6.3-6.29L22 12v-6z" />
        </svg>
      ),
      briefcase: (
        <svg {...iconProps}>
          <path d="M20 6h-2.18c.11-.89.36-1.75.72-2.54.37-.79.92-1.54 1.6-2.15.01-.01.02-.03.03-.04.91-.95 1.65-2.18 1.84-3.55.05-.3-.26-.56-.56-.56-.16 0-.31.08-.38.21-.8 1.33-1.72 2.53-2.77 3.52-.6.56-1.25 1.07-1.95 1.52-.7.45-1.46.84-2.25 1.12-.79.28-1.61.42-2.43.42-.82 0-1.64-.14-2.43-.42-.79-.28-1.55-.67-2.25-1.12-.7-.45-1.35-.96-1.95-1.52-1.05-.99-1.97-2.19-2.77-3.52-.07-.13-.22-.21-.38-.21-.3 0-.61.26-.56.56.19 1.37.93 2.6 1.84 3.55.01.01.02.03.03.04.68.61 1.23 1.36 1.6 2.15.36.79.61 1.65.72 2.54H4c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm0 14H4V10h16v10z" />
        </svg>
      ),
      zap: (
        <svg {...iconProps}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    };

    return icons[iconName] || icons.lightbulb;
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

      {/* Core Values Cards - Light Gray Background with White Cards */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f3f4f6' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  {getIconSVG(value.icon, value.color)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
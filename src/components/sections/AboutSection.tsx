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
      icon: "bulb",
      color: "#F59E0B"
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
      icon: "badge",
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
      icon: "team",
      color: "#FF6B35"
    },
    {
      title: "Future Ready",
      description: "We anticipate tomorrow's challenges and build solutions that remain relevant and powerful in an ever-evolving digital landscape.",
      icon: "zap",
      color: "#EF4444"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you succeed, providing responsive assistance whenever you need it.",
      icon: "support",
      color: "#06B6D4"
    },
    {
      title: "Proven Track Record",
      description: "We have successfully delivered hundreds of projects across diverse industries, earning the trust of leading organizations worldwide.",
      icon: "trophy",
      color: "#8B5CF6"
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
      bulb: (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h4v2h-4zm0-8h4v6h-4zm0-4h4v2h-4z" />
        </svg>
      ),
      users: (
        <svg {...iconProps}>
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      badge: (
        <svg {...iconProps}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
      "trending-up": (
        <svg {...iconProps}>
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 10 11.41l4 4 6.3-6.29L22 12v-6z" />
        </svg>
      ),
      team: (
        <svg {...iconProps}>
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      ),
      zap: (
        <svg {...iconProps}>
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      support: (
        <svg {...iconProps}>
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12h-8v-2h8v2zm0-4h-8V8h8v2z" />
        </svg>
      ),
      trophy: (
        <svg {...iconProps}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
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
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
      color: "#3B82F6",
      bgColor: "#E8F4FD"
    },
    {
      title: "Human-Centered Design",
      description: "Every solution we create puts human needs and experiences at the center of our design process, ensuring technology serves humanity.",
      icon: "users",
      color: "#8B5CF6",
      bgColor: "#F3E8FF"
    },
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service, delivering exceptional results.",
      icon: "badge",
      color: "#0EA5E9",
      bgColor: "#F0F9FF"
    },
    {
      title: "Scalable Solutions",
      description: "Our technologies are built to grow with your business, from startup to enterprise scale, ensuring long-term success.",
      icon: "trending-up",
      color: "#10B981",
      bgColor: "#E8FDF5"
    },
    {
      title: "Expert Team",
      description: "Our diverse team of experts brings decades of combined experience in technology and innovation to every project.",
      icon: "team",
      color: "#6366F1",
      bgColor: "#F0E8FF"
    },
    {
      title: "Future Ready",
      description: "We anticipate tomorrow's challenges and build solutions that remain relevant and powerful in an ever-evolving digital landscape.",
      icon: "zap",
      color: "#EC4899",
      bgColor: "#FFF0F3"
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you succeed, providing responsive assistance whenever you need it.",
      icon: "support",
      color: "#06B6D4",
      bgColor: "#E8F4FD"
    },
    {
      title: "Proven Track Record",
      description: "We have successfully delivered hundreds of projects across diverse industries, earning the trust of leading organizations worldwide.",
      icon: "trophy",
      color: "#A78BFA",
      bgColor: "#F3E8FF"
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
        <svg viewBox="0 0 8 8" width="32" height="32" fill={color} style={{ opacity: 1 }}>
          <path d="M4.41 0a.5.5 0 0 0-.13.06l-3 1.5a.5.5 0 1 0 .44.88l3-1.5A.5.5 0 0 0 4.41 0m1 1.5a.5.5 0 0 0-.13.06l-4 2a.5.5 0 1 0 .44.88l4-2a.5.5 0 0 0-.31-.94m0 2a.5.5 0 0 0-.13.06l-3 1.5A.5.5 0 0 0 2.5 6h2a.506.506 0 0 0 .16-1l1.06-.56a.5.5 0 0 0-.31-.94M2.85 7a.506.506 0 0 0 .16 1h1a.5.5 0 1 0 0-1h-1a.5.5 0 0 0-.09 0h-.06z" />
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
        <svg viewBox="0 0 8 8" width="32" height="32" fill={color} style={{ opacity: 1 }}>
          <path d="m4 0l-.19.09l-3.5 1.47l-.31.13V2c0 1.66.67 3.12 1.47 4.19c.4.53.83.97 1.25 1.28S3.55 8 4 8c.46 0 .86-.22 1.28-.53s.85-.75 1.25-1.28C7.33 5.12 8 3.66 8 2v-.31l-.31-.13L4.19.09zm0 1.09V7c-.04 0-.33-.07-.66-.31s-.71-.63-1.06-1.09a6.26 6.26 0 0 1-1.22-3.28L4 1.1z" />
        </svg>
      )
    };

    return icons[iconName] || icons.lightbulb;
  };

  return (
    <>
      {/* About Header Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={ANIMATIONS.fadeInUp.initial}
            whileInView={ANIMATIONS.fadeInUp.animate}
            transition={ANIMATIONS.fadeInUp.transition}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Spheratic</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re <strong className="text-slate-800">not another tech company</strong> - we&apos;re your partners in digital transformation,
              committed to creating solutions that truly make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Cards - Subtle Pastel Background with White Cards */}
      <section
        className="w-full py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: 'linear-gradient(135deg, #F3E8FF 0%, #E8F4FD 50%, #F0F9FF 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 hover:shadow-lg hover:bg-white transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: value.bgColor }}
                >
                  {getIconSVG(value.icon, value.color)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
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
'use client';

import React, { useState, useEffect } from 'react';
import { DomainSection } from '@/components/ui';

// Hook to detect if we're on desktop
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  return isDesktop;
};

const StickyDomainsSection = () => {
  const isDesktop = useIsDesktop();

  const domains = [
    {
      title: "Empathy Tech",
      description: "Technology designed with human empathy at its core, creating solutions that understand and respond to human emotions and needs.",
      features: [
        "Emotion Recognition Systems",
        "Human-Centered Design",
        "Accessibility Solutions",
        "User Experience Innovation"
      ]
    },
    {
      title: "FinTech",
      description: "Revolutionary financial technology solutions that transform how we handle money, payments, and financial services.",
      features: [
        "Digital Banking Platforms",
        "Blockchain Solutions",
        "Payment Processing",
        "Risk Management Systems"
      ]
    },
    {
      title: "Human Tech",
      description: "Technology that enhances human capabilities and improves quality of life through innovative digital solutions.",
      features: [
        "Augmented Reality",
        "Wearable Technology",
        "Health Monitoring",
        "Productivity Enhancement"
      ]
    },
    {
      title: "AI & Innovation",
      description: "Cutting-edge artificial intelligence solutions that drive innovation and transform business operations.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    },
    {
      title: "Deep Tech",
      description: "Advanced technology solutions that push the boundaries of what's possible in science and engineering.",
      features: [
        "Quantum Computing",
        "IoT Solutions",
        "Advanced Robotics",
        "Biotechnology"
      ]
    }
  ];

  return (
    <div className="relative overflow-visible">
      {domains.map((domain, index) => {
        // Alternating between white and light pastel variants for better readability
        const variants = ['white', 'blue', 'white', 'purple', 'white'] as const;
        const variant = variants[index % variants.length];

        return (
          <div
            key={domain.title}
            style={isDesktop ? {
              position: 'sticky',
              top: 64,
              zIndex: index + 1,
            } : {
              position: 'relative',
              zIndex: index + 1,
            }}
          >
            <DomainSection
              title={domain.title}
              description={domain.description}
              features={domain.features}
              variant={variant}
              reverse={index % 2 === 1}
              id={index === 0 ? "empathy-tech-section" : undefined}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StickyDomainsSection;


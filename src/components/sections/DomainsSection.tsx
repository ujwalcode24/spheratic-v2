'use client';

import React from 'react';
import { DomainSection } from '@/components/ui';

const DomainsSection = () => {
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
    <>
      {domains.map((domain, index) => {
        const variants = ['orange', 'black', 'white', 'black', 'black'] as const;
        const variant = variants[index % variants.length];

        return (
          <DomainSection
            key={domain.title}
            title={domain.title}
            description={domain.description}
            features={domain.features}
            variant={variant}

            reverse={index % 2 === 1}
            id={index === 0 ? "empathy-tech-section" : undefined}
          />
        );
      })}
    </>
  );
};

export default DomainsSection;
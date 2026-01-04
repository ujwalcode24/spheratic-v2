'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
  offset = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - (speed * 100)]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  // On mobile, disable parallax effect to improve performance
  if (!isDesktop) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y: smoothY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StickyScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  triggerOffset?: number;
}

export const StickyScrollSection: React.FC<StickyScrollSectionProps> = ({
  children,
  className = '',
  triggerOffset = 0.1
}) => {
  const [ref, inView] = useInView({
    threshold: triggerOffset,
    triggerOnce: false
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface OverlapScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  zIndex?: number;
  backgroundColor?: string;
}

export const OverlapScrollSection: React.FC<OverlapScrollSectionProps> = ({
  children,
  className = '',
  zIndex = 1,
  backgroundColor = 'transparent'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        opacity,
        zIndex,
        backgroundColor
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface LayeredScrollProps {
  sections: Array<{
    content: React.ReactNode;
    backgroundColor: string;
    zIndex: number;
  }>;
}

export const LayeredScroll: React.FC<LayeredScrollProps> = ({ sections }) => {
  return (
    <div className="relative">
      {sections.map((section, index) => (
        <OverlapScrollSection
          key={index}
          className="min-h-screen sticky top-0"
          zIndex={section.zIndex}
          backgroundColor={section.backgroundColor}
        >
          {section.content}
        </OverlapScrollSection>
      ))}
    </div>
  );
};

export default ParallaxSection;

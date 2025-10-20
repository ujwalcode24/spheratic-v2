'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 1,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Define animation variants
    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 }
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 }
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      },
      slideInUp: {
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 }
      }
    };

    const selectedAnimation = animations[animation];

    // Set initial state
    gsap.set(element, selectedAnimation.from);

    // Create scroll trigger animation
    gsap.to(element, {
      ...selectedAnimation.to,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animation, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

// Stagger animation component for multiple elements
interface StaggerAnimationProps {
  children: React.ReactNode;
  stagger?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';
  className?: string;
}

export const StaggerAnimation: React.FC<StaggerAnimationProps> = ({
  children,
  stagger = 0.1,
  animation = 'fadeInUp',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.children;

    if (elements.length === 0) return;

    // Define animation variants
    const animations = {
      fadeInUp: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 }
      },
      fadeInLeft: {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0 }
      },
      fadeInRight: {
        from: { opacity: 0, x: 50 },
        to: { opacity: 1, x: 0 }
      },
      scaleIn: {
        from: { opacity: 0, scale: 0.8 },
        to: { opacity: 1, scale: 1 }
      }
    };

    const selectedAnimation = animations[animation];

    // Set initial state for all elements
    gsap.set(elements, selectedAnimation.from);

    // Create stagger animation
    gsap.to(elements, {
      ...selectedAnimation.to,
      duration: 0.8,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [stagger, animation]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// Parallax component
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.5,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimation;

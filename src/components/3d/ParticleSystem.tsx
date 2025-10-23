'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetX: number;
  targetY: number;
  color: string;
  groupId: number;
  baseAngle: number;
  baseX: number;
  baseY: number;
}

interface AmoebaCentroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize multiple particle groups (amoebas)
    const particles: Particle[] = [];
    const colors = ['#FF6B35', '#FF8C42', '#FFB84D', '#FFD700', 'rgba(255, 107, 53, 0.6)'];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create 5 amoeba groups with different patterns - increased size
    const groupConfigs = [
      { count: 180, radius: 150, speed: 0.008, offsetX: 0, offsetY: 0 },
      { count: 170, radius: 145, speed: 0.012, offsetX: 0, offsetY: 0 },
      { count: 160, radius: 140, speed: 0.01, offsetX: 0, offsetY: 0 },
      { count: 150, radius: 135, speed: 0.009, offsetX: 0, offsetY: 0 },
      { count: 140, radius: 130, speed: 0.011, offsetX: 0, offsetY: 0 },
    ];

    // Create amoeba centroids that will move around - 5 amoebas
    const amoebaCentroids: AmoebaCentroid[] = [
      { x: centerX - 250, y: centerY - 200, vx: 0, vy: 0 },
      { x: centerX + 300, y: centerY + 150, vx: 0, vy: 0 },
      { x: centerX - 150, y: centerY + 250, vx: 0, vy: 0 },
      { x: centerX + 200, y: centerY - 250, vx: 0, vy: 0 },
      { x: centerX - 300, y: centerY + 50, vx: 0, vy: 0 },
    ];

    groupConfigs.forEach((config, groupId) => {
      const centroid = amoebaCentroids[groupId];
      for (let i = 0; i < config.count; i++) {
        const angle = (i / config.count) * Math.PI * 2;
        const distance = config.radius * (0.6 + Math.random() * 0.4);

        particles.push({
          x: centroid.x + Math.cos(angle) * distance,
          y: centroid.y + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          targetX: centroid.x + Math.cos(angle) * distance,
          targetY: centroid.y + Math.sin(angle) * distance,
          color: colors[Math.floor(Math.random() * colors.length)],
          groupId: groupId,
          baseAngle: angle,
          baseX: centroid.x,
          baseY: centroid.y,
        });
      }
    });
    particlesRef.current = particles;

    // Store amoeba centroids for animation loop
    const amoebaCentroidsRef = { current: amoebaCentroids };

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const padding = 180; // Padding from edges for amoeba bounds
      const minAmoebaSeparation = 350; // Minimum distance between amoeba centers

      // Update amoeba centroids - make them move around the canvas with boundary checking
      amoebaCentroidsRef.current.forEach((centroid, idx) => {
        // Add gentle wandering motion instead of fixed path
        const wanderAngle = timeRef.current * (0.2 + idx * 0.05) + idx * Math.PI * 0.4;
        const wanderForce = 0.3;
        centroid.vx += Math.cos(wanderAngle) * wanderForce;
        centroid.vy += Math.sin(wanderAngle) * wanderForce;

        // Apply velocity to position
        centroid.x += centroid.vx;
        centroid.y += centroid.vy;

        // Damping
        centroid.vx *= 0.95;
        centroid.vy *= 0.95;

        // Boundary checking - bounce back if touching edges
        if (centroid.x - padding < 0) {
          centroid.x = padding;
          centroid.vx *= -0.9;
        } else if (centroid.x + padding > canvas.width) {
          centroid.x = canvas.width - padding;
          centroid.vx *= -0.9;
        }

        if (centroid.y - padding < 0) {
          centroid.y = padding;
          centroid.vy *= -0.9;
        } else if (centroid.y + padding > canvas.height) {
          centroid.y = canvas.height - padding;
          centroid.vy *= -0.9;
        }

        // Check collision with other amoebas
        amoebaCentroidsRef.current.forEach((otherCentroid, otherIdx) => {
          if (idx >= otherIdx) return; // Avoid duplicate checks

          const dx = centroid.x - otherCentroid.x;
          const dy = centroid.y - otherCentroid.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < minAmoebaSeparation && distance > 0) {
            // Calculate collision angle
            const collisionAngle = Math.atan2(dy, dx);
            const force = (minAmoebaSeparation - distance) / minAmoebaSeparation;
            const repelStrength = force * force * 3; // Quadratic force for stronger collision

            // Push both amoebas apart with strong force
            centroid.vx += Math.cos(collisionAngle) * repelStrength * 2;
            centroid.vy += Math.sin(collisionAngle) * repelStrength * 2;

            otherCentroid.vx -= Math.cos(collisionAngle) * repelStrength * 2;
            otherCentroid.vy -= Math.sin(collisionAngle) * repelStrength * 2;
          }
        });
      });

      // Update and draw particles
      particles.forEach((particle, index) => {
        const config = groupConfigs[particle.groupId];
        const centroid = amoebaCentroidsRef.current[particle.groupId];

        // Create complex wave pattern for amoeba shape
        const waveDistance = config.radius * (0.7 + Math.sin(timeRef.current * config.speed + particle.baseAngle) * 0.3);
        const rotationOffset = timeRef.current * config.speed * 0.5;
        const rotatedAngle = particle.baseAngle + rotationOffset;

        // Target position relative to moving centroid
        particle.targetX = centroid.x + Math.cos(rotatedAngle) * waveDistance;
        particle.targetY = centroid.y + Math.sin(rotatedAngle) * waveDistance;

        // Smooth movement towards target
        particle.x += (particle.targetX - particle.x) * 0.08;
        particle.y += (particle.targetY - particle.y) * 0.08;

        // Add velocity-based movement
        particle.x += particle.vx * 0.5;
        particle.y += particle.vy * 0.5;

        // Strong repel from mouse
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 250; // Increased from 200

        if (distance < minDistance && distance > 0) {
          const repelAngle = Math.atan2(dy, dx);
          const force = (minDistance - distance) / minDistance;
          const repelStrength = force * force * 2; // Quadratic force for stronger effect
          particle.vx += Math.cos(repelAngle) * repelStrength;
          particle.vy += Math.sin(repelAngle) * repelStrength;
        }

        // Add continuous randomness for organic movement
        particle.vx += (Math.random() - 0.5) * 0.15;
        particle.vy += (Math.random() - 0.5) * 0.15;
        particle.vx *= 0.90; // Reduced damping for more responsiveness
        particle.vy *= 0.90;

        // Limit velocity
        const maxVelocity = 3; // Increased from 1.5
        const velocityMagnitude = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (velocityMagnitude > maxVelocity) {
          particle.vx = (particle.vx / velocityMagnitude) * maxVelocity;
          particle.vy = (particle.vy / velocityMagnitude) * maxVelocity;
        }

        // Oscillating opacity with more variation
        particle.opacity = 0.35 + Math.sin(timeRef.current * 0.5 + index * 0.15) * 0.35;

        // Draw particle with glow effect
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity * 0.6;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw particle core
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines within same group
        particles.forEach((otherParticle, otherIndex) => {
          if (otherIndex <= index || otherParticle.groupId !== particle.groupId) return;
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(255, 107, 53, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = 0.15 * (1 - distance / 150);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ParticleSystem;


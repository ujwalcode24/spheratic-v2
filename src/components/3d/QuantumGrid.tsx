'use client';

import React, { useEffect, useRef } from 'react';

const QuantumGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationTime = 0;

    // Particle system for quantum visualization
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const particles: Particle[] = [];

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: Math.random() * 2 + 1,
      });
    };

    const drawQuantumGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const gridSize = 8;
      const cellSize = 30;

      // Draw grid lines with wave effect
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < gridSize; i++) {
        const x = centerX - (gridSize / 2) * cellSize + i * cellSize;
        const y = centerY - (gridSize / 2) * cellSize;

        // Horizontal lines with wave
        ctx.beginPath();
        for (let j = 0; j < gridSize; j++) {
          const px = x + j * cellSize;
          const py = y + i * cellSize + Math.sin(time * 2 + px * 0.02) * 3;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();

        // Vertical lines with wave
        ctx.beginPath();
        for (let j = 0; j < gridSize; j++) {
          const px = x + i * cellSize + Math.sin(time * 2 + (y + j * cellSize) * 0.02) * 3;
          const py = y + j * cellSize;
          if (j === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
      }

      // Draw grid nodes with pulsing effect
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const x = centerX - (gridSize / 2) * cellSize + i * cellSize;
          const y = centerY - (gridSize / 2) * cellSize + j * cellSize;

          // Distance from center for pulsing effect
          const dx = x - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.sqrt(2) * (gridSize / 2) * cellSize;
          const normalizedDistance = distance / maxDistance;

          // Pulsing node size
          const pulse = Math.sin(time * 3 - normalizedDistance * 2) * 0.5 + 0.5;
          const nodeSize = 2 + pulse * 2;

          // Node color with intensity based on distance
          const intensity = 0.5 + (1 - normalizedDistance) * 0.5;
          ctx.fillStyle = `rgba(255, 255, 255, ${intensity * (0.6 + pulse * 0.4)})`;
          ctx.beginPath();
          ctx.arc(x, y, nodeSize, 0, Math.PI * 2);
          ctx.fill();

          // Glow effect
          ctx.strokeStyle = `rgba(255, 255, 255, ${intensity * 0.3 * pulse})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, nodeSize + 3, 0, Math.PI * 2);
          ctx.stroke();

          // Occasionally create particles from nodes
          if (Math.random() < 0.02) {
            createParticle(x, y);
          }
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const opacity = p.life * 0.6;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw rotating outer rings
      for (let ring = 0; ring < 3; ring++) {
        const ringRadius = 120 + ring * 15;
        const ringOpacity = (0.3 - ring * 0.08) * (0.5 + Math.sin(time * 1.5 + ring) * 0.5);
        const rotation = time * (0.5 - ring * 0.1);

        ctx.strokeStyle = `rgba(255, 255, 255, ${ringOpacity})`;
        ctx.lineWidth = 1;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);

        // Draw ring with dashes
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(0, 0, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.restore();
      }

      // Draw central quantum core
      const coreSize = 15 + Math.sin(time * 2.5) * 5;
      const coreOpacity = 0.7 + Math.sin(time * 2) * 0.3;

      ctx.fillStyle = `rgba(255, 255, 255, ${coreOpacity})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreSize, 0, Math.PI * 2);
      ctx.fill();

      // Core glow
      ctx.strokeStyle = `rgba(255, 255, 255, ${coreOpacity * 0.5})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreSize + 5, 0, Math.PI * 2);
      ctx.stroke();
    };

    const animate = () => {
      animationTime += 0.016;
      drawQuantumGrid(animationTime);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-xs max-h-xs"
      style={{
        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
        width: '280px',
        height: '280px',
      }}
    />
  );
};

export default QuantumGrid;


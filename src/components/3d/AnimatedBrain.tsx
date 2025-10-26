'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedBrain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationTime = 0;

    const drawBrain = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw neural network nodes
      const nodeCount = 12;
      const nodes: Array<{ x: number; y: number; angle: number }> = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const distance = 80 + Math.sin(time * 0.8 + i) * 15;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        nodes.push({ x, y, angle });
      }

      // Draw connections between nodes
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (Math.abs(i - j) <= 2 || Math.abs(i - j) >= nodeCount - 2) {
            const node1 = nodes[i];
            const node2 = nodes[j];

            const distance = Math.hypot(node2.x - node1.x, node2.y - node1.y);
            const maxDistance = 150;

            if (distance < maxDistance) {
              const opacity = (1 - distance / maxDistance) * 0.5;
              const pulse = Math.sin(time * 2 + i + j) * 0.3 + 0.7;

              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * pulse})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(node1.x, node1.y);
              ctx.lineTo(node2.x, node2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes with pulsing effect
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        const pulse = Math.sin(time * 2.5 + i * 0.5) * 0.4 + 0.6;
        const nodeSize = 4 + pulse * 3;

        // Node glow
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 * pulse})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize + 4, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + pulse * 0.2})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw central brain core
      const corePulse = Math.sin(time * 1.5) * 0.3 + 0.7;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * corePulse})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(255, 255, 255, ${0.7 + corePulse * 0.2})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
      ctx.fill();

      // Draw outer rings
      for (let r = 0; r < 3; r++) {
        const ringRadius = 120 + r * 20;
        const ringOpacity = (0.3 - r * 0.1) * Math.sin(time * 1.2 + r * 0.5);

        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, ringOpacity)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, ringRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      animationTime += 0.016;
      drawBrain(animationTime);
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{
        filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
      }}
    />
  );
};

export default AnimatedBrain;


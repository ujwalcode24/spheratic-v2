'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedGears: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationTime = 0;

    const drawGear = (x: number, y: number, radius: number, teeth: number, rotation: number, opacity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const toothHeight = radius * 0.3;
      const toothWidth = (Math.PI * 2) / teeth / 2;

      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let i = 0; i < teeth; i++) {
        const angle = (i / teeth) * Math.PI * 2;
        const nextAngle = ((i + 1) / teeth) * Math.PI * 2;

        // Outer tooth
        const x1 = Math.cos(angle) * (radius + toothHeight);
        const y1 = Math.sin(angle) * (radius + toothHeight);
        const x2 = Math.cos(angle + toothWidth) * (radius + toothHeight);
        const y2 = Math.sin(angle + toothWidth) * (radius + toothHeight);

        // Inner valley
        const x3 = Math.cos(angle + toothWidth) * radius;
        const y3 = Math.sin(angle + toothWidth) * radius;
        const x4 = Math.cos(nextAngle - toothWidth) * radius;
        const y4 = Math.sin(nextAngle - toothWidth) * radius;

        if (i === 0) {
          ctx.moveTo(x1, y1);
        }
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Center hub
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const drawGears = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Large gear (center-left)
      const gear1Rotation = time * 1.5;
      const gear1Opacity = 0.7 + Math.sin(time * 1.2) * 0.2;
      drawGear(centerX - 60, centerY, 50, 12, gear1Rotation, gear1Opacity);

      // Medium gear (center-right)
      const gear2Rotation = -time * 2;
      const gear2Opacity = 0.7 + Math.sin(time * 1.2 + 1) * 0.2;
      drawGear(centerX + 60, centerY, 40, 10, gear2Rotation, gear2Opacity);

      // Small gear (top)
      const gear3Rotation = time * 2.5;
      const gear3Opacity = 0.7 + Math.sin(time * 1.2 + 2) * 0.2;
      drawGear(centerX, centerY - 70, 30, 8, gear3Rotation, gear3Opacity);

      // Small gear (bottom)
      const gear4Rotation = -time * 1.8;
      const gear4Opacity = 0.7 + Math.sin(time * 1.2 + 3) * 0.2;
      drawGear(centerX, centerY + 70, 30, 8, gear4Rotation, gear4Opacity);

      // Draw connecting lines between gears
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);

      ctx.beginPath();
      ctx.moveTo(centerX - 60, centerY);
      ctx.lineTo(centerX + 60, centerY);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX, centerY - 70);
      ctx.lineTo(centerX, centerY + 70);
      ctx.stroke();

      ctx.setLineDash([]);

      // Draw outer glow rings
      for (let g = 0; g < 2; g++) {
        const glowRadius = 130 + g * 20;
        const glowOpacity = (0.2 - g * 0.1) * Math.sin(time * 1.5 + g * 0.5);

        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(0, glowOpacity)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      animationTime += 0.016;
      drawGears(animationTime);
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

export default AnimatedGears;


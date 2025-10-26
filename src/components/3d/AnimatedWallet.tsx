'use client';

import React, { useEffect, useRef } from 'react';

interface AnimatedWalletProps {
  isDarkMode?: boolean;
}

const AnimatedWallet: React.FC<AnimatedWalletProps> = ({ isDarkMode = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    let animationTime = 0;

    const drawWallet = (time: number) => {
      // Clear canvas completely (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Main card rotation
      const cardRotation = Math.sin(time * 0.5) * 0.3;

      // Save context for rotation
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(cardRotation);
      ctx.translate(-centerX, -centerY);

      // Draw main wallet card
      const cardWidth = 140;
      const cardHeight = 90;
      const cardX = centerX - cardWidth / 2;
      const cardY = centerY - cardHeight / 2;

      // Card background with gradient - use dark gray for light mode
      const gradient = ctx.createLinearGradient(cardX, cardY, cardX, cardY + cardHeight);
      if (isDarkMode) {
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.05)');
      } else {
        gradient.addColorStop(0, 'rgba(55, 65, 81, 0.15)');
        gradient.addColorStop(1, 'rgba(55, 65, 81, 0.05)');
      }

      ctx.fillStyle = gradient;
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(55, 65, 81, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardWidth, cardHeight, 8);
      ctx.fill();
      ctx.stroke();

      // Card chip (top left)
      const chipFill = isDarkMode ? 'rgba(255, 255, 255, 0.4)' : 'rgba(55, 65, 81, 0.4)';
      const chipStroke = isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(55, 65, 81, 0.7)';
      ctx.fillStyle = chipFill;
      ctx.strokeStyle = chipStroke;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(cardX + 12, cardY + 12, 20, 20, 2);
      ctx.fill();
      ctx.stroke();

      // Chip grid pattern
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(55, 65, 81, 0.5)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.rect(cardX + 13 + i * 4, cardY + 13 + j * 4, 3, 3);
          ctx.stroke();
        }
      }

      // Card number dots
      const dotColor = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(55, 65, 81, 0.5)';
      ctx.fillStyle = dotColor;
      const dotPositions = [
        { x: cardX + 30, y: cardY + 60 },
        { x: cardX + 50, y: cardY + 60 },
        { x: cardX + 70, y: cardY + 60 },
        { x: cardX + 90, y: cardY + 60 }
      ];

      dotPositions.forEach((pos, index) => {
        const pulse = Math.sin(time * 2 + index * 0.5) * 0.3 + 0.7;
        const baseColor = isDarkMode ? 'rgba(255, 255, 255, ' : 'rgba(55, 65, 81, ';
        ctx.fillStyle = `${baseColor}${0.5 * pulse})`;
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Card holder name
      ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(55, 65, 81, 0.6)';
      ctx.font = 'bold 8px Arial';
      ctx.fillText('CARDHOLDER', cardX + 12, cardY + 78);

      ctx.restore();

      // Draw floating coins around the card
      const coinCount = 5;
      for (let i = 0; i < coinCount; i++) {
        const angle = (time * 1.5 + (i / coinCount) * Math.PI * 2);
        const distance = 120 + Math.sin(time * 1.2 + i) * 20;

        const coinX = centerX + Math.cos(angle) * distance;
        const coinY = centerY + Math.sin(angle) * distance;

        // Coin rotation
        const coinRotation = time * 3 + i * (Math.PI / coinCount);

        ctx.save();
        ctx.translate(coinX, coinY);
        ctx.rotate(coinRotation);

        // Coin circle
        const coinBaseColor = isDarkMode ? 'rgba(255, 255, 255, ' : 'rgba(55, 65, 81, ';
        ctx.strokeStyle = `${coinBaseColor}${0.7 + Math.sin(time * 2 + i) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.stroke();

        // Coin symbol ($ or €)
        ctx.fillStyle = `${coinBaseColor}${0.8 + Math.sin(time * 2 + i) * 0.2})`;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', 0, 0);

        // Coin shine
        ctx.strokeStyle = `${coinBaseColor}${0.3 + Math.sin(time * 3 + i) * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, -3, 8, 0, Math.PI);
        ctx.stroke();

        ctx.restore();
      }

      // Draw transaction flow lines
      for (let i = 0; i < coinCount; i++) {
        const startAngle = (time * 1.5 + (i / coinCount) * Math.PI * 2);
        const distance = 120 + Math.sin(time * 1.2 + i) * 20;

        const coinX = centerX + Math.cos(startAngle) * distance;
        const coinY = centerY + Math.sin(startAngle) * distance;

        // Flow line to card
        const flowProgress = (time * 2 + i * 0.3) % 1;
        const flowX = coinX + (centerX - coinX) * flowProgress;
        const flowY = coinY + (centerY - coinY) * flowProgress;

        const flowColor = isDarkMode ? 'rgba(255, 255, 255, ' : 'rgba(55, 65, 81, ';
        ctx.strokeStyle = `${flowColor}${0.4 * (1 - flowProgress)})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(coinX, coinY);
        ctx.lineTo(flowX, flowY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Flow particle
        ctx.fillStyle = `${flowColor}${0.8 * (1 - flowProgress)})`;
        ctx.beginPath();
        ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw outer glow
      const glowIntensity = 0.3 + Math.sin(time * 1.5) * 0.2;
      ctx.strokeStyle = `rgba(255, 255, 255, ${glowIntensity * 0.4})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 160, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = `rgba(255, 255, 255, ${glowIntensity * 0.2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
      ctx.stroke();
    };

    const animate = () => {
      animationTime += 0.016; // ~60fps
      drawWallet(animationTime);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
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

export default AnimatedWallet;


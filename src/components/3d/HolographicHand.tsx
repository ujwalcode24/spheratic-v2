'use client';

import React, { useEffect, useRef } from 'react';

interface PulsingWaveformProps {
  isDarkMode?: boolean;
}

const PulsingWaveform: React.FC<PulsingWaveformProps> = ({ isDarkMode = true }) => {
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

    // Color based on mode
    const baseColor = isDarkMode ? '255, 255, 255' : '59, 130, 246'; // white or blue-500

    const drawWaveform = (time: number) => {
      // Clear canvas completely (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const baseRadius = 60;

      // Draw multiple concentric waveforms
      const waveCount = 4;

      for (let w = 0; w < waveCount; w++) {
        const waveDelay = w * 0.3;
        const wavePhase = time * 2 + waveDelay;
        const waveRadius = baseRadius + w * 25;

        // Pulsing effect
        const pulse = Math.sin(time * 1.5 - w * 0.5) * 0.3 + 0.7;
        const opacity = (1 - w / waveCount) * pulse;

        // Draw waveform circle with wave distortion
        ctx.strokeStyle = `rgba(${baseColor}, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();

        const segments = 120;
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;

          // Wave distortion
          const waveAmplitude = 15 * (1 - w / waveCount);
          const distortion = Math.sin(angle * 3 + wavePhase) * waveAmplitude;

          const x = centerX + Math.cos(angle) * (waveRadius + distortion);
          const y = centerY + Math.sin(angle) * (waveRadius + distortion);

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Draw center heartbeat pulse
      const beatPhase = (time * 3) % 1;
      const beatPulse = Math.sin(beatPhase * Math.PI * 2) * 0.5 + 0.5;

      // Inner pulsing circle
      ctx.fillStyle = `rgba(${baseColor}, ${0.6 * beatPulse})`;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8 + beatPulse * 5, 0, Math.PI * 2);
      ctx.fill();

      // Draw radial lines (heartbeat spikes)
      const spikeCount = 8;
      for (let i = 0; i < spikeCount; i++) {
        const angle = (i / spikeCount) * Math.PI * 2;

        // Spike animation
        const spikePhase = (time * 2.5 + i * 0.3) % 1;
        const spikeLength = Math.max(0, Math.sin(spikePhase * Math.PI) * 40);

        const startX = centerX + Math.cos(angle) * baseRadius;
        const startY = centerY + Math.sin(angle) * baseRadius;
        const endX = centerX + Math.cos(angle) * (baseRadius + spikeLength);
        const endY = centerY + Math.sin(angle) * (baseRadius + spikeLength);

        ctx.strokeStyle = `rgba(${baseColor}, ${0.8 * (1 - spikePhase)})`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Draw outer glow rings
      for (let g = 0; g < 3; g++) {
        const glowRadius = baseRadius + waveCount * 25 + g * 15;
        const glowOpacity = (0.3 - g * 0.1) * Math.sin(time * 1.2 + g * 0.5);

        ctx.strokeStyle = `rgba(${baseColor}, ${Math.max(0, glowOpacity)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      animationTime += 0.016; // ~60fps
      drawWaveform(animationTime);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup if needed
    };
  }, [isDarkMode]);

  const shadowColor = isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(59, 130, 246, 0.4)';

  return (
    <canvas
      ref={canvasRef}
      className="max-w-xs max-h-xs"
      style={{
        filter: `drop-shadow(0 0 30px ${shadowColor})`,
        width: '280px',
        height: '280px',
      }}
    />
  );
};

export default PulsingWaveform;


'use client';

import React, { useEffect, useRef } from 'react';

const AnimatedAR: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 300;

    let animationTime = 0;

    const drawAR = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw AR frame corners
      const frameSize = 80;
      const cornerLength = 20;
      const cornerWidth = 2;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = cornerWidth;

      // Top-left corner
      ctx.beginPath();
      ctx.moveTo(centerX - frameSize, centerY - frameSize);
      ctx.lineTo(centerX - frameSize + cornerLength, centerY - frameSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX - frameSize, centerY - frameSize);
      ctx.lineTo(centerX - frameSize, centerY - frameSize + cornerLength);
      ctx.stroke();

      // Top-right corner
      ctx.beginPath();
      ctx.moveTo(centerX + frameSize, centerY - frameSize);
      ctx.lineTo(centerX + frameSize - cornerLength, centerY - frameSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX + frameSize, centerY - frameSize);
      ctx.lineTo(centerX + frameSize, centerY - frameSize + cornerLength);
      ctx.stroke();

      // Bottom-left corner
      ctx.beginPath();
      ctx.moveTo(centerX - frameSize, centerY + frameSize);
      ctx.lineTo(centerX - frameSize + cornerLength, centerY + frameSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX - frameSize, centerY + frameSize);
      ctx.lineTo(centerX - frameSize, centerY + frameSize - cornerLength);
      ctx.stroke();

      // Bottom-right corner
      ctx.beginPath();
      ctx.moveTo(centerX + frameSize, centerY + frameSize);
      ctx.lineTo(centerX + frameSize - cornerLength, centerY + frameSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(centerX + frameSize, centerY + frameSize);
      ctx.lineTo(centerX + frameSize, centerY + frameSize - cornerLength);
      ctx.stroke();

      // Draw rotating cube in center
      const cubeSize = 30;
      const rotationX = time * 0.8;
      const rotationY = time * 1.2;

      // Cube vertices
      const vertices = [
        [-cubeSize, -cubeSize, -cubeSize],
        [cubeSize, -cubeSize, -cubeSize],
        [cubeSize, cubeSize, -cubeSize],
        [-cubeSize, cubeSize, -cubeSize],
        [-cubeSize, -cubeSize, cubeSize],
        [cubeSize, -cubeSize, cubeSize],
        [cubeSize, cubeSize, cubeSize],
        [-cubeSize, cubeSize, cubeSize]
      ];

      // Rotate vertices
      const rotatedVertices = vertices.map(v => {
        const [x, y, z] = v;

        // Rotate around X
        const y1 = y * Math.cos(rotationX) - z * Math.sin(rotationX);
        const z1 = y * Math.sin(rotationX) + z * Math.cos(rotationX);

        // Rotate around Y
        const x2 = x * Math.cos(rotationY) + z1 * Math.sin(rotationY);
        const z2 = -x * Math.sin(rotationY) + z1 * Math.cos(rotationY);

        return [x2, y1, z2];
      });

      // Project to 2D
      const projectedVertices = rotatedVertices.map(v => {
        const scale = 200 / (200 + v[2]);
        return [
          centerX + v[0] * scale,
          centerY + v[1] * scale
        ];
      });

      // Draw cube edges
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
      ];

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.lineWidth = 2;

      edges.forEach(edge => {
        const [start, end] = edge;
        ctx.beginPath();
        ctx.moveTo(projectedVertices[start][0], projectedVertices[start][1]);
        ctx.lineTo(projectedVertices[end][0], projectedVertices[end][1]);
        ctx.stroke();
      });

      // Draw vertices
      projectedVertices.forEach((vertex, index) => {
        const pulse = Math.sin(time * 2 + index) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * pulse})`;
        ctx.beginPath();
        ctx.arc(vertex[0], vertex[1], 3, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw scanning line
      const scanY = centerY - frameSize + ((time * 100) % (frameSize * 2));
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(centerX - frameSize, scanY);
      ctx.lineTo(centerX + frameSize, scanY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw tracking points
      const trackingPoints = 4;
      for (let i = 0; i < trackingPoints; i++) {
        const angle = (i / trackingPoints) * Math.PI * 2 + time * 1.5;
        const distance = 100;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;

        const pulse = Math.sin(time * 2 + i) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 * pulse})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const animate = () => {
      animationTime += 0.016;
      drawAR(animationTime);
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

export default AnimatedAR;


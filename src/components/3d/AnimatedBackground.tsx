'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

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

// Floating particles component
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  // Generate random positions for particles
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }

    return positions;
  }, []);

  // Animate particles
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E74C3C"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Geometric shapes component
function GeometricShapes() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Wireframe sphere */}
      <mesh position={[-3, 2, -5]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#E74C3C" wireframe opacity={0.3} transparent />
      </mesh>

      {/* Wireframe torus */}
      <mesh position={[3, -2, -3]} rotation={[0.5, 0, 0]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshBasicMaterial color="#E74C3C" wireframe opacity={0.4} transparent />
      </mesh>

      {/* Wireframe octahedron */}
      <mesh position={[0, 3, -4]} rotation={[0.2, 0.5, 0]}>
        <octahedronGeometry args={[1]} />
        <meshBasicMaterial color="#E74C3C" wireframe opacity={0.5} transparent />
      </mesh>

      {/* Wireframe box */}
      <mesh position={[-2, -3, -2]} rotation={[0.3, 0.2, 0.1]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshBasicMaterial color="#E74C3C" wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  );
}

// Floating orbs component
function FloatingOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, index) => {
        child.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5;
        child.rotation.x = state.clock.elapsedTime * 0.5;
        child.rotation.z = state.clock.elapsedTime * 0.3;
      });
    }
  });

  return (
    <group ref={orbsRef}>
      {Array.from({ length: 5 }).map((_, index) => (
        <mesh
          key={index}
          position={[
            Math.cos((index / 5) * Math.PI * 2) * 4,
            0,
            Math.sin((index / 5) * Math.PI * 2) * 4 - 6
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial
            color="#E74C3C"
            transparent
            opacity={0.6}
            emissive="#E74C3C"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main animated background component
interface AnimatedBackgroundProps {
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = "" }) => {
  const isDesktop = useIsDesktop();

  // Don't render anything on mobile to prevent crashes
  if (!isDesktop) {
    return null;
  }

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <FloatingParticles />
        <GeometricShapes />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;

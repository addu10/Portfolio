'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 2.2;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Generate initial positions and velocities
  const particles = useMemo(() => {
    const positions: number[][] = [];
    const velocities: number[][] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      ]);
      velocities.push([
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.005,
      ]);
    }
    return { positions, velocities };
  }, []);

  // Dummy object for instanced mesh transforms
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Line geometry buffer (pre-allocate max possible connections)
  const maxLines = PARTICLE_COUNT * 6;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    return geo;
  }, [linePositions, lineColors]);

  // Track mouse
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    const { positions, velocities } = particles;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Add velocity
      positions[i][0] += velocities[i][0];
      positions[i][1] += velocities[i][1];
      positions[i][2] += velocities[i][2];

      // Subtle mouse influence
      positions[i][0] += mouseRef.current.x * 0.001;
      positions[i][1] += mouseRef.current.y * 0.001;

      // Gentle floating motion
      positions[i][1] += Math.sin(time * 0.5 + i * 0.1) * 0.002;

      // Bounce off boundaries
      for (let j = 0; j < 3; j++) {
        const bound = j === 2 ? 3 : j === 1 ? 4 : 6;
        if (Math.abs(positions[i][j]) > bound) {
          velocities[i][j] *= -1;
          positions[i][j] = Math.sign(positions[i][j]) * bound;
        }
      }

      // Scale variation
      const scale = 0.03 + Math.sin(time * 0.8 + i) * 0.01;
      dummy.position.set(positions[i][0], positions[i][1], positions[i][2]);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update connection lines
    if (linesRef.current) {
      let lineIndex = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = positions[i][0] - positions[j][0];
          const dy = positions[i][1] - positions[j][1];
          const dz = positions[i][2] - positions[j][2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < CONNECTION_DISTANCE && lineIndex < maxLines) {
            const alpha = 1 - dist / CONNECTION_DISTANCE;
            const idx = lineIndex * 6;

            linePositions[idx] = positions[i][0];
            linePositions[idx + 1] = positions[i][1];
            linePositions[idx + 2] = positions[i][2];
            linePositions[idx + 3] = positions[j][0];
            linePositions[idx + 4] = positions[j][1];
            linePositions[idx + 5] = positions[j][2];

            // Green-cyan gradient with distance-based opacity
            const r = 0.2 * alpha;
            const g = 0.85 * alpha;
            const b = 0.65 * alpha;
            lineColors[idx] = r;
            lineColors[idx + 1] = g;
            lineColors[idx + 2] = b;
            lineColors[idx + 3] = r;
            lineColors[idx + 4] = g;
            lineColors[idx + 5] = b;

            lineIndex++;
          }
        }
      }

      // Clear remaining lines
      for (let i = lineIndex * 6; i < maxLines * 6; i++) {
        linePositions[i] = 0;
        lineColors[i] = 0;
      }

      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex * 2);
    }
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.8} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.35} />
      </lineSegments>
    </>
  );
}

interface ParticleFieldProps {
  className?: string;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ className }) => {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Don't render anything on server or on mobile
  if (!mounted || isMobile) {
    return <div className={className} />;
  }

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticleField;

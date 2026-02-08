import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function Particles({ count = 200, isDark = true }) {
  const mesh = useRef();
  const { pointer } = useThree();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const darkColors = new Float32Array(count * 3);
    const lightColors = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 30;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const t = Math.random();

      // Dark mode: bright neon particles (additive glow)
      if (t < 0.4) {
        darkColors[i * 3] = 0;
        darkColors[i * 3 + 1] = 0.94;
        darkColors[i * 3 + 2] = 1;
      } else if (t < 0.7) {
        darkColors[i * 3] = 0;
        darkColors[i * 3 + 1] = 0.4;
        darkColors[i * 3 + 2] = 1;
      } else {
        darkColors[i * 3] = 0.55;
        darkColors[i * 3 + 1] = 0.36;
        darkColors[i * 3 + 2] = 0.96;
      }

      // Light mode: deeper, richer tones (normal blending)
      if (t < 0.4) {
        lightColors[i * 3] = 0;
        lightColors[i * 3 + 1] = 0.45;
        lightColors[i * 3 + 2] = 0.65;
      } else if (t < 0.7) {
        lightColors[i * 3] = 0.15;
        lightColors[i * 3 + 1] = 0.2;
        lightColors[i * 3 + 2] = 0.7;
      } else {
        lightColors[i * 3] = 0.4;
        lightColors[i * 3 + 1] = 0.22;
        lightColors[i * 3 + 2] = 0.75;
      }
    }

    return { positions, darkColors, lightColors, originalPositions };
  }, [count]);

  // Swap color buffer when theme changes
  const colors = isDark ? particles.darkColors : particles.lightColors;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.02;
      mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1;

      // Update color attribute when theme changes
      const colorAttr = mesh.current.geometry.attributes.color;
      if (colorAttr) {
        const src = isDark ? particles.darkColors : particles.lightColors;
        for (let i = 0; i < src.length; i++) {
          colorAttr.array[i] = src[i];
        }
        colorAttr.needsUpdate = true;
      }

      const positions = mesh.current.geometry.attributes.position.array;
      const mouseX = pointer.x * 8;
      const mouseY = pointer.y * 8;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const ox = particles.originalPositions[i3];
        const oy = particles.originalPositions[i3 + 1];

        // Float animation
        positions[i3 + 1] = oy + Math.sin(time + i * 0.1) * 0.15;

        // Mouse repulsion effect
        const dx = positions[i3] - mouseX;
        const dy = positions[i3 + 1] - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 4) {
          const force = (4 - dist) * 0.02;
          positions[i3] += dx * force * 0.1;
          positions[i3 + 1] += dy * force * 0.1;
        } else {
          // Slowly return to original position
          positions[i3] = THREE.MathUtils.lerp(positions[i3], ox, 0.01);
          positions[i3 + 1] = THREE.MathUtils.lerp(
            positions[i3 + 1],
            oy + Math.sin(time + i * 0.1) * 0.15,
            0.01
          );
        }
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={isDark ? 0.08 : 0.06}
        vertexColors
        transparent
        opacity={isDark ? 0.8 : 0.5}
        sizeAttenuation
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingGeometry({ isDark = true }) {
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3 + pointer.y * 0.5;
      torusRef.current.rotation.y = time * 0.2 + pointer.x * 0.5;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = time * 0.2 - pointer.y * 0.3;
      octaRef.current.rotation.z = time * 0.3 + pointer.x * 0.3;
      octaRef.current.position.y = Math.cos(time * 0.4) * 0.3 + 2;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = time * 0.25 + pointer.x * 0.4;
      icoRef.current.rotation.z = time * 0.15 - pointer.y * 0.4;
      icoRef.current.position.y = Math.sin(time * 0.3 + 1) * 0.4 - 2;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[4, 0, -3]}>
        <torusGeometry args={[1, 0.3, 16, 50]} />
        <meshStandardMaterial
          color={isDark ? '#00f0ff' : '#0066cc'}
          emissive={isDark ? '#00f0ff' : '#0044aa'}
          emissiveIntensity={isDark ? 0.3 : 0.15}
          wireframe
          transparent
          opacity={isDark ? 0.4 : 0.55}
        />
      </mesh>

      <mesh ref={octaRef} position={[-4, 2, -5]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial
          color={isDark ? '#8b5cf6' : '#6d3ad4'}
          emissive={isDark ? '#8b5cf6' : '#5522bb'}
          emissiveIntensity={isDark ? 0.3 : 0.15}
          wireframe
          transparent
          opacity={isDark ? 0.3 : 0.45}
        />
      </mesh>

      <mesh ref={icoRef} position={[-3, -2, -4]}>
        <icosahedronGeometry args={[0.6]} />
        <meshStandardMaterial
          color={isDark ? '#0066ff' : '#0044cc'}
          emissive={isDark ? '#0066ff' : '#003399'}
          emissiveIntensity={isDark ? 0.3 : 0.15}
          wireframe
          transparent
          opacity={isDark ? 0.3 : 0.45}
        />
      </mesh>
    </>
  );
}

export default function ParticleField() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={isDark ? 0.2 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.5 : 0.8} color={isDark ? '#00f0ff' : '#0066cc'} />
        <pointLight position={[-10, -10, -5]} intensity={isDark ? 0.3 : 0.5} color={isDark ? '#8b5cf6' : '#6d3ad4'} />
        <Particles count={150} isDark={isDark} />
        <FloatingGeometry isDark={isDark} />
      </Canvas>
    </div>
  );
}

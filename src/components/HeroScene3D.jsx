import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function MouseTracker({ children }) {
  const group = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        -pointer.y * 0.2,
        0.05
      );
    }
  });

  return <group ref={group}>{children}</group>;
}

function HolographicSphere({ isDark }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.15;
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2;
      const targetScale = hovered ? 2.6 : 2.2;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.05);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.05);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        scale={2.2}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, hovered ? 2 : 1]} />
        <meshStandardMaterial
          color={hovered ? (isDark ? '#00ff88' : '#008855') : (isDark ? '#00f0ff' : '#0066cc')}
          emissive={hovered ? (isDark ? '#00ff88' : '#006644') : (isDark ? '#00f0ff' : '#004488')}
          emissiveIntensity={isDark ? (hovered ? 0.4 : 0.15) : (hovered ? 0.2 : 0.1)}
          wireframe
          transparent
          opacity={isDark ? (hovered ? 0.8 : 0.6) : (hovered ? 0.7 : 0.5)}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere({ isDark }) {
  const meshRef = useRef();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
      const targetScale = clicked ? 2.0 : hovered ? 1.8 : 1.6;
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.08);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.08);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.08);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        scale={1.6}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={isDark ? '#0a0e1a' : '#b0bcd4'}
          emissive={clicked ? (isDark ? '#8b5cf6' : '#5522bb') : (isDark ? '#0066ff' : '#003399')}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0.1}
          metalness={0.9}
          distort={clicked ? 0.6 : hovered ? 0.4 : 0.3}
          speed={clicked ? 5 : 2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({ radius, color, speed, tilt }) {
  const ringRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.z = time * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.01, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

function InteractiveNodes({ isDark }) {
  const groupRef = useRef();
  const nodeCount = 8;
  const [activeNode, setActiveNode] = useState(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: nodeCount }).map((_, i) => {
        const angle = (i / nodeCount) * Math.PI * 2;
        const r = 3;
        const isActive = activeNode === i;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * r,
              Math.sin(angle) * 0.5,
              Math.sin(angle) * r,
            ]}
            scale={isActive ? 3 : 1}
            onClick={() => setActiveNode(isActive ? null : i)}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'default'}
          >
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial
              color={isActive ? (isDark ? '#00ff88' : '#008855') : (isDark ? '#00f0ff' : '#0055bb')}
              emissive={isActive ? (isDark ? '#00ff88' : '#006644') : (isDark ? '#00f0ff' : '#003388')}
              emissiveIntensity={isActive ? 2 : 1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function HeroScene3D() {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={isDark ? 0.1 : 0.4} />
        <pointLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 1.0} color={isDark ? '#00f0ff' : '#0066cc'} />
        <pointLight position={[-5, -5, 5]} intensity={isDark ? 0.5 : 0.7} color={isDark ? '#8b5cf6' : '#6d3ad4'} />
        <pointLight position={[0, 3, 3]} intensity={isDark ? 0.3 : 0.5} color={isDark ? '#0066ff' : '#0044cc'} />

        <MouseTracker>
          <HolographicSphere isDark={isDark} />
          <GlowingSphere isDark={isDark} />

          <OrbitRing radius={3} color={isDark ? '#00f0ff' : '#0066cc'} speed={0.15} tilt={Math.PI / 4} />
          <OrbitRing radius={3.5} color={isDark ? '#8b5cf6' : '#6d3ad4'} speed={-0.1} tilt={-Math.PI / 6} />
          <OrbitRing radius={2.5} color={isDark ? '#0066ff' : '#0044cc'} speed={0.2} tilt={Math.PI / 3} />

          <InteractiveNodes isDark={isDark} />
        </MouseTracker>
      </Canvas>
    </div>
  );
}

import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

function DraggableTorus({ isDark }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [color, setColor] = useState(isDark ? '#00f0ff' : '#0066cc');

  const darkColors = ['#00f0ff', '#8b5cf6', '#0066ff', '#00ff88', '#ff00aa'];
  const lightColors = ['#0066cc', '#5522bb', '#003399', '#008855', '#cc0088'];
  const colors = isDark ? darkColors : lightColors;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = time * 0.3;
      ref.current.rotation.z = time * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={ref}
        position={[-2, 0.5, 0]}
        scale={hovered ? 1.15 : 1}
        onClick={() => setColor(colors[(colors.indexOf(color) + 1) % colors.length])}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'grab'; }}
      >
        <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? (isDark ? 0.6 : 0.3) : (isDark ? 0.3 : 0.15)}
          wireframe
          transparent
          opacity={isDark ? 0.7 : 0.6}
        />
      </mesh>
    </Float>
  );
}

function MorphingSphere({ isDark }) {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh
        ref={ref}
        position={[2, -0.5, 0]}
        scale={active ? 1.4 : hovered ? 1.2 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
        onPointerOut={() => { setHovered(false); document.body.style.cursor = 'grab'; }}
      >
        <sphereGeometry args={[0.8, 64, 64]} />
        <MeshDistortMaterial
          color={isDark ? '#0a0e1a' : '#b0bcd4'}
          emissive={active ? (isDark ? '#ff00aa' : '#cc0088') : (isDark ? '#8b5cf6' : '#5522bb')}
          emissiveIntensity={hovered ? 1.0 : 0.5}
          roughness={0.1}
          metalness={0.9}
          distort={active ? 0.8 : hovered ? 0.5 : 0.3}
          speed={active ? 6 : 3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function ClickableOctahedron({ isDark }) {
  const ref = useRef();
  const [exploded, setExploded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = time * 0.5;
      ref.current.rotation.x = time * 0.3;
      const targetScale = exploded ? 1.8 : hovered ? 1.2 : 1;
      ref.current.scale.x = THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.08);
      ref.current.scale.y = THREE.MathUtils.lerp(ref.current.scale.y, targetScale, 0.08);
      ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, targetScale, 0.08);
    }
  });

  return (
    <mesh
      ref={ref}
      position={[0, 0, 1]}
      onClick={() => setExploded(!exploded)}
      onPointerOver={() => { setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { setHovered(false); document.body.style.cursor = 'grab'; }}
    >
      <octahedronGeometry args={[0.7, exploded ? 2 : 0]} />
      <meshStandardMaterial
        color={exploded ? (isDark ? '#00ff88' : '#008855') : (isDark ? '#0066ff' : '#003399')}
        emissive={exploded ? (isDark ? '#00ff88' : '#006644') : (isDark ? '#0066ff' : '#002266')}
        emissiveIntensity={hovered ? 0.8 : 0.4}
        wireframe={!exploded}
        transparent
        opacity={isDark ? 0.7 : 0.6}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function MiniParticles({ isDark }) {
  const ref = useRef();
  const count = 60;
  const { pointer } = useThree();

  const positions = useRef(new Float32Array(count * 3));
  const velocities = useRef(new Float32Array(count * 3));

  useState(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 8;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 4;
      velocities.current[i * 3] = 0;
      velocities.current[i * 3 + 1] = 0;
      velocities.current[i * 3 + 2] = 0;
    }
  });

  useFrame(() => {
    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array;
      const mouseX = pointer.x * 4;
      const mouseY = pointer.y * 3;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const dx = pos[i3] - mouseX;
        const dy = pos[i3 + 1] - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 2) {
          const force = (2 - dist) * 0.05;
          velocities.current[i3] += dx * force * 0.1;
          velocities.current[i3 + 1] += dy * force * 0.1;
        }

        // Apply velocity with damping
        velocities.current[i3] *= 0.95;
        velocities.current[i3 + 1] *= 0.95;

        pos[i3] += velocities.current[i3];
        pos[i3 + 1] += velocities.current[i3 + 1];

        // Boundary check
        if (Math.abs(pos[i3]) > 5) velocities.current[i3] *= -0.5;
        if (Math.abs(pos[i3 + 1]) > 4) velocities.current[i3 + 1] *= -0.5;
      }

      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={isDark ? '#00f0ff' : '#0055bb'}
        transparent
        opacity={isDark ? 0.6 : 0.45}
        sizeAttenuation
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function Interactive3DPlayground() {
  const { isDark } = useTheme();

  return (
    <div className="relative w-full h-[400px] md:h-[500px] my-8">
      {/* Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-4 py-2 bg-white/[0.03] backdrop-blur-sm rounded-full border border-white/[0.06]">
        <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse"></span>
        <span className="text-xs font-mono text-white/40">interactive playground // drag to rotate, click objects to interact</span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent', cursor: 'grab' }}
        gl={{ alpha: true, antialias: true }}
        onPointerDown={() => document.body.style.cursor = 'grabbing'}
        onPointerUp={() => document.body.style.cursor = 'grab'}
      >
        <ambientLight intensity={isDark ? 0.15 : 0.4} />
        <pointLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 1.0} color={isDark ? '#00f0ff' : '#0066cc'} />
        <pointLight position={[-5, -3, 5]} intensity={isDark ? 0.5 : 0.7} color={isDark ? '#8b5cf6' : '#6d3ad4'} />
        <pointLight position={[0, -5, 3]} intensity={isDark ? 0.3 : 0.5} color={isDark ? '#0066ff' : '#0044cc'} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />

        <DraggableTorus isDark={isDark} />
        <MorphingSphere isDark={isDark} />
        <ClickableOctahedron isDark={isDark} />
        <MiniParticles isDark={isDark} />
      </Canvas>
    </div>
  );
}

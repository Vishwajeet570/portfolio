"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry({ position, geometry, color, speed = 1 }: {
  position: [number, number, number];
  geometry: "icosahedron" | "octahedron" | "tetrahedron" | "torus";
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    meshRef.current.rotation.y += 0.005 * speed;
    meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * speed * 0.3) * 0.2;
  });

  const geom = useMemo(() => {
    switch (geometry) {
      case "icosahedron": return <icosahedronGeometry args={[1, 0]} />;
      case "octahedron": return <octahedronGeometry args={[1, 0]} />;
      case "tetrahedron": return <tetrahedronGeometry args={[1, 0]} />;
      case "torus": return <torusGeometry args={[0.8, 0.3, 8, 16]} />;
      default: return <icosahedronGeometry args={[1, 0]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {geom}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.002;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <Sphere ref={ref} args={[2.5, 64, 64]} position={[0, 0, -3]}>
      <MeshDistortMaterial
        color="#00d4ff"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0}
        metalness={0.8}
        transparent
        opacity={0.15}
        emissive="#7b2fff"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#00d4ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function CameraRig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.mouse.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (state.mouse.y * 1.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <CameraRig />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} color="#00d4ff" intensity={2} />
      <pointLight position={[-10, -10, -5]} color="#7b2fff" intensity={1.5} />
      <pointLight position={[0, 5, 5]} color="#ffffff" intensity={0.5} />

      <GlowingSphere />
      <Particles />

      <FloatingGeometry position={[-4, 2, 0]} geometry="icosahedron" color="#00d4ff" speed={0.8} />
      <FloatingGeometry position={[4, -1.5, -1]} geometry="octahedron" color="#7b2fff" speed={1.2} />
      <FloatingGeometry position={[-3, -2.5, 1]} geometry="tetrahedron" color="#ff6b35" speed={0.9} />
      <FloatingGeometry position={[3.5, 2.5, -2]} geometry="torus" color="#00d4ff" speed={0.6} />
      <FloatingGeometry position={[0, 3, -4]} geometry="icosahedron" color="#7b2fff" speed={1.0} />
      <FloatingGeometry position={[-5, 0, -3]} geometry="octahedron" color="#ff6b35" speed={1.4} />
    </Canvas>
  );
}

"use client";

import { Canvas, useFrame, RootState } from "@react-three/fiber";
import { Float, Center } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function FloatingObjects() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const floatRef = useRef<THREE.Mesh>(null);
  
  // Mouse coordinates
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize coordinates (-1 to 1)
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update object positions and rotations on frame render
  useFrame((state: RootState) => {
    const t = state.clock.getElapsedTime();
    
    // Listen to scroll position
    const scrollY = typeof window !== "undefined" ? window.scrollY : 0;
    
    // Slow rotational drift
    if (groupRef.current) {
      // Gentle cursor-following rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.current.x * 0.4 + scrollY * 0.0015,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.3 + scrollY * 0.0008,
        0.05
      );
    }

    // Individual shape micro-rotations
    if (coreRef.current) {
      coreRef.current.rotation.z = t * 0.15;
      coreRef.current.rotation.y = t * 0.1;
    }
    
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.08;
      ringRef.current.rotation.y = -t * 0.12;
    }

    if (floatRef.current) {
      floatRef.current.position.y = Math.sin(t * 1.5) * 0.25;
      floatRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 1. Golden Central Ring / Torus Knot (Precision & Growth) */}
      <mesh ref={ringRef} castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.22, 160, 16, 2, 3]} />
        <meshPhysicalMaterial
          color="#D4AF37"
          roughness={0.15}
          metalness={0.9}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* 2. Deep Navy Blue Semi-Transparent Glass Cuboid (Foundation & Stability) */}
      <mesh ref={coreRef} position={[0, 0, 0]} castShadow>
        <boxGeometry args={[1.3, 1.3, 1.3]} />
        <meshPhysicalMaterial
          color="#0A1128"
          roughness={0.1}
          metalness={0.2}
          transmission={0.6} // glass-like
          thickness={1.5}
          clearcoat={1.0}
        />
      </mesh>

      {/* 3. Floating Ivory Sphere representing Balance */}
      <mesh ref={floatRef} position={[1.8, 1.2, -0.5]} castShadow>
        <icosahedronGeometry args={[0.55, 3]} />
        <meshPhysicalMaterial
          color="#F5F3ED"
          roughness={0.4}
          metalness={0.0}
          clearcoat={0.2}
        />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[550px] relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        
        {/* Rich multi-directional luxury studio lighting */}
        <directionalLight
          position={[5, 5, 4]}
          intensity={2.5}
          color="#FFE8C5" // Soft gold
          castShadow
        />
        <directionalLight
          position={[-5, -2, 2]}
          intensity={1.5}
          color="#90B0FF" // Soft ice blue
        />
        <pointLight position={[0, -3, 3]} intensity={1.0} color="#FDFBF7" />

        <Center>
          <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
            <FloatingObjects />
          </Float>
        </Center>
      </Canvas>
    </div>
  );
}

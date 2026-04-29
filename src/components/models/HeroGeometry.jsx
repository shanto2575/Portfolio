"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from "@react-three/drei";

function Geometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <TorusKnot ref={meshRef} args={[1, 0.3, 128, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#7C3AED"
          emissive="#06B6D4"
          emissiveIntensity={0.5}
          wireframe
          distort={0.4}
          speed={2}
        />
      </TorusKnot>
    </Float>
  );
}

export default function HeroGeometry() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Geometry />
      </Canvas>
    </div>
  );
}

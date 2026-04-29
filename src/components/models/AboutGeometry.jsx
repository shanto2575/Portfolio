"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshTransmissionMaterial } from "@react-three/drei";

function Geometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 0]} scale={1.2}>
        <MeshTransmissionMaterial
          backside
          thickness={0.5}
          roughness={0.2}
          transmission={1}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          color="#06B6D4"
        />
      </Icosahedron>
    </Float>
  );
}

export default function AboutGeometry() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7C3AED" />
        <Geometry />
      </Canvas>
    </div>
  );
}

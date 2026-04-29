"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] bg-background overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent/10 blur-[100px]" />

      {/* 3D Stars */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />
    </div>
  );
}

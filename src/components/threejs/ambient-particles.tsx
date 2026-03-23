"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface AmbientParticlesInnerProps {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
  secondaryColor?: string;
  secondaryRatio?: number;
  speed?: number;
  parallaxStrength?: number;
}

const _tempVec = new THREE.Vector3();

function AmbientParticlesInner({
  count = 600,
  spread = 12,
  size = 0.025,
  color = "#88ccff",
  secondaryColor = "#1d4ed8",
  secondaryRatio = 0.2,
  speed = 0.15,
  parallaxStrength = 0.4,
}: AmbientParticlesInnerProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const pointer = useRef({ x: 0, y: 0 });
  const smoothPointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  const sprite = useMemo(() => {
    const d = 64;
    const canvas = document.createElement("canvas");
    canvas.width = d;
    canvas.height = d;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.3, "rgba(255,255,255,0.6)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, d, d);
    return new THREE.CanvasTexture(canvas);
  }, []);

  const { positions, colors, velocities } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    const v = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      p[i * 3 + 0] = (Math.random() - 0.5) * spread;
      p[i * 3 + 1] = (Math.random() - 0.5) * spread;
      p[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;

      v[i * 3 + 0] = (Math.random() - 0.5) * 0.02;
      v[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      v[i * 3 + 2] = (Math.random() - 0.5) * 0.01;

      const isSecondary = Math.random() < secondaryRatio;
      const hex = isSecondary ? secondaryColor : color;
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;

      c[i * 3 + 0] = r;
      c[i * 3 + 1] = g;
      c[i * 3 + 2] = b;
    }
    return { positions: p, colors: c, velocities: v };
  }, [count, spread, color, secondaryColor, secondaryRatio]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const dt = Math.min(delta, 0.1);

    smoothPointer.current.x += (pointer.current.x - smoothPointer.current.x) * 2 * dt;
    smoothPointer.current.y += (pointer.current.y - smoothPointer.current.y) * 2 * dt;

    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const halfSpread = spread / 2;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      arr[i3 + 0] += velocities[i3 + 0] * speed;
      arr[i3 + 1] += velocities[i3 + 1] * speed;
      arr[i3 + 2] += velocities[i3 + 2] * speed;

      if (arr[i3 + 0] > halfSpread) arr[i3 + 0] = -halfSpread;
      if (arr[i3 + 0] < -halfSpread) arr[i3 + 0] = halfSpread;
      if (arr[i3 + 1] > halfSpread) arr[i3 + 1] = -halfSpread;
      if (arr[i3 + 1] < -halfSpread) arr[i3 + 1] = halfSpread;
    }

    posAttr.needsUpdate = true;

    pointsRef.current.position.x = smoothPointer.current.x * parallaxStrength;
    pointsRef.current.position.y = smoothPointer.current.y * parallaxStrength;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        alphaTest={0.01}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        size={size}
        vertexColors
        opacity={0.7}
      />
    </points>
  );
}

export interface AmbientParticlesProps extends AmbientParticlesInnerProps {
  className?: string;
}

export default function AmbientParticlesScene({
  className,
  ...props
}: AmbientParticlesProps) {
  return (
    <div className={className ?? "fixed z-0 h-screen w-screen"}>
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <AmbientParticlesInner {...props} />
      </Canvas>
    </div>
  );
}

export { AmbientParticlesInner };

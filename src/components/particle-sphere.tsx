"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";

interface ParticleSphereProps {
  count?: number; // total points
  radius?: number; // base radius
  radialNoiseScale?: number; // noise frequency for radial pulse
  radialNoiseStrength?: number; // how far in/out they pulse
  swirlNoiseScale?: number; // noise frequency for swirl
  swirlNoiseStrength?: number; // max swirl angle (in radians)
  swirlSpeed?: number; // speed multiplier for swirl noise time
  size?: number; // point size
  color?: string; // point color
  secondaryColor?: string; // secondary point color
  secondaryColorRatio?: number; // ratio of secondary color points
}

function ParticleSphere({
  count = 5000,
  radius = 1.5,
  radialNoiseScale = 1,
  radialNoiseStrength = 0.01,
  swirlNoiseScale = 0.3,
  swirlNoiseStrength = Math.PI * 1, // up to 180°
  swirlSpeed = 0.05,
  size = 0.01,
  color = "#88ccff",
  secondaryColor = "#1d4ed8", // text-blue-700
  secondaryColorRatio = 0.25, // 25%
}: ParticleSphereProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const noise = useMemo(() => new SimplexNoise(), []);

  // — 1) build a soft circular sprite —
  const sprite = useMemo(() => {
    const d = 64;
    const canvas = document.createElement("canvas");
    canvas.width = d;
    canvas.height = d;
    const ctx = canvas.getContext("2d")!;
    const grad = ctx.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
    grad.addColorStop(0, "rgba(255,255,255,1)");
    grad.addColorStop(0.2, "rgba(255,255,255,1)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, d, d);
    return new THREE.CanvasTexture(canvas);
  }, []);

  // — 2) precompute anchors (unit vectors) & swirl axes —
  const { anchors, axes } = useMemo(() => {
    const a: THREE.Vector3[] = [];
    const ax: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      // random point on unit sphere
      const z = 2 * Math.random() - 1;
      const θ = 2 * Math.PI * Math.random();
      const r = Math.sqrt(1 - z * z);
      const v = new THREE.Vector3(r * Math.cos(θ), r * Math.sin(θ), z);
      a.push(v);
      // pick a perpendicular axis: cross with Y; fallback if parallel
      const candidate = new THREE.Vector3(0, 1, 0).cross(v);
      if (candidate.lengthSq() < 1e-6) {
        // v was nearly up/down, use X axis
        ax.push(new THREE.Vector3(1, 0, 0));
      } else {
        ax.push(candidate.normalize());
      }
    }
    return { anchors: a, axes: ax };
  }, [count]);

  // — 3) initial positions array (on perfect sphere) —
  const { positions, colors } = useMemo(() => {
    const p = new Float32Array(count * 3);
    const c = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const v = anchors[i];
      p[i * 3 + 0] = v.x * radius;
      p[i * 3 + 1] = v.y * radius;
      p[i * 3 + 2] = v.z * radius;

      // Randomly assign secondary color to 1% of particles
      const isSecondary = Math.random() < secondaryColorRatio;
      const particleColor = isSecondary ? secondaryColor : color;

      // Convert hex color to RGB
      const r = parseInt(particleColor.slice(1, 3), 16) / 255;
      const g = parseInt(particleColor.slice(3, 5), 16) / 255;
      const b = parseInt(particleColor.slice(5, 7), 16) / 255;

      c[i * 3 + 0] = r;
      c[i * 3 + 1] = g;
      c[i * 3 + 2] = b;
    }
    return { positions: p, colors: c };
  }, [count, anchors, radius, color, secondaryColor, secondaryColorRatio]);

  // — 4) animation loop: radial + swirl + global spin —
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const v = anchors[i];
      const ax = axes[i];

      // radial noise for pulse
      const nr = noise.noise4d(
        v.x * radialNoiseScale + t,
        v.y * radialNoiseScale + t,
        v.z * radialNoiseScale + t,
        t,
      );
      const rr = radius + nr * radialNoiseStrength;

      // swirl noise for rotation angle
      const ns = noise.noise4d(
        v.x * swirlNoiseScale + t * swirlSpeed,
        v.y * swirlNoiseScale + t * swirlSpeed,
        v.z * swirlNoiseScale + t * swirlSpeed,
        t * swirlSpeed,
      );
      const angle = ns * swirlNoiseStrength;

      // rotate the anchor around its axis by angle, then scale by rr
      const p = new THREE.Vector3().copy(v).applyAxisAngle(ax, angle).multiplyScalar(rr);

      arr[i * 3 + 0] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    }

    posAttr.needsUpdate = true;
    // very slow global spin
    pointsRef.current.rotation.y += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={sprite}
        alphaTest={0.2}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        size={size}
        vertexColors
      />
    </points>
  );
}

export default function ParticleSphereScene({}: {}) {
  return (
    <div className="fixed z-0 h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.2} />
        <ParticleSphere color="#aaccff" secondaryColor="#1d4ed8" />
      </Canvas>
    </div>
  );
}

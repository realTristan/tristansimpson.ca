"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";

interface ParticleSphereProps {
  count?: number;
  radius?: number;
  radialNoiseScale?: number;
  radialNoiseStrength?: number;
  swirlNoiseScale?: number;
  swirlNoiseStrength?: number;
  swirlSpeed?: number;
  size?: number;
  color?: string;
  secondaryColor?: string;
  secondaryColorRatio?: number;
}

const _tempVec = new THREE.Vector3();

function ParticleSphere({
  count = 3000,
  radius = 1.5,
  radialNoiseScale = 1,
  radialNoiseStrength = 0.01,
  swirlNoiseScale = 0.3,
  swirlNoiseStrength = Math.PI * 1,
  swirlSpeed = 0.05,
  size = 0.013,
  color = "#88ccff",
  secondaryColor = "#1d4ed8",
  secondaryColorRatio = 0.25,
}: ParticleSphereProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const noise = useMemo(() => new SimplexNoise(), []);

  // build a soft circular sprite
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

  // precompute anchors (unit vectors) & swirl axes —
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

      // check if v was nearly up/down, use X axis
      if (candidate.lengthSq() < 1e-6) {
        ax.push(new THREE.Vector3(1, 0, 0));
      } else {
        ax.push(candidate.normalize());
      }
    }
    return { anchors: a, axes: ax };
  }, [count]);

  // initial positions array (on perfect sphere) —
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

  // animation loop: radial + swirl + global spin
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

      _tempVec.copy(v).applyAxisAngle(ax, angle).multiplyScalar(rr);

      arr[i * 3 + 0] = _tempVec.x;
      arr[i * 3 + 1] = _tempVec.y;
      arr[i * 3 + 2] = _tempVec.z;
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

function MouseTiltGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null!);
  const pointer = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const dt = Math.min(delta, 0.1);
    smooth.current.x += (pointer.current.x - smooth.current.x) * 1.5 * dt;
    smooth.current.y += (pointer.current.y - smooth.current.y) * 1.5 * dt;
    groupRef.current.rotation.x = smooth.current.y * 0.15;
    groupRef.current.rotation.y = smooth.current.x * 0.15;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function ParticleSphereScene(props: ParticleSphereProps) {
  return (
    <div className="fixed z-0 h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.2} />
        <MouseTiltGroup>
          <ParticleSphere {...props} />
        </MouseTiltGroup>
      </Canvas>
    </div>
  );
}

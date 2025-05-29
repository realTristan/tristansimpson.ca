"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";
import { SSAO } from "@react-three/postprocessing";
import { Line } from "@react-three/drei";

interface FloatingTechGridProps {
  gridSize?: number;
  nodeCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
  onLoad?: () => void;
  animateIn?: boolean;
}

function FloatingTechGrid({
  gridSize = 40,
  nodeCount = 40,
  primaryColor = "#444444",
  secondaryColor = "#444444",
  onLoad,
  animateIn = true,
}: FloatingTechGridProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize animation
  const { scale, opacity } = useSpring({
    from: { scale: 0, opacity: 0 },
    to: { scale: animateIn ? 1 : 0, opacity: animateIn ? 1 : 0 },
    config: { mass: 1, tension: 120, friction: 18 },
    onRest: () => {
      if (!isInitialized) {
        setIsInitialized(true);
        onLoad?.();
      }
    },
  });

  // Create nodes and connections
  const { nodes, connections } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const connections: [number, number][] = [];

    // Generate random nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * gridSize,
          (Math.random() - 0.5) * gridSize,
          (Math.random() - 0.5) * gridSize,
        ),
      );
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].distanceTo(nodes[j]);
        if (distance < gridSize * 0.4) {
          connections.push([i, j]);
        }
      }
    }

    return { nodes, connections };
  }, [gridSize, nodeCount]);

  // Streak animation parameters for each connection
  const streakParams = useMemo(() => {
    return connections.map(() => ({
      speed: 0.1 + Math.random() * 0.2, // random speed between 0.15 and 0.35
      phase: Math.random(),
    }));
  }, [connections.length]);

  // Handle mouse movement
  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation frame
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    // Rotate the entire grid
    groupRef.current.rotation.y = time * 0.05;
    // Add subtle floating motion
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <animated.group ref={groupRef} scale={scale}>
      {/* Nodes */}
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          {/* Glow effect */}
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? secondaryColor : primaryColor}
            transparent
            opacity={0.25}
            emissive={index % 3 === 0 ? secondaryColor : primaryColor}
            emissiveIntensity={1.5}
            depthWrite={false}
          />
          {/* Node core */}
          <sphereGeometry args={[0.1, 16, 16]} />
          <animated.meshBasicMaterial
            color={index % 3 === 0 ? secondaryColor : primaryColor}
            transparent
            opacity={opacity}
          />
        </mesh>
      ))}

      {/* Connections */}
      {connections.map(([start, end], index) => (
        <React.Fragment key={`connection-${index}`}>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array([
                    nodes[start].x,
                    nodes[start].y,
                    nodes[start].z,
                    nodes[end].x,
                    nodes[end].y,
                    nodes[end].z,
                  ]),
                  3,
                ]}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <animated.lineBasicMaterial
              color={primaryColor}
              transparent
              opacity={opacity}
              linewidth={1}
            />
          </line>
          {/* White streak traversing the line */}
          <StreakLine
            start={nodes[start]}
            end={nodes[end]}
            speed={streakParams[index].speed}
            phase={streakParams[index].phase}
            streakLength={0.15}
          />
        </React.Fragment>
      ))}
    </animated.group>
  );
}

// Add the StreakLine component
function StreakLine({
  start,
  end,
  speed,
  phase,
  streakLength,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  speed: number;
  phase: number;
  streakLength: number;
}) {
  const [points, setPoints] = React.useState([start, end]);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed + phase) % 1;
    const t2 = Math.min(t + streakLength, 0.999);
    if (t2 > t) {
      const p1 = new THREE.Vector3().lerpVectors(start, end, t);
      const p2 = new THREE.Vector3().lerpVectors(start, end, t2);
      setPoints([p1, p2]);
    }
  });
  return <Line points={points} color="white" lineWidth={1} transparent opacity={0.95} />;
}

export default function FloatingTechGridScene(props: FloatingTechGridProps) {
  return (
    <div className="fixed z-0 h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <FloatingTechGrid {...props} />
        <EffectComposer enableNormalPass>
          <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

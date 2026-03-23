"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useSpring, animated } from "@react-spring/three";

interface FloatingTechGridProps {
  gridSize?: number;
  nodeCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
  onLoad?: () => void;
  animateIn?: boolean;
}

const _streakP1 = new THREE.Vector3();
const _streakP2 = new THREE.Vector3();

function FloatingTechGrid({
  gridSize = 68,
  nodeCount = 24,
  primaryColor = "#444444",
  secondaryColor = "#444444",
  onLoad,
  animateIn = true,
}: FloatingTechGridProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [isInitialized, setIsInitialized] = useState(false);

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

  const { nodes, connections } = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const connections: [number, number][] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * gridSize,
          (Math.random() - 0.5) * gridSize,
          (Math.random() - 0.5) * gridSize,
        ),
      );
    }

    for (let i = 0; i < nodes.length; i++) {
      const distances = nodes.map((n, j) => ({
        index: j,
        dist: nodes[i].distanceTo(n),
      }));

      distances.sort((a, b) => a.dist - b.dist);

      let added = 0;
      for (let k = 1; k < distances.length && added < 2; k++) {
        const j = distances[k].index;

        if (
          i < j &&
          !connections.some(([a, b]) => (a === i && b === j) || (a === j && b === i))
        ) {
          connections.push([i, j]);
          added++;
        }
      }
    }

    return { nodes, connections };
  }, [gridSize, nodeCount]);

  const streakParams = useMemo(() => {
    return connections.map(() => ({
      speed: 0.1 + Math.random() * 0.2,
      phase: Math.random(),
    }));
  }, [connections]);

  const connectionGeometries = useMemo(() => {
    return connections.map(([start, end]) =>
      new Float32Array([
        nodes[start].x, nodes[start].y, nodes[start].z,
        nodes[end].x, nodes[end].y, nodes[end].z,
      ]),
    );
  }, [connections, nodes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.05;
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
  });

  return (
    <animated.group ref={groupRef} scale={scale}>
      {nodes.map((position, index) => (
        <mesh key={`node-${index}`} position={position}>
          <sphereGeometry args={[0.18, 8, 8]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? secondaryColor : primaryColor}
            transparent
            opacity={0.25}
            emissive={index % 3 === 0 ? secondaryColor : primaryColor}
            emissiveIntensity={1.5}
            depthWrite={false}
          />
        </mesh>
      ))}

      {nodes.map((position, index) => (
        <mesh key={`node-core-${index}`} position={position}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <animated.meshBasicMaterial
            color={index % 3 === 0 ? secondaryColor : primaryColor}
            transparent
            opacity={opacity}
          />
        </mesh>
      ))}

      {connections.map(([start, end], index) => (
        <React.Fragment key={`connection-${index}`}>
          <line>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[connectionGeometries[index], 3]}
                count={2}
                itemSize={3}
              />
            </bufferGeometry>
            <animated.lineBasicMaterial
              color={primaryColor}
              transparent
              opacity={opacity}
            />
          </line>

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

const StreakLine = React.memo(function StreakLine({
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
  const maxOpacity = 0.95;
  const fadeInDuration = 0.2;
  const lineRef = useRef<THREE.Line>(null);
  const posArray = useMemo(() => new Float32Array(6), []);

  useFrame(({ clock }) => {
    if (!lineRef.current) return;

    const t = (clock.getElapsedTime() * speed + phase) % 1;
    const fadeIn = Math.min(1, t / fadeInDuration);
    const currentLength = streakLength * fadeIn;
    const t2 = Math.min(t + currentLength, 0.999);

    if (t2 > t) {
      _streakP1.lerpVectors(start, end, t);
      _streakP2.lerpVectors(start, end, t2);

      posArray[0] = _streakP1.x;
      posArray[1] = _streakP1.y;
      posArray[2] = _streakP1.z;
      posArray[3] = _streakP2.x;
      posArray[4] = _streakP2.y;
      posArray[5] = _streakP2.z;

      const geom = lineRef.current.geometry as THREE.BufferGeometry;
      const attr = geom.attributes.position as THREE.BufferAttribute;
      attr.needsUpdate = true;

      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = maxOpacity * fadeIn;
    }
  });

  return (
    <line ref={lineRef as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[posArray, 3]}
          count={2}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#b0b0b0" transparent opacity={0} />
    </line>
  );
});

const FloatingTechGridScene = React.memo(function FloatingTechGridScene(
  props: FloatingTechGridProps,
) {
  return (
    <div className="fixed z-0 h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 25], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <FloatingTechGrid {...props} />
        <EffectComposer>
          <Bloom intensity={0.5} luminanceThreshold={0.2} luminanceSmoothing={0.9} />
        </EffectComposer>
      </Canvas>
    </div>
  );
});

export default FloatingTechGridScene;

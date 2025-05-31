import { RigidBody } from "@react-three/rapier";
import { Box, Cylinder, Sphere, Cone } from "@react-three/drei";
import { config } from "./utils/config";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";

const shapes = [
  { pos: [-6, -4, -6], rot: [0.2, 0.3, 0.1], type: "box" },
  { pos: [6, -4, -6], rot: [0.4, 0.1, 0.2], type: "sphere" },
  { pos: [-6, -4, 6], rot: [0.1, 0.4, 0.3], type: "pyramid" },
  { pos: [6, -4, 6], rot: [0.3, 0.2, 0.4], type: "cylinder" },
  { pos: [-7, 2, -7], rot: [0.4, 0.1, 0.2], type: "sphere" },
  { pos: [7, 3, -7], rot: [0.1, 0.4, 0.3], type: "pyramid" },
  { pos: [-7, 2, 7], rot: [0.3, 0.2, 0.4], type: "cylinder" },
  { pos: [7, 0, 7], rot: [0.2, 0.3, 0.1], type: "box" },
];

export function StaticShapes({ animateIn = true }: { animateIn?: boolean }) {
  return (
    <>
      {shapes.map((shape, i) => (
        <AnimatedShape
          key={i}
          shape={shape}
          material={config.materials.shapes}
          delay={i * 80}
          animateIn={animateIn}
        />
      ))}
    </>
  );
}

function AnimatedShape({ shape, material, delay, animateIn }: any) {
  const [done, setDone] = useState(false);

  const scale = 2;

  const spring = useSpring({
    from: { position: [shape.pos[0], 20, shape.pos[2]] },
    to: { position: animateIn ? shape.pos : [shape.pos[0], 20, shape.pos[2]] },
    config: { mass: 1, tension: 120, friction: 18 },
    delay,
    onRest: () => setDone(true),
  });

  if (!done && animateIn) {
    return (
      <animated.mesh position={spring.position as any} rotation={shape.rot}>
        {shape.type === "box" && <boxGeometry args={[scale, scale, scale]} />}
        {shape.type === "cylinder" && (
          <cylinderGeometry args={[scale / 2, scale / 2, scale * 2, 32]} />
        )}
        {shape.type === "sphere" && <sphereGeometry args={[scale / 1.5, 32, 32]} />}
        {shape.type === "pyramid" && <coneGeometry args={[scale / 1.5, scale * 2, 4]} />}
        <primitive object={material} attach="material" />
      </animated.mesh>
    );
  }

  // After animation, render as a physics object
  return (
    <RigidBody
      type="fixed"
      position={shape.pos}
      rotation={shape.rot}
      colliders="cuboid"
      friction={1}
      restitution={0.2}
      density={1}
    >
      {shape.type === "box" && <Box args={[scale, scale, scale]} material={material} />}

      {shape.type === "cylinder" && (
        <Cylinder args={[scale / 2, scale / 2, scale * 2, 32]} material={material} />
      )}

      {shape.type === "sphere" && (
        <Sphere args={[scale / 1.5, 32, 32]} material={material} />
      )}

      {shape.type === "pyramid" && (
        <Cone args={[scale / 1.5, scale * 2, 4]} material={material} />
      )}
    </RigidBody>
  );
}

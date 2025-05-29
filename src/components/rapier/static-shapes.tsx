import { RigidBody } from "@react-three/rapier";
import { Box, Cylinder, Sphere, Cone } from "@react-three/drei";
import { config } from "./utils/config";
import { useSpring, animated } from "@react-spring/three";
import React from "react";

const AnimatedRigidBody = animated(RigidBody);

type Shape = {
  pos: [number, number, number];
  rot: [number, number, number];
  type: "box" | "cylinder" | "sphere" | "pyramid";
};

// Create arbitrary positions with some rotation
const shapes: Shape[] = [
  // Bottom layer
  { pos: [-6, -4, -6], rot: [0.2, 0.3, 0.1], type: "box" },
  { pos: [6, -4, -6], rot: [0.4, 0.1, 0.2], type: "sphere" },
  { pos: [-6, -4, 6], rot: [0.1, 0.4, 0.3], type: "pyramid" },
  { pos: [6, -4, 6], rot: [0.3, 0.2, 0.4], type: "cylinder" },
  // Middle layer
  { pos: [-7, 2, -7], rot: [0.4, 0.1, 0.2], type: "sphere" },
  { pos: [7, 3, -7], rot: [0.1, 0.4, 0.3], type: "pyramid" },
  { pos: [-7, 2, 7], rot: [0.3, 0.2, 0.4], type: "cylinder" },
  { pos: [7, 0, 7], rot: [0.2, 0.3, 0.1], type: "box" },
];

export function StaticShapes({ animateIn = false }: { animateIn?: boolean }) {
  return (
    <>
      {shapes.map((shape, i) => {
        const scale = 2;
        const material =
          i % 3 === 0 ? config.materials.secondary : config.materials.tertiary;
        // Animate from y=20 to y=shape.pos[1]
        const { position } = useSpring({
          position: animateIn ? shape.pos : [shape.pos[0], 20, shape.pos[2]],
          config: { mass: 1, tension: 120, friction: 18 },
          delay: i * 80,
        });

        return (
          <AnimatedRigidBody
            key={i}
            type="fixed"
            position={position as any}
            rotation={shape.rot}
            colliders="cuboid"
            friction={1}
            restitution={0.2}
            density={1}
          >
            {shape.type === "box" && (
              <Box args={[scale, scale, scale]} material={material} />
            )}
            {shape.type === "cylinder" && (
              <Cylinder
                args={[scale / 2, scale / 2, scale * 2, 32]}
                material={material}
              />
            )}
            {shape.type === "sphere" && (
              <Sphere args={[scale / 1.5, 32, 32]} material={material} />
            )}
            {shape.type === "pyramid" && (
              <Cone args={[scale / 1.5, scale * 2, 4]} material={material} />
            )}
          </AnimatedRigidBody>
        );
      })}
    </>
  );
}

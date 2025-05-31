"use client";

import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import { useRef } from "react";
import { Vector3, PointLight as ThreePointLight } from "three";
import { Sphere } from "@react-three/drei";
import { config } from "./utils/config";

export function PointerBall({ color = "primary" }: { color?: "primary" | "secondary" }) {
  const vec = new Vector3();
  const ref = useRef<any>(null);
  const lightRef = useRef<ThreePointLight>(null);

  useFrame(({ mouse, viewport }, delta) => {
    if (!ref.current) return;

    easing.damp3(
      vec,
      [
        /* x */ (mouse.x * viewport.width) / 2,
        /* y */ (mouse.y * viewport.height) / 2,
        /* z */ 0,
      ],
      0.1,
      delta,
      Infinity,
    );

    ref.current.setNextKinematicTranslation(vec);
  });

  useFrame((state) => {
    if (!lightRef.current) {
      return;
    }

    // Pulse the light intensity between 5 and 20
    const time = state.clock.getElapsedTime();
    lightRef.current.intensity = 12.5 + Math.sin(time * 3) * 7.5;
  });

  return (
    <RigidBody
      type="kinematicPosition"
      ref={ref}
      colliders="ball"
      friction={1}
      restitution={0.5}
      density={1}
    >
      <Sphere
        material={
          color === "primary" ? config.materials.primary : config.materials.secondary
        }
        args={[0.6, 32, 32]}
      />
      <primitive
        ref={lightRef}
        object={
          new ThreePointLight(
            color === "primary"
              ? config.materials.primary.color
              : config.materials.secondary.color,
            10,
            10,
            2,
          )
        }
      />
    </RigidBody>
  );
}

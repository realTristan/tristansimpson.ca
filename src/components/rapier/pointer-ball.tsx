"use client";

import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { easing } from "maath";
import { useRef } from "react";
import { Vector3 } from "three";
import { Sphere } from "@react-three/drei";
import { config } from "./utils/config";

export function PointerBall() {
  const vec = new Vector3();
  const ref = useRef<any>(null);

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

  return (
    <RigidBody type="kinematicPosition" ref={ref}>
      <Sphere material={config.materials.primary} args={[0.6, 32, 32]} />
    </RigidBody>
  );
}

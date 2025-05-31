import { InstancedRigidBodies, type InstancedRigidBodyProps } from "@react-three/rapier";
import { generateSphereInstances } from "./utils/generate-sphere-instances";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { config } from "./utils/config";

export function RapierRigidBodies() {
  const instances: InstancedRigidBodyProps[] = generateSphereInstances(
    config.numberOfSphereInstances,
  );

  const ref = useRef<any>(null);

  useFrame((_, delta) => {
    if (!ref.current) {
      return;
    }

    ref.current.forEach((sphere: any) => {
      sphere.applyImpulse(
        new Vector3()
          .copy(sphere.translation())
          .normalize()
          .multiplyScalar(-400 * delta),
      );
    });
  });

  return (
    <InstancedRigidBodies
      ref={ref}
      linearDamping={0.65}
      angularDamping={0.95}
      instances={instances}
    >
      <instancedMesh
        args={[undefined, undefined, config.numberOfSphereInstances]}
        material={config.materials.ball}
        castShadow
      >
        <sphereGeometry args={[0.8, 32, 32]} />
      </instancedMesh>
    </InstancedRigidBodies>
  );
}

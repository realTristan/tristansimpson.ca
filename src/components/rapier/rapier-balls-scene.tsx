import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Color } from "three";
import { EffectComposer, SSAO } from "@react-three/postprocessing";
import { PointerBall } from "./pointer-ball";
import { RapierRigidBodies } from "./rapier-rigid-bodies";
import { StaticShapes } from "./static-shapes";
import { cn } from "@/lib/utils";
import { primaryColor } from "./utils/config";
import React, { Suspense, useEffect } from "react";
import { SceneLoading } from "@/components/scene-loading";
import { Html } from "@react-three/drei";

interface RapierBallsSceneProps {
  className?: string;
  onLoaded?: () => void;
  animateIn?: boolean;
  pointerColor?: "primary" | "secondary";
}

export default function RapierBallsScene({
  className,
  onLoaded,
  animateIn = true,
  pointerColor = "primary",
}: RapierBallsSceneProps) {
  // Call onLoaded after Suspense resolves (after first render)
  useEffect(() => {
    if (onLoaded) {
      // Delay to ensure all children are mounted
      const t = setTimeout(() => onLoaded(), 0);
      return () => clearTimeout(t);
    }
  }, [onLoaded]);

  return (
    <div className={cn("fixed top-0 left-0 z-40 h-screen w-screen", className)}>
      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
      >
        <Suspense
          fallback={
            <Html center>
              <SceneLoading />
            </Html>
          }
        >
          <Physics gravity={[0, 2, 0]}>
            <RapierRigidBodies />
            <PointerBall color={pointerColor} />
            <StaticShapes animateIn={animateIn} />
          </Physics>

          <ambientLight intensity={1} />
          <spotLight
            position={[20, 20, 25]}
            penumbra={1}
            angle={0.2}
            color="white"
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight position={[0, 5, -4]} intensity={4} />
          <directionalLight position={[0, -15, 0]} intensity={2} color={primaryColor} />
          <EffectComposer multisampling={0} enableNormalPass>
            <SSAO
              samples={11}
              radius={0.15}
              intensity={20}
              luminanceInfluence={0.6}
              color={new Color("black")}
              worldDistanceThreshold={0}
              worldDistanceFalloff={0}
              worldProximityThreshold={0}
              worldProximityFalloff={0}
            />
            <SSAO
              samples={21}
              radius={0.03}
              intensity={15}
              luminanceInfluence={0.6}
              color={new Color("black")}
              worldDistanceThreshold={0}
              worldDistanceFalloff={0}
              worldProximityThreshold={0}
              worldProximityFalloff={0}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

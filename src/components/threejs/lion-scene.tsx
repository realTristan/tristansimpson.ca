"use client";

import { Center } from "@react-three/drei";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Box3, Vector3 } from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { AmbientParticlesInner } from "./ambient-particles";

let _sharedDraco: DRACOLoader | null = null;
function getSharedDraco() {
  if (!_sharedDraco) {
    _sharedDraco = new DRACOLoader();
    _sharedDraco.setDecoderPath("/draco/");
    _sharedDraco.setDecoderConfig({ type: "js" });
  }
  return _sharedDraco;
}

interface LionSceneProps {
  modelPath: string;
  onObjectLoad: () => void;
}

export default function LionScene({ modelPath, onObjectLoad }: LionSceneProps) {
  const [dpr, setDpr] = useState<[number, number]>([1, 1]);

  useEffect(() => {
    setDpr([1, window.devicePixelRatio]);
  }, []);

  return (
    <Canvas
      className="pointer-events-none absolute inset-0 z-auto m-0 h-full w-full"
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
      }}
      dpr={dpr}
      style={{
        background: "radial-gradient(circle at center, #171717 0%, #050505 58%)",
      }}
    >
      <ambientLight intensity={0.02} />
      <AmbientParticlesInner
        count={300}
        spread={8}
        size={0.015}
        speed={0.08}
        parallaxStrength={0.2}
      />
      <Suspense fallback={null}>
        <Model modelPath={modelPath} onLoad={onObjectLoad} />
      </Suspense>
    </Canvas>
  );
}

interface ModelProps {
  modelPath: string;
  onLoad: () => void;
}

function Model({ modelPath, onLoad }: ModelProps) {
  const [lift, setLift] = useState(0);
  const hasInitialized = useRef(false);

  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.setDRACOLoader(getSharedDraco());
  });

  const modelRef = useRef<THREE.Object3D>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { camera } = useThree();
  const prevTime = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  const stableOnLoad = useCallback(onLoad, [onLoad]);

  useEffect(() => {
    if (!gltf.scene || hasInitialized.current) {
      return;
    }

    hasInitialized.current = true;

    const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());

    gltf.scene.position.sub(center);
    setLift(size.y * 0.15);

    const distance = Math.max(size.x, size.y, size.z) * 0.9;
    camera.position.set(0, size.y * 0.3, distance);
    camera.lookAt(0.5, size.y * 0.3, 0);

    stableOnLoad();
  }, [gltf, camera, stableOnLoad]);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 8;
      pointer.current.y = (e.clientY / window.innerHeight - 0.4) * 9;
    };

    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const dt = t - prevTime.current;
    prevTime.current = t;

    if (dt > 0.1) {
      return;
    }

    if (lightRef.current) {
      lightRef.current.position.x +=
        (pointer.current.x - lightRef.current.position.x) * 2 * dt;

      lightRef.current.position.y -=
        (pointer.current.y + lightRef.current.position.y - 2) * dt;
    }
  });

  if (!gltf.scene) {
    return null;
  }

  return (
    <group position={[-0.2, lift, 0]}>
      <Center>
        <primitive ref={modelRef} object={gltf.scene} />
        <directionalLight position={[-10, 10, -10]} intensity={0.08} />
        <directionalLight position={[10, 10, 10]} intensity={0.06} />
        <directionalLight position={[-5, 0, -8]} intensity={0.12} color={0x88ccff} />
        <pointLight
          ref={lightRef}
          position={[30, 3, 1.8]}
          distance={6}
          decay={2.5}
          intensity={0.45}
          color={0xfff0e5}
        />
      </Center>
    </group>
  );
}

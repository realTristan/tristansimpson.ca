"use client";

import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Box3, Vector3 } from "three";
import { Center } from "@react-three/drei";
import * as THREE from "three";
import { v4 as uuidv4 } from "uuid";

interface LionSceneProps {
  modelPath: string;
  onObjectLoad: () => void;
}

export default function LionScene({ modelPath, onObjectLoad }: LionSceneProps) {
  const [dpr, setDpr] = useState<[number, number]>([1, 1]);
  const uniqueId = useRef(uuidv4());

  useEffect(() => {
    setDpr([1, window.devicePixelRatio]);
  }, []);

  return (
    <Canvas
      key={uniqueId.current}
      className="pointer-events-none absolute inset-0 z-auto m-0 h-full w-full"
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: true,
        preserveDrawingBuffer: true,
      }}
      dpr={dpr}
      style={{
        background: "radial-gradient(circle at center, #171717 0%, #050505 58%)",
      }}
    >
      <ambientLight intensity={0.01} />
      <Suspense fallback={null}>
        <Model key={uniqueId.current} modelPath={modelPath} onLoad={onObjectLoad} />
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

  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    const draco = new DRACOLoader();
    draco.setDecoderPath("/draco/");
    draco.setDecoderConfig({ type: "js" });
    loader.setDRACOLoader(draco);
  });

  const modelRef = useRef<THREE.Object3D>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const { camera } = useThree();
  const prevTime = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!gltf.scene) {
      return;
    }

    // Compute bounding box + size + center
    const box = new Box3().setFromObject(gltf.scene);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());

    // Recenter model on origin
    gltf.scene.position.sub(center);

    // Lift by 40% of its height to center it better
    setLift(size.y * 0.4);

    // Position camera much closer
    const distance = Math.max(size.x, size.y, size.z) * 0.9;
    camera.position.set(0, size.y * 0.3, distance);
    camera.lookAt(0.5, size.y * 0.3, 0);

    onLoad();
  }, [gltf, camera, lift, onLoad]);

  // Keep animated light + parallax
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
    <>
      <group position={[-0.2, lift, 0]}>
        <Center>
          <primitive ref={modelRef} object={gltf.scene} />

          <directionalLight position={[-10, 10, -10]} intensity={0.05} />
          <directionalLight position={[10, 10, 10]} intensity={0.05} />
          <pointLight
            ref={lightRef}
            position={[30, 3, 1.8]}
            distance={8}
            decay={2}
            intensity={0.3}
            color={0xfff0e5}
          />
        </Center>
      </group>
    </>
  );
}

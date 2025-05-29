'use client'

import React, { useRef, useEffect, Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Box3, Vector3, MeshStandardMaterial } from 'three'
import { Center } from '@react-three/drei'
import * as THREE from 'three'

export default function ApolloScene() {
  const [dpr, setDpr] = useState<[number, number]>([1, 1])
  useEffect(() => {
    setDpr([1, window.devicePixelRatio])
  }, [])

  return (
    <Canvas
      className="pointer-events-none fixed inset-0"
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      dpr={dpr}
      style={{
        background: 'radial-gradient(circle at center, #171717 0%, #050505 58%)'
      }}
    >
      <ambientLight intensity={0.01} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

function Model() {
  const gltf = useLoader(
    GLTFLoader,
    '/apollo.glb',
    loader => {
      const draco = new DRACOLoader()
      draco.setDecoderPath('/draco/')
      draco.setDecoderConfig({ type: 'js' })
      loader.setDRACOLoader(draco)
    }
  )

  const modelRef = useRef<THREE.Object3D>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const { camera } = useThree()
  const prevTime = useRef(0)
  const pointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Compute bounding box + size + center
    const box = new Box3().setFromObject(gltf.scene)
    const size = box.getSize(new Vector3())
    const center = box.getCenter(new Vector3())

    // Recenter model on origin
    gltf.scene.position.sub(center)

    // Head height relative to origin = half total height
    const headY = size.y * 0.35;

    // Position & aim camera
    camera.position.set(0, headY, size.z)
    camera.lookAt(0, headY, 0)
  }, [gltf, camera])

  // (Optional) keep your animated light + parallax
  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 8
      pointer.current.y = (e.clientY / window.innerHeight - 0.4) * 9
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime
    const dt = t - prevTime.current
    prevTime.current = t
    if (dt > 0.1) return

    if (lightRef.current) {
      lightRef.current.position.x +=
        (pointer.current.x - lightRef.current.position.x) * 2 * dt

      lightRef.current.position.y -=
        (pointer.current.y + lightRef.current.position.y - 2) * dt
    }
  })

  return (
    <>
      <group position={[0.1, 0.2, 0]}>
        <Center>
          <primitive ref={modelRef} object={gltf.scene} />

          <directionalLight position={[-10, 10, -10]} intensity={0.05} />
          <directionalLight position={[10, 10, 10]} intensity={0.05} />
          <pointLight
            ref={lightRef}
            position={[30, 3, 1.8]}
            distance={8}
            decay={2}
            intensity={0.2}
            color={0xfff0e5}
          />
        </Center>
      </group>
    </>
  )
}

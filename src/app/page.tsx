import React from "react";
import { Cursor } from "@/components/cursor";
import ParticleSphereScene from "@/components/threejs/particle-sphere";
import AnimatedHeader from "@/app/_components/animated-header";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <AnimatedHeader
        firstName="realtristan"
        lastName="simpson"
        subheader="full stack developer"
        className="relative z-50"
      />

      <ParticleSphereScene />

      <Cursor />
    </main>
  );
}

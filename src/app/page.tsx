"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import ParticleSphereScene from "@/components/particle-sphere";
import AnimatedHeader from "@/app/_components/animated-header";
import Navbar from "@/components/navbar";
import { BrowserView } from "react-device-detect";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <ParticleSphereScene />

      <AnimatedHeader
        firstName="realtristan"
        lastName="simpson"
        subheader="full stack developer"
        className="relative z-50"
      />

      <BrowserView>
        <Cursor />
      </BrowserView>
    </main>
  );
}

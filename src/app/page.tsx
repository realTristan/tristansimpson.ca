"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import ParticleSphereScene from "@/components/particle-sphere";
import AnimatedHeader from "@/components/animated-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

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

      <Cursor />
    </main>
  );
}

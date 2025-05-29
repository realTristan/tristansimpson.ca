"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import ParticleSphereScene from "@/components/particle-sphere";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <ParticleSphereScene />

      <Cursor />
    </main>
  );
}

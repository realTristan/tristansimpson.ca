"use client";

import React, { useState } from "react";
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/navbar";
import RapierBallsScene from "@/components/threejs/rapier/rapier-balls-scene";
import { AnimatedHeader } from "@/app/projects/graphics/_components/animated-header";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      {!isLoading && (
        <AnimatedHeader className="absolute z-50 mx-12 sm:top-1/4 2xl:left-1/2" />
      )}

      <RapierBallsScene onLoaded={() => setIsLoading(false)} animateIn={!isLoading} />
      <Cursor />
    </main>
  );
}

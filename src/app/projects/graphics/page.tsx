"use client";

import React, { useState } from "react";
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/navbar";
import RapierBallsScene from "@/components/rapier/rapier-balls-scene";
import { BrowserView } from "react-device-detect";
import { AnimatedHeader } from "@/app/projects/graphics/_components/animated-header";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPointerOverHeader, setIsPointerOverHeader] = useState(false);

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      {!isLoading && (
        <AnimatedHeader
          className="absolute top-1/4 z-50 mx-12 xl:left-1/2"
          onMouseEnter={() => setIsPointerOverHeader(true)}
          onMouseLeave={() => setIsPointerOverHeader(false)}
        />
      )}

      <BrowserView>
        <RapierBallsScene
          className="hidden lg:flex"
          onLoaded={() => setIsLoading(false)}
          animateIn={!isLoading}
          pointerColor={isPointerOverHeader ? "secondary" : "primary"}
        />
        <Cursor />
      </BrowserView>
    </main>
  );
}

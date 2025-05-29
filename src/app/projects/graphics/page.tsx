"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/navbar";
import RapierBallsScene from "@/components/rapier/rapier-balls-scene";
import { BrowserView } from "react-device-detect";
import { AnimatedHeader } from "@/app/projects/graphics/_components/animated-header";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <BrowserView>
        <AnimatedHeader className="absolute top-1/4 z-50" />
        <RapierBallsScene className="hidden lg:flex" />
        <Cursor />
      </BrowserView>
    </main>
  );
}

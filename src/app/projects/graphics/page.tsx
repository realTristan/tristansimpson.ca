"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import Navbar from "@/components/navbar";
import RapierCanvas from "@/components/rapier/rapier-canvas";
import { BrowserView } from "react-device-detect";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      <BrowserView>
        <RapierCanvas className="hidden lg:flex" />

        <Cursor />
      </BrowserView>
    </main>
  );
}

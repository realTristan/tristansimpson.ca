"use client";

import React from "react";
import { Cursor } from "@/components/cursor";
import ParticleSphereScene from "@/components/particle-sphere";
import AnimatedHeader from "@/components/animated-header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <ParticleSphereScene />

      <AnimatedHeader
        firstName="TRISTAN"
        lastName="SIMPSON"
        subheader="Full Stack Developer & Designer"
        buttons={[
          <Button variant="outline" className="font-normal tracking-widest" asChild>
            <Link key="apollo" href="/projects/apollo">
              Browse Projects
            </Link>
          </Button>,
          <Button className="font-normal tracking-widest" asChild>
            <Link key="contact" href="/about">
              About Me
            </Link>
          </Button>,
        ]}
        className="relative z-50"
      />

      <Cursor />
    </main>
  );
}

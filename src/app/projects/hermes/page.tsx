"use client";

import React, { useState } from "react";
import { Cursor } from "@/components/cursor";
import { SceneLoading } from "@/components/scene-loading";
import { AnimatedHeader } from "./_components/animated-header";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";

// dynamic import with SSR disabled
const ApolloScene = dynamic(() => import("@/components/threejs/apollo-scene"), {
  ssr: false,
});

export default function HomePage() {
  const modelPath = "/apollo.glb";

  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />

      <section className="relative h-screen w-screen overflow-hidden">
        <ApolloScene modelPath={modelPath} onObjectLoad={() => setIsLoading(false)} />

        {isLoading ? (
          <SceneLoading />
        ) : (
          <>
            <div
              id="wrapper"
              className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,5,5,1) 15%, rgba(39,39,39,0) 80%)",
              }}
            >
              <AnimatedHeader className="absolute z-50 mx-12 sm:top-1/4 2xl:left-1/2" />
            </div>
          </>
        )}
      </section>

      <Cursor />
    </main>
  );
}

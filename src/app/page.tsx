"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// dynamic import with SSR disabled
const ApolloScene = dynamic(() => import("@/components/apollo-scene"), {
  ssr: false,
});

export default function HomePage() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 11.5}px`;
        cursorRef.current.style.top = `${e.clientY - 13}px`;
      }
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* client‐only 3D background */}
      <ApolloScene />

      {/* centered overlay */}
      <div
        id="wrapper"
        className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,5,1) 15%, rgba(39,39,39,0) 80%)",
        }}
      >
        <h2 className="my-4 text-4xl font-thin tracking-[0.25em] text-white italic">
          Apollo
        </h2>
        <h1 className="mb-4 text-6xl font-thin tracking-[0.25em] text-white">
          θεός των πάντων
        </h1>
        <p className="max-w-3xl text-sm font-thin tracking-[0.25em] text-white 2xl:text-lg">
          Apollo is one of the Olympian deities in classical Greek and Roman religion and
          Greek and Roman mythology. The national divinity of the Greeks, Apollo has been
          recognized as a god of archery, music and dance, truth and prophecy, healing and
          diseases, the Sun and light, poetry, and more. One of the most important and
          complex of the Greek gods, he is the son of Zeus and Leto, and the twin brother
          of Artemis, goddess of the hunt.
        </p>
      </div>

      {/* custom cursor */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-20 rounded-full border-2 border-white p-[0.6rem] mix-blend-difference ease-linear"
      />
    </div>
  );
}

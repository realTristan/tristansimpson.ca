"use client";

import React from "react";
import { ApolloSection } from "./_components/apollo-section";
import { Cursor } from "@/components/cursor";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <ApolloSection
        title="Project One"
        description="Description of your first project. Explain what technologies you used and what problems you solved."
        modelPath="/apollo.glb"
      />

      <Cursor />
    </main>
  );
}

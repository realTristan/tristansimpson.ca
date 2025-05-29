"use client";

import React from "react";
import { ApolloSection } from "./projects/apollo/_components/apollo-section";
import { Cursor } from "@/components/cursor";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Button asChild>
        <Link href="/projects/apollo">View Apollo</Link>
      </Button>

      <Cursor />
    </main>
  );
}

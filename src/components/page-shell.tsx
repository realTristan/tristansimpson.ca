"use client";

import React from "react";
import Navbar from "@/components/navbar";
import AmbientParticlesScene from "@/components/threejs/ambient-particles";
import { Cursor } from "@/components/cursor";
import { useIsMobile } from "@/hooks/use-mobile";
import { PageBreadcrumb, type BreadcrumbSegment } from "@/components/page-breadcrumb";

interface PageShellProps {
  children: React.ReactNode;
  breadcrumbs?: BreadcrumbSegment[];
  showParticles?: boolean;
}

export function PageShell({
  children,
  breadcrumbs,
  showParticles = true,
}: PageShellProps) {
  const isMobile = useIsMobile();

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden">
      <Navbar />

      {!isMobile && showParticles && <AmbientParticlesScene />}
      {!isMobile && <Cursor />}

      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="z-50 mx-auto w-full max-w-7xl px-4 pt-4">
          <PageBreadcrumb segments={breadcrumbs} />
        </div>
      )}

      <div className="z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-4">
        {children}
      </div>
    </main>
  );
}

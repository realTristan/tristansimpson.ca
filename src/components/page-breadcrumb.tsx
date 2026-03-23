"use client";

import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

export function PageBreadcrumb({ segments }: { segments: BreadcrumbSegment[] }) {
  return (
    <Breadcrumb className="z-50 w-full max-w-7xl px-4">
      <BreadcrumbList>
        {segments.map((segment, i) => {
          const isLast = i === segments.length - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast || !segment.href ? (
                  <BreadcrumbPage className="text-white/60">{segment.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={segment.href} className="text-white/40 hover:text-white/80">
                      {segment.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

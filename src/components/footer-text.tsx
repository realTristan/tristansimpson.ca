"use client";

import { useEffect, useState } from "react";

export function FooterText() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check initially
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <p className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-pulse text-center text-sm text-gray-500">
      {isMobile
        ? "open on desktop for the full 3D experience"
        : "made by tristan simpson"}
    </p>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    <motion.p
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-gray-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
    >
      <motion.span
        animate={{
          y: [0, -4, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {isMobile
          ? "open on desktop for the full 3D experience"
          : "made by tristan simpson, updated 2025"}
      </motion.span>
    </motion.p>
  );
}

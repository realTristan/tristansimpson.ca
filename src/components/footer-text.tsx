"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export function FooterText() {
  const isMobile = useIsMobile();

  return (
    <motion.p
      className="absolute bottom-8 left-1/2 z-[100] -translate-x-1/2 text-center text-sm text-gray-500"
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

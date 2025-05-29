// AnimatedHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // stagger each child (letter) by 0.05s
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function AnimatedHeader({
  firstName,
  lastName,
  subheader,
  className,
}: {
  firstName: string;
  lastName: string;
  subheader?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "flex h-full flex-col items-center gap-12 pt-60 text-center sm:justify-center sm:pt-0",
        className,
      )}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center gap-4">
        {subheader && (
          <motion.h2
            className="w-full text-lg font-normal tracking-widest text-gray-600 dark:text-gray-400"
            variants={container}
          >
            {subheader.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        )}

        <motion.h1
          className="flex flex-col items-center gap-4 overflow-hidden font-black tracking-widest"
          variants={container}
        >
          {/* First Name */}
          <span className="flex flex-row items-center justify-center gap-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="text-5xl text-blue-500 sm:text-6xl md:text-7xl lg:text-8xl">
              @
            </span>

            <span className="inline-block">
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="transition-colors duration-200 ease-in-out hover:text-blue-500"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </span>

          <span className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="transition-colors duration-200 ease-in-out hover:text-blue-500"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </div>

      {/**
       * Animted "GitHub" and "LinkedIn" links
       */}
      <motion.div
        className="flex flex-row items-center justify-center gap-8 text-sm sm:gap-12"
        variants={container}
      >
        <motion.div variants={letter}>
          <MagneticButton
            className={cn(
              "transition-colors duration-200 ease-linear hover:text-blue-500",
              className,
            )}
          >
            <Link
              href="https://github.com/realtristan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
            >
              My GitHub
              <ExternalLink className="size-4" />
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.div variants={letter}>
          <MagneticButton className="transition-colors duration-200 ease-linear hover:text-blue-500">
            <Link
              href="https://linkedin.com/in/realtristan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
            >
              My LinkedIn
              <ExternalLink className="size-4" />
            </Link>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

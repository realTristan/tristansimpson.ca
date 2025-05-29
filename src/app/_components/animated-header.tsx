// AnimatedHeader.jsx
import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MagneticButton } from "@/components/magnetic-button";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 50 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [100, -100], [-5, 5]);
  const rotateY = useTransform(springX, [100, -100], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn(
        "flex h-full flex-col items-center gap-12 pt-72 text-center sm:justify-center sm:pt-0",
        className,
      )}
      variants={container}
      initial="hidden"
      animate="visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="flex flex-col items-center gap-4"
        style={{ transformStyle: "preserve-3d" }}
      >
        {subheader && (
          <motion.h2
            className="w-full text-lg font-normal tracking-widest text-gray-600 dark:text-gray-400"
            variants={container}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {subheader.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                style={{
                  display: "inline-block",
                  transform: `translateZ(${20}px)`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>
        )}

        <motion.h1
          className="flex flex-col items-center gap-4 overflow-hidden font-black tracking-widest"
          variants={container}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* First Name */}
          <span
            className="flex flex-row items-center justify-center gap-4 text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              className="text-5xl text-blue-500 sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                transform: `translateZ(${40}px)`,
              }}
            >
              @
            </motion.span>

            <span className="inline-block" style={{ transformStyle: "preserve-3d" }}>
              {firstName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="transition-colors duration-200 ease-in-out hover:text-blue-500"
                  style={{
                    display: "inline-block",
                    transform: `translateZ(${20 + i * 2}px)`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </span>

          <span
            className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ transformStyle: "preserve-3d" }}
          >
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="transition-colors duration-200 ease-in-out hover:text-blue-500"
                style={{
                  display: "inline-block",
                  transform: `translateZ(${20 + i * 2}px)`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </div>

      <motion.div
        className="flex flex-row items-center justify-center gap-8 text-sm sm:gap-12"
        variants={container}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div variants={letter} style={{ transformStyle: "preserve-3d" }}>
          <MagneticButton
            className={cn(
              "transition-colors duration-200 ease-linear hover:text-blue-500",
              className,
            )}
          >
            <a
              href="https://github.com/realtristan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
            >
              My GitHub
              <ExternalLink className="size-4" />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div variants={letter} style={{ transformStyle: "preserve-3d" }}>
          <MagneticButton className="transition-colors duration-200 ease-linear hover:text-blue-500">
            <a
              href="https://linkedin.com/in/realtristan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center justify-center gap-2 font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
            >
              My LinkedIn
              <ExternalLink className="size-4" />
            </a>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

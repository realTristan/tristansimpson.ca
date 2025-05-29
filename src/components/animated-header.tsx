// AnimatedHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

const button = {
  hidden: { y: 20, opacity: 0 },
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

interface Button {
  text: string;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedHeader({
  firstName,
  lastName,
  subheader,
  buttons,
  className,
}: {
  firstName: string;
  lastName: string;
  subheader?: string;
  buttons?: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <motion.div
      className={cn(
        "flex flex-col items-center justify-center gap-4 text-center",
        className,
      )}
      variants={container}
      initial="hidden"
      animate="visible"
    >
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
        <span className="flex flex-row items-center justify-center gap-4 text-9xl">
          <span className="mt-4 text-8xl text-blue-500">@</span>

          <span className="inline-block">
            {firstName.split("").map((char, i) => (
              <motion.span key={i} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </span>

        <span className="inline-block text-7xl">
          {lastName.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h1>
    </motion.div>
  );
}

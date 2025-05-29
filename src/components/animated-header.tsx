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
      <motion.h1
        className="flex flex-wrap overflow-hidden text-9xl font-black tracking-widest"
        variants={container}
      >
        {/* First Name */}
        {firstName.split("").map((char, i) => (
          <motion.span key={i} variants={letter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        {/* Space between names */}
        <span>&nbsp;</span>
        {/* Last Name with animated underline */}
        <span className="relative inline-block">
          {lastName.split("").map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
          <motion.span
            className="bg-primary absolute -bottom-2 left-0 h-2 w-full rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            style={{ originX: 0 }}
          />
        </span>
      </motion.h1>

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

      {buttons && (
        <motion.div
          className="flex w-full flex-row items-center justify-center gap-4"
          variants={container}
        >
          {Array.isArray(buttons) ? (
            buttons.map((btn, i) => (
              <motion.div key={i} variants={button}>
                {btn}
              </motion.div>
            ))
          ) : (
            <motion.div variants={button}>{buttons}</motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

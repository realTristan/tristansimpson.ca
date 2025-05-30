"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Computer, University, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import FloatingTechGridScene from "@/components/floating-tech-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
// import "@/styles/scrollbar-hide.css";

const experiences = [
  {
    id: "yncu",
    title: "YNCU",
    role: "Full Stack Developer",
    period: "June 2024 - Present",
    description: "Full-stack development and system architecture",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/yncu",
  },
  {
    id: "dominion-lending",
    title: "Dominion Lending",
    role: "Software Developer",
    period: "July 2023 - September 2023",
    description: "Software development and automation solutions",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/dominion-lending",
  },
  {
    id: "engineering-ambition",
    title: "Engineering Ambition",
    role: "Lead Software Developer",
    period: "December 2023 - June 2024",
    description: "Lead software developement and team of 15",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/engineering-ambition",
  },
  {
    id: "university-of-guelph",
    title: "University of Guelph",
    role: "Computer Science Student",
    period: "2023 - 2028",
    description: "Bachelor of Computing - Computer Science (Co-op)",
    icon: <University className="h-6 w-6" />,
    link: "/experience/university-of-guelph",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const experienceHeaderContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const experienceHeaderLetter = {
  hidden: { y: 10, opacity: 0 },
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

function ExperienceHeader() {
  const firstName = "@realtristan";
  const lastName = "simpson";
  const subheader = "experience timeline";

  return (
    <motion.div
      className="flex flex-col items-center gap-4 pt-24 pb-8 text-center"
      variants={experienceHeaderContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="w-full text-lg font-normal tracking-widest text-gray-400"
        variants={experienceHeaderContainer}
      >
        {subheader.split("").map((char, i) => (
          <motion.span key={i} variants={experienceHeaderLetter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        className="flex flex-row items-center justify-center gap-4"
        variants={experienceHeaderContainer}
      >
        <motion.h1
          className="flex flex-col items-center gap-2 overflow-hidden font-black tracking-widest"
          variants={experienceHeaderContainer}
        >
          <span className="flex flex-row items-center justify-center gap-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <motion.span className="text-4xl text-blue-500 sm:text-5xl md:text-6xl lg:text-7xl">
              @
            </motion.span>
            <span className="inline-block">
              {firstName
                .replace("@", "")
                .split("")
                .map((char, i) => (
                  <motion.span
                    key={i}
                    variants={experienceHeaderLetter}
                    className="inline-block transition-colors duration-200 ease-in-out hover:text-blue-500"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
            </span>
          </span>

          <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {lastName.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={experienceHeaderLetter}
                className="inline-block transition-colors duration-200 ease-in-out hover:text-blue-500"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="relative flex h-screen w-full flex-col">
      <Navbar />
      <FloatingTechGridScene />
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center px-4 py-12">
        <div className="sticky top-0 z-20 w-full">
          <ExperienceHeader />
        </div>

        <ScrollArea className="scrollbar-hide w-full flex-1">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative flex flex-col items-center justify-center gap-8 overflow-visible py-4"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={item}
                className="group relative flex w-full max-w-3xl flex-col gap-4 overflow-visible rounded-xl border border-white/10 bg-transparent p-6 shadow-xl backdrop-blur-md transition-all hover:border-blue-500/50"
              >
                <div className="bg-background absolute top-6 -left-3 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 md:flex">
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white transition-colors group-hover:border-blue-500/50">
                      {experience.icon}
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        {experience.title}
                      </h2>
                      <p className="text-sm text-gray-400">{experience.role}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{experience.period}</span>
                </div>
                <p className="text-gray-400">{experience.description}</p>
                <Link
                  href={experience.link}
                  className="inline-flex items-center gap-2 text-sm text-blue-500 transition-colors hover:text-blue-400"
                >
                  Learn more
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </ScrollArea>
      </div>
    </main>
  );
}

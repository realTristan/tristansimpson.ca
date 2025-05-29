"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Computer, University, Clock, Briefcase } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ParticleSphereScene from "@/components/particle-sphere";

const experiences = [
  {
    id: "yncu",
    title: "YNCU",
    role: "Software Developer",
    period: "2024 - Present",
    description: "Full-stack development and system architecture",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/yncu",
  },
  {
    id: "dominion-lending",
    title: "Dominion Lending",
    role: "Software Developer",
    period: "2023 - 2024",
    description: "Web development and automation solutions",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/dominion-lending",
  },
  {
    id: "university-of-guelph",
    title: "University of Guelph",
    role: "Computer Science Student",
    period: "2020 - 2024",
    description: "Bachelor of Computing - Computer Science",
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
            <motion.span className="text-2xl text-blue-500 sm:text-3xl md:text-4xl lg:text-5xl">
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
    <main className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-x-hidden bg-black">
      <Navbar />

      {/* Custom particle sphere with experience-themed colors */}
      <ParticleSphereScene />

      <div className="relative z-10 mx-auto flex w-full flex-col items-center justify-center gap-12 px-4 py-24">
        <ExperienceHeader />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative flex w-full max-w-3xl flex-col items-center justify-center gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={item}
              className={cn(
                "group relative flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-black/40 p-6 shadow-xl backdrop-blur-md transition-all hover:border-blue-500/50",
                index % 2 === 0 ? "md:ml-0" : "lg:ml-52",
              )}
            >
              <div className="absolute top-6 -left-3 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-black md:flex">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white transition-colors group-hover:border-blue-500/50">
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
                <Clock className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

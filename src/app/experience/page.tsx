"use client";

import { motion } from "framer-motion";
import { Computer, University, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

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
    id: "engineering-ambition",
    title: "Engineering Ambition",
    role: "Lead Software Developer",
    period: "December 2023 - June 2024",
    description: "Lead software developement and team of 15",
    icon: <Computer className="h-6 w-6" />,
    link: "/experience/university-of-guelph",
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

function ExperienceHeader() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 pt-32 pb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-light tracking-widest text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Experience Timeline
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Full Stack Developer</span>
        <span>•</span>
        <span>2023 - Present</span>
        <span>•</span>
        <span>Ontario, Canada</span>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Badge variant="outline" className="text-xs">
          TypeScript
        </Badge>
        <Badge variant="outline" className="text-xs">
          React.js
        </Badge>
        <Badge variant="outline" className="text-xs">
          Next.js
        </Badge>
        <Badge variant="outline" className="text-xs">
          Python
        </Badge>
        <Badge variant="outline" className="text-xs">
          Azure
        </Badge>
        <Badge variant="outline" className="text-xs">
          AWS
        </Badge>
      </motion.div>
    </motion.div>
  );
}

export default function ExperiencePage() {
  return (
    <main className="relative flex h-screen w-full flex-col">
      <Navbar />
      <FloatingTechGridScene />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-4 py-12">
        <ScrollArea className="scrollbar-hide mt-12 w-full flex-1">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative ml-8 flex w-full flex-col items-center justify-center gap-8 px-4 py-4"
          >
            <ExperienceHeader />

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

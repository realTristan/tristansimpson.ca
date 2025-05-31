"use client";

import { motion } from "framer-motion";
import { Computer, University, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Cursor } from "@/components/cursor";

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

const ExperienceHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4 pt-24 pb-16 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Column className="items-center gap-4">
        <motion.h2
          className="text-2xl font-light tracking-widest text-gray-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Experience Timeline
        </motion.h2>
      </Column>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Full Stack Developer</span>
        <span className="hidden sm:flex">•</span>
        <span>2023 - Present</span>
        <span className="hidden sm:flex">•</span>
        <span>Ontario, Canada</span>
      </motion.div>

      <Row className="flex-wrap justify-center gap-2">
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
      </Row>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const isMobile = useIsMobile();

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      {!isMobile && (
        <>
          <FloatingTechGridScene />
          <Cursor />
        </>
      )}

      {!isMobile && <ExperienceHeader />}

      <ScrollArea className="scrollbar-hide mx-auto flex h-full w-full max-w-7xl flex-1 flex-col">
        {isMobile && <ExperienceHeader />}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center justify-center gap-8 px-4 py-4"
        >
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              variants={item}
              className="group relative flex w-full max-w-3xl flex-col gap-4 overflow-visible rounded-xl border border-white/10 bg-transparent p-6 shadow-xl backdrop-blur-md transition-all hover:border-blue-500/50"
            >
              <TimelineCircle className="absolute top-6 -left-3" />

              <Row className="items-start justify-between gap-4">
                <Row className="items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 text-white transition-colors group-hover:border-blue-500/50">
                    {experience.icon}
                  </div>

                  <Column>
                    <h2 className="text-xl font-semibold text-white">
                      {experience.title}
                    </h2>
                    <p className="text-sm text-gray-400">{experience.role}</p>
                  </Column>
                </Row>

                <span className="text-sm text-gray-500">{experience.period}</span>
              </Row>

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
    </main>
  );
};

const TimelineCircle = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 md:flex",
        className,
      )}
    >
      <div className="h-3 w-3 rounded-full bg-blue-500" />
    </div>
  );
};

export default ExperiencePage;

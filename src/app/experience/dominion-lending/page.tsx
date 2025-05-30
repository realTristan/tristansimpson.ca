"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import ParticleSphereScene from "@/components/particle-sphere";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Code2,
  Rocket,
  GraduationCap,
  Lightbulb,
  BookOpen,
  Briefcase,
  Building2,
  Globe,
  Zap,
  TrendingUp,
  Layers,
  ClipboardList,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { FileText } from "lucide-react";
import FloatingTechGridScene from "@/components/floating-tech-grid";

function CorporateWebsite() {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Summary</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="max-w-2xl text-gray-200">
            <span className="font-semibold text-white">+</span> Delivered a corporate
            website optimized for accessibility, maintainability, and security
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Designed and developed an
            interactive dashboard for analytics and management
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Implemented secure
            document handling and user management systems
          </p>
        </div>
      </div>

      {/* Impact & Stats */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Impact & Stats</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Accessibility:</span> Optimized
              for all users and devices
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Implemented
              robust security measures
            </li>
            <li>
              <span className="font-semibold text-white">Management:</span> Developed
              intuitive dashboard for analytics and user management
            </li>
            <li>
              <span className="font-semibold text-white">Maintenance:</span> Built with
              maintainability and scalability in mind
            </li>
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Tech Stack</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Frontend:</span> TypeScript,
              React.js, Next.js, Tailwind CSS, shadcn
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Azure, Azure SQL
              Server
            </li>
            <li>
              <span className="font-semibold text-white">Storage:</span> Azure Blob
              Storage
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> Git, Figma
            </li>
          </ul>
        </div>
      </div>

      {/* Project Scope */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Project Scope</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>Corporate website development and optimization</li>
            <li>Interactive dashboard implementation</li>
            <li>Analytics and reporting system</li>
            <li>User and document management</li>
            <li>Security and accessibility features</li>
          </ul>
        </div>
      </div>

      {/* Why We Did It */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Why We Did It</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Accessibility:</span> Ensure the
              website is accessible to all users
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Protect
              sensitive data and user information
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Streamline
              operations and management processes
            </li>
            <li>
              <span className="font-semibold text-white">Scalability:</span> Build a
              maintainable and scalable solution
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Pulse() {
  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Summary</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="max-w-2xl text-gray-200">
            <span className="font-semibold text-white">+</span> Delivered a tailored
            Jostle-like application saving ~$8,000 annually
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Implemented intuitive
            features including events, posts, announcements, and organization-wide emails
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed secure document
            storage and user management systems
          </p>
        </div>
      </div>

      {/* Impact & Stats */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Impact & Stats</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Cost Savings:</span> ~$8,000
              annual savings
            </li>
            <li>
              <span className="font-semibold text-white">Features:</span> Natural internal
              communication platform
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Secure document
              storage and user management
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Seamless
              integration with existing systems
            </li>
          </ul>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Tech Stack</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Frontend:</span> TypeScript,
              React.js, Next.js, Tailwind CSS, shadcn
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Azure, Azure SQL
              Server
            </li>
            <li>
              <span className="font-semibold text-white">Storage:</span> Azure Blob
              Storage
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> Git, Figma
            </li>
          </ul>
        </div>
      </div>

      {/* Project Scope */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Project Scope</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>Internal communication platform development</li>
            <li>Event and announcement management</li>
            <li>Secure document storage system</li>
            <li>User management and permissions</li>
            <li>Email notification system</li>
          </ul>
        </div>
      </div>

      {/* Why We Did It */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Why We Did It</span>
        </div>

        <div className="flex flex-col gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>
              <span className="font-semibold text-white">Cost Efficiency:</span> Reduce
              annual software costs
            </li>
            <li>
              <span className="font-semibold text-white">Communication:</span> Improve
              internal communication and collaboration
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Ensure secure
              document storage and sharing
            </li>
            <li>
              <span className="font-semibold text-white">Customization:</span> Create a
              tailored solution for specific needs
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    id: "pulse",
    title: "Pulse",
    icon: (
      <Zap className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: Pulse,
    tags: ["Lead Developer"],
  },
  {
    id: "corporate-website",
    title: "Corporate Website",
    icon: (
      <Globe className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: CorporateWebsite,
    tags: ["Lead Developer"],
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

const headerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const headerLetter = {
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

function DominionLendingHeader() {
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
          Dominion Lending Centres
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Software Developer</span>
        <span>•</span>
        <span>Jul 2023 - Sep 2023</span>
        <span>•</span>
        <span>Kitchener, Ontario</span>
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
          Azure
        </Badge>
        <Badge variant="outline" className="text-xs">
          Tailwind CSS
        </Badge>
      </motion.div>
    </motion.div>
  );
}

export default function DominionLendingPage() {
  const [openedProjects, setOpenedProjects] = useState<string[]>(["pulse"]);

  return (
    <main className="relative flex h-screen w-full flex-col">
      <Navbar />
      <FloatingTechGridScene />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center px-4 py-12">
        <ScrollArea className="scrollbar-hide mt-12 w-full flex-1">
          {/**
           * Animated header denoting this is my Dominion Lending Experience
           */}
          <DominionLendingHeader />

          {/**
           * Accordion of projects
           */}
          <div className="relative flex min-h-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative ml-8 flex w-full flex-col gap-8 px-4 py-4"
            >
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
                defaultValue="pulse"
              >
                {projects.map((project, index) => {
                  const isOpened = openedProjects.some((p) => p === project.id);

                  const openProject = () => {
                    setOpenedProjects((prev) => {
                      return prev.includes(project.id) ? prev : [...prev, project.id];
                    });
                  };

                  return (
                    <motion.div
                      key={project.id}
                      variants={item}
                      className="relative w-full overflow-visible rounded-xl border border-white/10 bg-transparent p-0 shadow-xl backdrop-blur-md transition-all hover:border-blue-500/50"
                    >
                      {/* Timeline circle */}
                      <div className="bg-background absolute -top-3 -left-3 hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 backdrop-blur-md md:flex">
                        <div
                          className={cn(
                            "h-3 w-3 rounded-full",
                            !isOpened && "bg-blue-500",
                          )}
                        />
                      </div>

                      <AccordionItem
                        value={project.id}
                        className="relative border-b-0 bg-transparent px-4 py-2"
                      >
                        <AccordionTrigger
                          className="group flex items-center gap-3 text-left text-base font-normal text-white transition hover:text-blue-400 focus:text-blue-400"
                          onClick={openProject}
                        >
                          <span className="flex items-center gap-4">
                            {project.icon}
                            {project.title}
                            {project.tags &&
                              project.tags.length > 0 &&
                              project.tags.map((tag, i) => (
                                <Badge key={i} variant="outline">
                                  {tag}
                                </Badge>
                              ))}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pb-4">
                          <div className="flex flex-col gap-6">
                            <project.Component />
                            {/* Images at the bottom */}
                            {project.images && project.images.length > 0 && (
                              <div className="mt-4 flex flex-wrap gap-4">
                                {project.images.map((img, i) => (
                                  <img
                                    key={i}
                                    src={img}
                                    alt={`${project.title} screenshot ${i + 1}`}
                                    className="h-32 w-48 rounded-lg border border-white/10 object-cover"
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </motion.div>
          </div>
        </ScrollArea>
      </div>
    </main>
  );
}

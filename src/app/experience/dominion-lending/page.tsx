"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Briefcase,
  Globe,
  Zap,
  TrendingUp,
  Layers,
  ClipboardList,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { FileText } from "lucide-react";
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { Cursor } from "@/components/cursor";
import { useIsMobile } from "@/hooks/use-mobile";

const Journey = () => {
  return (
    <Column className="space-y-8">
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">
            Software Developer{" "}
            <span className="text-sm text-gray-400">(July 2023 – September 2023)</span>
          </span>
        </Row>
        <ul className="list-disc space-y-1 pl-5 text-gray-200">
          <li>Led the development of our corporate website</li>
          <li>Led the development of our internal communication platform (Pulse)</li>
          <li>Implemented secure document handling and user management systems</li>
          <li>Integrated with Azure services for data storage and management</li>
        </ul>
      </Column>
    </Column>
  );
};

const CorporateWebsite = () => {
  return (
    <Column className="space-y-8">
      {/* Summary */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Summary</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Impact & Stats */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Impact & Stats</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Tech Stack */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <Layers className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Tech Stack</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Project Scope */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Project Scope</span>
        </Row>
        <Column className="gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>Corporate website development and optimization</li>
            <li>Interactive dashboard implementation</li>
            <li>Analytics and reporting system</li>
            <li>User and document management</li>
            <li>Security and accessibility features</li>
          </ul>
        </Column>
      </Column>
      {/* Why We Did It */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Why We Did It</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
    </Column>
  );
};

const Pulse = () => {
  return (
    <Column className="space-y-8">
      {/* Summary */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Summary</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Impact & Stats */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Impact & Stats</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Tech Stack */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <Layers className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Tech Stack</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
      {/* Project Scope */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <ClipboardList className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Project Scope</span>
        </Row>
        <Column className="gap-2">
          <ul className="list-disc space-y-1 pl-5 text-gray-200">
            <li>Internal communication platform development</li>
            <li>Event and announcement management</li>
            <li>Secure document storage system</li>
            <li>User management and permissions</li>
            <li>Email notification system</li>
          </ul>
        </Column>
      </Column>
      {/* Why We Did It */}
      <Column className="gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <Row className="items-center gap-2">
          <Zap className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Why We Did It</span>
        </Row>
        <Column className="gap-2">
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
        </Column>
      </Column>
    </Column>
  );
};

const projects = [
  {
    id: "journey",
    title: "My Journey",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: Journey,
    tags: ["Journey"],
  },
  {
    id: "pulse",
    title: "Pulse",
    icon: (
      <Zap className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: Pulse,
    tags: ["Lead Developer"],
  },
  {
    id: "corporate-website",
    title: "Corporate Website",
    icon: (
      <Globe className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
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

const DominionLendingHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 px-4 pt-24 pb-16 text-center"
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
        <span className="hidden sm:flex">•</span>
        <span>Jul 2023 - Sep 2023</span>
        <span className="hidden sm:flex">•</span>
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
};

const DominionLendingPage = () => {
  const [openedProjects, setOpenedProjects] = useState<string[]>(["journey"]);

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

      {/* Animated header denoting this is my Dominion Lending Experience */}
      <DominionLendingHeader />

      <ScrollArea className="scrollbar-hide mx-auto flex h-full w-full max-w-7xl flex-1 flex-col items-center">
        {/* Accordion of projects */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex min-h-full w-full flex-col gap-8 px-4 py-4"
        >
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
            defaultValue="journey"
          >
            {projects.map((project) => {
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
                  <TimelineCircle
                    className="absolute -top-3 -left-3"
                    isOpened={isOpened}
                  />

                  <AccordionItem
                    value={project.id}
                    className="border-b-0 bg-transparent px-4 py-2"
                  >
                    <AccordionTrigger
                      className="group flex items-center gap-3 text-left text-base font-normal text-white transition hover:text-blue-400 focus:text-blue-400"
                      onClick={openProject}
                    >
                      <Row className="items-center gap-4">
                        {project.icon}
                        {project.title}
                        {project.tags &&
                          project.tags.length > 0 &&
                          project.tags.map((tag, i) => (
                            <Badge key={i} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                      </Row>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 pb-4">
                      <project.Component />
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </motion.div>
      </ScrollArea>
    </main>
  );
};

const TimelineCircle = ({
  className,
  isOpened,
}: {
  className?: string;
  isOpened: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background hidden h-6 w-6 items-center justify-center rounded-full border border-white/10 backdrop-blur-md md:flex",
        className,
      )}
    >
      <div className={cn("h-3 w-3 rounded-full", !isOpened && "bg-blue-500")} />
    </div>
  );
};

export default DominionLendingPage;

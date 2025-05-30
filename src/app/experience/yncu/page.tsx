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
  UserPlus,
  Banknote,
  LayoutDashboard,
  Users,
  IdCard,
  Rocket,
  Wrench,
  Link2,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { FileText, Layers, ClipboardList, Zap, TrendingUp } from "lucide-react";
import FloatingTechGridScene from "@/components/floating-tech-grid";

function Journey() {
  return (
    <div className="space-y-8">
      {/* Full Stack Developer I, Full-time */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">
            Full Stack Developer I, Full-time{" "}
            <span className="text-sm text-gray-400">(May 2025 – Present)</span>
          </span>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-gray-200">
          <li>Continued development of our commercial loan origination system (CLOS)</li>
          <li>Leading our Mortgage Renewal project</li>
          <li>Led our workspace management dashboard project</li>
          <li>Led our application management dashboard project</li>
        </ul>
      </div>

      {/* Full Stack Developer I, Part-time */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">
            Full Stack Developer I, Part-time{" "}
            <span className="text-sm text-gray-400">(September 2024 – May 2025)</span>
          </span>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-gray-200">
          <li>Continued development of our commercial loan origination system (CLOS)</li>
          <li>Developed the ID Verification project with Salesforce</li>
          <li>Developed the Automatic Onboarding System project with Salesforce</li>
          <li>Refactored and improved our DNA API</li>
        </ul>
      </div>

      {/* Full Stack Developer Intern, Full-time */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">
            Full Stack Developer Intern, Full-time{" "}
            <span className="text-sm text-gray-400">(June 2024 – September 2024)</span>
          </span>
        </div>

        <ul className="list-disc space-y-1 pl-5 text-gray-200">
          <li>Started development for our commercial loan origination system (CLOS)</li>
          <li>Refactored and improved our YNCU Tools project</li>
        </ul>
      </div>
    </div>
  );
}

function Summer2025Hiring() {
  return (
    <div className="space-y-8">
      {/* Summer 2025 Hiring */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-blue-400" />
          <span className="text-lg font-semibold text-white">Summary</span>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Co-led hiring full stack
            developer interns for Summer 2025
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed our entire full
            stack developer hiring process and pitched it to our CIO
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Created the YNCU
            Quickstart repo with templates, configs, docs, style guides, and cybersecurity
            architecture
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> This inspired me to build
            our applicant management dashboard
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Mentored the Summer 2025
            intern cohort
          </p>
        </div>
      </div>
    </div>
  );
}

function CommercialLoanOriginationSystem() {
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
            <span className="font-semibold text-white">+</span> Led the development of our
            Commercial Loan Origination Software (CLOS); Designed and implemented the
            interface, user journey; and caching, security, backend, and data models.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Led code reviews, team
            meetings, user acceptance testing & demos, API documentation (for future
            external use), and more.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Integrated Fiserv DNA for
            real-time data and established the core tools, security checks, and testing
            routines that now power many of our projects.
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
              <span className="font-semibold text-white">Cost savings:</span> ~$500 000
              saved at launch and ~$80 000 saved each year
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Over 100 000 lines
              of code
            </li>
            <li>
              <span className="font-semibold text-white">Legacy:</span> Established faster
              project starts, tighter security checks, and reliable testing across teams
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
              <span className="font-semibold text-white">Frontend:</span> Vite, React,
              shadcn, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold text-white">Monorepo:</span> Turborepo
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Node.js, Express
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> Azure SQL,
              Prisma
            </li>
            <li>
              <span className="font-semibold text-white">Cloud & Storage:</span> Azure Web
              Apps, Azure Graph Client, Azure Blob Storage
            </li>
            <li>
              <span className="font-semibold text-white">Data Fetching & Routing:</span>{" "}
              TanStack Query, TanStack Router, OpenAPI
            </li>
            <li>
              <span className="font-semibold text-white">Other:</span> Python scripts for
              tooling and automation
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
            <li>
              Built every piece of CLOS from UI components to backend services, data
              models, caching layer, and security framework
            </li>
            <li>Connected the system to Fiserv DNA for real-time data exchange</li>
            <li>
              Rolled out core development tools, coding standards, and security tests to
              support future initiatives
            </li>
            <li>
              Coordinated with commercial team members to gather requirements and ensure
              smooth user adoption
            </li>
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
              <span className="font-semibold text-white">New rules:</span> FSRA introduced
              stricter data-capture standards
            </li>
            <li>
              <span className="font-semibold text-white">Old process:</span> Tracking
              applications in Excel led to duplicates and manual work
            </li>
            <li>
              <span className="font-semibold text-white">Goal:</span> Move to a relational
              database for one-time entry, data accuracy, and easier management
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function WorkspaceManagementDashboard() {
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
            <span className="font-semibold text-white">+</span> Led the development of our
            Workspace Management Dashboard; Designed and implemented the interface, user
            journey; and caching, security, backend, and data models.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Led code reviews, team
            meetings, user acceptance testing & demos, and more.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Tailored facility,
            workspace, and reservation dashboards.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Seamless authentication
            for YNCU employees and visitors.
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
              <span className="font-semibold text-white">Cost savings:</span> ~$10,000 at
              launch and ~$6,000 per year
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Over 50,000 lines
              of code
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
              <span className="font-semibold text-white">Frontend:</span> Vite, React,
              shadcn, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold text-white">Monorepo:</span> Turborepo
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Node.js, Express
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> Azure SQL,
              Prisma
            </li>
            <li>
              <span className="font-semibold text-white">Cloud & Storage:</span> Azure Web
              Apps, Azure Graph Client, Azure Blob Storage
            </li>
            <li>
              <span className="font-semibold text-white">Data Fetching & Routing:</span>{" "}
              TanStack Query, TanStack Router, OpenAPI
            </li>
            <li>
              <span className="font-semibold text-white">Other:</span> Python scripts for
              tooling and automation
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
            <li>
              Designed and built the UI for facility, workspace, and reservation
              management.
            </li>
            <li>
              Created backend APIs with Node.js, Express, and Prisma for CRUD operations
              and real-time availability.
            </li>
            <li>Implemented role-based authentication and visitor access workflows.</li>
            <li>
              Optimized data fetching with caching and database indexes + efficient
              queries.
            </li>
            <li>
              Added analytics endpoints and dashboard visualizations for usage metrics.
            </li>
            <li>
              Documented components and on-boarded team members with guides and templates.
            </li>
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
              <span className="font-semibold text-white">Affordability:</span> Other
              solutions weren't budget friendly
            </li>
            <li>
              <span className="font-semibold text-white">Flexibility:</span> Needed custom
              feature integration
            </li>
            <li>
              <span className="font-semibold text-white">Analytics:</span> Required custom
              visitor management metrics
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ApplicantManagementDashboard() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        Description of the applicant management dashboard
      </p>
    </div>
  );
}

function MortgageRenewalSystem() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        In progress (2025): Mortgage Renewal System
      </p>
    </div>
  );
}

function IDVerification() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        Description of the ID verification system
      </p>
    </div>
  );
}

function AutomaticOnboardingSystem() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        Description of the automatic onboarding system
      </p>
    </div>
  );
}

function YNCUTools() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        Description of the YNCU tools project
      </p>
    </div>
  );
}

function FiservDNAAPI() {
  return (
    <div className="prose prose-invert max-w-none">
      <p className="leading-relaxed text-gray-300">
        Description of the Fiserv DNA API integration
      </p>
    </div>
  );
}

const projects = [
  {
    id: "journey",
    title: "My Journey",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: Journey,
    tags: ["Journey"],
  },
  {
    id: "summer-2025",
    title: "Summer 2025 Hiring",
    icon: (
      <UserPlus className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: Summer2025Hiring,
    tags: ["Project", "Co-Lead"],
  },
  {
    id: "clos",
    title: "Commercial Loan Origination System",
    icon: (
      <Banknote className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: CommercialLoanOriginationSystem,
    tags: ["Project", "Lead"],
  },
  {
    id: "workspace",
    title: "Workspace Management Dashboard",
    icon: (
      <LayoutDashboard className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: WorkspaceManagementDashboard,
    tags: ["Project", "Lead"],
  },
  {
    id: "applicant",
    title: "Applicant Management Dashboard",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: ApplicantManagementDashboard,
    tags: ["Project", "Lead"],
  },
  {
    id: "mortgage-renewal",
    title: "Mortgage Renewal System",
    icon: (
      <Banknote className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: MortgageRenewalSystem,
    tags: ["Project", "Lead", "In Progress"],
  },
  {
    id: "id-verification",
    title: "ID Verification",
    icon: (
      <IdCard className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: IDVerification,
    tags: ["Project", "Salesforce"],
  },
  {
    id: "onboarding",
    title: "Automatic Onboarding System",
    icon: (
      <Rocket className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: AutomaticOnboardingSystem,
    tags: ["Project", "Salesforce"],
  },
  {
    id: "yncu-tools",
    title: "YNCU Tools",
    icon: (
      <Wrench className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: YNCUTools,
    tags: ["Project", "Refactor"],
  },
  {
    id: "fiserv",
    title: "Fiserv DNA API",
    icon: (
      <Link2 className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    images: [],
    Component: FiservDNAAPI,
    tags: ["Project", "Refactor"],
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

function YNCUHeader() {
  const firstName = "@realtristan";
  const lastName = "simpson";
  const subheader = "YNCU Full Stack Developer";

  return (
    <motion.div
      className="flex flex-col items-center gap-4 pt-32 pb-8 text-center"
      variants={headerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="w-full text-lg font-normal tracking-widest text-gray-400"
        variants={headerContainer}
      >
        {subheader.split("").map((char, i) => (
          <motion.span key={i} variants={headerLetter}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
      <motion.div
        className="flex flex-row items-center justify-center gap-4"
        variants={headerContainer}
      >
        <motion.h1
          className="flex flex-col items-center gap-2 overflow-hidden font-black tracking-widest"
          variants={headerContainer}
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
                    variants={headerLetter}
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
                variants={headerLetter}
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

export default function YNCUPage() {
  const [openedProjects, setOpenedProjects] = useState<string[]>([]);

  return (
    <main className="relative flex h-screen w-full flex-col">
      <Navbar />
      <FloatingTechGridScene />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center px-4 py-12">
        <YNCUHeader />
        <ScrollArea className="scrollbar-hide w-full flex-1">
          <div className="relative flex min-h-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative ml-8 flex w-full flex-col gap-8 px-4 py-4"
            >
              <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
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

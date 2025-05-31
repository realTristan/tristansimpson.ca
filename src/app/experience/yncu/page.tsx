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
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";

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
          <li>Co-led our Summer 2025 hiring process</li>
          <li>Leading our Mortgage Renewal project</li>
          <li>Led our Mortgage Campaign project</li>
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
              solutions weren&apos;t budget friendly
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
            Applicant Management Dashboard; Designed and implemented the interface, user
            journey; and caching, security, backend, and data models.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Led code reviews, team
            meetings, user acceptance testing & demos, and more.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Built an intuitive
            dashboard for tracking, reviewing, and managing applications across all
            stages.
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
              <span className="font-semibold text-white">Cost savings:</span> ~$6,000
              saved annually
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Over 50,000 lines
              of code
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Thousands of
              hours saved from manual applicant review.
            </li>
            <li>
              <span className="font-semibold text-white">Growth:</span> Significant
              increase in application volume and processing speed
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
              Designed and built an intuitive dashboard for tracking applications across
              all stages of the hiring process
            </li>
            <li>
              Implemented advanced filtering, sorting, and search capabilities for
              efficient applicant management
            </li>
            <li>
              Created automated workflows for application review, interview scheduling,
              and candidate communication
            </li>
            <li>
              Built real-time analytics and reporting features for tracking application
              metrics and team performance
            </li>
            <li>
              Integrated with existing HR systems and email platforms for seamless
              communication
            </li>
            <li>
              Developed role-based access controls and audit trails for secure applicant
              data management
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
              solutions weren&apos;t budget friendly
            </li>
            <li>
              <span className="font-semibold text-white">Flexibility:</span> Required
              custom features to match our unique hiring process
            </li>
            <li>
              <span className="font-semibold text-white">Legacy System:</span> Excel-based
              tracking was error-prone and couldn&apos;t scale with our growing needs
            </li>
            <li>
              <span className="font-semibold text-white">Analytics:</span> Needed custom
              metrics and insights for optimizing our hiring process
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MortgageRenewalSystem() {
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
            Mortgage Renewal System; Designed and implemented automated renewal workflows,
            member notifications, and employee dashboards.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Built analytics and
            reporting features for tracking renewal rates and member engagement.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Integrated with existing
            systems for seamless member communication and document management.
          </p>
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
              <span className="font-semibold text-white">Platform:</span> Salesforce
            </li>
            <li>
              <span className="font-semibold text-white">Frontend:</span> HTML, CSS,
              JavaScript, Apex, Lightning Web Components
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> SOQL
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Salesforce
              APIs, Email Services
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
              <span className="font-semibold text-white">Member Experience:</span> Large
              number of members needing mortgage renewals required a streamlined process
            </li>
            <li>
              <span className="font-semibold text-white">Branch Efficiency:</span> Needed
              to reduce branch congestion and improve staff productivity
            </li>
            <li>
              <span className="font-semibold text-white">Digital Transformation:</span>
              Moving from manual processes to automated workflows for better tracking and
              management
            </li>
            <li>
              <span className="font-semibold text-white">Risk Management:</span> Ensuring
              timely renewals and reducing the risk of missed opportunities
            </li>
            <li>
              <span className="font-semibold text-white">Member Retention:</span>
              Proactive engagement to maintain member relationships during renewal periods
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function IDVerification() {
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
            <span className="font-semibold text-white">+</span> Developed, alongside four
            other team members, our Automatic ID Verification System
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Built an intuitive system
            for tracking and managing member identification documents across all channels.
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Integrated with our DNA
            API backend for real-time verification and compliance reporting.
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
              <span className="font-semibold text-white">Efficiency:</span> Thousands of
              hours saved in phone calls and manual verification
            </li>
            <li>
              <span className="font-semibold text-white">Branch Experience:</span>{" "}
              Significantly reduced branch congestion and wait times
            </li>
            <li>
              <span className="font-semibold text-white">Compliance:</span> 100% tracking
              of member identification status
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Successfully
              processed over 20,000 member ID verifications
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
              <span className="font-semibold text-white">Platform:</span> Salesforce
            </li>
            <li>
              <span className="font-semibold text-white">Frontend:</span> HTML, CSS,
              JavaScript, Apex, Lightning Web Components
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> SOQL
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Salesforce
              APIs, Email Services, DNA API Backend
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
              Designed and implemented automated ID verification workflows for all member
              touchpoints
            </li>
            <li>
              Built a centralized system for tracking and managing member identification
              documents
            </li>
            <li>
              Integrated with existing systems for seamless member communication and
              document management
            </li>
            <li>Implemented secure document storage and verification processes</li>
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
              <span className="font-semibold text-white">Compliance:</span> Required to
              meet SEC regulations for member identification
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Over 20,000 members
              needed ID verification or updates
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Manual
              tracking of ID information was time-consuming and error-prone
            </li>
            <li>
              <span className="font-semibold text-white">Member Experience:</span> Needed
              to streamline the verification process and reduce wait times
            </li>
            <li>
              <span className="font-semibold text-white">Reporting:</span> Required
              automated system for tracking and reporting ID status
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function AutomaticOnboardingSystem() {
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
            <span className="font-semibold text-white">+</span> Developed, alongside four
            other team members, our Automatic Onboarding System
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Built an intuitive system
            for automating member onboarding workflows and document collection
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Integrated with our DNA
            API backend for real-time account creation and verification
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
              <span className="font-semibold text-white">Efficiency:</span> Reduced
              onboarding time from days to minutes
            </li>
            <li>
              <span className="font-semibold text-white">Branch Experience:</span>{" "}
              Significantly reduced branch congestion and wait times
            </li>
            <li>
              <span className="font-semibold text-white">Accuracy:</span> Eliminated
              manual data entry errors
            </li>
            <li>
              <span className="font-semibold text-white">Scale:</span> Successfully
              onboarded thousands of new members
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
              <span className="font-semibold text-white">Platform:</span> Salesforce
            </li>
            <li>
              <span className="font-semibold text-white">Frontend:</span> HTML, CSS,
              JavaScript, Apex, Lightning Web Components
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> SOQL
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Salesforce
              APIs, Email Services, DNA API Backend
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
              Designed and implemented automated onboarding workflows for all member
              touchpoints
            </li>
            <li>
              Built a centralized system for collecting and managing member documents
            </li>
            <li>
              Integrated with existing systems for seamless member communication and
              document management
            </li>
            <li>Implemented secure document storage and verification processes</li>
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
              <span className="font-semibold text-white">Member Experience:</span> Long
              onboarding process was causing member frustration
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Manual
              onboarding was time-consuming and error-prone
            </li>
            <li>
              <span className="font-semibold text-white">Branch Experience:</span> Needed
              to reduce branch congestion during peak times
            </li>
            <li>
              <span className="font-semibold text-white">Compliance:</span> Required
              better tracking and verification of member information
            </li>
            <li>
              <span className="font-semibold text-white">Growth:</span> Needed to scale
              onboarding process for increasing member base
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function YNCUTools() {
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
            <span className="font-semibold text-white">+</span> Led the complete redesign
            and refactoring of our internal tools platform
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Modernized the frontend
            with React Hook Form, Zod, TanStack Router, and TanStack Query
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Enhanced key workflows
            including Equifax Credit Check, Performance Calculator, and Vendor Management
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
              <span className="font-semibold text-white">Optimizations:</span> Achieving
              significant performance & accessibility improvements
            </li>
            <li>
              <span className="font-semibold text-white">Code Quality:</span> Over 20,000
              lines of code updated and improved
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Streamlined
              workflows for credit checks and vendor management
            </li>
            <li>
              <span className="font-semibold text-white">Reliability:</span> Eliminated
              numerous bugs and improved system stability
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
              <span className="font-semibold text-white">Frontend:</span> React, React
              Hook Form, Zod
            </li>
            <li>
              <span className="font-semibold text-white">Routing & Data:</span> TanStack
              Router, TanStack Query
            </li>
            <li>
              <span className="font-semibold text-white">UI:</span> Tailwind CSS,
              shadcn/ui
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Equifax API,
              Vendor Management Systems
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
            <li>Completely redesigned and modernized the frontend interface</li>
            <li>
              Implemented form validation and type safety with React Hook Form and Zod
            </li>
            <li>
              Enhanced Equifax Credit Check workflow with improved error handling and user
              feedback
            </li>
            <li>Fixed numerous bugs and improved overall system stability</li>
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
              <span className="font-semibold text-white">Performance:</span> System was
              slow and inefficient, impacting daily operations
            </li>
            <li>
              <span className="font-semibold text-white">Modernization:</span> Needed to
              update to modern development practices and tools
            </li>
            <li>
              <span className="font-semibold text-white">Reliability:</span> Numerous bugs
              were affecting user experience and productivity
            </li>
            <li>
              <span className="font-semibold text-white">Efficiency:</span> Workflows
              needed optimization for better user experience
            </li>
            <li>
              <span className="font-semibold text-white">Maintenance:</span> Required
              better code organization and type safety
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FiservDNAAPI() {
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
            <span className="font-semibold text-white">+</span> Co-led the development and
            enhancement of our Fiserv DNA API integration
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Implemented 10 new API
            endpoints for various business processes
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Established route & file
            organization standards and security protocols
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
              <span className="font-semibold text-white">Integration:</span> Successfully
              connected three major systems to DNA API
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Integrated
              appropriate security standards
            </li>
            <li>
              <span className="font-semibold text-white">Scalability:</span> Added 10 new
              API endpoints for future growth
            </li>
            <li>
              <span className="font-semibold text-white">Maintainability:</span>
              Established clear organization standards
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
              <span className="font-semibold text-white">Backend:</span> Node.js, Express
            </li>
            <li>
              <span className="font-semibold text-white">API:</span> REST, OpenAPI
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Fiserv DNA
              Core Banking System
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
              Developed and implemented 10 new API endpoints for various business
              processes
            </li>
            <li>Established appropriate route and file organization standards</li>
            <li>Implemented robust security protocols and access controls</li>
            <li>Created detailed API documentation and integration guides</li>
            <li>Set up monitoring and logging for API performance and security</li>
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
              <span className="font-semibold text-white">Integration Needs:</span>
              Required updated and secure API routes for our Automatic Onboarding System
            </li>
            <li>
              <span className="font-semibold text-white">System Requirements:</span>
              Needed reliable endpoints for Commercial Loan Origination System
            </li>
            <li>
              <span className="font-semibold text-white">Security:</span> Required
              enhanced security for ID Verification project
            </li>
            <li>
              <span className="font-semibold text-white">Standardization:</span> Needed
              consistent API structure across all systems
            </li>
            <li>
              <span className="font-semibold text-white">Future Growth:</span> Required
              scalable API infrastructure for upcoming projects
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MortgageCampaign() {
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
            <span className="font-semibold text-white">+</span> Led the development of
            five tailored websites for our mortgage campaign
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Integrated with Salesforce
            Marketing Cloud for campaign management
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Built custom components
            and workflows for each campaign website
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
              <span className="font-semibold text-white">Scale:</span> Successfully
              launched five unique campaign websites
            </li>
            <li>
              <span className="font-semibold text-white">Engagement:</span> Increased
              member interaction with mortgage products
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Seamless
              connection with marketing automation
            </li>
            <li>
              <span className="font-semibold text-white">Conversion:</span> Improved lead
              generation and application rates
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
              <span className="font-semibold text-white">Platform:</span> Salesforce,
              Salesforce Marketing Cloud
            </li>
            <li>
              <span className="font-semibold text-white">Frontend:</span> HTML, CSS,
              JavaScript, Lightning Web Components
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Apex, SOQL
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Marketing
              Cloud APIs, Email Services
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
            <li>Designed and developed five unique campaign websites</li>
            <li>Created custom Lightning Web Components for each campaign</li>
            <li>Implemented marketing automation workflows</li>
            <li>Built lead capture and tracking systems</li>
            <li>Integrated with Salesforce Marketing Cloud for campaign management</li>
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
              <span className="font-semibold text-white">Campaign Needs:</span> Required
              tailored web applications for our mortgage campaign
            </li>
            <li>
              <span className="font-semibold text-white">Member Experience:</span> Needed
              to provide targeted information for different member segments
            </li>
            <li>
              <span className="font-semibold text-white">Marketing:</span> Required better
              tracking and automation of campaign performance
            </li>
            <li>
              <span className="font-semibold text-white">Conversion:</span> Needed to
              improve lead generation and application rates
            </li>
            <li>
              <span className="font-semibold text-white">Integration:</span> Required
              seamless connection with our marketing automation platform
            </li>
          </ul>
        </div>
      </div>
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
    Component: Journey,
    tags: ["Journey"],
  },
  {
    id: "summer-2025",
    title: "Summer 2025 Hiring",
    icon: (
      <UserPlus className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: Summer2025Hiring,
    tags: ["Project", "Co-Lead"],
  },
  {
    id: "clos",
    title: "Commercial Loan Origination System",
    icon: (
      <Banknote className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: CommercialLoanOriginationSystem,
    tags: ["Project", "Lead"],
  },
  {
    id: "workspace",
    title: "Workspace Management Dashboard",
    icon: (
      <LayoutDashboard className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: WorkspaceManagementDashboard,
    tags: ["Project", "Lead"],
  },
  {
    id: "applicant",
    title: "Applicant Management Dashboard",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: ApplicantManagementDashboard,
    tags: ["Project", "Lead"],
  },
  {
    id: "mortgage-renewal",
    title: "Mortgage Renewal System",
    icon: (
      <Banknote className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: MortgageRenewalSystem,
    tags: ["Project", "Lead", "In Progress"],
  },
  {
    id: "mortgage-campaign",
    title: "Mortgage Campaign",
    icon: (
      <Banknote className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: MortgageCampaign,
    tags: ["Project", "Lead"],
  },
  {
    id: "id-verification",
    title: "ID Verification",
    icon: (
      <IdCard className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: IDVerification,
    tags: ["Project", "Salesforce"],
  },
  {
    id: "fiserv",
    title: "Fiserv DNA API",
    icon: (
      <Link2 className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: FiservDNAAPI,
    tags: ["Project", "Co-Lead"],
  },
  {
    id: "onboarding",
    title: "Automatic Onboarding System",
    icon: (
      <Rocket className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: AutomaticOnboardingSystem,
    tags: ["Project", "Salesforce"],
  },
  {
    id: "yncu-tools",
    title: "YNCU Tools",
    icon: (
      <Wrench className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: YNCUTools,
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

function YNCUHeader() {
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
          Your Neighbourhood Credit Union
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
        <span>June 2024 - Present</span>
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
          tRPC
        </Badge>
        <Badge variant="outline" className="text-xs">
          Azure
        </Badge>
        <Badge variant="outline" className="text-xs">
          shadcn
        </Badge>
      </motion.div>
    </motion.div>
  );
}

export default function YNCUPage() {
  const [openedProjects, setOpenedProjects] = useState<string[]>(["journey"]);

  return (
    <main className="relative flex h-screen w-full flex-col">
      <Navbar />
      <FloatingTechGridScene />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center px-4 py-12">
        <ScrollArea className="scrollbar-hide mt-12 w-full flex-1">
          <div className="relative flex min-h-full">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative ml-8 flex w-full flex-col gap-8 px-4 py-4"
            >
              <YNCUHeader />
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
                          <project.Component />
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

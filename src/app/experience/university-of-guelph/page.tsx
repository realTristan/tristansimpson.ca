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
  Code2,
  Rocket,
  GraduationCap,
  Building2,
  Shield,
  Mountain,
  Brain,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import { FileText, Layers, ClipboardList, Zap, TrendingUp } from "lucide-react";
import FloatingTechGridScene from "@/components/threejs/floating-tech-grid";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { Cursor } from "@/components/cursor";
import { useIsMobile } from "@/hooks/use-mobile";

const EngineeringAmbition = () => {
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
            <span className="font-semibold text-white">+</span> Founded and led a team of
            15 student software engineers and designers
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed full-stack
            applications for companies, local organizations, and university clubs
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Managed project workflows
            and team coordination using ClickUp
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
              <span className="font-semibold text-white">Team Size:</span> Led 15 student
              engineers and designers
            </li>
            <li>
              <span className="font-semibold text-white">Productivity:</span> Boosted team
              efficiency through collaborative innovation
            </li>
            <li>
              <span className="font-semibold text-white">Leadership:</span> Successfully
              managed software development and design teams
            </li>
            <li>
              <span className="font-semibold text-white">Projects:</span> Delivered
              multiple full-stack applications
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
              <span className="font-semibold text-white">Frontend:</span> Next.js, React,
              Tailwind CSS, TypeScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> tRPC, Python
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> Supabase, MySQL,
              PostgreSQL
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> ClickUp, Figma,
              Git, Vercel, AWS
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
            <li>Led team collaboration for ideation, design, and implementation</li>
            <li>Managed project workflows, milestones, and documentation</li>
            <li>Reviewed and refactored team code</li>
            <li>Coordinated team meetings and brainstorming sessions</li>
            <li>Maintained development systems and infrastructure</li>
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
              <span className="font-semibold text-white">Experience:</span> Provide
              real-world development experience for students
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Create
              tailored solutions for local organizations
            </li>
            <li>
              <span className="font-semibold text-white">Learning:</span> Foster
              collaborative learning and skill development
            </li>
            <li>
              <span className="font-semibold text-white">Community:</span> Build
              connections between students and local organizations
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const GoogleDeveloperStudentClub = () => {
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
            <span className="font-semibold text-white">+</span> Led the GDSC events team
            in organizing workshops and the GDSC Hacks 2024 hackathon
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed the backend
            software for the GDSC Hacks 2024 event registration system
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Hosted workshops on React,
            OpenCV + ML, and Gemini 101
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
              <span className="font-semibold text-white">Events:</span> Organized multiple
              workshops and hackathon
            </li>
            <li>
              <span className="font-semibold text-white">Workshops:</span> Hosted three
              major technical workshops
            </li>
            <li>
              <span className="font-semibold text-white">Engagement:</span> Connected with
              students to improve workshops and events
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Created an
              engaging atmosphere for GDSC Hacks 2024
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
              <span className="font-semibold text-white">Frontend:</span> React, Angular,
              HTML/CSS, JavaScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> TypeScript,
              Firebase
            </li>
            <li>
              <span className="font-semibold text-white">Cloud:</span> Google Cloud
              Platform (GCP)
            </li>
            <li>
              <span className="font-semibold text-white">AI/ML:</span> Gemini, OpenCV
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
            <li>Organized and managed GDSC Hacks 2024 hackathon</li>
            <li>Developed event registration system</li>
            <li>Hosted technical workshops on various Google technologies</li>
            <li>Served as judge for GDSC Hacks 2024</li>
            <li>Connected with students to improve event quality</li>
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
              <span className="font-semibold text-white">Learning:</span> Expose students
              to Google technologies and development
            </li>
            <li>
              <span className="font-semibold text-white">Community:</span> Build a strong
              tech community at UofG
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Foster
              creativity and technical skills
            </li>
            <li>
              <span className="font-semibold text-white">Experience:</span> Provide
              hands-on experience with modern technologies
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const STEMFellowship = () => {
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
            <span className="font-semibold text-white">+</span> Led the STEM Fellowship
            events team in organizing workshops and events
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed the backend
            software for the STEM Fellowship event registration system
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Hosted workshops on React,
            OpenCV + ML, and Gemini 101
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
              <span className="font-semibold text-white">Events:</span> Organized multiple
              workshops and events
            </li>
            <li>
              <span className="font-semibold text-white">Workshops:</span> Hosted three
              major technical workshops
            </li>
            <li>
              <span className="font-semibold text-white">Engagement:</span> Connected with
              students to improve workshops and events
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Created an
              engaging atmosphere for STEM events
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
              <span className="font-semibold text-white">Frontend:</span> React, Angular,
              HTML/CSS, JavaScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> TypeScript,
              Firebase
            </li>
            <li>
              <span className="font-semibold text-white">Cloud:</span> Google Cloud
              Platform (GCP)
            </li>
            <li>
              <span className="font-semibold text-white">AI/ML:</span> Gemini, OpenCV
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
            <li>Organized and managed STEM events</li>
            <li>Developed event registration system</li>
            <li>Hosted technical workshops on various technologies</li>
            <li>Served as judge for STEM events</li>
            <li>Connected with students to improve event quality</li>
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
              <span className="font-semibold text-white">Learning:</span> Expose students
              to STEM technologies and development
            </li>
            <li>
              <span className="font-semibold text-white">Community:</span> Build a strong
              tech community at UofG
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Foster
              creativity and technical skills
            </li>
            <li>
              <span className="font-semibold text-white">Experience:</span> Provide
              hands-on experience with modern technologies
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const EclipseExpositions = () => {
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
            <span className="font-semibold text-white">+</span> Led the design and
            development of full-stack applications and UI components
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Spearheaded the migration
            from REST to tRPC
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed and deployed the
            Eclipse Expositions React component library
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
              <span className="font-semibold text-white">Architecture:</span>
              Successfully migrated from REST to tRPC
            </li>
            <li>
              <span className="font-semibold text-white">Components:</span> Developed
              reusable React component library
            </li>
            <li>
              <span className="font-semibold text-white">Performance:</span> Optimized
              application performance
            </li>
            <li>
              <span className="font-semibold text-white">Development:</span> Improved team
              collaboration and code quality
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
              <span className="font-semibold text-white">Frontend:</span> Next.js, React,
              Tailwind CSS, TypeScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> tRPC, Prisma
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> PostgreSQL
            </li>
            <li>
              <span className="font-semibold text-white">Cloud:</span> AWS, Vercel
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
            <li>Designed and implemented intuitive web interfaces</li>
            <li>Migrated from REST to tRPC architecture</li>
            <li>Developed React component library</li>
            <li>Refactored and optimized team code</li>
            <li>Implemented DevOps and workflow improvements</li>
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
              <span className="font-semibold text-white">Architecture:</span> Improve
              system performance and maintainability
            </li>
            <li>
              <span className="font-semibold text-white">Development:</span> Enhance team
              collaboration and code quality
            </li>
            <li>
              <span className="font-semibold text-white">Experience:</span> Build reusable
              components for future projects
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Implement
              modern development practices
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const SolcoaTechnologies = () => {
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
            <span className="font-semibold text-white">+</span> Designed and developed web
            applications and software solutions
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Contributed to science and
            technology initiatives
          </p>
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
              <span className="font-semibold text-white">Web Development:</span>{" "}
              Full-stack development
            </li>
            <li>
              <span className="font-semibold text-white">Software:</span> Custom software
              solutions
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const EnactusGuelph = () => {
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
            <span className="font-semibold text-white">+</span> Spearheaded the design and
            development of Enactus full-stack web applications
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Worked with a team of
            students to ideate and deploy social, economic, and environmental solutions
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Designed and developed
            Konsioux, connecting consumers with local and ethical brands
          </p>
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
              Next.js, Tailwind CSS
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> tRPC, NextAuth
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> Supabase
              (PostgreSQL), Prisma
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const GuelphCyberSecuritySociety = () => {
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
            <span className="font-semibold text-white">+</span> Led the Machine Learning
            Turret Project
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed the Guelph Cyber
            Security Website
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Designed and developed an
            event management system
          </p>
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
              <span className="font-semibold text-white">Frontend:</span> Next.js, React,
              TypeScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> tRPC
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> PostgreSQL,
              Prisma
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> Vercel, Figma, Blob
              Storage
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const SocietyOfComputingAndInformationScience = () => {
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
            <span className="font-semibold text-white">+</span> Led, organized, and
            managed tech initiatives, projects, and sponsorships as Vice President of
            Technology
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Developed and maintained
            the entire{" "}
            <a
              href="https://socis.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              socis.ca
            </a>{" "}
            website as Lead Website Developer
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Managed system
            infrastructure and technical operations as Systems Administrator
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Coordinated project
            schedules, objectives, and timelines as Project Manager
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
              <span className="font-semibold text-white">Website:</span> Developed and
              maintained the complete{" "}
              <a
                href="https://socis.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                socis.ca
              </a>{" "}
              platform
            </li>
            <li>
              <span className="font-semibold text-white">Leadership:</span> Managed
              multiple technical roles and responsibilities
            </li>
            <li>
              <span className="font-semibold text-white">Projects:</span> Coordinated
              various tech initiatives and sponsorships
            </li>
            <li>
              <span className="font-semibold text-white">Infrastructure:</span> Maintained
              system operations and technical infrastructure
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
              <span className="font-semibold text-white">Frontend:</span> Next.js, React,
              Tailwind CSS, TypeScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> tRPC, Python
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> Supabase, MySQL,
              PostgreSQL
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> Jira, Confluence,
              Google Calendar, Atlassian
            </li>
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
              <span className="font-semibold text-white">Community:</span> Build and
              maintain a strong computing community at UofG
            </li>
            <li>
              <span className="font-semibold text-white">Innovation:</span> Foster
              technical innovation and learning
            </li>
            <li>
              <span className="font-semibold text-white">Leadership:</span> Provide
              technical leadership and guidance
            </li>
            <li>
              <span className="font-semibold text-white">Development:</span> Create and
              maintain essential technical infrastructure
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const SkiAndSnowboardClub = () => {
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
            <span className="font-semibold text-white">+</span> Developed and maintained a
            functional and visually appealing full-stack web application
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Leveraged Google Cloud
            Platform (GCP) and Vercel for hosting and deployment
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Designed and implemented a
            modern UI with NextUI, shadcn, and Tailwind CSS
          </p>
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
              <span className="font-semibold text-white">Frontend:</span> Next.js,
              Tailwind CSS, TypeScript
            </li>
            <li>
              <span className="font-semibold text-white">Backend:</span> Prisma
            </li>
            <li>
              <span className="font-semibold text-white">Database:</span> PostgreSQL
            </li>
            <li>
              <span className="font-semibold text-white">Cloud:</span> Google Cloud
              Platform (GCP), Vercel
            </li>
            <li>
              <span className="font-semibold text-white">Tools:</span> Jira, Confluence,
              Notion, Figma
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const ArtificialIntelligenceClub = () => {
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
            <span className="font-semibold text-white">+</span> Contributed to AI
            initiatives and projects
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Participated in executive
            team activities
          </p>
          <p className="text-gray-200">
            <span className="font-semibold text-white">+</span> Collaborated on GitHub
            projects
          </p>
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
              <span className="font-semibold text-white">Tools:</span> GitHub, AI/ML
              technologies
            </li>
          </ul>
        </Column>
      </Column>
    </Column>
  );
};

const projects = [
  {
    id: "engineering-ambition",
    title: "Engineering Ambition",
    icon: (
      <Rocket className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: EngineeringAmbition,
    tags: ["Founder", "Lead"],
  },
  {
    id: "gdsc",
    title: "Google Developer Student Club",
    icon: (
      <Code2 className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: GoogleDeveloperStudentClub,
    tags: ["Director", "Lead"],
  },
  {
    id: "stem-fellowship",
    title: "STEM Fellowship",
    icon: (
      <GraduationCap className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: STEMFellowship,
    tags: ["Researcher"],
  },
  {
    id: "eclipse",
    title: "Eclipse Expositions",
    icon: (
      <Building2 className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: EclipseExpositions,
    tags: ["Developer"],
  },
  {
    id: "solcoa",
    title: "Solcoa Technologies",
    icon: (
      <Code2 className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: SolcoaTechnologies,
    tags: ["Volunteer Developer"],
  },
  {
    id: "enactus",
    title: "Enactus Guelph",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: EnactusGuelph,
    tags: ["Web Developer"],
  },
  {
    id: "gcss",
    title: "Guelph Cyber Security Society",
    icon: (
      <Shield className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: GuelphCyberSecuritySociety,
    tags: ["Project Lead", "Web Developer"],
  },
  {
    id: "socis",
    title: "Society of Computing and Information Science",
    icon: (
      <Users className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: SocietyOfComputingAndInformationScience,
    tags: ["Vice President", "Lead Developer", "Systems Admin", "Project Manager"],
  },
  {
    id: "ski-club",
    title: "Ski & Snowboard Club",
    icon: (
      <Mountain className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: SkiAndSnowboardClub,
    tags: ["Software Developer"],
  },
  {
    id: "ai-club",
    title: "Artificial Intelligence Club",
    icon: (
      <Brain className="size-5 text-white transition group-hover:text-blue-400 group-focus:text-blue-400" />
    ),
    Component: ArtificialIntelligenceClub,
    tags: ["Executive Team"],
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

const UofGHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4 pt-24 pb-16 text-center"
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
          University of Guelph
        </motion.h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Computer Science Student</span>
        <span className="hidden sm:flex">•</span>
        <span>2023 - 2028</span>
        <span className="hidden sm:flex">•</span>
        <span>Guelph, Ontario</span>
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
          Tailwind CSS
        </Badge>
      </motion.div>
    </motion.div>
  );
};

const UniversityOfGuelphPage = () => {
  const [openedProjects, setOpenedProjects] = useState<string[]>([
    "engineering-ambition",
  ]);

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

      {!isMobile && <UofGHeader />}

      <ScrollArea className="scrollbar-hide mx-auto flex h-full w-full max-w-7xl flex-1 flex-col">
        {isMobile && <UofGHeader />}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center justify-center gap-8 px-4 py-4"
        >
          <Accordion
            type="single"
            collapsible
            className="flex w-full flex-col gap-4"
            defaultValue="engineering-ambition"
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

export default UniversityOfGuelphPage;

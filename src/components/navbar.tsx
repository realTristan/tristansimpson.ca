"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import {
  ExternalLink,
  Menu,
  X,
  Mail,
  File,
  University,
  Banknote,
  Clock,
  Home,
  Code,
  Computer,
  Linkedin,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/magnetic-button";

const navItems = [
  {
    name: "Resume",
  },
  {
    name: "Journey",
    href: "/journey",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

function ProjectsDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MagneticButton
        className={cn(
          "transition-colors duration-200 ease-linear hover:text-blue-500",
          className,
        )}
      >
        <Link
          href="/projects"
          className={cn(
            "font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500",
            className,
          )}
        >
          Projects
        </Link>
      </MagneticButton>
      {/* Wrap bridge and dropdown in one container */}
      <div
        className="absolute top-full left-1/2 z-50 w-72 -translate-x-1/2"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {/* Hover bridge */}
        <div className="h-10 w-full" />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="w-full rounded-xl border border-white/10 bg-black/80 px-2 py-3 shadow-xl backdrop-blur-md"
            >
              <Link
                href="/projects/apollo"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>Apollo</span>
              </Link>
              <Link
                href="/projects/athena"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>Athena</span>
              </Link>
              <Link
                href="/projects/cgl"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>CGL & WinGL</span>
              </Link>
              <Link
                href="https://simpsonresearch.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <ExternalLink className="size-4" />
                <span>Simpson Research</span>
              </Link>
              <Link
                href="https://github.com/realtristan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <ExternalLink className="size-4" />
                <span>GitHub (@realtristan)</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MagneticButton
        className={cn(
          "transition-colors duration-200 ease-linear hover:text-blue-500",
          className,
        )}
      >
        <Link
          href="mailto:tsimps01@uoguelph.ca"
          className={cn(
            "font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500",
            className,
          )}
        >
          Contact
        </Link>
      </MagneticButton>
      <div
        className="absolute top-full left-1/2 z-50 w-72 -translate-x-1/2"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="h-10 w-full" />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="w-full rounded-xl border border-white/10 bg-black/80 px-2 py-3 shadow-xl backdrop-blur-md"
            >
              <a
                href="mailto:tsimps01@uoguelph.ca"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Mail className="size-4" />
                <span>tsimps01@uoguelph.ca</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tristansimpsonn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
                <ExternalLink className="size-4" />
              </a>
              <a
                href="http://x.com/tristans121"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Twitter className="size-4" />
                <span>Twitter</span>
                <ExternalLink className="size-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ResumeDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MagneticButton
        className={cn(
          "transition-colors duration-200 ease-linear hover:text-blue-500",
          className,
        )}
      >
        <Link
          href="#"
          className={cn(
            "font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500",
            className,
          )}
        >
          Resume
        </Link>
      </MagneticButton>

      <div
        className="absolute top-full left-1/2 z-50 w-48 -translate-x-1/2"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="h-10 w-full" />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="w-full rounded-xl border border-white/10 bg-black/80 px-2 py-3 shadow-xl backdrop-blur-md"
            >
              <a
                href="/resume.pdf"
                download
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <File className="size-4" />
                <span>Open Preview</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ExperienceDropdown({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <MagneticButton
        className={cn(
          "transition-colors duration-200 ease-linear hover:text-blue-500",
          className,
        )}
      >
        <Link
          href="#"
          className={cn(
            "font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500",
            className,
          )}
        >
          Experience
        </Link>
      </MagneticButton>
      <div
        className="absolute top-full left-1/2 z-50 w-64 -translate-x-1/2"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="h-10 w-full" />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="w-full rounded-xl border border-white/10 bg-black/80 px-2 py-3 shadow-xl backdrop-blur-md"
            >
              <Link
                href="/experience/yncu"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Computer className="size-4" />
                <span>YNCU (Current 2025)</span>
              </Link>
              <Link
                href="/experience/dominion-lending"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Computer className="size-4" />
                <span>Dominion Lending</span>
              </Link>
              <Link
                href="/experience/university-of-guelph"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <University className="size-4" />
                <span>University of Guelph</span>
              </Link>
              <Link
                href="/experience"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Clock className="size-4" />
                <span>Timeline (All)</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2">
      <motion.div
        className="flex items-center justify-between rounded-2xl border border-white/10 bg-transparent px-8 py-3 shadow-xl backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex-1"
        >
          <Link
            href="/"
            className="text-xl font-bold text-white drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
          >
            TS
          </Link>
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden flex-1 justify-end space-x-12 text-sm md:flex">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
            <ResumeDropdown />
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={1}>
            <MagneticButton>
              <Link
                href="/journey"
                className="font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
              >
                Journey
              </Link>
            </MagneticButton>
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={2}>
            <ExperienceDropdown />
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={3}>
            <ProjectsDropdown />
          </motion.div>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={4}>
            <ContactDropdown />
          </motion.div>
        </div>

        {/* Mobile Menu Button - Right */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-1 justify-end p-2 text-white md:hidden md:w-0"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>
    </nav>
  );
}

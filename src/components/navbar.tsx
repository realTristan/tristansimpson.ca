"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Menu,
  X,
  Mail,
  File,
  Home,
  Code,
  Linkedin,
  Twitter,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/magnetic-button";

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
        <span
          className={cn(
            "cursor-pointer font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500",
            className,
          )}
        >
          Projects
        </span>
      </MagneticButton>
      <div
        className="absolute top-full left-1/2 z-[100] w-80 -translate-x-1/2"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div className="h-6 w-full" />
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.18 }}
              className="bg-background w-full rounded-xl border border-white/10 px-2 py-3 shadow-xl backdrop-blur-md"
            >
              <Link
                href="/projects/hermes"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>Hermes</span>
              </Link>
              <Link
                href="/projects/versa"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>Versa</span>
              </Link>
              <Link
                href="/projects/graphics"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <Code className="size-4" />
                <span>Graphics & Physics</span>
              </Link>
              <div className="mx-2 my-1 border-t border-white/5" />
              <a
                href="https://simpsonresearch.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <ExternalLink className="size-4" />
                <span>Simpson Research (All)</span>
              </a>
              <a
                href="https://github.com/realtristan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-white/90 transition-colors hover:text-blue-400"
              >
                <ExternalLink className="size-4" />
                <span>GitHub (@realtristan)</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function NavLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "font-medium text-white/90 drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500";

  if (external) {
    return (
      <MagneticButton className="transition-colors duration-200 ease-linear hover:text-blue-500">
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton className="transition-colors duration-200 ease-linear hover:text-blue-500">
      <Link href={href} className={cls}>
        {children}
      </Link>
    </MagneticButton>
  );
}

function ConnectIcons() {
  const iconCls = "text-white/70 transition-colors duration-200 hover:text-blue-500";

  return (
    <div className="flex items-center gap-3">
      <a href="mailto:tsimps01@uoguelph.ca" className={iconCls} aria-label="Email">
        <Mail className="size-4" />
      </a>
      <a
        href="https://www.linkedin.com/in/tristansimpsonn/"
        target="_blank"
        rel="noopener noreferrer"
        className={iconCls}
        aria-label="LinkedIn"
      >
        <Linkedin className="size-4" />
      </a>
      <a
        href="https://x.com/tristans121"
        target="_blank"
        rel="noopener noreferrer"
        className={iconCls}
        aria-label="Twitter"
      >
        <Twitter className="size-4" />
      </a>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.12, duration: 0.6 },
    }),
  };

  return (
    <>
      <div className="h-20" />

      <nav className="fixed top-6 left-1/2 z-[100] w-full max-w-4xl -translate-x-1/2 px-6 sm:px-12">
        <motion.div
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-transparent py-3 pr-6 pl-6 shadow-xl backdrop-blur-md sm:pr-8"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="text-sm font-semibold tracking-wide drop-shadow transition-colors duration-200 ease-linear hover:text-blue-500"
            >
              <span className="text-blue-500">@</span> realtristan
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <NavLink href="/experience">Experience</NavLink>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={1}>
              <ProjectsDropdown />
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={2}>
              <NavLink href="/journey">Journey</NavLink>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={3}>
              <NavLink href="/Tristan_Simpson___Resume_2025.pdf" external>Resume</NavLink>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={4}>
              <div className="ml-2 border-l border-white/10 pl-4">
                <ConnectIcons />
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white md:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.18 }}
                className="bg-background absolute top-full left-0 mt-2 max-h-[calc(100vh-8rem)] w-full overflow-y-auto rounded-xl border border-white/10 px-2 py-3 text-sm shadow-xl backdrop-blur-md md:hidden"
              >
                <div className="flex flex-col space-y-1">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <Home className="size-4" />
                    <span>Home</span>
                  </Link>
                  <Link
                    href="/experience"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <Briefcase className="size-4" />
                    <span>Experience</span>
                  </Link>
                  <Link
                    href="/journey"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <MessageCircle className="size-4" />
                    <span>Journey</span>
                  </Link>
                  <a
                    href="/Tristan_Simpson___Resume_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <File className="size-4" />
                    <span>Resume</span>
                  </a>

                  <div className="mx-2 my-1 border-t border-white/10" />

                  <div className="px-4 py-1 text-xs font-medium tracking-wider text-white/40">
                    PROJECTS
                  </div>
                  <Link
                    href="/projects/hermes"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 pl-6 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <Code className="size-4" />
                    <span>Hermes</span>
                  </Link>
                  <Link
                    href="/projects/versa"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 pl-6 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <Code className="size-4" />
                    <span>Versa</span>
                  </Link>
                  <Link
                    href="/projects/graphics"
                    onClick={() => setIsOpen(false)}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2.5 pl-6 text-white/90 transition-colors hover:text-blue-400"
                  >
                    <Code className="size-4" />
                    <span>Graphics & Physics</span>
                  </Link>

                  <div className="mx-2 my-1 border-t border-white/10" />

                  <div className="flex items-center justify-center gap-6 py-3">
                    <a href="mailto:tsimps01@uoguelph.ca" className="text-white/70 transition-colors hover:text-blue-400">
                      <Mail className="size-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tristansimpsonn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 transition-colors hover:text-blue-400"
                    >
                      <Linkedin className="size-5" />
                    </a>
                    <a
                      href="https://x.com/tristans121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 transition-colors hover:text-blue-400"
                    >
                      <Twitter className="size-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </>
  );
}

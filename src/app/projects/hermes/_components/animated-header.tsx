"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Database, Search, Zap } from "lucide-react";

// Animation variants
const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const projectItems = [
  {
    id: "hermes-cache",
    title: "Hermes Cache",
    description:
      "An extremely fast full-text search algorithm and caching system written in Go. Features include high-performance caching, full-text search capabilities, and a flexible API for storing and retrieving data with blazing fast search results.",
    icon: <Database className="mr-2 h-4 w-4 text-white" />,
    link: "https://github.com/realTristan/hermes",
  },
  {
    id: "hermes-fts",
    title: "Hermes FTS",
    description:
      "Advanced full-text search implementation with support for fuzzy matching, strict mode, and configurable word length. Includes features like storage size limits, word indexing, and efficient search algorithms for optimal performance.",
    icon: <Search className="mr-2 h-4 w-4 text-white" />,
    link: "https://github.com/realTristan/hermes",
  },
  {
    id: "hermes-websocket",
    title: "Hermes WebSocket",
    description:
      "Real-time WebSocket API for interacting with Hermes cache and full-text search. Provides an intuitive set of endpoints for cache operations, search queries, and system monitoring with support for custom implementations.",
    icon: <Zap className="mr-2 h-4 w-4 text-white" />,
    link: "https://github.com/realTristan/hermes",
  },
];

export function AnimatedHeader({
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <motion.section
      className={cn(
        "relative mx-auto flex max-w-4xl min-w-fit flex-col items-center justify-center rounded-xl border border-white/10 bg-transparent px-8 py-10 shadow-xl backdrop-blur-md lg:min-w-3xl",
        className,
      )}
      initial="hidden"
      animate="show"
      variants={container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="pointer-events-none flex w-full flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <motion.h1 variants={item} className="text-5xl font-extrabold text-white">
            hermes
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-gray-300"
          >
            An extremely fast full-text search algorithm and caching system written in Go.
            Features include high-performance caching, fuzzy matching, and a flexible API
            for storing and retrieving data with blazing fast search results. Perfect for
            applications requiring efficient text search and data caching capabilities.
          </motion.p>
        </div>

        {/* Project buttons with icons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          {projectItems.map(({ id, title, icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-active group pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-white/10 bg-transparent px-4 py-2 text-white shadow-sm transition hover:border-blue-500 hover:text-blue-400 focus:border-blue-500 focus:text-blue-400"
            >
              {React.cloneElement(icon, {
                className: "h-5 w-5 text-white group-hover:text-blue-400",
              })}
              {title}
            </a>
          ))}
        </motion.div>

        {/* Interactive accordion */}
        <motion.div variants={item} className="w-full max-w-2xl">
          <Accordion
            type="single"
            collapsible
            className="rounded-xl border border-white/10 bg-transparent backdrop-blur-md"
          >
            {projectItems.map(({ id, title, description, icon, link }) => (
              <AccordionItem
                key={id}
                value={id}
                className="border-b border-white/10 px-4"
              >
                <AccordionTrigger className="cursor-active group pointer-events-auto flex w-full items-center justify-between py-4 text-left text-white transition hover:text-blue-400 focus:text-blue-400">
                  <span className="flex items-center gap-2">
                    {React.cloneElement(icon, {
                      className:
                        "size-4 text-white group-hover:text-blue-400 group-focus:text-blue-400",
                    })}
                    {title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 px-4 pb-4 text-left text-gray-400">
                  <p className="leading-snug">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-active pointer-events-auto inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    View on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
}

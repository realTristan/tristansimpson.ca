"use client";

import React, { useState } from "react";
import { Cursor } from "@/components/cursor";
import { SceneLoading } from "@/components/scene-loading";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExternalLink, Database, Search, Zap } from "lucide-react";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import { useIsMobile } from "@/hooks/use-mobile";

// dynamic import with SSR disabled
const ApolloScene = dynamic(() => import("@/components/threejs/apollo-scene"), {
  ssr: false,
});

const HomePage = () => {
  const modelPath = "/apollo.glb";

  const [isLoading, setIsLoading] = useState(true);

  const isMobile = useIsMobile();

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <Navbar />

      {!isMobile && (
        <>
          <section className="relative h-screen w-screen overflow-hidden">
            <ApolloScene modelPath={modelPath} onObjectLoad={() => setIsLoading(false)} />
          </section>

          <Cursor />
        </>
      )}

      {!isMobile && isLoading ? (
        <SceneLoading />
      ) : (
        <>
          <div
            id="wrapper"
            className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center"
            style={{
              background:
                "linear-gradient(to top, rgba(5,5,5,1) 15%, rgba(39,39,39,0) 80%)",
            }}
          >
            <AnimatedHeader className="absolute top-40 mx-12 sm:top-60 2xl:left-1/2" />
          </div>
        </>
      )}
    </main>
  );
};

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

const AnimatedHeader = ({
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) => {
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
      <Column className="pointer-events-none w-full items-center gap-8 text-center">
        <Column className="items-center gap-6">
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
        </Column>

        {/* Project buttons with icons */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
          {projectItems.map(({ id, title, icon, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group pointer-events-auto inline-flex items-center gap-2 rounded-lg border border-white/10 bg-transparent px-4 py-2 text-white shadow-sm transition hover:border-blue-500 hover:text-blue-400 focus:border-blue-500 focus:text-blue-400"
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
                <AccordionTrigger className="group pointer-events-auto flex w-full items-center justify-between py-4 text-left text-white transition hover:text-blue-400 focus:text-blue-400">
                  <Row className="items-center gap-2">
                    {React.cloneElement(icon, {
                      className:
                        "size-4 text-white group-hover:text-blue-400 group-focus:text-blue-400",
                    })}
                    {title}
                  </Row>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 px-4 pb-4 text-left text-gray-400">
                  <p className="leading-snug">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                  >
                    View on GitHub <ExternalLink className="h-4 w-4" />
                  </a>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </Column>
    </motion.section>
  );
};

export default HomePage;

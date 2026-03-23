"use client";

import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";

const TextNowHeader = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-8 px-4 pt-16 pb-16 text-center"
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
          TextNow
        </motion.h2>
      </motion.div>
      <motion.div
        className="flex flex-col items-center gap-4 text-sm text-gray-400 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <span>Software Developer</span>
        <span className="hidden sm:flex">•</span>
        <span>Sep 2025 - Present</span>
        <span className="hidden sm:flex">•</span>
        <span>Waterloo, Ontario</span>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Badge variant="outline" className="text-xs">
          Python3
        </Badge>
        <Badge variant="outline" className="text-xs">
          Javascript
        </Badge>
        <Badge variant="outline" className="text-xs">
          Snowflake
        </Badge>
        <Badge variant="outline" className="text-xs">
          n8n
        </Badge>
        <Badge variant="outline" className="text-xs">
          + More
        </Badge>
      </motion.div>
    </motion.div>
  );
};

const TextNowPage = () => {
  const [openedProjects, setOpenedProjects] = useState<string[]>(["journey"]);

  return (
    <PageShell
      breadcrumbs={[{ label: "Experience", href: "/experience" }, { label: "TextNow" }]}
    >
      <TextNowHeader />
    </PageShell>
  );
};

export default TextNowPage;

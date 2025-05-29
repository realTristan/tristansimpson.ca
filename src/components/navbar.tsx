"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function MagneticLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate distance from center, clamp max offset
    const maxDist = 40;
    const distX = Math.max(Math.min(mouseX - centerX, maxDist), -maxDist);
    const distY = Math.max(Math.min(mouseY - centerY, maxDist), -maxDist);
    x.set(distX * 0.3);
    y.set(distY * 0.3);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <Link
        href={href}
        className={cn(
          "font-medium text-white/90 drop-shadow transition-colors hover:text-white",
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
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
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={i + 1}
            >
              <MagneticLink
                href={item.href}
                className="transition-colors duration-200 ease-linear hover:text-blue-500"
              >
                {item.name}
              </MagneticLink>
            </motion.div>
          ))}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-2 rounded-2xl border border-white/30 bg-white/20 px-6 py-4 shadow-lg backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  custom={i}
                >
                  <Link
                    href={item.href}
                    className="text-lg font-medium text-white/90 drop-shadow hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

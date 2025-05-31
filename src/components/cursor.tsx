"use client";

import { useRef, useEffect, useState } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const offset = active ? 20 : 12;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - offset}px`;
        cursorRef.current.style.top = `${e.clientY - offset}px`;
      }
    };

    document.addEventListener("mousemove", onMove);

    return () => document.removeEventListener("mousemove", onMove);
  }, [active]);

  useEffect(() => {
    const isInteractive = (el: HTMLElement | null): boolean => {
      if (!el) {
        return false;
      }

      if (el.tagName === "BUTTON" || el.tagName === "A") {
        return true;
      }

      if (el.getAttribute("role") === "button" || el.getAttribute("role") === "link") {
        return true;
      }

      if (el.onclick !== null) {
        return true;
      }

      if (el.hasAttribute("onclick")) {
        return true;
      }

      // Check parent elements
      return isInteractive(el.parentElement);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractive(target)) {
        setActive(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractive(target)) {
        setActive(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[999] rounded-full border-2 border-white mix-blend-difference transition-all duration-200 ease-linear ${
        active ? "bg-background h-12 w-12 border-2" : "h-6 w-6 border-2 bg-transparent"
      }`}
      style={{
        transitionProperty: "background, width, height",
        transitionDuration: "200ms",
        transitionTimingFunction: "linear",
      }}
    />
  );
}

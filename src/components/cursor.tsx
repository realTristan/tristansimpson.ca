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
    const isInteractive = (el: EventTarget | null) => {
      let node = el instanceof HTMLElement ? el : null;
      while (node) {
        if (
          node.tagName === "A" ||
          node.tagName === "BUTTON" ||
          node.getAttribute("role") === "button"
        ) {
          return true;
        }
        node = node.parentElement;
      }
      return false;
    };

    const handleOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        setActive(true);
      }
    };
    const handleOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[999] rounded-full border-2 border-white mix-blend-difference transition-all duration-200 ease-linear ${
        active ? "h-12 w-12 border-2 bg-black" : "h-6 w-6 border-2 bg-transparent"
      }`}
      style={{
        transitionProperty: "background, width, height",
        transitionDuration: "200ms",
        transitionTimingFunction: "linear",
      }}
    />
  );
}

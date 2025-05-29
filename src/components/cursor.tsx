import { useRef, useEffect } from "react";

export function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 11.5}px`;
        cursorRef.current.style.top = `${e.clientY - 13}px`;
      }
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-20 rounded-full border-2 border-white p-[0.6rem] mix-blend-difference ease-linear"
    />
  );
}

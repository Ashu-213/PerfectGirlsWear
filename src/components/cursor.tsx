import { useEffect, useState } from "react";

export function LuxuryCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest('a, button, [role="button"], input, textarea, label, [data-cursor="hover"]'));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-rose"
        style={{
          width: 8,
          height: 8,
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${hover ? 0 : 1})`,
          transition: "transform 120ms ease-out, opacity 200ms",
          mixBlendMode: "difference",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-rose"
        style={{
          width: 32,
          height: 32,
          transform: `translate3d(${pos.x - 16}px, ${pos.y - 16}px, 0) scale(${hover ? 1 : 0.4})`,
          opacity: hover ? 1 : 0.5,
          transition: "transform 220ms cubic-bezier(0.16,1,0.3,1), opacity 220ms",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}

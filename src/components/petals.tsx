import { useMemo } from "react";

export function Petal({ size = 16, color = "#f5b6c4", className = "" }: { size?: number; color?: string; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2c1.5 3.5 4.5 5 8 6-3.5 1-6.5 2.5-8 6-1.5-3.5-4.5-5-8-6 3.5-1 6.5-2.5 8-6z"
        fill={color}
      />
      <circle cx="12" cy="12" r="1.5" fill="#e86d8d" />
    </svg>
  );
}

interface PetalFieldProps {
  count?: number;
  tint?: "light" | "dark";
}

export function PetalField({ count = 6, tint = "light" }: PetalFieldProps) {
  const petals = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = 12 + Math.random() * 16;
      const left = Math.random() * 100;
      const delay = Math.random() * 12;
      const duration = 14 + Math.random() * 10;
      return { id: i, size, left, delay, duration };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            top: "0",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: tint === "dark" ? 0.2 : 0.5,
          }}
        >
          <Petal size={p.size} color={tint === "dark" ? "#e86d8d" : "#f5b6c4"} />
        </div>
      ))}
    </div>
  );
}

export function FloralCluster({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <g opacity="0.85">
        <circle cx="60" cy="60" r="28" fill="#f5b6c4" />
        <circle cx="60" cy="60" r="6" fill="#e86d8d" />
        <circle cx="110" cy="40" r="18" fill="#fadadd" />
        <circle cx="110" cy="40" r="4" fill="#e86d8d" />
        <circle cx="140" cy="90" r="14" fill="#f5b6c4" />
        <circle cx="140" cy="90" r="3" fill="#e86d8d" />
        <path d="M30 110 Q60 90 90 110 T160 130" stroke="#e86d8d" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M40 150 Q70 140 100 155" stroke="#f5b6c4" strokeWidth="2" fill="none" />
        <ellipse cx="155" cy="60" rx="10" ry="20" fill="#e86d8d" opacity="0.4" transform="rotate(30 155 60)" />
        <ellipse cx="35" cy="100" rx="8" ry="16" fill="#f5b6c4" opacity="0.7" transform="rotate(-20 35 100)" />
      </g>
    </svg>
  );
}

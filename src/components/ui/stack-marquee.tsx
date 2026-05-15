import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

type TechLogo = {
  name: string;
  svg: React.ReactNode;
  color?: string;
};

const technologies: TechLogo[] = [
  {
    name: "React",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <circle cx="64" cy="64" r="11" fill="currentColor" />
        <g fill="none" stroke="currentColor" strokeWidth="8">
          <ellipse rx="52" ry="20" />
          <ellipse rx="52" ry="20" transform="rotate(60 64 64)" />
          <ellipse rx="52" ry="20" transform="rotate(120 64 64)" />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 12L16 38v52l48 26 48-26V38L64 12zm0 12l36 20v40L64 104 28 84V44l36-20z" />
        <path fill="currentColor" d="M64 36L40 50v28l24 14 24-14V50L64 36z" opacity="0.6" />
      </svg>
    ),
    color: "#68A063",
  },
  {
    name: "Python",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M63.4 12c-18.5 0-17.3 8-17.3 8v8h17.6v2.4H32.3S12 28.1 12 46.7c0 18.5 14.5 18.1 14.5 18.1h8.6V56.5s-.4-10.1 10-10.1h17.2s9.7.2 9.7-9.4V20.3S73.5 12 63.4 12zM47.7 18.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
        <path fill="currentColor" d="M64.6 116c18.5 0 17.3-8 17.3-8v-8H64.3v-2.4h31.4S116 99.9 116 81.3c0-18.5-14.5-18.1-14.5-18.1h-8.6v8.3s.4 10.1-10 10.1H65.7s-9.7-.2-9.7 9.4v16.7S54.5 116 64.6 116zM80.3 109.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
      </svg>
    ),
    color: "#3776AB",
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path fill="white" d="M36 44h16v40H36V44zm24 0h32v10H72v6h14v10H72v14h20v10H60V44z" />
      </svg>
    ),
    color: "#3178C6",
  },
  {
    name: "Next.js",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <circle cx="64" cy="64" r="56" fill="currentColor" />
        <path fill="black" d="M44 36h12v56H44V36zm16 0l24 36V36h12v56L72 56v36H60V36z" />
      </svg>
    ),
    color: "#000",
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M104 56h-8V44H24v12h-8c-4 0-8 4-8 8v32c0 4 4 8 8 8h88c4 0 8-4 8-8V64c0-4-4-8-8-8zM32 52h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zm-48 16h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8zm16 0h8v-8h-8v8z" />
        <path fill="currentColor" d="M100 40c4-4 8-12 4-16-4-4-12 0-16 4l-4 4 16 8z" />
      </svg>
    ),
    color: "#2496ED",
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M32 68c-8 0-16-4-16-12s8-12 16-12c4 0 8 1 12 4l4-8c-5-4-12-6-18-6-14 0-24 10-24 22s10 22 24 22c6 0 12-2 16-6l-4-8c-4 3-8 4-12 4z" />
        <path fill="currentColor" d="M96 68c8 0 16-4 16-12s-8-12-16-12c-4 0-8 1-12 4l-4-8c5-4 12-6 18-6 14 0 24 10 24 22s-10 22-24 22c-6 0-12-2-16-6l4-8c4 3 8 4 12 4z" />
        <path fill="currentColor" d="M64 48c-12 0-20 8-20 20s8 20 20 20 20-8 20-20-8-20-20-20zm0 30c-6 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" />
        <path fill="currentColor" d="M40 84c8 8 16 12 24 12s16-4 24-12l-4-4c-6 6-12 10-20 10s-14-4-20-10l-4 4z" />
      </svg>
    ),
    color: "#FF9900",
  },
  {
    name: "MongoDB",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16c-4 0-8 4-8 8v80c0 4 4 8 8 8s8-4 8-8V24c0-4-4-8-8-8z" />
        <path fill="currentColor" d="M48 24c-4 0-8 4-8 8v64c0 4 4 8 8 8s8-4 8-8V32c0-4-4-8-8-8z" opacity="0.7" />
        <path fill="currentColor" d="M80 24c-4 0-8 4-8 8v64c0 4 4 8 8 8s8-4 8-8V32c0-4-4-8-8-8z" opacity="0.7" />
        <path fill="currentColor" d="M32 40c-4 0-8 4-8 8v32c0 4 4 8 8 8s8-4 8-8V48c0-4-4-8-8-8z" opacity="0.5" />
        <path fill="currentColor" d="M96 40c-4 0-8 4-8 8v32c0 4 4 8 8 8s8-4 8-8V48c0-4-4-8-8-8z" opacity="0.5" />
      </svg>
    ),
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16L24 36v56l40 20 40-20V36L64 16zm0 12l28 14v40L64 96 36 82V42l28-14z" />
        <path fill="currentColor" d="M64 40L44 50v28l20 10 20-10V50L64 40z" opacity="0.6" />
        <circle cx="64" cy="64" r="8" fill="currentColor" />
      </svg>
    ),
    color: "#336791",
  },
  {
    name: "FastAPI",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16L24 36v56l40 20 40-20V36L64 16zm0 12l28 14v40L64 96 36 82V42l28-14z" />
        <path fill="currentColor" d="M64 44L44 54v20l20 10 20-10V54L64 44z" />
        <circle cx="64" cy="64" r="6" fill="currentColor" />
      </svg>
    ),
    color: "#009688",
  },
  {
    name: "Tailwind",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 32c-12 0-20 8-20 20 0 8 4 12 8 16-4-4-12-8-20-8-12 0-20 8-20 20s8 20 20 20c8 0 16-4 20-8 4 4 12 8 20 8 12 0 20-8 20-20s-8-20-20-20c-8 0-16 4-20 8 4-4 8-8 8-16 0-12-8-20-20-20z" />
      </svg>
    ),
    color: "#06B6D4",
  },
  {
    name: "Express",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M24 36l40 56 40-56H24zm12 12h56L64 84 36 48z" />
        <path fill="currentColor" d="M44 60h40v8H44v-8z" opacity="0.6" />
      </svg>
    ),
    color: "#000",
  },
  {
    name: "Redis",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16c-24 0-40 16-40 40s16 40 40 40 40-16 40-40-16-40-40-40zm0 12c16 0 28 12 28 28S80 84 64 84 36 72 36 56s12-28 28-28z" />
        <path fill="currentColor" d="M64 40c-8 0-16 8-16 16s8 16 16 16 16-8 16-16-8-16-16-16z" />
        <circle cx="64" cy="56" r="4" fill="white" />
      </svg>
    ),
    color: "#DC382D",
  },
  {
    name: "Prisma",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16L24 36v56l40 20 40-20V36L64 16zm0 12l28 14v40L64 96 36 82V42l28-14z" />
        <path fill="currentColor" d="M64 44L44 54v20l20 10 20-10V54L64 44z" />
        <path fill="currentColor" d="M64 56L52 62v12l12 6 12-6V62L64 56z" opacity="0.6" />
      </svg>
    ),
    color: "#2D3748",
  },
  {
    name: "GitHub",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 12C35 12 12 35 12 64c0 23 15 43 36 50 3 1 4-1 4-3v-10c-14 3-17-7-17-7-2-6-6-8-6-8-5-3 0-3 0-3 6 0 9 6 9 6 5 9 14 6 17 5 0-4 2-6 4-8-14-2-28-7-28-31 0-7 2-12 6-17 0 0-2-5 0-11 0 0 5 0 10 4 3-1 6-1 10-1s7 0 10 1c5-4 10-4 10-4 2 6 0 11 0 11 4 5 6 10 6 17 0 24-14 29-28 31 2 2 4 6 4 12v18c0 2 1 4 4 3 21-7 36-27 36-50 0-29-23-52-52-52z" />
      </svg>
    ),
    color: "#1B1F23",
  },
  {
    name: "TensorFlow",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 16L24 36v56l40 20 40-20V36L64 16zm0 12l28 14v40L64 96 36 82V42l28-14z" />
        <path fill="currentColor" d="M64 40L44 50v28l20 10 20-10V50L64 40z" opacity="0.7" />
        <circle cx="64" cy="64" r="6" fill="currentColor" />
        <circle cx="48" cy="56" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="56" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="48" cy="72" r="3" fill="currentColor" opacity="0.5" />
        <circle cx="80" cy="72" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    color: "#FF6F00",
  },
  {
    name: "LangChain",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <circle cx="40" cy="64" r="16" fill="none" stroke="currentColor" strokeWidth="6" />
        <circle cx="88" cy="64" r="16" fill="none" stroke="currentColor" strokeWidth="6" />
        <path fill="currentColor" d="M56 64h16v0H56z" />
        <circle cx="64" cy="64" r="4" fill="currentColor" />
      </svg>
    ),
    color: "#1C3C3C",
  },
  {
    name: "GCP",
    svg: (
      <svg viewBox="0 0 128 128" className="h-6 w-6">
        <path fill="currentColor" d="M64 24c-16 0-28 8-32 20h16c2-6 8-10 16-10 10 0 18 8 18 18s-8 18-18 18c-8 0-14-4-16-10H32c4 12 16 20 32 20 20 0 36-16 36-36S84 24 64 24z" />
        <path fill="currentColor" d="M64 60c-6 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z" opacity="0.6" />
      </svg>
    ),
    color: "#4285F4",
  },
];

const ITEM_WIDTH = 160;
const ITEM_GAP = 20;
const STRIDE = ITEM_WIDTH + ITEM_GAP;

function StackPill({ tech }: { tech: TechLogo }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex shrink-0 items-center gap-3 rounded-full border border-border/50 bg-card/60 px-5 py-3.5 backdrop-blur-md shadow-soft cursor-default"
      style={{ width: ITEM_WIDTH }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={isHovered ? { y: -4, scale: 1.06 } : { y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span style={{ color: tech.color || "currentColor" }} className="shrink-0">
        {tech.svg}
      </span>
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-foreground/85 truncate">
        {tech.name}
      </span>
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            boxShadow: `0 0 24px ${tech.color || "hsl(var(--accent))"}40, 0 0 48px ${tech.color || "hsl(var(--accent))"}20`,
            border: `1px solid ${tech.color || "hsl(var(--accent))"}30`,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}

export default function StackMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalWidth = technologies.length * STRIDE;

  const animate = useCallback(() => {
    if (!isPaused) {
      const currentX = x.get();
      const newX = currentX - 0.35;
      x.set(newX <= -totalWidth ? newX + totalWidth : newX);
    }
  }, [x, isPaused, totalWidth]);

  useAnimationFrame(animate);

  const duplicated = [...technologies, ...technologies, ...technologies, ...technologies];

  return (
    <div
      ref={containerRef}
      className="relative mt-16 md:mt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic edge masks using CSS mask-image */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      />

      {/* Top edge fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-gradient-to-b from-background to-transparent" />

      {/* Bottom edge fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3 bg-gradient-to-t from-background to-transparent" />

      {/* Ambient top glow line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      {/* Marquee viewport */}
      <div className="overflow-hidden py-5">
        <motion.div className="flex items-center gap-5" style={{ x }}>
          {duplicated.map((tech, index) => (
            <StackPill key={`${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </div>

      {/* Ambient bottom glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </div>
  );
}

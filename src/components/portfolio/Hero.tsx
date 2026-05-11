import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-44 md:pt-52 md:pb-24">
      {/* Warm radial glow — larger & more diffused */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-60 h-[800px] w-[800px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.22), transparent 60%)" }}
      />
      {/* Secondary subtle glow bottom-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-soft) / 0.3), transparent 60%)" }}
      />

      <motion.div 
        className="mx-auto max-w-[1400px] px-8 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status bar */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" style={{ animationDuration: "2.5s" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for internships &amp; collaborations
          </div>
          <div className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 md:flex">
            <MapPin className="h-3 w-3" />
            Bangalore, India
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p variants={itemVariants} className="eyebrow mt-20 md:mt-24">
          Portfolio — V2026.05
        </motion.p>

        {/* Main headline — tighter leading, larger on desktop */}
        <motion.h1
          variants={itemVariants}
          className="font-display mt-5 text-[17vw] leading-[0.9] tracking-[-0.03em] md:text-[10.5rem]"
        >
          <span className="block text-foreground">Amar</span>
          <span className="block italic text-accent">
            Kerpala<span className="text-foreground/40">.</span>
          </span>
        </motion.h1>

        {/* Two-col info strip */}
        <motion.div
          variants={itemVariants}
          className="mt-14 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-[1.5fr_1fr] md:gap-24 md:pt-12"
        >
          <p className="max-w-lg text-[1.0625rem] leading-[1.75] text-foreground/75">
            I build real-time, intelligent systems — from astronaut telemetry
            pipelines to fraud-detection microservices.
          </p>

          <div className="border-l border-border pl-8">
            <p className="eyebrow mb-3">Currently</p>
            <p className="font-medium text-foreground">Software Engineer</p>
            <p className="mt-2 text-sm text-muted-foreground">B.E. Information Science · DSCE</p>
            <p className="mt-1 font-mono text-xs text-accent">9.46 CGPA</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

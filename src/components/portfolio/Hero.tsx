import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-32 pt-44 md:pt-52">
      {/* Warm radial glow — larger & more diffused */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-60 h-[800px] w-[800px] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.22), transparent 60%)" }}
      />
      {/* Secondary subtle glow bottom-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-soft) / 0.3), transparent 60%)" }}
      />

      <div className="mx-auto max-w-[1400px] px-8 md:px-12">
        {/* Status bar */}
        <div className="flex items-center justify-between">
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
        </div>

        {/* Eyebrow */}
        <p className="eyebrow mt-20 md:mt-24" style={{ animation: "fade-in-up 0.8s 0.1s cubic-bezier(.2,.7,.2,1) both" }}>
          Portfolio — V2026.05
        </p>

        {/* Main headline — tighter leading, larger on desktop */}
        <h1
          className="font-display mt-5 text-[17vw] leading-[0.9] tracking-[-0.03em] md:text-[10.5rem]"
          style={{ animation: "fade-in-up 1s 0.2s cubic-bezier(.2,.7,.2,1) both" }}
        >
          <span className="block text-foreground">Amar</span>
          <span
            className="block italic text-accent"
            style={{ animation: "fade-in-up 1s 0.32s cubic-bezier(.2,.7,.2,1) both" }}
          >
            Kerpala<span className="text-foreground/40">.</span>
          </span>
        </h1>

        {/* Two-col info strip */}
        <div
          className="mt-14 grid gap-10 border-t border-border pt-10 md:mt-16 md:grid-cols-[1.5fr_1fr] md:gap-24 md:pt-12"
          style={{ animation: "fade-in-up 1s 0.48s cubic-bezier(.2,.7,.2,1) both" }}
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
        </div>
      </div>
    </section>
  );
}

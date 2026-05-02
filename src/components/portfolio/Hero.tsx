import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-24 pt-40 md:pt-44">
      {/* warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-70 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.18), transparent 60%)" }}
      />
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 font-mono uppercase tracking-[0.18em] text-foreground/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Available for internships &amp; collaborations
          </div>
          <div className="hidden items-center gap-2 font-mono uppercase tracking-[0.18em] text-foreground/70 md:flex">
            <MapPin className="h-3.5 w-3.5" />
            Bangalore, Karnataka — India
          </div>
        </div>

        <p className="eyebrow mt-24">Portfolio — V2026.05</p>

        <h1 className="font-display mt-6 text-[18vw] leading-[0.92] md:text-[11rem]">
          <span className="block animate-fade-in-up">Amar</span>
          <span
            className="block italic text-accent"
            style={{ animation: "fade-in-up 1s .15s cubic-bezier(.2,.7,.2,1) both" }}
          >
            Kerpala<span className="text-foreground">.</span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <p className="max-w-xl text-lg leading-relaxed text-foreground/80 reveal">
            I build real-time, intelligent systems — from astronaut telemetry pipelines
            to fraud-detection microservices.
          </p>

          <div className="reveal border-l border-border pl-6">
            <p className="eyebrow mb-3">Currently</p>
            <p className="font-medium">Software Engineer</p>
            <p className="mt-2 text-sm text-muted-foreground">B.E. Information Science · DSCE — 9.46 CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

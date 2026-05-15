import { GraduationCap, FileText, Award } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export default function Education() {
  return (
    <section id="education" className="section-rule py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-16 md:mb-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              IV. Education & Recognition
            </p>
            <h2 className="text-5xl leading-[1.0] md:text-[5.5rem] font-medium tracking-[-0.02em]">
              Where I'm <span className="italic font-display text-accent">studying</span> &amp;{" "}
              recognised <span className="italic font-display text-accent">work</span>.
            </h2>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">

          {/* ── Education card ─────────────────────────── */}
          <Reveal delay={0.1}>
            <div className="rounded-[24px] border border-border/50 bg-surface/40 p-8 md:p-10 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md">
              <div className="mb-8 flex items-center gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <span className="eyebrow">Degree</span>
              </div>

              <h3 className="font-display text-2xl leading-snug md:text-3xl">
                Dayananda Sagar College of Engineering
              </h3>
              <p className="mt-4 text-[0.9375rem] text-foreground/75">
                B.E. — Information Science Engineering
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Bangalore, Karnataka</p>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  2023 — 2027
                </span>
                <span className="rounded-full bg-foreground px-4 py-1.5 font-mono text-xs text-background">
                  9.46 / 10 CGPA
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Achievements ───────────────────────────── */}
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-5">
              {/* IEEE Paper */}
              <div className="rounded-[24px] border border-border/50 bg-surface/40 p-8 md:p-10 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md flex-1">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <span className="eyebrow">Research Publication · 2025</span>
                </div>
                <h3 className="font-display text-xl leading-snug md:text-2xl">
                  AI-enabled Space Crew Health Monitoring System
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">5th IEEE International Conference on ICTBIG</p>
                <p className="mt-5 text-[0.9375rem] leading-[1.8] text-foreground/75">
                  Co-authored a peer-reviewed paper presenting a real-time bio-telemetry and
                  anomaly-forecasting architecture for astronaut health monitoring.
                </p>
              </div>

              {/* CGPA achievement */}
              <div className="rounded-[24px] border border-border/50 bg-surface/40 p-8 md:p-10 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/12">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <span className="eyebrow">Academic · 2023 — Present</span>
                </div>
                <h3 className="font-display text-xl leading-snug md:text-2xl">
                  Sustained 9.46 / 10 CGPA
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">Dayananda Sagar College of Engineering</p>
                <p className="mt-5 text-[0.9375rem] leading-[1.8] text-foreground/75">
                  Top-decile academic performance across systems, algorithms and
                  machine-learning coursework while shipping side projects in parallel.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

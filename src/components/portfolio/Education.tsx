import { GraduationCap, FileText, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div className="reveal">
            <p className="eyebrow mb-6">04 — Education</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Where I'm <span className="italic text-accent">studying</span>.
            </h2>

            <div className="card-soft mt-12 p-8">
              <div className="flex items-start gap-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent/15">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl">Dayananda Sagar College of Engineering</h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    2023 — 2027
                  </p>
                  <p className="mt-3 text-foreground/80">B.E. — Information Science Engineering</p>
                  <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-1.5 font-mono text-xs text-background">
                    Current CGPA: 9.46 / 10.0
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow mb-6">05 — Achievements</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Recognised <span className="italic text-accent">work</span>.
            </h2>

            <div className="mt-12 space-y-5">
              <div className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Research Publication · 2025
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl">AI-enabled Space Crew Health Monitoring System</h3>
                <p className="mt-2 text-sm text-muted-foreground">5th IEEE International Conference on ICTBIG</p>
                <p className="mt-4 text-foreground/80">
                  Co-authored a peer-reviewed paper presenting a real-time bio-telemetry and
                  anomaly-forecasting architecture for astronaut health monitoring.
                </p>
              </div>

              <div className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Academic · 2023 — Present
                  </span>
                </div>
                <h3 className="font-display mt-4 text-2xl">Sustained 9.46 / 10 CGPA</h3>
                <p className="mt-2 text-sm text-muted-foreground">Dayananda Sagar College of Engineering</p>
                <p className="mt-4 text-foreground/80">
                  Top-decile academic performance across systems, algorithms and
                  machine-learning coursework while shipping side projects in parallel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

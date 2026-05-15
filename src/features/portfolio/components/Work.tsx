import { ArrowUpRight, Plus, Github } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    n: "01",
    tag: "Published · IEEE ICTBIG 2025",
    year: "2025",
    role: "Lead Engineer · ML + Backend",
    title: "Space Crew Health Monitoring",
    sub: "Real-time astronaut telemetry & anomaly forecasting",
    body: "An end-to-end telemetry pipeline that streams astronaut physiological signals every 10 seconds into InfluxDB, layered with ML models for anomaly detection, risk classification and 24-minute forecasting on heart rate, SpO₂, body temperature and stress indicators.",
    bullets: [
      "Designed FastAPI + Node.js services with role-based access for astronauts and mission doctors",
      "Trained anomaly detection and forecasting models on continuous bio-signal streams",
      "Implemented alerting that surfaces deteriorating vitals minutes before threshold breach",
    ],
    stack: ["Python", "FastAPI", "Node.js", "InfluxDB", "MongoDB", "TensorFlow"],
    metrics: [
      { v: "10s", l: "Telemetry interval" },
      { v: "24m", l: "Forecast horizon" },
    ],
    href: "https://github.com/chinmai-sd-123/astronaut_space_health.git",
  },
  {
    n: "02",
    tag: "Infra / DevOps",
    year: "2025",
    role: "Cloud Engineer",
    title: "Infra-Guard",
    sub: "Cloud cost & health optimizer",
    body: "A GitOps-driven optimizer that reduces idle cloud spend through automated cleanup workflows, containerised monitoring agents, and versioned infrastructure backups on S3.",
    bullets: [
      "Engineered Jenkins + GitHub GitOps pipeline for automated resource cleanup",
      "Containerised Prometheus / Grafana monitoring agents on AWS EC2",
      "Synced infrastructure state to S3 for versioned disaster recovery",
    ],
    stack: ["AWS", "Docker", "Jenkins", "Prometheus", "Grafana", "GitOps"],
    metrics: [
      { v: "GitOps", l: "Workflow" },
      { v: "S3", l: "DR backups" },
    ],
    href: "https://github.com/getdownandcode/Infra-Guard.git",
  },
  {
    n: "03",
    tag: "Fintech / ML",
    year: "2024",
    role: "ML Engineer",
    title: "Shield-Fi",
    sub: "Real-time financial fraud detection",
    body: "A fraud-scoring microservice that handles severe class imbalance with SMOTE and time-decay feature engineering, deployed as a low-latency FastAPI endpoint.",
    bullets: [
      "Trained an XGBoost classifier reaching 0.92 PR-AUC on a 0.17% positive-class dataset",
      "Engineered time-decay and transaction-velocity features improving recall by 15%",
      "Shipped a FastAPI microservice scoring transactions in under 50ms p95",
    ],
    stack: ["Python", "XGBoost", "Scikit-Learn", "SMOTE", "FastAPI"],
    metrics: [
      { v: "0.92", l: "PR-AUC" },
      { v: "<50ms", l: "p95 latency" },
    ],
    href: "https://github.com/getdownandcode/shield-fi.git",
  },
  {
    n: "04",
    tag: "Healthcare / Microservices",
    year: "2024",
    role: "Backend Engineer",
    title: "LifeLine",
    sub: "Blood bank & organ matching microservices",
    body: "A medical emergency matching platform built on Node.js microservices, geospatial MongoDB queries, RabbitMQ-driven async messaging and Redis caching for peak-load resilience.",
    bullets: [
      "Architected geospatial donor-matching service for real-time emergency response",
      "Decoupled inventory & notification services via RabbitMQ — 30% throughput uplift",
      "Cached location-based queries in Redis, cutting DB read latency by 60%",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    metrics: [
      { v: "+30%", l: "Throughput" },
      { v: "−60%", l: "Read latency" },
    ],
    href: "https://github.com/getdownandcode/LifeLine.git",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-rule py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                II. Selected work
              </p>
              <h2 className="text-5xl leading-[1.0] md:text-[5.5rem] font-medium tracking-[-0.02em]">
                Things I've <span className="italic font-display text-accent">built</span>.
              </h2>
            </div>
            <p className="max-w-[280px] text-sm leading-relaxed text-muted-foreground md:text-right">
              Four representative projects across ML, distributed systems and cloud infrastructure.
            </p>
          </div>
        </Reveal>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((p, idx) => (
            <Reveal key={p.n} delay={0.1 * idx}>
              <Dialog>
                <article className="group relative flex h-full min-h-[380px] flex-col justify-between rounded-[24px] border border-border/50 bg-surface/40 p-7 sm:p-10 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md">
                  
                  {/* Invisible overlay button to trigger modal */}
                  <DialogTrigger className="absolute inset-0 z-10 outline-none cursor-pointer rounded-2xl" aria-label="View project details" />

                  {/* Card Content - we set pointer-events-none so clicks fall through to the overlay trigger, 
                      but restore pointer-events-auto on the buttons we want to be clickable */}
                  <div className="relative z-20 flex h-full flex-col justify-between pointer-events-none">
                    <div>
                      {/* Top Header: Tags & Index */}
                      <div className="mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-border/50 pb-5">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                          <span className="rounded-full bg-accent/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                            {p.tag}
                          </span>
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                            {p.year}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-muted-foreground pt-0.5">{p.n}</span>
                      </div>

                      {/* Title & Link */}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-3xl leading-tight md:text-[2.25rem]">{p.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{p.sub}</p>
                        </div>
                        <div className="flex items-center gap-2 pointer-events-auto">
                          {/* GitHub Link Button */}
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            title="View on GitHub"
                            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-300 hover:border-foreground/30 hover:bg-foreground hover:text-background hover:shadow-soft"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                          
                          {/* Plus Icon (Visual indicator for the DialogTrigger) */}
                          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-300 group-hover:border-foreground/30 group-hover:bg-foreground group-hover:text-background group-hover:shadow-soft pointer-events-none">
                            <Plus className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
                          </div>
                        </div>
                      </div>

                      {/* Body Text Truncated */}
                      <p className="mt-6 text-[0.9375rem] leading-[1.8] text-foreground/75 line-clamp-3">
                        {p.body}
                      </p>
                    </div>

                    {/* Footer: Tech Stack */}
                    <div className="mt-8 border-t border-border pt-6">
                      <div className="flex flex-wrap gap-2">
                        {p.stack.slice(0, 4).map((s) => (
                          <span key={s} className="chip">{s}</span>
                        ))}
                        {p.stack.length > 4 && (
                          <span className="chip">+{p.stack.length - 4}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </article>

                <DialogContent className="max-w-2xl bg-card border-border shadow-2xl gap-0 p-0 sm:rounded-[2rem] overflow-hidden">
                  <div className="max-h-[85vh] overflow-y-auto p-8 sm:p-12">
                    <DialogHeader className="mb-6 border-b border-border/50 pb-6 text-left">
                      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <span className="w-fit rounded-full bg-accent/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                          {p.tag}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                          {p.year}
                        </span>
                      </div>
                      <DialogTitle className="font-display text-3xl md:text-4xl">{p.title}</DialogTitle>
                      <p className="mt-2 text-base text-muted-foreground">{p.sub}</p>
                    </DialogHeader>

                    <p className="text-[1.0625rem] leading-[1.8] text-foreground/80">
                      {p.body}
                    </p>

                    <ul className="mt-8 space-y-4">
                      {p.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-4 text-foreground/80">
                          <span className="mt-[0.6em] h-px w-4 shrink-0 bg-accent/60" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 grid grid-cols-2 gap-6 rounded-2xl bg-surface p-6 sm:p-8">
                      {p.metrics.map((m) => (
                        <div key={m.l}>
                          <div className="font-display text-4xl leading-none text-foreground">{m.v}</div>
                          <div className="eyebrow mt-2 text-muted-foreground">{m.l}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                      <div className="flex flex-wrap gap-2 flex-1">
                        {p.stack.map((s) => (
                          <span key={s} className="chip bg-background">{s}</span>
                        ))}
                      </div>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex h-11 shrink-0 items-center justify-center gap-2.5 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

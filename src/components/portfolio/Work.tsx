import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

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
    <section id="work" className="section-rule py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Section header */}
        <Reveal>
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5">02 — Selected work</p>
              <h2 className="font-display text-5xl leading-[1.0] md:text-[5.5rem]">
                Things I've <span className="italic text-accent">built</span>.
              </h2>
            </div>
            <p className="max-w-[280px] text-sm leading-relaxed text-muted-foreground md:text-right">
              Four representative projects across ML, distributed systems and cloud infrastructure.
            </p>
          </div>
        </Reveal>

        {/* Project list */}
        <div>
          {projects.map((p, idx) => (
            <Reveal key={p.n} delay={0.1 * idx}>
              <article
                className="group grid gap-8 border-t border-border py-14 md:grid-cols-[64px_1fr_200px] md:gap-16 md:py-16"
              >
                {/* Index number */}
                <div className="font-mono text-xs text-muted-foreground pt-1">{p.n}</div>

                {/* Content */}
                <div>
                  {/* Tags row */}
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent/12 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      {p.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {p.year} · {p.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl leading-tight md:text-[2.75rem]">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.sub}</p>

                  {/* Body */}
                  <p className="mt-6 max-w-2xl text-[0.9375rem] leading-[1.8] text-foreground/75">
                    {p.body}
                  </p>

                  {/* Bullets */}
                  <ul className="mt-6 space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/75">
                        <span className="mt-[0.55em] h-px w-4 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack chips */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Right column: metrics + link */}
                <div className="flex flex-row items-start justify-between gap-8 md:flex-col md:items-end md:justify-between md:pt-1">
                  <div className="flex gap-8 md:flex-col md:items-end md:gap-6">
                    {p.metrics.map((m) => (
                      <div key={m.l} className="md:text-right">
                        <div className="font-display text-3xl leading-none md:text-4xl">{m.v}</div>
                        <div className="eyebrow mt-2">{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-1.5 text-[13px] text-foreground/80 hover:text-foreground"
                  >
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

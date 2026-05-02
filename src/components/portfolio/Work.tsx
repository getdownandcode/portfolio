import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    n: "01",
    tag: "PUBLISHED — IEEE ICTBIG 2025",
    year: "2025",
    role: "Lead Engineer · ML + Backend",
    title: "Space Crew Health Monitoring System",
    sub: "Real-time astronaut telemetry & anomaly forecasting",
    body: "An end-to-end telemetry pipeline that streams astronaut physiological signals every 10 seconds into InfluxDB, layered with ML models for anomaly detection, risk classification and 24-minute forecasting on heart rate, SpO₂, body temperature and stress indicators.",
    bullets: [
      "Designed FastAPI + Node.js services with role-based access for astronauts and mission doctors",
      "Trained anomaly detection and forecasting models on continuous bio-signal streams",
      "Implemented an alerting layer that surfaces deteriorating vitals minutes before threshold breach",
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
    tag: "INFRA / DEVOPS",
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
    href: "#",
  },
  {
    n: "03",
    tag: "FINTECH / ML",
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
    tag: "HEALTHCARE / MICROSERVICES",
    year: "2024",
    role: "Backend Engineer",
    title: "LifeLine",
    sub: "Blood bank & organ matching microservices",
    body: "A medical emergency matching platform built on Node.js microservices, geospatial MongoDB queries, RabbitMQ-driven async messaging and Redis caching for peak-load resilience.",
    bullets: [
      "Architected geospatial donor-matching service for real-time emergency response",
      "Decoupled inventory & notification services via RabbitMQ — 30% throughput uplift",
      "Cached location-based queries in Redis, cutting DB read latency by 60% under peak load",
    ],
    stack: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "Docker"],
    metrics: [
      { v: "+30%", l: "Throughput" },
      { v: "-60%", l: "Read latency" },
    ],
    href: "https://github.com/getdownandcode/LifeLine.git",
  },
];

export default function Work() {
  return (
    <section id="work" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="reveal mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-6">02 — Selected work</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Things I've <span className="italic text-accent">built</span>.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Four representative projects across ML, distributed systems and cloud infrastructure.
          </p>
        </div>

        <div className="space-y-px">
          {projects.map((p) => (
            <article
              key={p.n}
              className="group reveal grid gap-10 border-t border-border py-14 md:grid-cols-[80px_1.6fr_1fr] md:gap-12"
            >
              <div className="font-mono text-sm text-muted-foreground">{p.n}</div>

              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-accent/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {p.year} · {p.role}
                  </span>
                </div>

                <h3 className="font-display text-4xl leading-tight md:text-5xl">{p.title}</h3>
                <p className="mt-2 text-foreground/70">{p.sub}</p>

                <p className="mt-6 max-w-xl text-foreground/80">{p.body}</p>

                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start justify-between gap-8 md:items-end">
                <div className="flex gap-10 md:gap-14">
                  {p.metrics.map((m) => (
                    <div key={m.l}>
                      <div className="font-display text-4xl md:text-5xl">{m.v}</div>
                      <div className="eyebrow mt-2">{m.l}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 text-sm text-foreground"
                >
                  Read case
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

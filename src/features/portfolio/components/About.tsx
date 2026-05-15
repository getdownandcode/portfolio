import { Reveal } from "@/components/ui/reveal";

export default function About() {
  const stats = [
    { v: "9.46", l: "CGPA / 10", sub: "Top decile" },
    { v: "4+",   l: "Projects shipped", sub: "Production-grade" },
    { v: "1",    l: "IEEE paper", sub: "ICTBIG 2025" },
    { v: "<50ms",l: "Inference", sub: "p95 latency" },
  ];

  return (
    <section id="about" className="section-rule py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Header row */}
        <Reveal>
          <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-end md:mb-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                I. About
              </p>
              <h2 className="text-5xl leading-[1.0] md:text-[5.5rem] font-medium tracking-[-0.02em]">
                A builder of{" "}
                <span className="italic font-display text-accent">quietly<br />intelligent</span>{" "}
                systems.
              </h2>
            </div>

            {/* Pull-quote that anchors the right column */}
            <p className="max-w-md text-base leading-[1.85] text-foreground/65 md:pb-2">
              I'm a final-year Information Science student at Dayananda Sagar College
              of Engineering, deeply focused on the intersection of distributed systems,
              applied machine learning, and cloud-native infrastructure.
            </p>
          </div>
        </Reveal>

        {/* Body copy + stats — two columns */}
        <Reveal delay={0.15}>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-24">
            <div className="space-y-5 text-[1.0625rem] leading-[1.8] text-foreground/75">
              <p>
                My work revolves around building production-grade systems that are
                observable, resilient, and quietly intelligent — services that stream
                telemetry every 10 seconds, microservices that match donors in real
                time, and ML pipelines that score risk in under 50 milliseconds.
              </p>
              <p>
                I care about the parts users never see: the queue that decouples
                failure, the cache that saves a life-critical query, the GitOps
                workflow that retires idle infrastructure before the bill arrives.
              </p>
            </div>

            {/* Stats grid — 2×2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.l}
                  className="group flex flex-col justify-between rounded-[24px] border border-border/50 bg-surface/40 p-6 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md"
                >
                  <div className="font-display text-4xl leading-none md:text-5xl">{s.v}</div>
                  <div className="mt-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">{s.l}</div>
                    <div className="mt-1 font-mono text-[10px] text-accent/80">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

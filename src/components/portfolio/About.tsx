export default function About() {
  const stats = [
    { v: "9.46", l: "CGPA / 10" },
    { v: "4+", l: "Production-grade projects" },
    { v: "1", l: "IEEE publication" },
    { v: "<50ms", l: "Inference latency" },
  ];
  return (
    <section id="about" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-24">
          <div className="reveal">
            <p className="eyebrow mb-6">01 — About</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              A builder of <span className="italic text-accent">quietly intelligent</span> systems.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/80 reveal">
            <p>
              I'm a final-year Information Science student at Dayananda Sagar College of Engineering with
              a 9.46 CGPA, deeply focused on the intersection of distributed systems, applied machine
              learning, and cloud-native infrastructure.
            </p>
            <p>
              My work revolves around building production-grade systems that are observable, resilient,
              and quietly intelligent — services that stream telemetry every 10 seconds, microservices
              that match donors in real time, and ML pipelines that score risk in under 50 milliseconds.
            </p>
            <p>
              I care about the parts users never see: the queue that decouples failure, the cache that
              saves a life-critical query, the GitOps workflow that retires idle infrastructure before
              the bill arrives.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl">{s.v}</div>
                  <div className="eyebrow mt-2 normal-case tracking-[0.16em]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

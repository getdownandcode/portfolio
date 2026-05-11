import { Reveal } from "@/components/ui/reveal";

const groups = [
  { n: "01", title: "Languages",         items: ["Python", "C++", "C", "JavaScript"] },
  { n: "02", title: "AI / ML & Data",    items: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "LLMs", "XGBoost", "Scikit-Learn"] },
  { n: "03", title: "LLMOps & GenAI",    items: ["RAG", "LangChain", "LangGraph", "Tool Calling", "Vector Search"] },
  { n: "04", title: "Backend",           items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Microservices"] },
  { n: "05", title: "Cloud",             items: ["AWS EC2", "AWS S3", "AWS Lambda", "CloudWatch", "API Gateway", "DynamoDB", "GCP"] },
  { n: "06", title: "DevOps & Infra",    items: ["Docker", "Jenkins", "Terraform", "GitHub Actions", "CI/CD", "GitOps"] },
  { n: "07", title: "Observability",     items: ["Prometheus", "Grafana", "ELK Stack"] },
  { n: "08", title: "Data Stores",       items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "InfluxDB"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-rule py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Header — asymmetric: label left, description right */}
        <Reveal>
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:mb-20">
            <div>
              <p className="eyebrow mb-5">03 — Toolbox</p>
              <h2 className="font-display text-5xl leading-[1.0] md:text-[5.5rem]">
                Stack <span className="italic text-accent">&</span> craft.
              </h2>
            </div>
            <p className="max-w-sm text-[0.9375rem] leading-[1.8] text-foreground/65">
              The toolbox I reach into most often, organised by the problem space it solves.
            </p>
          </div>
        </Reveal>

        {/* Skills grid — 2 cols mobile, 4 cols large, border-gap pattern */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {groups.map((g) => (
              <div
                key={g.n}
                className="group flex flex-col justify-between bg-card p-7 transition-colors duration-300 hover:bg-surface"
              >
                {/* Title row */}
                <div className="mb-6 flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl leading-tight md:text-2xl">{g.title}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground mt-1 shrink-0">{g.n}</span>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="chip">{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

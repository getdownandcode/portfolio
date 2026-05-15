import { Reveal } from "@/components/ui/reveal";
import StackMarquee from "@/components/ui/stack-marquee";

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
    <section id="skills" className="section-rule py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Header — asymmetric: label left, description right */}
        <Reveal>
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:mb-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
                III. Toolbox
              </p>
              <h2 className="text-5xl leading-[1.0] md:text-[5.5rem] font-medium tracking-[-0.02em]">
                Stack <span className="italic font-display text-accent">&</span> craft.
              </h2>
            </div>
            <p className="max-w-sm text-[0.9375rem] leading-[1.8] text-foreground/65">
              The toolbox I reach into most often, organised by the problem space it solves.
            </p>
          </div>
        </Reveal>

        {/* Skills grid — 2 cols mobile, 4 cols large, border-gap pattern */}
        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {groups.map((g) => (
              <div
                key={g.n}
                className="group flex flex-col justify-between rounded-[24px] border border-border/50 bg-surface/40 p-7 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-md"
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

        {/* Infinite tech stack marquee */}
        <Reveal delay={0.25}>
          <StackMarquee />
        </Reveal>
      </div>
    </section>
  );
}

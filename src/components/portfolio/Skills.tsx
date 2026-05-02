const groups = [
  { n: "01", title: "Languages", items: ["Python", "C++", "C", "JavaScript"] },
  { n: "02", title: "AI / ML & Data Science", items: ["Machine Learning", "NLP", "TensorFlow", "PyTorch", "LLMs", "XGBoost", "Scikit-Learn"] },
  { n: "03", title: "LLMOps & GenAI", items: ["RAG", "LangChain", "LangGraph", "Tool Calling", "Vector Search"] },
  { n: "04", title: "Backend", items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Microservices"] },
  { n: "05", title: "Cloud", items: ["AWS EC2", "AWS S3", "AWS Lambda", "CloudWatch", "API Gateway", "DynamoDB", "GCP"] },
  { n: "06", title: "DevOps & Infra", items: ["Docker", "Jenkins", "Terraform", "GitHub Actions", "CI/CD", "GitOps"] },
  { n: "07", title: "Observability", items: ["Prometheus", "Grafana", "ELK Stack"] },
  { n: "08", title: "Data Stores", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "InfluxDB"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="reveal mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-6">03 — Toolbox</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Stack <span className="italic text-accent">&amp;</span> craft.
            </h2>
          </div>
          <p className="max-w-md text-foreground/70">
            Below is the toolbox I reach into most often, organised by the problem space it solves.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.n} className="reveal group bg-card p-7 transition-colors duration-300 hover:bg-surface">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-2xl">{g.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{g.n}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

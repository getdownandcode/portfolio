import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/50">Let's collaborate</p>
          <h3 className="font-display mt-4 text-5xl leading-tight md:text-6xl">
            Have an idea? <br />
            <span className="italic" style={{ color: "hsl(var(--accent-soft))" }}>Let's build it.</span>
          </h3>
          <a
            href="mailto:amarkerpala59@gmail.com"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-background/10 px-5 py-3 text-sm text-background transition-all hover:bg-background hover:text-foreground"
          >
            amarkerpala59@gmail.com
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/50">Sitemap</p>
          <ul className="mt-6 space-y-3 text-background/85">
            {[["About", "about"], ["Work", "work"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]].map(([l, h]) => (
              <li key={h}><a href={`#${h}`} className="link-underline">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/50">Elsewhere</p>
          <ul className="mt-6 space-y-3 text-background/85">
            <li><a className="inline-flex items-center gap-3 link-underline" href="https://github.com/getdownandcode" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a></li>
            <li><a className="inline-flex items-center gap-3 link-underline" href="https://linkedin.com/in/amar-k-p-42a017294" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
            <li><a className="inline-flex items-center gap-3 link-underline" href="mailto:amarkerpala59@gmail.com"><Mail className="h-4 w-4" /> Email</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-background/50 md:flex-row">
          <span>© 2026 — Amar Kerpala. Crafted with care in Bangalore.</span>
          <span>V2026.05 · Light edition</span>
        </div>
      </div>
    </footer>
  );
}

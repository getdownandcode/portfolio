import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1400px] px-8 py-20 md:px-12 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.8fr_1fr_1fr]">

          {/* CTA column */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/45">
              Let's collaborate
            </p>
            <h3 className="mt-5 text-4xl font-medium leading-[1.1] md:text-6xl tracking-[-0.02em]">
              Have an idea?{" "}
              <span className="italic font-display" style={{ color: "hsl(var(--accent-soft))" }}>
                Let's build it.
              </span>
            </h3>
            <a
              href="mailto:amarkerpala59@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm text-background/85 transition-all duration-300 hover:border-background/40 hover:gap-3 hover:text-background"
            >
              amarkerpala59@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Sitemap */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/45">
              Sitemap
            </p>
            <ul className="mt-7 space-y-4">
              {[["About", "about"], ["Work", "work"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]].map(([l, h]) => (
                <li key={h}>
                  <a
                    href={`#${h}`}
                    className="text-sm text-background/75 link-underline transition-colors hover:text-background"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-background/45">
              Elsewhere
            </p>
            <ul className="mt-7 space-y-4">
              <li>
                <a
                  href="https://github.com/getdownandcode"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-background/75 link-underline transition-colors hover:text-background"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/amar-k-p-42a017294"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-background/75 link-underline transition-colors hover:text-background"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:amarkerpala59@gmail.com"
                  className="inline-flex items-center gap-3 text-sm text-background/75 link-underline transition-colors hover:text-background"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-2 px-8 py-6 font-mono text-[10px] uppercase tracking-[0.18em] text-background/40 md:flex-row md:px-12">
          <span>© 2026 — Amar Kerpala. Crafted with care in Bangalore.</span>
          <span>V2026.05 · Light edition</span>
        </div>
      </div>
    </footer>
  );
}

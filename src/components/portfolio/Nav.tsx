import { ArrowUpRight } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-3 rounded-full bg-foreground py-2 pl-2 pr-5 text-background shadow-card transition-transform duration-300 hover:scale-[1.02]">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-background/10 font-mono text-xs tracking-widest">AK</span>
          <span className="leading-tight">
            <span className="block text-sm font-medium">Amar K P</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/60">Software Engineer</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 rounded-full border border-border bg-background/80 px-7 py-3 backdrop-blur-md md:flex">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="link-underline group flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              <span className="font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background shadow-card transition-all duration-300 hover:gap-3 hover:bg-foreground/90"
        >
          Get in touch
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

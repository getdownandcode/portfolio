import { ArrowUpRight } from "lucide-react";

const links = [
  { id: "about",     label: "About" },
  { id: "work",      label: "Work" },
  { id: "skills",    label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact",   label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed left-0 right-0 top-5 z-50 px-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">

        {/* Logo pill — tighter, cleaner */}
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-full bg-foreground py-2 pl-2.5 pr-5 shadow-card transition-all duration-300 hover:shadow-hover hover:scale-[1.02]"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-background/10 font-mono text-[10px] tracking-widest text-background">
            AK
          </span>
          <span className="leading-snug">
            <span className="block text-[13px] font-semibold text-background">Amar K P</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-background/55">
              Software Engineer
            </span>
          </span>
        </a>

        {/* Nav pill — refined gap & font size */}
        <nav className="hidden items-center gap-7 rounded-full border border-border bg-background/85 px-8 py-3 shadow-soft backdrop-blur-md md:flex">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group flex items-center gap-1.5 text-[13px] text-foreground/70 transition-colors duration-200 hover:text-foreground"
            >
              <span className="font-mono text-[9px] text-muted-foreground transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="link-underline">{l.label}</span>
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-medium text-background shadow-card transition-all duration-300 hover:gap-3 hover:shadow-hover"
        >
          Get in touch
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

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
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display italic text-2xl tracking-tight text-foreground transition-transform group-hover:-rotate-2">
            Amar.
          </span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-border bg-transparent px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Contact
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:amarkerpala59@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
  }

  return (
    <section id="contact" className="border-t border-border py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <p className="eyebrow mb-6">06 — Contact</p>
            <h2 className="font-display text-5xl leading-[1.05] md:text-7xl">
              Let's <span className="italic text-accent">talk</span>.
            </h2>
            <p className="mt-8 max-w-md text-foreground/75">
              I'm currently open to internships, research collaborations and freelance
              backend / ML work. The fastest way to reach me is email — I usually reply within a day.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={<Mail className="h-4 w-4 text-accent" />} label="Email" value="amarkerpala59@gmail.com" href="mailto:amarkerpala59@gmail.com" />
              <ContactRow icon={<Phone className="h-4 w-4 text-accent" />} label="Phone" value="+91 9449359912" href="tel:+919449359912" />
              <ContactRow icon={<MapPin className="h-4 w-4 text-accent" />} label="Based in" value="Bangalore, Karnataka — India" />
            </div>

            <div className="mt-10 flex gap-3">
              <SocialBtn href="https://github.com/getdownandcode" label="GitHub"><Github className="h-4 w-4" /></SocialBtn>
              <SocialBtn href="https://linkedin.com/in/amar-k-p-42a017294" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialBtn>
            </div>
          </div>

          <form onSubmit={submit} className="card-soft reveal p-8 md:p-10">
            <p className="eyebrow mb-8">Send a message</p>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-accent/30"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-accent/30"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me a bit about the project, the team, the timeline…"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all focus:border-foreground focus:ring-2 focus:ring-accent/30"
                />
              </Field>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">By sending, you agree I'll only use this to reply.</p>

            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm text-background transition-all duration-300 hover:gap-3"
            >
              Send message
              <Send className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} className="group flex items-center gap-4">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 transition-transform group-hover:scale-110">{icon}</span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <span className="block text-sm text-foreground link-underline">{value}</span>
      </span>
    </Tag>
  );
}

function SocialBtn({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-surface"
    >
      {children}
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      {children}
    </label>
  );
}

export { ArrowUpRight };

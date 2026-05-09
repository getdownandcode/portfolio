import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "your site"}`);
    const body    = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:amarkerpala59@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
  }

  return (
    <section id="contact" className="section-rule py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12">

        {/* Section header — full width, large */}
        <div className="reveal mb-16 md:mb-20">
          <p className="eyebrow mb-5">06 — Contact</p>
          <h2 className="font-display text-5xl leading-[1.0] md:text-[5.5rem]">
            Let's <span className="italic text-accent">talk</span>.
          </h2>
        </div>

        {/* Two-col: info left, form right */}
        <div className="grid gap-14 md:grid-cols-[1fr_1.3fr] md:gap-20">

          {/* Left — contact info */}
          <div className="reveal" data-delay="1">
            <p className="max-w-sm text-[0.9375rem] leading-[1.85] text-foreground/70">
              I'm currently open to internships, research collaborations and freelance
              backend / ML work. The fastest way to reach me is email — I usually reply within a day.
            </p>

            <div className="mt-10 space-y-6">
              <ContactRow
                icon={<Mail className="h-4 w-4 text-accent" />}
                label="Email"
                value="amarkerpala59@gmail.com"
                href="mailto:amarkerpala59@gmail.com"
              />
              <ContactRow
                icon={<Phone className="h-4 w-4 text-accent" />}
                label="Phone"
                value="+91 9449359912"
                href="tel:+919449359912"
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4 text-accent" />}
                label="Based in"
                value="Bangalore, Karnataka — India"
              />
            </div>

            <div className="mt-10 flex gap-3">
              <SocialBtn href="https://github.com/getdownandcode" label="GitHub">
                <Github className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href="https://linkedin.com/in/amar-k-p-42a017294" label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialBtn>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={submit} className="reveal card-soft p-8 md:p-10" data-delay="2">
            <p className="eyebrow mb-8">Send a message</p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ada Lovelace"
                  className="input-field"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@domain.com"
                  className="input-field"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the project, team, timeline…"
                  className="input-field resize-none"
                />
              </Field>
            </div>

            <p className="mt-5 text-[11px] text-muted-foreground">
              By sending, you agree I'll only use this to reply.
            </p>

            <button
              type="submit"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:gap-3 hover:bg-foreground/90"
            >
              Send message
              <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ───────────────────────────────────────── */
function ContactRow({
  icon, label, value, href,
}: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const Tag: any = href ? "a" : "div";
  return (
    <Tag href={href} className="group flex items-center gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent/10 transition-all duration-200 group-hover:bg-accent/18 group-hover:scale-105">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-0.5 block text-sm text-foreground link-underline">{value}</span>
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
      className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground hover:bg-surface"
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

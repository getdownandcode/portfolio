import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, FileText, Github, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.2, 0.65, 0.3, 0.9] as const,
    },
  },
};

const resumeUrl = "https://drive.google.com/file/d/1EOy-h9TFzitAnwRF-h4ZIcc0x5-XMaiw/view?usp=drive_link";
const githubUsername = "getdownandcode";
const githubUrl = "https://github.com/getdownandcode";
const githubContributionsUrl = `https://github-contributions-api.deno.dev/${githubUsername}.json`;

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type ContributionsData = {
  contributions: ContributionDay[][];
  totalContributions: number;
};

export default function Hero() {
  const [commitCounts, setCommitCounts] = useState<Map<string, number>>(new Map());
  const [commitTotal, setCommitTotal] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGitHubActivity() {
      try {
        const response = await fetch(githubContributionsUrl, { signal: controller.signal });

        if (!response.ok) return;

        const data = (await response.json()) as ContributionsData;
        const nextCommitCounts = new Map<string, number>();
        let nextCommitTotal = 0;

        for (const week of data.contributions) {
          for (const day of week) {
            nextCommitCounts.set(day.date, day.contributionCount);
            nextCommitTotal += day.contributionCount;
          }
        }

        setCommitCounts(nextCommitCounts);
        setCommitTotal(nextCommitTotal);
      } catch (error) {
        if (!controller.signal.aborted) {
          setCommitCounts(new Map());
          setCommitTotal(0);
        }
      }
    }

    loadGitHubActivity();

    return () => controller.abort();
  }, []);

  const contributionDays = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    return Array.from({ length: 371 }, (_, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      const key = date.toISOString().slice(0, 10);
      const count = commitCounts.get(key) ?? 0;

      return {
        key,
        count,
        isActiveRange: date >= startDate && date <= today,
        month: date.getDate() <= 7 ? date.toLocaleString("en-US", { month: "short" }) : "",
      };
    });
  }, [commitCounts]);

  const monthLabels = contributionDays.filter((day, index) => day.month && index % 7 === 0);

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-32 md:pt-36 md:pb-24">
      {/* Warm radial glow — larger & more diffused */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden
        className="pointer-events-none absolute -right-60 -top-60 h-[800px] w-[800px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.22), transparent 60%)" }}
      />
      {/* Secondary subtle glow bottom-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent-soft) / 0.3), transparent 60%)" }}
      />

      <motion.div 
        className="mx-auto max-w-[1400px] px-8 md:px-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status bar */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" style={{ animationDuration: "2.5s" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for internships &amp; collaborations
          </div>
          <div className="hidden items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50 md:flex">
            <MapPin className="h-3 w-3" />
            Bangalore, India
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p variants={itemVariants} className="eyebrow mt-10 md:mt-12">
          Portfolio - V2026.05
        </motion.p>

        <div className="mt-5 grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(520px,620px)] md:items-end md:gap-10 xl:gap-14">
          <motion.div variants={itemVariants}>
            {/* Main headline — tighter leading, larger on desktop */}
            <h1 className="font-display text-[17vw] leading-[0.9] tracking-[-0.03em] md:text-[10.5rem]">
              <span className="block text-foreground">Amar</span>
              <span className="block italic text-accent">
                Kerpala<span className="text-foreground/40">.</span>
              </span>
            </h1>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:gap-4 hover:shadow-hover"
            >
              <FileText className="h-4 w-4" />
              Resume
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group block w-full rounded-2xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-hover sm:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">GitHub Activity</p>
                <p className="mt-3 font-mono text-xs text-muted-foreground">@{githubUsername}</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-6">
                <Github className="h-5 w-5" />
              </span>
            </div>

            <div className="mt-6 overflow-x-auto pb-1">
              <div className="min-w-[620px]">
                <div className="relative ml-8 h-5 font-mono text-[10px] text-foreground/60">
                  {monthLabels.map((day) => {
                    const column = Math.floor(contributionDays.findIndex((item) => item.key === day.key) / 7);

                    return (
                      <span
                        key={day.key}
                        className="absolute top-0"
                        style={{ left: `${column * 12}px` }}
                      >
                        {day.month}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <div className="grid grid-rows-7 gap-1 pt-[1px] font-mono text-[10px] leading-[8px] text-foreground/55">
                    <span />
                    <span>Mon</span>
                    <span />
                    <span>Wed</span>
                    <span />
                    <span>Fri</span>
                    <span />
                  </div>

                  <div className="grid grid-flow-col grid-rows-7 gap-1">
                    {contributionDays.map((day) => {
                      const level =
                        day.count >= 4 ? "bg-accent" :
                        day.count >= 2 ? "bg-accent/75" :
                        day.count >= 1 ? "bg-accent/45" :
                        "bg-surface-2";

                      return (
                        <span
                          key={day.key}
                          className={`h-2 w-2 rounded-[2px] border border-border/70 ${level}`}
                          title={day.count > 0 ? `${day.count} public commits on ${day.key}` : `No public commits on ${day.key}`}
                          aria-label={day.count > 0 ? `${day.count} public commits on ${day.key}` : `No public commits on ${day.key}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/55">
                {commitTotal} recent commits
              </p>
              <div className="flex items-center gap-4">
                <div className="hidden items-center gap-1.5 font-mono text-[10px] text-foreground/55 sm:flex">
                  <span>Less</span>
                  <span className="h-2 w-2 rounded-[2px] border border-border/70 bg-surface-2" />
                  <span className="h-2 w-2 rounded-[2px] border border-border/70 bg-accent/45" />
                  <span className="h-2 w-2 rounded-[2px] border border-border/70 bg-accent/75" />
                  <span className="h-2 w-2 rounded-[2px] border border-border/70 bg-accent" />
                  <span>More</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                  View profile
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}

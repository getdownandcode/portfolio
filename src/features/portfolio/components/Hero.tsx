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

        <div className="mt-5 flex flex-col items-center gap-16 lg:gap-24 w-full">
          <motion.div variants={itemVariants} className="w-full">
            {/* Main headline — tighter leading, larger on desktop */}
            <h1 className="text-[17vw] leading-[0.85] tracking-[-0.04em] md:text-[11rem] font-medium text-center">
              <span className="block text-foreground">Amar</span>
              <span className="block font-display italic text-foreground">
                Kerpala<span className="text-accent">.</span>
              </span>
            </h1>

            <div className="flex justify-center mt-12">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-medium text-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:gap-4 hover:shadow-md hover:bg-foreground/90"
              >
                <FileText className="h-5 w-5" />
                Resume
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group block w-full max-w-[850px] mx-auto rounded-[32px] border border-white/50 bg-white/20 backdrop-blur-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">GitHub Activity</p>
                <p className="mt-4 font-mono text-sm text-foreground/70">@{githubUsername}</p>
              </div>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-6">
                <Github className="h-7 w-7" />
              </span>
            </div>

            <div className="mt-10 overflow-x-auto pb-4">
              <div className="min-w-[742px]">
                <div className="relative ml-10 h-6 font-mono text-[10px] text-foreground/60">
                  {monthLabels.map((day) => {
                    const column = Math.floor(contributionDays.findIndex((item) => item.key === day.key) / 7);

                    return (
                      <span
                        key={day.key}
                        className="absolute top-0"
                        style={{ left: `${column * 14}px` }}
                      >
                        {day.month}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  <div className="grid grid-rows-7 gap-1 pt-0.5 font-mono text-[10px] leading-[10px] text-foreground/55">
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
                        "bg-white/40";

                      return (
                        <span
                          key={day.key}
                          className={`h-2.5 w-2.5 rounded-[2px] border border-black/5 ${level}`}
                          title={day.count > 0 ? `${day.count} public commits on ${day.key}` : `No public commits on ${day.key}`}
                          aria-label={day.count > 0 ? `${day.count} public commits on ${day.key}` : `No public commits on ${day.key}`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/55">
                {commitTotal} recent commits
              </p>
              <div className="flex items-center gap-6">
                <div className="hidden items-center gap-2 font-mono text-xs text-foreground/55 sm:flex">
                  <span>Less</span>
                  <span className="h-4 w-4 rounded-[4px] border border-border/70 bg-surface-2" />
                  <span className="h-4 w-4 rounded-[4px] border border-border/70 bg-accent/45" />
                  <span className="h-4 w-4 rounded-[4px] border border-border/70 bg-accent/75" />
                  <span className="h-4 w-4 rounded-[4px] border border-border/70 bg-accent" />
                  <span>More</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  View profile
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}

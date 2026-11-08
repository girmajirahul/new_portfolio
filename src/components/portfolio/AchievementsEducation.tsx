
import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  BookOpen,
  GraduationCap,
  Calendar,
  Sparkles,
  Orbit,
  ArrowUpRight,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./About";

// --------------------------------------------------
// Types
// --------------------------------------------------

type Milestone = {
  id: number;
  title: string;
  sub: string;
  type: "Achievement" | "Certification" | "Education";
  Icon: LucideIcon;
  color: string;
  period?: string;
  cgpa?: string;
  description: string;
};

// --------------------------------------------------
// Existing achievements and education data
// --------------------------------------------------

const milestones: Milestone[] = [
    {
    id: 1,
    title: "Master of Computer Applications",
    sub: "Pune Cambridge Institute of Management & Computer Application",
    type: "Education",
    Icon: GraduationCap,
    color: "#C084FC",
    period: "Graduated 2026",
    cgpa: "8.34 / 10",
    description:
      "Currently pursuing a Master of Computer Applications (MCA).",
  },
  {
    id: 2,
    title: "B.Sc. Computer Science",
    sub: "Abasaheb Garware College, Pune",
    type: "Education",
    Icon: GraduationCap,
    color: "#2DD4BF",
    period: "Graduated 2024",
    cgpa: "8.89 / 10",
    description:
      "Completed a Bachelor of Science degree in Computer Science.",
  },
  {
    id: 3,
    title: "First Prize",
    sub: "Desai Karandak 2k24",
    type: "Achievement",
    Icon: Trophy,
    color: "#F472B6",
    description:
      "Recognized with first prize at Desai Karandak 2024.",
  },
  {
    id: 4,
    title: "Third Prize",
    sub: "Hacker Halloween — National Level",
    type: "Achievement",
    Icon: Award,
    color: "#A78BFA",
    description:
      "Secured third prize in the national-level Hacker Halloween competition.",
  },
  {
    id: 5,
    title: "Programming in Python",
    sub: "Swayam",
    type: "Certification",
    Icon: BookOpen,
    color: "#60A5FA",
    description:
      "Completed the Programming in Python certification through Swayam.",
  },
  {
    id: 6,
    title: "Data Science using Python",
    sub: "Swayam",
    type: "Certification",
    Icon: BookOpen,
    color: "#22D3EE",
    description:
      "Completed the Data Science using Python certification through Swayam.",
  },
  {
    id: 7,
    title: "The Ultimate React Course",
    sub: "Udemy",
    type: "Certification",
    Icon: BookOpen,
    color: "#818CF8",
    description:
      "Completed The Ultimate React Course on Udemy.",
  },
  
];

// --------------------------------------------------
// Orbit node positions
// --------------------------------------------------

const orbitPositions = [
  { x: 50, y: 5 },
  { x: 84, y: 20 },
  { x: 94, y: 52 },
  { x: 77, y: 84 },
  { x: 37, y: 94 },
  { x: 8, y: 69 },
  { x: 12, y: 29 },
];

// --------------------------------------------------
// Main component
// --------------------------------------------------

export function AchievementsEducation() {
  const [activeId, setActiveId] = useState(1);

  const activeMilestone =
    milestones.find((item) => item.id === activeId) ?? milestones[0];

  const ActiveIcon = activeMilestone.Icon;

  const categoryCounts = {
    Achievement: milestones.filter(
      (item) => item.type === "Achievement"
    ).length,
    Certification: milestones.filter(
      (item) => item.type === "Certification"
    ).length,
    Education: milestones.filter(
      (item) => item.type === "Education"
    ).length,
  };

  return (
    <section
      id="achievements"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* ------------------------------------------ */}
      {/* Background effects */}
      {/* ------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[140px]"
        style={{ background: "var(--neon-blue)" }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full opacity-10 blur-[120px]"
        style={{ background: "var(--neon-purple)" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <SectionHeading
          eyebrow="// My Journey"
          title="Achievements &"
          gradient="Education"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
          Every milestone represents a step forward in my journey.
          Explore my achievements, certifications and academic
          milestones.
        </p>

        {/* ---------------------------------------- */}
        {/* Statistics */}
        {/* ---------------------------------------- */}

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
          {[
            {
              label: "Achievements",
              count: categoryCounts.Achievement,
              color: "#F472B6",
            },
            {
              label: "Certifications",
              count: categoryCounts.Certification,
              color: "#60A5FA",
            },
            {
              label: "Education",
              count: categoryCounts.Education,
              color: "#C084FC",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl border border-border/50 p-3 text-center sm:p-5"
            >
              <div
                className="font-display text-2xl font-bold sm:text-3xl"
                style={{ color: stat.color }}
              >
                {String(stat.count).padStart(2, "0")}
              </div>
              <p className="mt-1 text-[10px] text-muted-foreground sm:text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------------------------------------- */}
        {/* Orbit and details */}
        {/* ---------------------------------------- */}

        <div className="mx-auto mt-14 grid max-w-7xl items-center gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

          {/* Orbit visual */}

          <div className="relative mx-auto w-full max-w-[560px]">

            {/* Orbit stage */}

            <div className="relative aspect-square w-full">

              {/* Rotating outer orbit */}

              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 100,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[1%] rounded-full border border-dashed border-primary/20"
              />

              {/* Static SVG orbital rings */}

              <svg
                viewBox="0 0 500 500"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="orbitGradient"
                    x1="0"
                    y1="0"
                    x2="500"
                    y2="500"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>

                  <radialGradient id="orbitGlow">
                    <stop stopColor="#818CF8" stopOpacity="0.2" />
                    <stop
                      offset="100%"
                      stopColor="#818CF8"
                      stopOpacity="0"
                    />
                  </radialGradient>
                </defs>

                {/* Main elliptical orbit */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="205"
                  ry="190"
                  stroke="url(#orbitGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5 9"
                  opacity="0.5"
                />

                {/* Inner orbit */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="165"
                  ry="145"
                  stroke="url(#orbitGradient)"
                  strokeWidth="1"
                  opacity="0.15"
                />

                {/* Center glow */}
                <circle
                  cx="250"
                  cy="250"
                  r="130"
                  fill="url(#orbitGlow)"
                />

                {/* Cross lines */}
                <path
                  d="M250 35 V465 M35 250 H465"
                  stroke="url(#orbitGradient)"
                  strokeDasharray="2 12"
                  opacity="0.15"
                />
              </svg>

              {/* Rotating orbital particle */}

              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[10%]"
              >
                <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_4px_rgba(34,211,238,0.6)]" />
              </motion.div>

              {/* Central hub */}

              <div className="absolute left-1/2 top-1/2 z-10 flex h-[31%] w-[31%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.04, 1],
                    opacity: [0.5, 0.85, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border border-primary/50 shadow-[0_0_35px_rgba(129,140,248,0.2)]"
                />

                <div className="absolute inset-[10%] rounded-full border border-dashed border-primary/40" />

                <div className="glass relative flex h-[78%] w-[78%] flex-col items-center justify-center rounded-full border border-primary/40 bg-background/80 shadow-[0_0_45px_rgba(129,140,248,0.15)]">
                  <Orbit className="mb-2 h-7 w-7 text-primary sm:h-9 sm:w-9" />

                  <span className="font-display text-[10px] font-bold tracking-[0.18em] sm:text-xs">
                    MY JOURNEY
                  </span>

                  <span className="mt-1 font-mono text-[9px] text-muted-foreground sm:text-[10px]">
                    20XX — NOW
                  </span>
                </div>
              </div>

              {/* Milestone nodes */}

              {milestones.map((item, index) => {
                const position = orbitPositions[index];
                const isActive = activeId === item.id;
                const Icon = item.Icon;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    aria-label={`Select ${item.title}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveId(item.id)}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + index * 0.09,
                      type: "spring",
                      stiffness: 140,
                      damping: 14,
                    }}
                    whileHover={{ scale: 1.14 }}
                    whileTap={{ scale: 0.94 }}
                    className="absolute z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    style={
                      {
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        "--node-color": item.color,
                      } as CSSProperties
                    }
                  >
                    {/* Active glow */}

                    {isActive && (
                      <motion.span
                        layoutId="active-orbit-glow"
                        className="absolute -inset-2 rounded-full opacity-40 blur-xl"
                        style={{ background: item.color }}
                      />
                    )}

                    {/* Node icon */}

                    <span
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all duration-300 sm:h-12 sm:w-12 ${
                        isActive
                          ? "scale-110"
                          : "hover:scale-105"
                      }`}
                      style={{
                        borderColor: item.color,
                        boxShadow: isActive
                          ? `0 0 12px ${item.color}, 0 0 30px ${item.color}66`
                          : `0 0 10px ${item.color}44`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        style={{ color: item.color }}
                      />
                    </span>

                    {/* Node label */}

                    <span
                      className={`relative max-w-[90px] rounded-full border px-2 py-1 text-center text-[8px] font-semibold leading-tight backdrop-blur-md transition-all sm:max-w-[115px] sm:text-[10px] ${
                        isActive
                          ? "border-primary/50 bg-background text-foreground"
                          : "border-border/50 bg-background/80 text-muted-foreground"
                      }`}
                    >
                      {item.type}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Orbit legend */}

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[
                { label: "Achievements", color: "#F472B6" },
                { label: "Certifications", color: "#60A5FA" },
                { label: "Education", color: "#C084FC" },
              ].map((legend) => (
                <div
                  key={legend.label}
                  className="flex items-center gap-2"
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: legend.color,
                      boxShadow: `0 0 10px ${legend.color}`,
                    }}
                  />
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    {legend.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* -------------------------------------- */}
          {/* Selected milestone detail panel */}
          {/* -------------------------------------- */}

          <div className="relative w-full min-w-0">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMilestone.id}
                initial={{ opacity: 0, x: 25, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -15, filter: "blur(5px)" }}
                transition={{ duration: 0.35 }}
                className="glass relative overflow-hidden rounded-3xl border border-border/60 p-6 sm:p-8 lg:p-10"
              >
                {/* Background decoration */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-15 blur-[90px]"
                  style={{ background: activeMilestone.color }}
                />

                <div className="relative z-10">

                  {/* Top header */}

                  <div className="mb-8 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2 w-2 animate-pulse rounded-full"
                        style={{
                          background: activeMilestone.color,
                          boxShadow: `0 0 12px ${activeMilestone.color}`,
                        }}
                      />

                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                        Selected Milestone
                      </span>
                    </div>

                    <span className="font-mono text-xs text-muted-foreground">
                      {String(activeMilestone.id).padStart(2, "0")} / 07
                    </span>
                  </div>

                  {/* Large icon */}

                  <div
                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-border/50 sm:h-24 sm:w-24"
                    style={{
                      background: `linear-gradient(135deg, ${activeMilestone.color}30, transparent)`,
                      boxShadow: `0 0 35px ${activeMilestone.color}20`,
                    }}
                  >
                    <ActiveIcon
                      className="h-10 w-10 sm:h-12 sm:w-12"
                      style={{ color: activeMilestone.color }}
                    />
                  </div>

                  {/* Category */}

                  <span
                    className="mb-4 inline-flex rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest"
                    style={{
                      color: activeMilestone.color,
                      borderColor: `${activeMilestone.color}55`,
                      background: `${activeMilestone.color}12`,
                    }}
                  >
                    {activeMilestone.type}
                  </span>

                  {/* Title */}

                  <h3 className="mb-4 font-display text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {activeMilestone.title}
                  </h3>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {activeMilestone.sub}
                  </p>

                  <div
                    className="my-7 h-px w-full"
                    style={{
                      background: `linear-gradient(90deg, ${activeMilestone.color}, transparent)`,
                    }}
                  />

                  {/* Description */}

                  <p className="text-sm leading-7 text-muted-foreground">
                    {activeMilestone.description}
                  </p>

                  {/* Education metadata */}

                  {(activeMilestone.period || activeMilestone.cgpa) && (
                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

                      {activeMilestone.period && (
                        <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                          <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-[10px] font-mono uppercase tracking-wider">
                              Duration
                            </span>
                          </div>

                          <p className="text-sm font-semibold">
                            {activeMilestone.period}
                          </p>
                        </div>
                      )}

                      {activeMilestone.cgpa && (
                        <div className="rounded-2xl border border-border/50 bg-background/40 p-4">
                          <div className="mb-2 flex items-center gap-2 text-muted-foreground">
                            <Star className="h-4 w-4" />
                            <span className="text-[10px] font-mono uppercase tracking-wider">
                              Academic Score
                            </span>
                          </div>

                          <p
                            className="font-display text-xl font-bold"
                            style={{ color: activeMilestone.color }}
                          >
                            {activeMilestone.cgpa}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation */}

                  <div className="mt-9 flex items-center justify-between border-t border-border/50 pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setActiveId(
                          activeId === 1
                            ? milestones.length
                            : activeId - 1
                        )
                      }
                      className="rounded-full border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-primary hover:text-primary"
                    >
                      ← Previous
                    </button>

                    <span className="font-mono text-[10px] text-muted-foreground">
                      EXPLORE JOURNEY
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setActiveId(
                          activeId === milestones.length
                            ? 1
                            : activeId + 1
                        )
                      }
                      className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
                      style={{
                        background: "var(--gradient-primary)",
                      }}
                    >
                      Next
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Hint */}

            <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Select any orbit node to explore a milestone
            </div>
          </div>
        </div>

        {/* ---------------------------------------- */}
        {/* Bottom journey statement */}
        {/* ---------------------------------------- */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 text-center"
        >
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>

          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            The Journey Continues
          </h3>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
            Learning never stops. Every experience, challenge and
            achievement brings a new opportunity to grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

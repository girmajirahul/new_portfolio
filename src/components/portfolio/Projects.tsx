import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Wallet, User, Briefcase } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "Expense Manager",
    desc: "A full-featured expense tracking application with monthly summaries, CRUD operations, and robust data validation.",
    stack: ["JSP Servlet", "SQL Server", "Bootstrap"],
    Icon: Wallet,
    accent: "var(--neon-blue)",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Portfolio Website",
    desc: "Premium animated portfolio site built with React and Framer Motion. Features contact form integration via EmailJS.",
    stack: ["React.js", "Tailwind CSS", "EmailJS"],
    Icon: User,
    accent: "var(--neon-purple)",
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Online Job Portal",
    desc: "MERN-stack job portal with authentication, job posting, search & filtering, and end-to-end application management.",
    stack: ["React.js", "Express.js", "MongoDB", "Node.js"],
    Icon: Briefcase,
    accent: "var(--neon-cyan)",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const sx = useMotionValue(50);
  const sy = useMotionValue(50);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    mx.set(x - 0.5);
    my.set(y - 0.5);
    sx.set(x * 100);
    sy.set(y * 100);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="glass rounded-3xl p-8 group relative overflow-hidden hover:border-primary/40 transition-colors"
    >
      {/* spotlight */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: useTransform(
            [sx, sy],
            ([x, y]) =>
              `radial-gradient(400px circle at ${x}% ${y}%, ${p.accent}22, transparent 60%)`
          ),
        }}
      />

      <div
        className="w-full aspect-[16/10] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${p.accent}33, transparent), oklch(0.12 0.04 270)`,
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="relative z-10"
          style={{ transform: "translateZ(40px)" }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center"
            style={{ background: "var(--gradient-primary)", boxShadow: `0 20px 60px ${p.accent}66` }}
          >
            <p.Icon className="w-12 h-12 text-primary-foreground" />
          </div>
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold font-display mb-2" style={{ transform: "translateZ(20px)" }}>
        {p.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs font-mono px-3 py-1 rounded-full glass-strong border border-border"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 border border-border hover:border-primary transition-colors"
        >
          <Github className="w-4 h-4" /> Code
        </a>
        <a
          href={p.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-4 py-2 text-primary-foreground hover:scale-105 transition-transform"
          style={{ background: "var(--gradient-primary)" }}
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[150px] opacity-20"
        style={{ background: "var(--neon-purple)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="// Portfolio" title="Featured" gradient="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

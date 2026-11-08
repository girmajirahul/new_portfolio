
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Code2, BriefcaseBusiness } from "lucide-react";
import { useRef, type MouseEvent } from "react";
import { SectionHeading } from "./About";

const projects = [
  {
    title: "Blog - Content Management System",
    desc: "A full-stack blogging platform where users can create, manage and publish technical articles with authentication and content management features.",
    category: "Full Stack Application",
    role: "Full Stack Developer",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/projects/blog-cms.png",
    accent: "var(--neon-blue)",
    github: "https://github.com",
    demo: "https://blog-frontend-rahul.vercel.app",
    number: "01",
  },
  {
    title: "Portfolio Website",
    desc: "A modern developer portfolio featuring interactive animations, responsive layouts and a premium visual experience.",
    category: "Personal Project",
    role: "Frontend Developer",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    accent: "var(--neon-purple)",
    github: "https://github.com/girmajirahul/new_portfolio",
    demo: "https://girmaji-rahul.vercel.app/",
    number: "02",
  },
  {
    title: "Online Job Portal",
    desc: "A MERN-stack job portal that allows users to explore job opportunities and manage job listings through authentication and job management features.",
    category: "Full Stack Application",
    role: "Full Stack Developer",
    stack: ["React.js", "Express.js", "MongoDB", "Node.js"],
    image: "/projects/job-portal.png",
    accent: "var(--neon-cyan)",
    github: "https://github.com/girmajirahul/JobFrontend",
    demo: "https://jobboard-rahul.vercel.app/",
    number: "03",
  },
];

const featuredProject = {
  title: "Utkarsh Ladies Tailor",
  desc: "A business website developed to establish an online presence for a local ladies tailoring business. Designed to showcase tailoring services, designer blouse collections and make customer enquiries easier through WhatsApp.",
  category: "Freelance Client Project",
  role: "Freelance Web Developer",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
  image: "/projects/utkarshladiestailor.png",
  accent: "var(--neon-cyan)",
  github: "",
  demo: "https://utkarshladiestailor.vercel.app/",
};

type Project = (typeof projects)[number];

function ProjectVisual({
  image,
  title,
  accent,
  className = "",
}: {
  image: string;
  title: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border/50 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accent}20, transparent), oklch(0.12 0.04 270)`,
      }}
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-20" />

      <img
        src={image}
        alt={`${title} website preview`}
        loading="lazy"
        className="relative z-10 h-full w-full object-contain object-center p-3 transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  );
}

function FeaturedProject() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [2, -2]),
    { stiffness: 180, damping: 25 }
  );

  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-2, 2]),
    { stiffness: 180, damping: 25 }
  );

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      className="glass group relative overflow-hidden rounded-3xl border border-border/60 p-5 transition-colors duration-300 hover:border-primary/40 sm:p-7 lg:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-10 blur-[100px]"
        style={{ background: featuredProject.accent }}
      />

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        {/* Project preview */}
        <div className="group relative min-w-0">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              FEATURED PROJECT / 01
            </span>
            <span className="flex items-center gap-2 text-xs text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Live Website
            </span>
          </div>

          <ProjectVisual
            image={featuredProject.image}
            title={featuredProject.title}
            accent={featuredProject.accent}
            className="aspect-[16/10] shadow-2xl shadow-black/20"
          />
        </div>

        {/* Project details */}
        <div className="flex min-w-0 flex-col">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <BriefcaseBusiness size={15} />
            {featuredProject.category}
          </div>

          <h3 className="mb-4 font-display text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
            {featuredProject.title}
          </h3>

          <p className="mb-6 text-sm leading-7 text-muted-foreground sm:text-base">
            {featuredProject.desc}
          </p>

          <div className="mb-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            My Role
          </div>

          <p className="mb-6 text-sm font-medium">
            {featuredProject.role}
          </p>

          <div className="mb-7 flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={featuredProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              Visit Website
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function BentoProject({
  p,
  i,
  featured = false,
}: {
  p: Project;
  i: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: i * 0.1, duration: 0.55 }}
      className={`glass group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-border/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:p-6 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: p.accent }}
      />

      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          PROJECT / {p.number}
        </span>
        <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-wider text-muted-foreground">
          {p.category}
        </span>
      </div>

      <ProjectVisual
        image={p.image}
        title={p.title}
        accent={p.accent}
        className={`mb-6 aspect-[16/9] ${featured ? "md:aspect-[2.3/1]" : ""}`}
      />

      <div className="relative z-10 flex flex-1 flex-col">
        <h3 className="mb-3 font-display text-xl font-bold sm:text-2xl">
          {p.title}
        </h3>

        <p className="mb-5 flex-1 text-sm leading-6 text-muted-foreground">
          {p.desc}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {p.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-background/30 px-3 py-1.5 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/40 pt-4">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} source code`}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Github size={16} />
              Code
            </a>
          )}

          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${p.title} live demo`}
            className="inline-flex min-h-10 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/4 h-[350px] w-[350px] -translate-x-1/2 rounded-full opacity-20 blur-[130px] sm:h-[500px] sm:w-[500px]"
        style={{ background: "var(--neon-purple)" }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// My Work"
          title="Selected"
          gradient="Projects"
        />

        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
          A collection of applications and digital experiences I've built,
          from personal experiments to real-world client projects.
        </p>

        {/* Featured freelance project */}
        <div className="mt-14 lg:mt-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Client Work
            </span>
          </div>

          <FeaturedProject />
        </div>

        {/* Personal and full-stack projects */}
        <div className="mt-20 lg:mt-28">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Development Work
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                More Projects
              </h3>
            </div>

            <span className="font-mono text-xs text-muted-foreground">
              03 PROJECTS
            </span>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <BentoProject
                key={project.title}
                p={project}
                i={index}
              />
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <Code2 className="mb-4 text-primary" size={28} />

          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Every project is an opportunity to solve a problem, learn
            something new and create something meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

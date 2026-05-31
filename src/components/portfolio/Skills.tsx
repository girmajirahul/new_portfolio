import { motion } from "framer-motion";
import { SectionHeading } from "./About";

const skillCategories = [
  {
    title: "Frontend",
    color: "var(--neon-blue)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "var(--neon-purple)",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Database",
    color: "var(--neon-cyan)",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "SQL Server", level: 78 },
    ],
  },
  {
    title: "Tools",
    color: "var(--neon-pink)",
    skills: [
      { name: "Git", level: 70 },
      { name: "Postman", level: 90 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const marqueeStack = [
  "React", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind",
  "Django", "Python", "MySQL", "Git",
  "REST API", , "Vite", "Redux",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
        style={{ background: "var(--neon-blue)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="// Tech Stack" title="Skills &" gradient="Tools" />

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-8 group relative overflow-hidden"
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
                style={{ background: cat.color }}
              />
              <h3 className="text-2xl font-bold mb-6 font-display">{cat.title}</h3>
              <div className="space-y-4 relative">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-muted-foreground font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, var(--neon-cyan))`,
                          boxShadow: `0 0 12px ${cat.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite marquee */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="flex animate-marquee whitespace-nowrap gap-4">
            {[...marqueeStack, ...marqueeStack].map((t, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 font-mono text-sm font-semibold"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

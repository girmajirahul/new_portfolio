import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./About";

const experiences = [
  {
    company: "BhojSoft Solutions",
    role: "Frontend Developer",
    period: "Dec 2025 — Present",
    points: [
      "Built responsive React.js interfaces with reusable component architecture",
      "Integrated REST APIs and handled complex state management",
      "Developed reusable, accessible UI components used across products",
      "Collaborated with backend teams to define API contracts",
      "Improved maintainability and UI consistency across modules",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// Career" title="Work" gradient="Experience" />

        <div className="max-w-4xl mx-auto mt-20 relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--neon-blue), var(--neon-purple), transparent)",
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-12 mb-12"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full animate-pulse-glow"
                    style={{ background: "var(--gradient-primary)" }} />
                </div>
              </div>

              <div className={i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass rounded-2xl p-6 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Briefcase className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold font-display">{exp.role}</h3>
                      <div className="text-primary font-semibold">{exp.company}</div>
                      <div className="text-sm text-muted-foreground font-mono mt-1">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-left text-sm text-muted-foreground mt-4">
                    {exp.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

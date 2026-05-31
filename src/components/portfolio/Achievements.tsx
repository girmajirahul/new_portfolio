import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, GraduationCap, Calendar } from "lucide-react";
import { SectionHeading } from "./About";

const achievements = [
  {
    Icon: Trophy,
    title: "First Prize",
    sub: "Desai Karandak 2k24",
    type: "Achievement",
    color: "var(--neon-pink)",
  },
  {
    Icon: Award,
    title: "Third Prize",
    sub: "Hacker Halloween — National Level",
    type: "Achievement",
    color: "var(--neon-purple)",
  },
  {
    Icon: BookOpen,
    title: "Programming in Python",
    sub: "Swayam",
    type: "Certification",
    color: "var(--neon-blue)",
  },
  {
    Icon: BookOpen,
    title: "Data Science using Python",
    sub: "Swayam",
    type: "Certification",
    color: "var(--neon-cyan)",
  },
  {
    Icon: BookOpen,
    title: "The Ultimate React Course",
    sub: "Udemy",
    type: "Certification",
    color: "var(--neon-blue)",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="// Recognition" title="Achievements &" gradient="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -8, rotateY: 6, rotateX: -3 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-70 transition-opacity"
                style={{ background: a.color }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform relative"
                style={{ background: `linear-gradient(135deg, ${a.color}, var(--neon-purple))` }}
              >
                <a.Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="text-xs font-mono text-primary mb-1">{a.type}</div>
              <h3 className="font-bold text-lg font-display mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Pune Cambridge Institute of Management & Computer Application",
    period: "Graduating 2026",
    cgpa: "8.0 / 10",
    progress: 80,
  },
  {
    degree: "B.Sc. Computer Science",
    institute: "Abasaheb Garware College, Pune",
    period: "Graduated 2024",
    cgpa: "8.89 / 10",
    progress: 89,
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
        style={{ background: "var(--neon-cyan)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="// Education" title="Academic" gradient="Journey" />

        <div className="relative max-w-4xl mx-auto mt-16">
          {/* Timeline Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "var(--gradient-primary)" }}
          />

          <div className="space-y-10">
            {education.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className="relative flex gap-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--gradient-primary)",
                      boxShadow: "0 0 20px var(--neon-blue)",
                    }}
                  >
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass rounded-2xl p-8 group hover:border-primary/40 transition-colors relative overflow-hidden flex-1"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 opacity-10"
                  >
                    <GraduationCap className="w-32 h-32" />
                  </motion.div>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-mono mb-4">
                    <Calendar className="w-3.5 h-3.5" /> {e.period}
                  </div>

                  <h3 className="text-xl font-bold font-display mb-1">
                    {e.degree}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-6">
                    {e.institute}
                  </p>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">CGPA</span>
                    <span className="text-lg font-bold text-gradient font-display">
                      {e.cgpa}
                    </span>
                  </div>

                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${e.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: "var(--gradient-primary)",
                        boxShadow: "0 0 10px var(--neon-blue)",
                      }}
                    />
                  </div>
                  
                </motion.div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
    </section>
  );
}

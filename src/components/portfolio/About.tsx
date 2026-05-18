import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code2, Rocket, Sparkles, GraduationCap } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) {
      const ctrl = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return ctrl.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { Icon: Rocket, label: "Months Experience", value: 6, suffix: "+" },
  { Icon: Code2, label: "Projects Built", value: 10, suffix: "+" },
  { Icon: Sparkles, label: "Technologies", value: 5, suffix: "+" },
  { Icon: GraduationCap, label: "MCA Graduate", value: 2026, suffix: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ background: "var(--neon-purple)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="// About Me" title="Crafting digital" gradient="experiences" />

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm <span className="text-foreground font-semibold">Rahul Girmaji</span>, a
                Full Stack Developer based in Pune, India, with hands-on experience in
                React.js, Node.js, MongoDB, SQL Server and REST APIs.
              </p>
              <p>
                I'm passionate about building responsive, high-performance web applications
                with intuitive UX and scalable frontend architectures. Currently working as
                a Frontend Developer at BhojSoft Solutions and pursuing my MCA.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing
                to open source, and pushing my craft toward Awwwards-level polish.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6, rotateX: 5, rotateY: 5 }}
                className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <s.Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-4xl font-bold text-gradient font-display">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  gradient,
}: {
  eyebrow: string;
  title: string;
  gradient: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-mono text-sm text-primary mb-3">{eyebrow}</div>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
        {title} <span className="text-gradient">{gradient}</span>
      </h2>
    </motion.div>
  );
}

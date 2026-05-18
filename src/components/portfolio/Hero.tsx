import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, FolderGit2, Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise pt-24"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0">
        <ParticleField />
      </div>
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 animate-float-slow"
        style={{ background: "var(--neon-purple)" }} />
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40 animate-float-slow"
        style={{ background: "var(--neon-blue)", animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-30 animate-float-slow"
        style={{ background: "var(--neon-cyan)", animationDelay: "6s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient animate-gradient">Rahul</span>
              <br />
              Girmaji
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-display font-light text-muted-foreground mb-6 h-10"
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "React Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Frontend Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient-cyan"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            >
              Building scalable, modern, and user-centric web applications with React,
              Node.js, and modern technologies. Based in Pune, India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_0_30px_var(--neon-blue)]"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold glass-strong hover:bg-white/10 transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-border hover:border-primary transition-all hover:scale-105"
              >
                <FolderGit2 className="w-4 h-4" />
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Mail, href: "mailto:rahulgirmaji2505@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, y: -4 }}
                  className="p-3 rounded-full glass hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--neon-blue), var(--neon-purple), var(--neon-cyan), var(--neon-pink), var(--neon-blue))",
                  filter: "blur(20px)",
                  opacity: 0.7,
                }}
              />
              <div
                className="absolute inset-2 rounded-full animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--neon-blue), var(--neon-purple), var(--neon-cyan), var(--neon-pink), var(--neon-blue))",
                  animationDirection: "reverse",
                }}
              />
              <div className="absolute inset-4 rounded-full bg-background overflow-hidden">
                <img
                  src={profileImg}
                  alt="Rahul Girmaji"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tech badges */}
              {["React", "Node", "Mongo", "TS"].map((t, i) => {
                const angle = (i / 4) * Math.PI * 2;
                return (
                  <motion.div
                    key={t}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute glass-strong rounded-full px-4 py-2 text-xs font-mono font-semibold"
                    style={{
                      top: `${50 + Math.sin(angle) * 55}%`,
                      left: `${50 + Math.cos(angle) * 55}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {t}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, y: { duration: 2, repeat: Infinity } }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs"
        >
          <span>Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </div>
    </section>
  );
}

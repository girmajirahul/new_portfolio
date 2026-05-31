import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Check } from "lucide-react";
import { SectionHeading } from "./About";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[150px] opacity-25"
        style={{ background: "var(--neon-purple)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="// Get in Touch" title="Let's build" gradient="together" />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 mt-16 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have a project in mind, an opportunity, or just want to chat about tech?
              I'd love to hear from you.
            </p>

            {[
              { Icon: Mail, label: "Email", value: "rahulgirmaji2505@gmail.com", href: "mailto:rahulgirmaji2505@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+91 90217 10342", href: "tel:+919021710342" },
              { Icon: MapPin, label: "Location", value: "Pune, Maharashtra, India" },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition-colors block"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <c.Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground font-mono">{c.label}</div>
                  <div className="font-semibold">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                {
                  Icon: Github,
                  link: "https://github.com/girmajirahul",
                },
                {
                  Icon: Linkedin,
                  link: "https://www.linkedin.com/in/rahul-girmaji",
                },
                {
                  Icon: Mail,
                  link: "mailto:rahulgirmaji2505@gmail.com",
                },
              ].map(({ Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="p-3 rounded-full glass hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="glass-strong rounded-3xl p-8 space-y-5 relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <FloatingInput label="Your Name" type="text" required />
              <FloatingInput label="Email Address" type="email" required />
            </div>
            <FloatingInput label="Subject" type="text" required />
            <FloatingTextarea label="Message" required />

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_var(--neon-blue)] disabled:opacity-70"
              style={{ background: "var(--gradient-primary)" }}
            >
              {sent ? (
                <>
                  <Check className="w-5 h-5" /> Message Sent!
                </>
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="relative group">
      <input
        {...props}
        placeholder=" "
        className="peer w-full bg-input/50 border border-border rounded-xl px-4 pt-5 pb-2 text-foreground outline-none focus:border-primary transition-colors"
      />
      <label className="absolute left-4 top-3.5 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <div className="relative group">
      <textarea
        {...props}
        placeholder=" "
        rows={5}
        className="peer w-full bg-input/50 border border-border rounded-xl px-4 pt-5 pb-2 text-foreground outline-none focus:border-primary transition-colors resize-none"
      />
      <label className="absolute left-4 top-3.5 text-sm text-muted-foreground transition-all peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none">
        {label}
      </label>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="font-display text-2xl font-bold text-gradient"
          >
            {"<RG />"}
          </motion.a> */}

          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Rahul Girmaji — Built with{" "}
            <span className="text-gradient font-semibold">React & Passion</span>
          </p>

          <div className="flex gap-3 pt-2">
            {[
              {
                Icon: Github,
                link: "https://github.com/girmajirahul",
              },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/in/rahul-girmaji",
              },
              {
                Icon: Mail,
                link: "mailto:rahulgirmaji2505@gmail.com",
              },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                className="p-3 rounded-full glass hover:text-primary transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

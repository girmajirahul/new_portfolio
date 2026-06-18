import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Code2,
  Terminal,
} from "lucide-react";

import { techPosts } from "./data/techPosts";
import { ScrollProgress } from "../portfolio/Effects";
import React from "react";
import { Navbar } from "./Navbar";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function TechIndex() {
  const sorted = [...techPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  React.useEffect(() => {
    document.title = "Tech Notes — Rahul Girmaji";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Technical articles, coding insights, and practical lessons from real-world development experiences by Rahul Girmaji."
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />

      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-20" />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-mesh)" }}
      />

      <main className="container mx-auto px-6 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
              <Terminal className="h-3.5 w-3.5" />
              Tech Notes
            </div>

            <h1
              className="mt-5 text-5xl md:text-7xl leading-[1.05]"
              style={{
                fontFamily: '"DM Serif Display", serif',
              }}
            >
              <span className="text-gradient">Code</span>,
              patterns & performance notes.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Deeper, more technical posts — with syntax-highlighted
              snippets you can actually read.
            </p>

            <div className="mt-4 text-sm text-muted-foreground">
              Looking for essays?{" "}
              <Link
                to="/blog"
                className="text-accent underline-offset-4 hover:underline"
              >
                Read the Journal →
              </Link>
            </div>
          </motion.header>

          <section className="mt-16 mx-auto max-w-3xl space-y-6">
            {sorted.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                }}
              >
                <Link
                  to={`/tech/${post.slug}`}
                  className="group block glass rounded-2xl p-7 transition-all hover:-translate-y-1 hover:glow-purple"
                >
                  <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTime}
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-accent">
                      <Code2 className="h-3.5 w-3.5" />
                      {post.stack.join(" · ")}
                    </span>
                  </div>

                  <h2
                    className="mt-4 text-3xl md:text-4xl leading-tight text-foreground transition-colors group-hover:text-gradient"
                    style={{
                      fontFamily: '"DM Serif Display", serif',
                    }}
                  >
                    {post.title}
                  </h2>

                  <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border/60 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Read
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
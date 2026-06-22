import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Loader } from "lucide-react";
import { ScrollProgress } from "@/components/portfolio/Effects";
import { motion } from "framer-motion";
import { posts } from "./data/post";
import { Navbar } from "./Navbar";
import { useBlogs } from "@/hooks/useBlogs";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const { blogs, loading, error, refetch } = useBlogs();
  const sorted = [...blogs].sort((a, b) => b.date.localeCompare(a.date));


  // Set page title and metadata
  React.useEffect(() => {
    document.title = "Insights — Rahul Girmaji";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Insights and reflections on technology, personal growth, and meaningful relationships by Rahul Girmaji."
    );
  }, []);

  if (loading) {

    <div className="flex items-center justify-center h-full">
      <Loader className="animate-spin" />
    </div>

  }


return (
  <div className="relative min-h-screen bg-background text-foreground">
    <ScrollProgress />
    <Navbar />

    {/* Ambient background */}
    <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      style={{ background: "var(--gradient-mesh)" }}
    />

    <main className="container mx-auto px-6 pt-32 pb-24">
      <div className="mx-auto max-w-6xl">
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
          className="mt-10 pb-12 border-b border-border"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            The Journal
          </p>
          <h1
            className="mt-5 text-5xl md:text-7xl leading-[1.02]"
            style={{ fontFamily: '"DM Serif Display", serif' }}
          >
            Ideas, lessons , &<br />
            <span className="text-gradient italic">reflections.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Exploring technology, personal growth, meaningful relationships, and the experiences that shape both our careers and our lives.
          </p>
        </motion.header>

        <ul className="mt-4 divide-y divide-border">
          {sorted.map((post, idx) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
              
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block py-10"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <time>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{post.readingTime}</span>
                  <span aria-hidden>·</span>
                  <span className="text-accent">{post.tags[0]}</span>
                </div>
                <h2
                  className="mt-3 text-3xl md:text-4xl leading-tight text-foreground transition-colors group-hover:text-gradient"
                  style={{ fontFamily: '"DM Serif Display", serif' }}
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Read essay
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </main>
  </div>
);
}

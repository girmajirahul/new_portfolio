import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
      style={{ scaleX, background: "var(--gradient-primary)" }}
    />
  );
}

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[99] rounded-full mix-blend-difference hidden md:block"
        animate={{
          x: pos.x - (hover ? 24 : 8),
          y: pos.y - (hover ? 24 : 8),
          width: hover ? 48 : 16,
          height: hover ? 48 : 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.3 }}
        style={{ background: "white" }}
      />
    </>
  );
}

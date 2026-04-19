"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BlurText({
  text,
  className = "",
  wordDelay = 0.08,
}: {
  text: string;
  className?: string;
  wordDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{
            duration: 0.6,
            delay: i * wordDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  );
}

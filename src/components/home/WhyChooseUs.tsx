"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "@/components/ui/Container";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number],
    },
  },
};

const stats = [
  {
    label: "Enterprise programmes delivered",
    suffix: "+",
    from: 0,
    to: 40,
  },
  {
    label: "Average stakeholder satisfaction",
    suffix: "%",
    from: 0,
    to: 93,
  },
  {
    label: "Critical launches without incident",
    suffix: "%",
    from: 0,
    to: 99,
  },
  {
    label: "Countries impacted",
    suffix: "+",
    from: 0,
    to: 18,
  },
];

function StatNumber({ from, to }: { from: number; to: number }) {
  const value = useMotionValue(from);
  const rounded = useTransform(value, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, {
      duration: 1.6,
      ease: [0.16, 0.84, 0.44, 1] as [number, number, number, number],
    });
    return controls.stop;
  }, [inView, to, value]);

  return (
    <div ref={containerRef}>
      <motion.span
        ref={ref}
        className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
      >
        {rounded}
      </motion.span>
    </div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      ref={ref}
      className="relative border-t border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 py-16 text-slate-50 sm:py-20 md:py-24 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number] }}
        style={{ y: backgroundY }}
      >
        <div className="absolute -left-32 top-10 h-52 w-52 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.4),_rgba(15,23,42,1)_55%)]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="max-w-xl">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.4, 1] }}
          >
            Why Fraylon
          </motion.p>
          <div className="overflow-hidden mt-4">
            <motion.h2
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
              variants={headingVariants as Variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              A partner shaped around enterprise expectations.
            </motion.h2>
          </div>
          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.25, 0.8, 0.4, 1] }}
          >
            We bring senior operators, not just individual contributors—people
            who have shipped large-scale change and understand the realities of
            regulated, multi-stakeholder environments.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.85)] backdrop-blur-sm"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 32, scale: 0.97 }
              }
              transition={{
                duration: 0.75,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number],
              }}
            >
              <div className="flex items-baseline gap-1">
                <StatNumber from={stat.from} to={stat.to} />
                <span className="text-base font-semibold text-slate-200">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-[0.8rem] leading-relaxed text-slate-300/90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}



"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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

export default function MotionHighlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const translateYSlow = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const translateYFast = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 0.6]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ opacity, y: backgroundY }}
      >
        <motion.div
          className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-sky-500/30 blur-3xl"
          style={{ y: translateYSlow }}
        />
        <motion.div
          className="absolute right-[-10%] top-1/4 h-80 w-80 rounded-full bg-indigo-500/35 blur-3xl"
          style={{ y: translateYFast }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[15%] h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
          style={{ y: translateYSlow }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0),_rgba(15,23,42,1)_55%)]" />
      </motion.div>

      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300/90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number],
              }}
            >
              Motion with intent
            </motion.p>
            <div className="overflow-hidden mt-4">
              <motion.h2
                className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
                variants={headingVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                Calm, physics-informed interfaces that stay out of the way.
              </motion.h2>
            </div>
            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.7,
                delay: 0.12,
                ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number],
              }}
            >
              We use motion to clarify—not distract. Subtle parallax, considered
              easing, and restrained transitions create the sense of a responsive,
              high-grade system without ever overwhelming the content.
            </motion.p>
          </div>

          <motion.div
            className="relative mt-4 flex h-64 items-center justify-center rounded-3xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.9)]"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 32, scale: 0.97 }}
            transition={{
              duration: 0.75,
              delay: 0.18,
              ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number],
            }}
          >
            <motion.div
              className="absolute inset-6 rounded-2xl border border-sky-400/30 bg-gradient-to-tr from-slate-900 via-slate-900/90 to-slate-950"
              style={{ y: translateYSlow }}
            />
            <motion.div
              className="relative grid w-full grid-cols-3 gap-3 text-[0.7rem] text-slate-200/95"
            >
              {[0.22, 0.32, 0.42].map((delay, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-sm"
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 24, scale: 0.97 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: delay,
                    ease: [0.25, 0.8, 0.4, 1] as [
                      number,
                      number,
                      number,
                      number
                    ],
                  }}
                >
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-400">
                    {idx === 0 && "Easing"}
                    {idx === 1 && "Continuity"}
                    {idx === 2 && "Clarity"}
                  </p>
                  <p>
                    {idx === 0 &&
                      "Frictionless yet controlled easing that keeps every interaction grounded."}
                    {idx === 1 &&
                      "States feel related, with motion that respects the user’s current task."}
                    {idx === 2 &&
                      "Animation is used sparingly to emphasise what matters most right now."}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}



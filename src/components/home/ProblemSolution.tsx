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

export default function ProblemSolution() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      ref={ref}
      className="relative border-t border-slate-800/70 bg-slate-950/95 py-16 text-slate-50 sm:py-20 md:py-24 overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950"
        style={{ y: backgroundY }}
      />

      <Container className="relative z-10">
        <div className="grid gap-10 md:grid-cols-[1.15fr,1fr] md:items-start">
          <div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400/90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number] }}
            >
              The challenge
            </motion.p>

            <div className="overflow-hidden mt-4">
              <motion.h2
                className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2.1rem]"
                variants={headingVariants as Variants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                Enterprise programmes are complex—your digital teams should not be.
              </motion.h2>
            </div>

            <motion.div
              className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.8, 0.4, 1] }}
            >
              <p>
                Global organisations are expected to move with the precision of a
                bank and the tempo of a startup. Yet digital programmes often sit
                across fragmented partners, legacy platforms, and competing
                priorities.
              </p>
              <p className="mt-3">
                The result: slow decision cycles, over-extended teams, and
                initiatives that under-deliver on the strategy that justified
                them.
              </p>
            </motion.div>

            <motion.div
              className="mt-6 h-px bg-gradient-to-r from-sky-300/90 via-cyan-300/90 to-transparent"
              initial={{ width: 0 }}
              animate={inView ? { width: "6rem" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.25, 0.8, 0.4, 1] }}
            />
          </div>

          <div className="space-y-5 text-sm text-slate-200/90">
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.25em] text-sky-300/90"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0.8, 0.4, 1] }}
            >
              Our response
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.8, 0.4, 1] }}
            >
              Fraylon operates as a dedicated digital partner—embedding strategy,
              experience, and engineering into a single accountable team. We work
              with your leadership and in-house teams to create a coherent
              operating picture and a realistic, governed roadmap.
            </motion.p>

            <motion.div
              className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-4 text-xs text-slate-300/90 shadow-[0_16px_40px_rgba(15,23,42,0.75)]"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.25, 0.8, 0.4, 1] }}
            >
              <p className="font-semibold text-slate-100">
                From slides to shipped software.
              </p>
              <p className="mt-2">
                We pair board-level clarity with execution-grade teams—so your
                transformation work is observable, measurable, and deeply
                integrated with your organisation.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}



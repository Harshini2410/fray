"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

export default function CaseStudyHighlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      ref={ref}
      className="border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24"
    >
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Case study
            </motion.p>
            <motion.h2
              className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Turning a leaky funnel into a predictable growth engine.
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            >
              For a B2B SaaS company stuck at a growth plateau, we rebuilt the
              offer narrative, uprated paid acquisition, and redesigned key
              website journeys around buyer readiness.
            </motion.p>
          </div>

          <motion.div
            className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 text-sm text-slate-200/90 shadow-[0_22px_60px_rgba(15,23,42,0.95)]"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.97 }}
            transition={{ duration: 0.65, delay: 0.12, ease: "easeOut" }}
          >
            <p className="text-[0.75rem] font-medium uppercase tracking-[0.22em] text-slate-400">
              6-month impact snapshot
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Pipeline
                </p>
                <p className="mt-1 text-2xl font-semibold text-sky-300">+72%</p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Qualified opportunities from the same spend.
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  CAC
                </p>
                <p className="mt-1 text-2xl font-semibold text-emerald-300">-34%</p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Reduction in blended cost of acquisition.
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Time to value
                </p>
                <p className="mt-1 text-2xl font-semibold text-slate-100">2x</p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Faster from first touch to first meeting.
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Experiment velocity
                </p>
                <p className="mt-1 text-2xl font-semibold text-sky-300">3.5x</p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Increase in meaningful tests shipped each month.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}



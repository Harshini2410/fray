"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

const insights = [
  {
    title: "Designing growth systems instead of one-off campaigns",
    tag: "Playbook",
  },
  {
    title: "What good looks like for a conversion-first marketing site",
    tag: "Framework",
  },
  {
    title: "From chaos to cadence: setting a realistic experiment rhythm",
    tag: "Article",
  },
];

export default function InsightsPreview() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Insights
            </motion.p>
            <motion.h2
              className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Thinking for founders and growth leaders.
            </motion.h2>
          </div>

          <motion.button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-4 py-2 text-xs font-medium text-slate-200/90 hover:border-sky-400/80 hover:text-sky-200"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            View all articles
          </motion.button>
        </div>

        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {insights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.9)]"
            >
              <div>
                <p className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-sky-300/90">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-[0.98rem] font-semibold leading-relaxed text-slate-50">
                  {item.title}
                </h3>
              </div>
              <p className="mt-3 text-[0.8rem] text-slate-400">
                Short, practical guidance you can share with your team in one
                meeting.
              </p>
            </article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}



"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

export default function LeadMagnet() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24"
    >
      <Container>
        <motion.div
          className="rounded-3xl border border-slate-800/80 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 shadow-[0_26px_70px_rgba(15,23,42,0.95)]"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.98 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90">
                Free growth checklist
              </p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]">
                A 20-point review to find the next 90 days of growth work.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]">
                A concise, founder-friendly checklist covering positioning,
                website, funnel, and analytics—used in our own discovery work.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <label className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                Send it to my inbox
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-slate-600/80 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_16px_40px_rgba(8,47,73,0.8)] transition-colors hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={submitted}
                >
                  {submitted ? "Checklist sent" : "Get the checklist"}
                </button>
              </div>
              <p className="text-[0.7rem] text-slate-400">
                No spam. An occasional, practical email on building growth
                systems that last.
              </p>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}



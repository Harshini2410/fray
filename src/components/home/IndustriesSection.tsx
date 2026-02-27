"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

const industries = [
  "SaaS & B2B software",
  "Ecommerce & DTC",
  "Marketplaces",
  "B2B services",
  "Fintech & payments",
  "Education & learning",
];

export default function IndustriesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24"
    >
      <Container>
        <div className="max-w-xl">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Industries we power
          </motion.p>
          <motion.h2
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Growth systems for digital-first businesses.
          </motion.h2>
        </div>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {industries.map((label) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 px-4 py-5 text-sm text-slate-200/90 shadow-[0_14px_36px_rgba(15,23,42,0.9)]"
            >
              <p className="text-[0.8rem] font-medium uppercase tracking-[0.16em] text-slate-400">
                Sector
              </p>
              <p className="mt-2 text-[0.95rem]">{label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}



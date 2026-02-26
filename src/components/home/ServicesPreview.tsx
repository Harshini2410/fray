"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.4, 1],
    },
  },
};

const services = [
  {
    title: "Digital strategy & advisory",
    body: "Board-level advisory, portfolio shaping, and operating model design so digital investments connect directly to measurable outcomes.",
  },
  {
    title: "Experience & product design",
    body: "Research, service design, and interaction design for complex ecosystems—web, mobile, internal tools, and everything in between.",
  },
  {
    title: "Platform engineering",
    body: "Cloud-native platforms, data foundations, and integration layers engineered for security, resilience, and long-term maintainability.",
  },
  {
    title: "Managed delivery",
    body: "Embedded cross-functional teams with enterprise-grade governance, reporting, and risk management built in from day one.",
  },
];

export default function ServicesPreview() {
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
      className="relative border-t border-slate-800/70 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-slate-950"
        style={{ y: backgroundY }}
      />

      <Container className="relative z-10">
        <div className="max-w-xl">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.26em] text-sky-300/90"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.4, 1] }}
          >
            Services
          </motion.p>
          <div className="overflow-hidden mt-4">
            <motion.h2
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2rem]"
              variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              One team across strategy, design, engineering, and delivery.
            </motion.h2>
          </div>
          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.8, 0.4, 1] }}
          >
            Fraylon works as a single accountable partner—from defining the bet
            with your leadership through to the last mile of implementation.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5 text-sm shadow-[0_18px_45px_rgba(15,23,42,0.8)] transition-colors duration-300 hover:border-sky-400/70 hover:bg-slate-900/90 lg:p-6"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={
                inView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 32, scale: 0.97 }
              }
              transition={{
                duration: 0.7,
                delay: 0.2 + index * 0.1,
                ease: [0.25, 0.8, 0.4, 1],
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[0.95rem] font-semibold tracking-tight text-slate-50">
                    {service.title}
                  </h3>
                  <div className="relative h-8 w-8 rounded-full border border-slate-600/80 bg-slate-900/80 text-[0.7rem] text-slate-200 shadow-sm group-hover:border-sky-300/70">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-700/50 via-slate-900/80 to-slate-950/90 opacity-70 group-hover:from-sky-500/35 group-hover:via-indigo-500/35 group-hover:to-slate-950/80" />
                    <div className="relative flex h-full w-full items-center justify-center">
                      <span>0{index + 1}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-slate-300/90">
                  {service.body}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[0.78rem] text-slate-300/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
                  <span>Engagement-ready within weeks.</span>
                </div>
                <motion.div
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/80 text-[0.7rem] text-slate-200 shadow-sm"
                  whileHover={{ y: -2, boxShadow: "0 0 0 1px rgba(56,189,248,0.4)" }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  ↗
                </motion.div>
              </div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl border border-sky-400/0 shadow-[0_0_0_0_rgba(56,189,248,0)]"
                whileHover={{
                  borderColor: "rgba(56,189,248,0.75)",
                  boxShadow:
                    "0 0 0 1px rgba(56,189,248,0.35), 0 18px 45px rgba(8,47,73,0.65)",
                }}
                transition={{ duration: 0.25, ease: [0.22, 0.76, 0.3, 0.98] }}
              />
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}



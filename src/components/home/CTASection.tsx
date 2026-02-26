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

export default function CTASection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <section
      ref={ref}
      className="relative border-t border-slate-800/80 bg-slate-950 py-16 text-slate-50 sm:py-20 md:py-24 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_rgba(15,23,42,1)_55%)]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.8, 0.4, 1] }}
        style={{ y: backgroundY }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl text-center">
          <div className="overflow-hidden">
            <motion.h2
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2.1rem]"
              variants={headingVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Ready to bring your next digital programme into focus?
            </motion.h2>
          </div>
          <motion.p
            className="mt-4 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.25, 0.8, 0.4, 1] }}
          >
            We run a concise working session with senior stakeholders to unpack
            your objectives, constraints, and operating context—then shape a
            realistic, high-confidence path forward.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.8, 0.4, 1] }}
          >
            <motion.button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-2.5 text-sm font-medium text-slate-950 shadow-[0_0_0_0_rgba(56,189,248,0.7)] transition-colors duration-200 hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:px-8 sm:py-3 sm:text-base"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(56,189,248,0.7)",
                  "0 0 0 10px rgba(56,189,248,0)",
                  "0 0 0 0 rgba(56,189,248,0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              Arrange an intro conversation
            </motion.button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}



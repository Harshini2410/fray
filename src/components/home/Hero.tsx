"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import Container from "@/components/ui/Container";
import StarField from "./StarField";

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.12 * i,
      ease: [0.23, 0.74, 0.35, 0.99] as [
        number,
        number,
        number,
        number
      ],
    },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springCursorX = useSpring(cursorX, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const springCursorY = useSpring(cursorY, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      cursorX.set(e.clientX - rect.left);
      cursorY.set(e.clientY - rect.top);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () =>
        section.removeEventListener("mousemove", handleMouseMove);
    }
  }, [cursorX, cursorY]);

  const buttonMouseX = useMotionValue(0);
  const buttonMouseY = useMotionValue(0);

  const buttonSpringX = useSpring(buttonMouseX, {
    stiffness: 150,
    damping: 18,
    mass: 0.3,
  });

  const buttonSpringY = useSpring(buttonMouseY, {
    stiffness: 150,
    damping: 18,
    mass: 0.3,
  });

  const buttonTranslateX = useTransform(buttonSpringX, [-40, 40], [-5, 5]);
  const buttonTranslateY = useTransform(buttonSpringY, [-30, 30], [-4, 4]);

  // Cursor spotlight transforms
  const cursorSpotlightX = useTransform(springCursorX, (v) => v - 300);
  const cursorSpotlightY = useTransform(springCursorY, (v) => v - 300);

  const handlePointerMove = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX =
      event.clientX - (rect.left + rect.width / 2);
    const offsetY =
      event.clientY - (rect.top + rect.height / 2);
    buttonMouseX.set(offsetX);
    buttonMouseY.set(offsetY);
  };

  const handlePointerLeave = () => {
    buttonMouseX.set(0);
    buttonMouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#020617] text-slate-50"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top,_#0b1220_0%,_#020617_50%,_#020617_100%)]"
        style={{ y: glowY }}
      />

      <StarField starCount={70} containerRef={sectionRef} />

      {/* Cursor radial spotlight */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[600px] w-[600px] rounded-full opacity-[0.1] mix-blend-lighten"
        style={{
          x: cursorSpotlightX,
          y: cursorSpotlightY,
          background:
            "radial-gradient(circle, rgba(148,163,184,0.4) 0%, rgba(148,163,184,0.2) 30%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay + inner radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.14] mix-blend-soft-light [background-image:radial-gradient(circle_at_top,_rgba(148,163,184,0.18),transparent_55%),linear-gradient(to_right,rgba(30,64,175,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.28)_1px,transparent_1px)] [background-size:100%_100%,96px_96px,96px_96px] [background-position:center,center,center]"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-5 h-40 bg-gradient-to-b from-slate-900/70 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      />

      <Container className="relative z-10 flex w-full flex-col gap-12 py-20 sm:py-24 md:flex-row md:items-center md:justify-between lg:py-28 xl:py-32">
        <motion.div
          className="relative z-10 max-w-xl md:max-w-2xl"
          style={{ opacity: textOpacity }}
        >
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/80"
            initial={{ opacity: 0, y: 20 }}
            animate={
              inView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{
              duration: 0.7,
              ease: [0.23, 0.74, 0.35, 0.99] as [
                number,
                number,
                number,
                number
              ],
            }}
          >
            Enterprise digital partners
          </motion.p>

          <motion.h1 className="mt-6 text-balance text-[2.4rem] font-semibold tracking-tight text-slate-200 sm:text-5xl md:text-[3.25rem] md:leading-[1.05] lg:text-[3.6rem]">
            <motion.span
              className="block"
              variants={lineVariants as Variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={1}
            >
              Designing{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                systems that last
              </span>
            </motion.span>

            <motion.span
              className="mt-1 block text-slate-300"
              variants={lineVariants as Variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
            >
              for complex, global organisations.
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-[0.98rem]"
            variants={lineVariants as Variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            Fraylon helps leadership teams architect and deliver
            digital platforms that feel considered, governed, and
            dependable—without losing the pace and clarity of modern
            product organisations.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
            variants={lineVariants as Variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
          >
            <motion.button
              type="button"
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-medium text-slate-950 shadow-[0_18px_45px_rgba(8,47,73,0.6)] transition-transform duration-200 hover:bg-cyan-300 sm:px-7 sm:py-3 sm:text-base"
              style={{
                translateX: buttonTranslateX,
                translateY: buttonTranslateY,
              }}
              whileHover={{ scale: 1.02 }}
              transition={{
                duration: 0.22,
                ease: [0.25, 0.8, 0.4, 1] as [
                  number,
                  number,
                  number,
                  number
                ],
              }}
            >
              <span className="relative z-10">
                Schedule a leadership session
              </span>
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-[-1px] rounded-full border border-cyan-200/40"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(34,211,238,0.55)",
                    "0 0 0 10px rgba(34,211,238,0)",
                    "0 0 0 0 rgba(34,211,238,0)",
                  ],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.button>

            {/* Secondary ghost CTA with elegant border animation */}
            <motion.button
              type="button"
              className="relative inline-flex items-center justify-center rounded-full border border-slate-500/70 bg-slate-950/40 px-5 py-2.5 text-sm font-medium text-slate-200/90 shadow-[0_0_0_1px_rgba(148,163,184,0.35)] transition-colors duration-200 hover:border-slate-200/80 hover:bg-slate-900/80 sm:px-6 sm:text-base"
              whileHover={{ y: -1 }}
              transition={{
                duration: 0.2,
                ease: [0.25, 0.8, 0.4, 1] as [
                  number,
                  number,
                  number,
                  number
                ],
              }}
            >
              <span>Download capabilities overview</span>
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border border-slate-200/0"
                whileHover={{ borderColor: "rgba(226,232,240,0.6)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-slate-400/90 sm:text-[0.8rem]"
            variants={lineVariants as Variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={5}
          >
            <p>Designed for regulated, multi-stakeholder environments.</p>
            <div className="h-px w-10 bg-slate-600/60" />
            <p>Strategy · Experience · Engineering · Delivery</p>
          </motion.div>
        </motion.div>

        {/* Right: compact metric / programme card */}
        <motion.div
          className="mt-10 flex w-full max-w-md flex-1 flex-col items-stretch justify-center gap-4 md:mt-0 md:max-w-sm lg:max-w-md"
          initial={{ opacity: 0, y: 34 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 34 }}
          transition={{
            duration: 0.85,
            delay: 0.28,
            ease: [0.18, 0.64, 0.32, 0.98] as [
              number,
              number,
              number,
              number
            ],
          }}
        >
          <div className="rounded-3xl border border-slate-700/80 bg-slate-950/70 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)] backdrop-blur-md">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky-300/80">
              Execution lens
            </p>
            <p className="mt-3 text-sm text-slate-200/95">
              A single view across initiative health, risk, and impact—built to
              support C-suite, board, and delivery teams with the same source of
              truth.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4 text-xs text-slate-300/90">
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Decision latency
                </p>
                <p className="mt-1 text-lg font-semibold text-emerald-300">
                  -30%
                </p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Average reduction through clearer governance.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3">
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-slate-400">
                  Confidence index
                </p>
                <p className="mt-1 text-lg font-semibold text-sky-300">
                  +45%
                </p>
                <p className="mt-1 text-[0.7rem] text-slate-400">
                  Reported by senior sponsors post engagement.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-[0.7rem] text-slate-400/80"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          className="mt-2 h-9 w-[1px] overflow-hidden rounded-full bg-slate-700/80"
          animate={{
            backgroundColor: ["#64748b", "#22d3ee", "#6366f1", "#64748b"],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="mx-auto mt-1 h-2 w-[2px] rounded-full bg-slate-200/90"
            animate={{ y: [0, 18, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: [0.33, 0.67, 0.6, 0.99] as [
                number,
                number,
                number,
                number
              ],
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
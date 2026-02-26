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
              Schedule a leadership session
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Single cinematic scroll chapter describing the Fraylon Growth Architecture
export default function ScrollChapter() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phases for the four growth pillars
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 1, 0]);
  const phase1Y = useTransform(scrollYProgress, [0, 0.28], ["0%", "-40%"]);

  const phase2Opacity = useTransform(scrollYProgress, [0.18, 0.32, 0.45], [0, 1, 0]);
  const phase2Y = useTransform(scrollYProgress, [0.18, 0.36, 0.5], ["40%", "0%", "-40%"]);

  const phase3Opacity = useTransform(scrollYProgress, [0.4, 0.56, 0.7], [0, 1, 0]);
  const phase3Y = useTransform(scrollYProgress, [0.4, 0.6, 0.75], ["40%", "0%", "-40%"]);

  const phase4Opacity = useTransform(scrollYProgress, [0.62, 0.8, 1], [0, 1, 1]);
  const phase4Y = useTransform(scrollYProgress, [0.62, 1], ["40%", "0%"]);

  // Background crossfade and parallax
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.7], [1, 1.06]);

  const bg2Opacity = useTransform(scrollYProgress, [0.4, 0.7, 1], [0, 1, 1]);
  const bg2Scale = useTransform(scrollYProgress, [0.4, 1], [1, 1.06]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[260vh] bg-slate-950"
      aria-label="The Fraylon Growth Architecture"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background imagery */}
        <div className="absolute inset-0 -z-20">
          <motion.div
            className="absolute inset-0"
            style={{
              opacity: bg1Opacity,
              scale: bg1Scale,
              y: imageParallaxY,
            }}
          >
            <Image
              src="/p2.jpeg"
              alt="Abstract growth background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{
              opacity: bg2Opacity,
              scale: bg2Scale,
              y: imageParallaxY,
            }}
          >
            <Image
              src="/p6.jpeg"
              alt="Systems and data background"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/80 to-slate-950/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 sm:px-10 lg:px-20">
          <div className="max-w-4xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-sky-300/90">
              Growth Engine
            </p>
            <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-[2.1rem]">
              The Fraylon Growth Architecture
            </h2>

            <div className="relative mt-10 h-[10rem] sm:h-[11rem] md:h-[12rem] overflow-hidden">
              {/* Phase 1 */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ opacity: phase1Opacity, y: phase1Y }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/90">
                  Stage 1
                </p>
                <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Strategic Growth Systems
                </p>
                <p className="max-w-xl text-sm text-slate-300/90 sm:text-[0.95rem]">
                  We align your positioning, offer structure, and unit economics
                  into a single, testable growth blueprint.
                </p>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ opacity: phase2Opacity, y: phase2Y }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/90">
                  Stage 2
                </p>
                <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Digital Marketing That Scales
                </p>
                <p className="max-w-xl text-sm text-slate-300/90 sm:text-[0.95rem]">
                  Performance creative, channels, and messaging tuned to your
                  acquisition math—not generic campaigns.
                </p>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ opacity: phase3Opacity, y: phase3Y }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/90">
                  Stage 3
                </p>
                <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Conversion-First Websites
                </p>
                <p className="max-w-xl text-sm text-slate-300/90 sm:text-[0.95rem]">
                  Product stories, landing journeys, and funnels designed to
                  move visitors into qualified opportunities.
                </p>
              </motion.div>

              {/* Phase 4 */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                style={{ opacity: phase4Opacity, y: phase4Y }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-300/90">
                  Stage 4
                </p>
                <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                  Automation + Analytics
                </p>
                <p className="max-w-xl text-sm text-slate-300/90 sm:text-[0.95rem]">
                  Lead routing, nurture, and reporting built as a system—so
                  every new customer makes the next one cheaper.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


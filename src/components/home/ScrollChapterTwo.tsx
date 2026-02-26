"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollChapterTwo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Text phase transitions (3 phases across scroll range)
  const phrase1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const phrase1Y = useTransform(scrollYProgress, [0, 0.3], ["0%", "-40%"]);

  const phrase2Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.4, 0.65, 0.8],
    [0, 1, 1, 0]
  );
  const phrase2Y = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.8],
    ["40%", "0%", "-40%"]
  );

  const phrase3Opacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);
  const phrase3Y = useTransform(scrollYProgress, [0.6, 1], ["40%", "0%"]);

  // Background image crossfades with subtle zoom and parallax
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.33], [1, 1, 0]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.33], [1, 1.05]);

  const bg2Opacity = useTransform(scrollYProgress, [0.16, 0.4, 0.66], [0, 1, 0]);
  const bg2Scale = useTransform(scrollYProgress, [0.16, 0.66], [1, 1.05]);

  const bg3Opacity = useTransform(scrollYProgress, [0.5, 0.8, 1], [0, 1, 1]);
  const bg3Scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[300vh] bg-slate-950"
      aria-label="We engineer, we define narrative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background images */}
        <div className="absolute inset-0 -z-20">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/p4.jpeg)",
              opacity: bg1Opacity,
              scale: bg1Scale,
              y: imageParallaxY,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/p5.jpeg)",
              opacity: bg2Opacity,
              scale: bg2Scale,
              y: imageParallaxY,
            }}
          />
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/p6.jpeg)",
              opacity: bg3Opacity,
              scale: bg3Scale,
              y: imageParallaxY,
            }}
          />

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <motion.span
                className="text-2xl font-semibold tracking-wide text-slate-200 sm:text-3xl md:text-4xl"
                style={{ opacity: 1 }}
              >
                We
              </motion.span>

              <div className="relative h-[3.2rem] sm:h-[3.6rem] md:h-[4.2rem] overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ opacity: phrase1Opacity, y: phrase1Y }}
                >
                  engineer intelligence
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ opacity: phrase2Opacity, y: phrase2Y }}
                >
                  enable innovation
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl"
                  style={{ opacity: phrase3Opacity, y: phrase3Y }}
                >
                  define the future
                </motion.div>
              </div>
            </div>

            <motion.p
              className="mt-6 text-sm text-slate-300/90 sm:text-base"
              style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0.92]) }}
            >
              Chapter two evolves from engineering to enablement to definition—making
              intelligence and innovation practical for global organisations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}



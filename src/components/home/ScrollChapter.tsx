"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollChapter() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Phrase transition: single morph from A → B over the scroll,
  // aligned with the background image crossfade.
  const phrase1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0]);
  const phrase1Y = useTransform(scrollYProgress, [0, 0.6], ["0%", "-40%"]);

  const phrase2Opacity = useTransform(scrollYProgress, [0.35, 0.6, 1], [0, 1, 1]);
  const phrase2Y = useTransform(scrollYProgress, [0.35, 0.6], ["40%", "0%"]);

  // Background crossfade with zoom and subtle parallax
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const bg1Opacity = useTransform(scrollYProgress, [0, 0.35, 0.6], [1, 1, 0]);
  const bg1Scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.05]);

  const bg2Opacity = useTransform(scrollYProgress, [0.35, 0.6, 1], [0, 1, 1]);
  const bg2Scale = useTransform(scrollYProgress, [0.35, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[220vh] bg-slate-950"
      aria-label="Cinematic scroll transformation"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
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
              src="/p1.jpeg"
              alt="Enterprise systems background"
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
              alt="Future-focused enterprise background"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-start px-6 sm:px-10 lg:px-20">
          <div className="max-w-5xl text-left">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-[0.95] tracking-tight">
              {/* Static "We" */}
              <span className="text-slate-300">We</span>{" "}

              {/* Morphing verb line */}
              <span className="relative block overflow-hidden whitespace-nowrap">
                <motion.span
                  className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  style={{ opacity: phrase1Opacity, y: phrase1Y }}
                >
                  build
                </motion.span>

                <motion.span
                  className="block absolute left-0 top-0 w-full bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  style={{ opacity: phrase2Opacity, y: phrase2Y }}
                >
                  define
                </motion.span>
              </span>

              {/* Morphing second line */}
              <span className="relative mt-1 block overflow-hidden whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-medium text-white">
                <motion.span
                  className="block"
                  style={{ opacity: phrase1Opacity, y: phrase1Y }}
                >
                  the standard.
                </motion.span>

                <motion.span
                  className="block absolute left-0 top-0 w-full"
                  style={{ opacity: phrase2Opacity, y: phrase2Y }}
                >
                  the future.
                </motion.span>
              </span>
            </h1>

            <p className="mt-6 text-sm text-slate-300/90 sm:text-base max-w-xl">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


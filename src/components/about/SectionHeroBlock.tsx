"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ================= TYPES ================= */
type VariantType = "fade" | "slideUp" | "slideLeft" | "zoom" | "rotate";

interface SectionHeroBlockProps {
  title: string;
  subtitle?: string;
  desc: string;
  image: string;
  cta: string;
  link: string;
  align?: "left" | "right";
  variant?: VariantType;
}

/* ================= COMPONENT ================= */
export default function SectionHeroBlock({
  title,
  subtitle,
  desc,
  image,
  cta,
  link,
  align = "left",
  variant = "fade",
}: SectionHeroBlockProps) {

  /* animation variants */
  const animations: Record<
    VariantType,
    { initial: any; animate: any }
  > = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slideUp: {
      initial: { opacity: 0, y: 80 },
      animate: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: 80 },
      animate: { opacity: 1, x: 0 },
    },
    zoom: {
      initial: { scale: 1.2, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
    },
    rotate: {
      initial: { rotate: 5, opacity: 0 },
      animate: { rotate: 0, opacity: 1 },
    },
  };

  const anim = animations[variant];

  return (
    <section className="snap-start relative h-screen w-full overflow-hidden flex items-center">

      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2 }}
      />

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B6A8A]/90 via-[#0B6A8A]/70 to-transparent" />

      {/* ================= GLOW EFFECT ================= */}
      <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-[#34A2A7]/40 blur-[140px] rounded-full animate-pulse" />

      {/* ================= CONTENT ================= */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 w-full ${
          align === "right" ? "text-right" : ""
        }`}
      >
        <motion.div
          initial={anim.initial}
          whileInView={anim.animate}
          transition={{ duration: 0.8 }}
          className={`max-w-xl text-white ${
            align === "right" ? "ml-auto" : ""
          }`}
        >
          {/* subtitle */}
          {subtitle && (
            <p className="uppercase tracking-widest text-sm text-white/70 mb-3 font-[var(--font-body)]">
              {subtitle}
            </p>
          )}

          {/* title */}
          <h2 className="text-5xl md:text-6xl font-[var(--font-display)] font-extrabold mb-6 leading-tight tracking-tight">
            {title}
          </h2>

          {/* description */}
          <p className="text-white/90 text-lg mb-10 leading-relaxed font-[var(--font-body)]">
            {desc}
          </p>

          {/* CTA */}
          <Link
            href={link}
            className="inline-block px-10 py-4 bg-white text-[#0B6A8A] font-semibold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            {cta} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
interface SectionHeroBlockProps {
  title: string;
  subtitle?: string;
  desc: string;
  image: string;
  cta: string;
  link: string;
  align?: "left" | "right";
  variant?: "fade" | "slideUp" | "slideLeft" | "zoom" | "rotate";
  horizontal?: boolean;
}
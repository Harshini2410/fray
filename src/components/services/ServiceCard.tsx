"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  isActive: boolean;
  scale: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  cta,
  isActive,
  scale,
}: ServiceCardProps) {
  const shadowBase =
    "0 18px 45px rgba(15,23,42,0.35), 0 0 0 1px rgba(148,163,184,0.25)";
  const shadowSubtle =
    "0 12px 30px rgba(15,23,42,0.22), 0 0 0 1px rgba(148,163,184,0.2)";

  return (
    <motion.article
      className="group relative flex h-full min-h-[260px] w-[85vw] max-w-[420px] flex-col justify-between rounded-2xl border border-slate-700/60 bg-slate-900/70 px-6 py-6 text-slate-50 shadow-lg backdrop-blur-sm transition-colors duration-300 sm:w-[320px] sm:px-7 sm:py-7 md:w-[360px] lg:w-[420px]"
      style={{ scale }}
      animate={{
        boxShadow: isActive ? shadowBase : shadowSubtle,
        opacity: isActive ? 1 : 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 24,
      }}
      whileHover={{
        y: -4,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800/80 text-lg text-sky-300 ring-1 ring-sky-500/40">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 shadow-sm transition-transform transition-shadow duration-200 hover:bg-sky-400 hover:shadow-md hover:shadow-sky-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] sm:px-5 sm:py-2.5"
        >
          {cta}
          <span className="ml-1.5 text-base leading-none">↗</span>
        </button>

        <p className="hidden text-xs text-slate-400 sm:block">
          Tailored for enterprise delivery.
        </p>
      </div>
    </motion.article>
  );
}




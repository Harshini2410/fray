"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  cta: string;
  iconLabel: string;
}

const SERVICES: Service[] = [
  {
    id: "advisory",
    title: "Digital Strategy & Advisory",
    description:
      "Board-level advisory, product roadmapping, and technology strategy designed around measurable business outcomes.",
    cta: "Talk to our advisors",
    iconLabel: "DS",
  },
  {
    id: "experience",
    title: "Experience Design & Product",
    description:
      "End-to-end experience, product, and service design for complex digital ecosystems across web, mobile, and internal tools.",
    cta: "Explore experience design",
    iconLabel: "XP",
  },
  {
    id: "engineering",
    title: "Platform Engineering",
    description:
      "Cloud-native platforms, data foundations, and integration layers engineered for reliability, security, and scale.",
    cta: "Review engineering approach",
    iconLabel: "PE",
  },
  {
    id: "delivery",
    title: "Managed Delivery",
    description:
      "Embedded teams and managed delivery models that keep complex programmes moving with enterprise-grade governance.",
    cta: "Discuss delivery models",
    iconLabel: "MD",
  },
];

const GRADIENTS = [
  "radial-gradient(circle at top left, #0f172a 0%, #020617 50%, #0b1120 100%)",
  "radial-gradient(circle at top, #082f49 0%, #020617 45%, #0b1120 100%)",
  "radial-gradient(circle at center, #0b1120 0%, #020617 55%, #111827 100%)",
  "radial-gradient(circle at top right, #1d3557 0%, #020617 45%, #020617 100%)",
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function ServicesCarousel() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const targetXRange = useMemo(
    () => (isMobile ? ["0%", "-55%"] : ["0%", "-70%"]),
    [isMobile],
  );

  const rawX = useTransform(scrollYProgress, [0, 1], targetXRange);

  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 26,
    mass: 0.9,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const total = SERVICES.length;
    if (total <= 1) return;
    const segment = 1 / (total - 1);
    const rawIndex = value / segment;
    const nextIndex = Math.min(total - 1, Math.max(0, Math.round(rawIndex)));
    setActiveIndex((current) =>
      current === nextIndex ? current : nextIndex,
    );
  });

  const gradient = GRADIENTS[activeIndex] ?? GRADIENTS[0];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-slate-950 text-slate-50"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: gradient }}
        animate={{ background: gradient }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      <div className="mx-auto flex h-[230vh] max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <div className="sticky top-20 z-10 max-w-xl py-10 sm:py-14">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Built for enterprise-grade digital programmes.
          </motion.h2>
          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Fraylon brings strategy, design, and engineering together in
            dedicated, outcome-focused engagements tailored to enterprise
            environments.
          </motion.p>
        </div>

        <div className="sticky top-[36vh] flex h-[50vh] items-center justify-center overflow-hidden sm:top-[34vh] md:top-[32vh] lg:top-[30vh]">
          <motion.div
            className="flex items-stretch gap-8 px-[6vw] sm:px-[7vw] lg:px-[8vw]"
            style={{ x }}
          >
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              const scale = isActive
                ? isMobile
                  ? 1.03
                  : 1.05
                : isMobile
                  ? 0.97
                  : 0.95;

              return (
                <ServiceCard
                  key={service.id}
                  icon={
                    <span className="text-xs font-semibold tracking-[0.18em]">
                      {service.iconLabel}
                    </span>
                  }
                  title={service.title}
                  description={service.description}
                  cta={service.cta}
                  isActive={isActive}
                  scale={scale}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}




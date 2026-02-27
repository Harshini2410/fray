"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";

export default function CareersContactTeaser() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="border-t border-slate-800/70 bg-slate-950 py-14 text-slate-50 sm:py-16 md:py-18"
    >
      <Container>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300/90">
              Careers
            </p>
            <h3 className="mt-2 text-[1.4rem] font-semibold tracking-tight text-slate-50 sm:text-[1.6rem]">
              Join a team focused on meaningful growth work.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]">
              We work with founders and leaders who care about building durable
              companies. If that sounds like you, we&apos;d love to talk.
            </p>
            <Link
              href="/careers"
              className="mt-4 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200"
            >
              View open roles ↗
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-sky-300/90">
              Ready to talk?
            </p>
            <h3 className="mt-2 text-[1.4rem] font-semibold tracking-tight text-slate-50 sm:text-[1.6rem]">
              Book a working session with our team.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300/90 sm:text-[0.95rem]">
              A focused 45-minute conversation to unpack where you are now and
              what a realistic next stage of growth looks like.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_16px_40px_rgba(8,47,73,0.8)] hover:bg-sky-300"
            >
              Book a consultation
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}



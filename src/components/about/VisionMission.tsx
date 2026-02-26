"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <main className="relative w-full overflow-hidden bg-[#021B24] text-white">

      {/* ================= HERO INTRO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">

        {/* animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#021B24] via-[#062F3E] to-[#03161e]" />

        {/* glow blobs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#34A2A7]/20 blur-[220px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B6A8A]/20 blur-[160px] rounded-full animate-pulse" />

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Vision & Mission
          </h1>

          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            Our purpose is not just to build technology —
            <span className="text-[#34A2A7] font-semibold">
              {" "}we build systems that transform how businesses grow.
            </span>
          </p>
        </motion.div>
      </section>

      {/* ================= VISION SECTION ================= */}
      <section className="relative py-32 px-6 overflow-hidden">

        {/* background image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/vision-bg.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021B24] via-[#021B24]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT BIG TITLE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Eye size={36} className="text-[#34A2A7]" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Our Vision
              </h2>
            </div>

            <p className="text-2xl font-semibold text-[#34A2A7] mb-6">
              To become a global digital growth partner
            </p>

            <p className="text-lg text-white/70 leading-relaxed mb-6">
              empowering organizations across industries to scale with modern technology,
              intelligent systems and future-ready digital ecosystems.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              We envision a world where businesses operate on seamless,
              automated, scalable infrastructures — where growth is not limited by
              resources, but accelerated by intelligent systems built for performance,
              efficiency and continuous innovation.
            </p>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <img
              src="/images/vision.png"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            />

            {/* glow */}
            <div className="absolute inset-0 bg-[#34A2A7]/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="relative py-32 px-6 overflow-hidden">

        {/* background image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/Mission.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        {/* overlay gradient reversed */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#021B24] via-[#021B24]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <img
              src="/images/mission-illustration.png"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
            />

            <div className="absolute inset-0 bg-[#0B6A8A]/10 blur-[120px] rounded-full" />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <Target size={36} className="text-[#34A2A7]" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Our Mission
              </h2>
            </div>

            <p className="text-2xl font-semibold text-[#34A2A7] mb-6">
              Integrate development, marketing & automation
            </p>

            <p className="text-lg text-white/70 leading-relaxed mb-6">
              into unified high-performance systems that deliver measurable growth,
              operational efficiency and long-term business value.
            </p>

            <p className="text-lg text-white/70 leading-relaxed">
              We design and engineer end-to-end digital ecosystems —
              combining strategy, technology and execution so businesses can
              acquire customers faster, optimize performance continuously and
              scale without friction.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
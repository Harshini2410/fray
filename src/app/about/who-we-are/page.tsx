"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TypingHero from "@/components/reusableui/TypingHero";
import { Brain, Cog, TrendingUp, BarChart3, Rocket, Zap, ShieldCheck } from "lucide-react";

export default function WhoWeArePage() {
  return (
    
    <main className="w-full bg-white overflow-hidden">

      {/* ================================================= */}
      {/* ================= SECTION 1 ====================== */}
      {/* ================= HERO =========================== */}
      {/* ================================================= */}

      <section className="w-full min-h-screen flex items-center py-20 overflow-hidden">

        <div className="w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT TEXT ================= */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="uppercase tracking-widest text-[#34A2A7] text-sm mb-5"
            >
              Who We Are
            </motion.p>

            <TypingHero />

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl font-light tracking-wide"
            >
              Fraylon Technologies partners with startups and growth-stage businesses
              to design, engineer and optimize high-performance digital ecosystems
              that drive measurable revenue and long-term market advantage.
            </motion.p>
          </div>

          {/* ================= RIGHT VIDEO ================= */}
          <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">

            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute right-[-50px] top-0 h-full w-[135%] md:w-[150%] object-cover shadow-2xl"
            >
              <source src="/videos/about.mp4" type="video/mp4" />
            </video>

            <div className="absolute -top-20 -right-20 w-[250px] h-[250px] bg-[#34A2A7]/20 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 left-0 w-[250px] h-[250px] bg-[#0B6A8A]/20 blur-[120px] rounded-full" />
          </div>

        </div>
      </section>

<section className="relative w-full py-28 px-6 bg-white overflow-hidden">

  {/* soft top fade */}
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent pointer-events-none" />

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT VIDEO ================= */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="relative w-full h-[450px] md:h-[550px] overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 h-full w-[120%] md:w-[130%] object-cover shadow-xl"
      >
        <source src="/videos/about2.mp4" type="video/mp4" />
      </video>

      <div className="absolute -top-16 left-[-60px] w-[200px] h-[200px] bg-[#34A2A7]/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-16 right-0 w-[200px] h-[200px] bg-[#0B6A8A]/20 blur-[100px] rounded-full" />
    </motion.div>

    {/* ================= RIGHT TEXT ================= */}
    <div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="uppercase tracking-widest text-[#34A2A7] text-sm mb-4"
      >
        Our Approach
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#021B24] leading-tight mb-6"
      >
        Building Scalable Growth Systems
        <span className="block text-[#34A2A7]">
          for the Digital Economy
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 text-lg leading-relaxed max-w-xl font-light tracking-wide mb-10"
      >
        We design integrated systems that combine strategy, technology and
        execution — enabling businesses to acquire customers, optimize
        performance and scale efficiently in today’s competitive digital
        landscape.
      </motion.p>

      {/* animated highlight cards */}
      <div className="grid md:grid-cols-2 gap-8">

  {[
    {
      title: "Performance Marketing Systems",
      desc: "Data-driven acquisition engines that continuously optimize cost, scale and ROI.",
    },
    {
      title: "Conversion-first Web Experiences",
      desc: "High-performing digital platforms engineered to convert traffic into revenue.",
    },
    {
      title: "Automation & Analytics Infrastructure",
      desc: "Integrated systems that connect data, workflows and decision-making in real time.",
    },
    {
      title: "Long-term Growth Architecture",
      desc: "Scalable ecosystems designed for sustained growth, efficiency and adaptability.",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        rotateX: 3,
        rotateY: -3,
        scale: 1.03,
      }}
      className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden perspective"
    >

      {/* LIGHT SWEEP */}
      <div className="absolute -left-20 top-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_linear] pointer-events-none" />

      {/* GRADIENT GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#34A2A7]/10 via-transparent to-[#0B6A8A]/10 transition duration-500" />

      {/* BORDER GLOW */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#34A2A7]/40 rounded-2xl transition" />

      {/* FLOATING ICON DOT */}
      <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-[#34A2A7] opacity-70 group-hover:scale-150 transition" />

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-[#021B24] mb-3 relative z-10 group-hover:text-[#34A2A7] transition">
        {item.title}
      </h3>

      {/* DESCRIPTION (HOVER REVEAL) */}
      <p className="text-sm text-[#062F3E]/80 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500 relative z-10">
        {item.desc}
      </p>

      {/* BOTTOM ACCENT LINE */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#34A2A7] group-hover:w-full transition-all duration-500" />

    </motion.div>
  ))}

</div>

    </div>

  </div>
</section>
{/* ================= SECTION 3 ================= */}
{/* ================= SECTION 3 ================= */}
<section
  id="framework"
  className="relative w-full py-40 px-6 bg-[#F9FAFB] overflow-hidden"
>
  <div className="max-w-7xl mx-auto">

    {/* ================= HEADER ================= */}
    <div className="text-center mb-28">
      <p className="uppercase tracking-[0.25em] text-[#34A2A7] text-sm mb-4">
        How We Work
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold text-[#021B24] leading-tight">
        A Growth System
        <span className="block text-[#34A2A7]">
          Designed to Win Markets
        </span>
      </h2>
    </div>

    {/* ================= LUXURY GRID ================= */}
    <div className="space-y-28">

      {[
        {
          icon: Brain,
          title: "Strategy",
          desc:
            "We dive deep into your market, customers and positioning to craft a powerful growth blueprint. Every move is intentional, data-backed and aligned with your long-term dominance.",
          highlight:
            "We don’t guess. We architect growth.",
          image: "/images/Strategy.jpg",
        },
        {
          icon: Cog,
          title: "Build",
          desc:
            "We engineer high-performance digital systems — lightning-fast websites, automation engines and scalable infrastructure designed for reliability and long-term expansion.",
          highlight:
            "We build assets, not just projects.",
          image: "/images/Build.jpg",
        },
        {
          icon: TrendingUp,
          title: "Scale",
          desc:
            "Through analytics, marketing systems and continuous optimization, we unlock predictable revenue growth and transform your business into a scalable engine.",
          highlight:
            "We turn traction into unstoppable momentum.",
          image: "/images/Scale.webp",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className={`grid md:grid-cols-2 gap-14 items-center`}
          >
            {/* ================= IMAGE SIDE ================= */}
            <div className={`relative group ${i % 2 !== 0 ? "md:order-2" : ""}`}>

              <div className="absolute inset-0 bg-[#34A2A7]/20 blur-[120px] rounded-3xl opacity-60 group-hover:opacity-90 transition duration-500" />

              <img
                src={item.image}
                className="relative z-10 w-full h-[420px] object-cover rounded-3xl shadow-xl group-hover:scale-[1.03] transition duration-700"
              />

              {/* floating badge */}
              <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow flex items-center gap-2">
                <Icon size={18} className="text-[#34A2A7]" />
                <span className="text-xs font-semibold text-[#021B24]">
                  {item.title}
                </span>
              </div>

            </div>

            {/* ================= TEXT SIDE ================= */}
            <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>

              <h3 className="text-3xl md:text-4xl font-bold text-[#021B24] mb-5">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {item.desc}
              </p>

              <p className="text-[#34A2A7] font-semibold text-lg italic">
                {item.highlight}
              </p>

              {/* animated divider */}
              <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[#34A2A7] to-transparent" />

            </div>
          </motion.div>
        );
      })}

    </div>
  </div>

  {/* background glow */}
  <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#34A2A7]/10 blur-[200px] rounded-full" />
</section>
{/* ================= SECTION 4 ================= */}
{/* ================= SECTION 4 ================= */}
<section className="relative w-full py-40 px-6 bg-white overflow-hidden">

  {/* ambient soft background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#34A2A7]/10 blur-[200px] rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto text-center">

    {/* HEADING */}
    <p className="uppercase tracking-[0.25em] text-[#34A2A7] text-sm mb-4">
      Why Fraylon
    </p>

    <h2 className="text-4xl md:text-5xl font-extrabold text-[#021B24] mb-24 leading-tight">
      Built for Performance
      <span className="block text-[#34A2A7]">
        Designed for Scale
      </span>
    </h2>

    {/* GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {[
        {
          icon: BarChart3,
          title: "Data Intelligence",
          desc: "We transform raw data into clear insights, empowering smarter decisions and measurable growth at every stage of your business.",
        },
        {
          icon: Rocket,
          title: "Growth Systems",
          desc: "End-to-end acquisition engines designed to convert traffic into revenue through performance marketing and optimized funnels.",
        },
        {
          icon: Zap,
          title: "Automation First",
          desc: "We eliminate manual effort using intelligent automation that improves efficiency, accuracy and scalability of your operations.",
        },
        {
          icon: ShieldCheck,
          title: "Secure & Scalable",
          desc: "Enterprise-grade architecture built with security, reliability and long-term scalability at its core.",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.06 }}
            className="group relative cursor-pointer p-10 rounded-3xl bg-white border border-gray-100 
            shadow-md hover:shadow-[0_40px_120px_rgba(0,0,0,0.15)] 
            transition-all duration-500 overflow-hidden"
          >

            {/* animated light sweep */}
            <div className="absolute -left-40 top-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent 
            opacity-0 group-hover:opacity-100 group-hover:animate-[shine_1.2s_linear] pointer-events-none" />

            {/* animated gradient glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-br from-[#34A2A7]/10 via-transparent to-[#0B6A8A]/10 
            transition duration-500" />

            {/* animated border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent 
            group-hover:border-[#34A2A7]/40 transition duration-500" />

            {/* icon */}
            <div className="mb-6 flex justify-center relative z-10">
              <div className="p-4 rounded-xl bg-[#34A2A7]/10 group-hover:bg-[#34A2A7]/20 transition duration-300 relative">

                {/* glow behind icon */}
                <div className="absolute inset-0 blur-xl bg-[#34A2A7]/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl" />

                <Icon size={32} className="text-[#34A2A7] relative z-10" />
              </div>
            </div>

            {/* title */}
            <h3 className="text-lg font-semibold text-[#021B24] relative z-10 
            group-hover:text-[#34A2A7] transition">
              {item.title}
            </h3>

            {/* underline animation */}
            <div className="w-0 h-[2px] bg-[#34A2A7] mt-3 mx-auto group-hover:w-16 transition-all duration-500" />

            {/* description */}
            <p className="mt-5 text-sm text-gray-600 leading-relaxed opacity-80 relative z-10 
            group-hover:opacity-100 transition duration-300">
              {item.desc}
            </p>

          </motion.div>
        );
      })}

    </div>
  </div>
</section>
{/* ================================================= */}
{/* ================= SECTION 5 ====================== */}
{/* ================= FINAL CTA ====================== */}
{/* ================================================= */}

<section className="relative w-full py-32 px-6 overflow-hidden bg-[#021B24] text-white">

  {/* glow background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#021B24] via-[#062F3E] to-[#03161e]" />

  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#34A2A7]/20 blur-[180px] rounded-full" />

  <div className="relative max-w-5xl mx-auto text-center">

    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
    >
      Let’s Build Your Next
      <span className="block text-[#34A2A7]">
        Growth Engine
      </span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg text-white/80 mb-10 max-w-3xl mx-auto"
    >
      Partner with Fraylon Technologies to design, build and scale
      high-performance digital systems that drive measurable business growth.
    </motion.p>

    {/* CTA BUTTONS */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-6 justify-center"
    >
      <a
        href="/contact"
        className="px-10 py-4 bg-[#34A2A7] text-white rounded-full font-semibold shadow-lg hover:scale-105 hover:bg-[#0B6A8A] transition"
      >
        Book a Growth Call →
      </a>

      <a
        href="/contact"
        className="px-10 py-4 border border-white/40 rounded-full hover:bg-white/10 transition"
      >
        Start a Project
      </a>
    </motion.div>

  </div>
</section>
    </main>
  );
}
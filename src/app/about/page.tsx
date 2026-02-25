"use client";

import { motion } from "framer-motion";
import { Lightbulb, Handshake, Target, Users, Trophy } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function AboutPage() {
  const values = [
    { title: "Innovation", desc: "We continuously explore new technologies.", icon: <Lightbulb size={28} /> },
    { title: "Integrity", desc: "We maintain transparency and ethics.", icon: <Handshake size={28} /> },
    { title: "Customer Success", desc: "We focus on measurable growth.", icon: <Target size={28} /> },
    { title: "Collaboration", desc: "We believe in teamwork and trust.", icon: <Users size={28} /> },
    { title: "Excellence", desc: "We deliver high-quality solutions.", icon: <Trophy size={28} /> },
  ];

  const team = [
    { name: "Person Name", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Person Name", role: "CTO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Person Name", role: "COO", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  ];

  const headingStyle = "text-4xl font-extrabold mb-6 relative inline-block group";
  const headingGradient = "bg-gradient-to-r from-[#34A2A7] via-white to-[#34A2A7] bg-clip-text text-transparent";

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#0B6A8A] via-[#1a4f75] to-[#34A2A7]">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30 animate-gridMove pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(52,162,167,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15),transparent_40%)]" />

      {/* HERO */}
      <section className="text-center pt-28 pb-16 px-6 relative z-10">
        <motion.h1
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-5xl md:text-7xl font-extrabold"
        >
          

          <span className={headingGradient}>
            Fraylon Technologies
          </span>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ duration: 0.6 }}
            className="h-[3px] bg-gradient-to-r from-[#34A2A7] to-white mx-auto mt-4 rounded-full"
          />
        </motion.h1>

        <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg">
          Empowering businesses with modern digital solutions, automation, and innovation.
        </p>
      </section>

      {/* SECTION DIVIDER */}
      <div className="h-[1px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />

      {/* WHO WE ARE */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10 backdrop-blur-[2px]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h2 className={headingStyle}>
            <span className={headingGradient}>Who We Are</span>
            <span className="block h-[3px] w-0 bg-gradient-to-r from-[#34A2A7] to-white mt-2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Fraylon Technologies builds scalable web platforms, automation systems,
            and marketing solutions to help businesses grow faster, smarter, and more efficiently.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg"
          className="rounded-2xl shadow-2xl w-full h-[360px] object-cover"
          whileHover={{ y: -8, rotate: 1 }}
        />
      </section>

      {/* DIVIDER */}
      <div className="h-[1px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />

      {/* VISION & MISSION */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center relative z-10 backdrop-blur-[2px]">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://images.stockcake.com/public/8/f/2/8f232cdb-1ba5-42aa-be75-f9fbb33c2f6c_large/corporate-team-meeting-stockcake.jpg"
          className="rounded-2xl shadow-2xl w-full h-[360px] object-cover"
          whileHover={{ y: -8, rotate: -1 }}
        />

        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h2 className={headingStyle}>
            <span className={headingGradient}>Vision & Mission</span>
            <span className="block h-[3px] w-0 bg-gradient-to-r from-[#34A2A7] to-white mt-2 transition-all duration-500 ease-in-out group-hover:w-full"></span>
          </h2>

          <p className="text-white/80 text-lg mb-4">
            Our vision is to become a global digital growth partner helping organizations scale with modern technology.
          </p>

          <p className="text-white/80 text-lg">
            Our mission is to integrate development, marketing, and automation into powerful systems that drive measurable growth.
          </p>
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="h-[1px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />

      {/* CORE VALUES */}
      <section className="py-16 px-6 text-center relative z-10 backdrop-blur-[2px]">
        <h2 className={`${headingStyle} mb-12`}>
          <span className={headingGradient}>Our Core Values</span>
          <span className="block h-[3px] w-0 bg-gradient-to-r from-[#34A2A7] to-white mt-2 transition-all duration-500 ease-in-out group-hover:w-full mx-auto"></span>
        </h2>

        <motion.div variants={containerStagger} initial="hidden" whileInView="show" className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.03, rotateX: 2, rotateY: -2 }}
              className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-[#34A2A7]/40"
            >
              <div className="mb-3 flex justify-center">
                <div className="p-3 rounded-full bg-white/10 shadow-inner shadow-[#34A2A7]/30">
                  {val.icon}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{val.title}</h3>
              <p className="text-white/70 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="h-[1px] w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent mb-16" />

      {/* LEADERSHIP */}
      <section className="py-16 px-6 text-center relative z-10 backdrop-blur-[2px]">
        <h2 className={headingStyle}>
          <span className={headingGradient}>Leadership</span>
          <span className="block h-[3px] w-0 bg-gradient-to-r from-[#34A2A7] to-white mt-2 transition-all duration-500 ease-in-out group-hover:w-full mx-auto"></span>
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-12">
          Our team combines innovation, strategy, and experience to drive impactful digital transformation.
        </p>

        <motion.div variants={containerStagger} initial="hidden" whileInView="show" className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl shadow-lg hover:shadow-[#34A2A7]/40"
            >
              <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-2 border-[#34A2A7]/60 shadow-lg shadow-[#34A2A7]/30">
                <img src={m.img} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-[#34A2A7]">{m.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutPage() {
  const [activeMember, setActiveMember] = useState<any>(null);

  const team = [
    { name: "Person Name", role: "Role / Position" },
    { name: "Person Name", role: "Role / Position" },
    { name: "Person Name", role: "Role / Position" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1d3a] via-[#142c6e] to-[#1e3a8a] text-white">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          <span className="text-white">About </span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Fraylon Technologies
          </span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto rounded-full mb-6"
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-blue-100"
        >
          Fraylon Technologies is a next-generation digital solutions company that empowers
          startups and enterprises through modern web development, automation,
          branding, and marketing innovation.
        </motion.p>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-xl transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Our Vision
          </h2>
          <p className="text-blue-100 text-lg">
            To become a global digital growth partner by building scalable,
            innovative, and future-ready digital ecosystems.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-xl transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Our Mission
          </h2>
          <p className="text-blue-100 text-lg">
            To combine marketing, technology, and automation into unified systems
            that scale businesses efficiently and sustainably.
          </p>
        </motion.div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-20"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Leadership Team
          </span>
          <span className="block w-40 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              onClick={() => setActiveMember(member)}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="cursor-pointer group bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-lg transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <div className="w-36 h-36 mx-auto mb-5 rounded-full bg-gray-300 flex items-center justify-center text-xl text-gray-600">
                IMG
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-8"
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Our Core Values
          </span>
          <span className="block w-40 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mt-4 rounded-full"></span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-blue-200 text-lg"
        >
          We believe in innovation, transparency, customer success, and building
          long-term partnerships that create real impact in the digital world.
        </motion.p>
      </section>

      {/* MODAL */}
      {activeMember && (
        <div
          onClick={() => setActiveMember(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b1d3a] p-10 rounded-2xl border border-white/20 max-w-md text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
              IMG
            </div>
            <h3 className="text-2xl font-bold mb-2">{activeMember.name}</h3>
            <p className="text-blue-300 mb-4">{activeMember.role}</p>
            <button
              onClick={() => setActiveMember(null)}
              className="mt-4 px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
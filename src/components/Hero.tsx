"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const headlines = [
  "Digital Solutions for Tomorrow",
  "Scaling Startups with Smart Technology",
  "Performance-Driven Digital Growth",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-white px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-4xl text-center relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo.jpeg"
            alt="Fraylon Technologies"
            width={160}
            height={60}
          />
        </div>

        {/* Animated Headline */}
        <motion.h1
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          {headlines[index]}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-200 mb-8"
        >
          Fraylon Technologies empowers startups and growing businesses with
          high-performance web development, branding, automation, and
          performance marketing solutions that drive measurable results.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
          >
            Our Services
          </Link>

          <Link
            href="/contact"
            className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-lg font-medium"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

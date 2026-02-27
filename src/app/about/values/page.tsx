"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Award,
} from "lucide-react";

const values = [
  {
    slug: "innovation",
    title: "Innovation",
    icon: Sparkles,
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    slug: "integrity",
    title: "Integrity",
    icon: ShieldCheck,
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    icon: TrendingUp,
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    icon: Handshake,
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    slug: "excellence",
    title: "Excellence",
    icon: Award,
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
  },
];

export default function ValuesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="h-screen w-full bg-[#021B24] flex flex-col">

      {/* ================= HEADER ================= */}
      <div className="relative z-30 w-full text-center text-white px-6 pt-10 pb-6 bg-[#021B24] border-b border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">

        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight"
        >
          Our Core Values
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white/70 max-w-2xl mx-auto text-sm md:text-base"
        >
          The principles that guide how we design, build and deliver impactful
          digital systems for modern businesses.
        </motion.p>

      </div>

      {/* ================= PANELS ================= */}
      <div className="flex flex-1 overflow-hidden">

        {values.map((val, index) => {
          const Icon = val.icon;
          const isActive = active === index;

          return (
            <Link
              href={`/about/${val.slug}`}
              key={val.slug}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="relative flex-1 overflow-hidden group"
            >
              <motion.div
                animate={{
                  flex: isActive ? 2.4 : 1,
                  scale: isActive ? 1.03 : 1,
                  y: isActive ? -6 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full cursor-pointer shadow-md group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              >

                {/* IMAGE */}
                <img
                  src={val.image}
                  className={`absolute inset-0 w-full h-full object-cover transition duration-700 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isActive ? "bg-black/45" : "bg-black/70"
                  }`}
                />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                  {/* TITLE */}
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-[#34A2A7]" size={20} />
                    <h2 className="text-lg md:text-xl font-semibold">
                      {val.title}
                    </h2>
                  </div>

                  {/* CTA */}
                  <div
                    className={`transition-all duration-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-sm font-semibold text-[#34A2A7] flex items-center gap-1">
                      Explore →
                    </span>
                  </div>

                </div>

              </motion.div>
            </Link>
          );
        })}

      </div>

    </main>
  );
}
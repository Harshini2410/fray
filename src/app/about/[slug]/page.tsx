"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  LineChart,
  Handshake,
  Award,
  Brain,
  Cog,
  TrendingUp,
  BarChart3,
  Rocket,
  Zap,
} from "lucide-react";

/* ================= ICON MAP FOR VALUES ================= */
const Icons = {
  innovation: Sparkles,
  integrity: ShieldCheck,
  "customer-success": LineChart,
  collaboration: Handshake,
  excellence: Award,
};

/* ================= VALUES DATA ================= */
const values = {
  innovation: {
    title: "Innovation",
    subtitle: "Building the Future",
    bg: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    intro:
      "We don’t just follow trends — we engineer what’s next. At Fraylon, innovation means building intelligent, scalable systems that redefine how modern businesses operate and grow.",
    bullets: [
      {
        title: "AI-first Engineering",
        desc: "We build intelligent platforms that automate workflows, predict outcomes and continuously learn from user behavior.",
      },
      {
        title: "Cloud-native Platforms",
        desc: "Systems designed for scalability, resilience and high availability.",
      },
      {
        title: "Rapid Experimentation",
        desc: "We validate ideas quickly through prototyping and iterative releases.",
      },
      {
        title: "Future-ready Systems",
        desc: "Architectures that evolve with emerging technologies.",
      },
    ],
  },

  integrity: {
    title: "Integrity",
    subtitle: "Trust & Transparency",
    bg: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    intro:
      "Integrity is the foundation of everything we build. Every decision is grounded in transparency, ethics and accountability.",
    bullets: [
      { title: "Transparent Communication", desc: "Clear communication at every stage." },
      { title: "Ethical Engineering", desc: "Responsible development practices." },
      { title: "Security First", desc: "Data protection and compliance." },
      { title: "Long-term Partnerships", desc: "Sustainable client relationships." },
    ],
  },

  "customer-success": {
    title: "Customer Success",
    subtitle: "Driving Growth",
    bg: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    intro:
      "Every system we build is aligned with measurable growth and business outcomes.",
    bullets: [
      { title: "ROI-driven Systems", desc: "Revenue-focused solutions." },
      { title: "Growth Optimization", desc: "Continuous performance tuning." },
      { title: "Scalable Infrastructure", desc: "Systems that evolve with business." },
      { title: "Continuous Improvement", desc: "Data-driven improvements." },
    ],
  },

  collaboration: {
    title: "Collaboration",
    subtitle: "Building Together",
    bg: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    intro:
      "We act as an extension of your team with shared ownership and agile workflows.",
    bullets: [
      { title: "Agile Delivery", desc: "Sprint-based execution." },
      { title: "Cross-functional Teams", desc: "Design + dev + strategy synergy." },
      { title: "Shared Ownership", desc: "We treat your product as ours." },
      { title: "Open Communication", desc: "Continuous alignment." },
    ],
  },

  excellence: {
    title: "Excellence",
    subtitle: "Engineering Quality",
    bg: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg",
    intro:
      "Excellence is engineered into every layer of our systems — performance, scalability and reliability.",
    bullets: [
      { title: "Performance-first", desc: "Speed and efficiency optimized." },
      { title: "Clean Architecture", desc: "Maintainable systems." },
      { title: "Reliability Standards", desc: "Enterprise-grade uptime." },
      { title: "Continuous Optimization", desc: "Always improving." },
    ],
  },
};



/* ================= MAIN COMPONENT ================= */
export default function SlugPage() {
  const { slug } = useParams() as { slug: string };

  const valueData = values[slug as keyof typeof values];
  

  /* ================= VALUE PAGE ================= */
  if (valueData) {
    const data = valueData;
    const Icon = Icons[slug as keyof typeof Icons];

    return (
      <main className="relative min-h-screen overflow-hidden">
        <motion.img
          src={data.bg}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <section className="relative z-10 text-center pt-32 pb-16 px-6">
          <Icon size={48} className="mx-auto text-[#34A2A7] mb-6" />
          <h1 className="text-6xl font-extrabold text-white mb-4">{data.title}</h1>
          <p className="text-2xl text-[#34A2A7] mb-6">{data.subtitle}</p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">{data.intro}</p>
        </section>

        <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-2 gap-12">
          {data.bullets.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-white"
            >
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        <div className="relative z-10 text-center pb-24">
          <Link href="/contact" className="bg-[#34A2A7] px-8 py-4 rounded-lg text-white">
            Work With Us →
          </Link>
        </div>
      </main>
    );
  }
}


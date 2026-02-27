"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBlobs from "@/components/reusableui/animatedblobs";
import SectionHeroBlock from "@/components/about/SectionHeroBlock";

export default function AboutPage() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar bg-[#F8F8F9]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="snap-start h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#021B24] via-[#062F3E] to-[#03161e]">
        
        <AnimatedBlobs />

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 tracking-tight 
            bg-[linear-gradient(to_right,#34A2A7,#0B6A8A,#D5E2E5,#F8F8F9,#FEFEFD)]
            bg-clip-text text-transparent"
          >
            Fraylon Technologies
          </motion.h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10">
            We design, engineer and scale digital platforms, automation systems and
            growth engines that create measurable business impact.
          </p>
        </div>
      </section>

      {/* ================= SECTION BLOCKS ================= */}
      <SectionHeroBlock
        subtitle="About Our Company"
        title="Building Scalable Digital Systems"
        desc="We design and engineer platforms, automation systems and growth solutions that deliver measurable business value."
        image="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
        cta="Learn More"
        link="/about/who-we-are"
        variant="slideUp"
      />

      <SectionHeroBlock
        subtitle="Vision & Mission"
        title="Driving Innovation Through Technology"
        desc="We combine engineering, automation and marketing to create scalable systems for modern businesses."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978"
        cta="Explore Vision"
        link="/about/vision-mission"
        align="right"
        variant="slideLeft"
      />

      <SectionHeroBlock
        subtitle="Innovation"
        title="Future Ready Platforms"
        desc="We leverage AI, cloud, and modern architectures to build next-gen digital platforms."
        image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
        cta="Explore Innovation"
        link="/about/innovation"
        variant="zoom"
      />

      <SectionHeroBlock
        subtitle="Core Values"
        title="Principles That Define Us"
        desc="Integrity, collaboration, innovation and excellence guide everything we do."
        image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        cta="See Values"
        link="/about/values"
        align="right"
        variant="rotate"
      />

      <SectionHeroBlock
        subtitle="Leadership"
        title="Driving Strategy & Innovation"
        desc="Our leadership combines engineering excellence with business vision."
        image="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
        cta="Meet Leadership"
        link="/about/leadership"
        variant="slideUp"
      />

      {/* ================= FINAL CTA ================= */}
      <section className="snap-start bg-[#F8F8F9] flex items-center justify-center px-6 py-24">
        <div className="max-w-5xl text-center bg-white shadow-xl rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021B24] mb-6">
            Let’s Build Something Powerful Together
          </h2>

          <p className="text-[#062F3E]/80 mb-10 max-w-2xl mx-auto">
            We design scalable digital systems that drive growth and measurable business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 
              bg-[#34A2A7] text-white 
              px-8 py-4 font-semibold 
              hover:bg-[#0B6A8A] 
              shadow-lg rounded-lg"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 border border-[#021B24] text-[#021B24] rounded-lg hover:bg-[#021B24] hover:text-white transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

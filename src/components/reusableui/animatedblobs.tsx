"use client";

import { motion } from "framer-motion";

const AnimatedBlobs = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      
      {/* Large blurred blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-32 -left-32 w-screen] h-screen bg-[#0B3F4F]/40 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute top-1/3 -right-48 w-screen h-screen bg-[#063042]/40 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 left-1/4 w-screen h-screen bg-[#092E3C]/30 blur-3xl rounded-full"
      />

         <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 left-1/4 w-screen h-screen bg-[#092E3C]/30 blur-3xl rounded-full"
      />

      {/* Pulse Rings */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-1/4 w-40 h-40 rounded-full border-2 border-[#0B6A8A]/40"
      />

      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-32 left-16 w-56 h-56 rounded-full border border-[#063042]/40"
      />

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
          }}
          className="absolute w-2 h-2 rounded-full bg-[#0B6A8A]/60"
          style={{
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 5) * 10}%`,
          }}
        />
      ))}

      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-[#0B6A8A]/30" />
        <div className="absolute inset-8 rounded-full border border-dotted border-[#063042]/30" />
      </motion.div>

    </div>
  );
};

export default AnimatedBlobs;
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  twinkleDelay: number;
  twinkleDuration: number;
}

// Generate random stars
const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1 + 1, // 1px to 2px
    opacity: Math.random() * 0.3 + 0.2, // 0.2 to 0.5
    color: Math.random() > 0.75 ? "rgb(165, 243, 252)" : "rgb(255, 255, 255)", // Mostly white, some soft cyan
    twinkleDelay: Math.random() * 2, // 0 to 2 seconds
    twinkleDuration: Math.random() * 3 + 3, // 3 to 6 seconds
  }));
};

interface StarFieldProps {
  starCount?: number;
  containerRef?: React.RefObject<HTMLDivElement>;
}

export default function StarField({ starCount = 70, containerRef }: StarFieldProps) {
  // Generate stars only on client to avoid hydration mismatch
  const [stars, setStars] = useState<Star[]>([]);
  const starFieldRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStars(generateStars(starCount));
  }, [starCount]);

  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Slightly snappier spring so stars react more to cursor movement
  const springX = useSpring(mouseX, {
    stiffness: 160,
    damping: 26,
    mass: 0.55,
  });
  const springY = useSpring(mouseY, {
    stiffness: 160,
    damping: 26,
    mass: 0.55,
  });

  // Increase parallax range so dots move more noticeably with cursor
  const translateX = useTransform(springX, [-1, 1], [-14, 14]);
  const translateY = useTransform(springY, [-1, 1], [-14, 14]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = containerRef?.current || starFieldRef.current?.parentElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize to -1 to 1 range
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      // Clamp to prevent extreme values
      const clampedX = Math.max(-1, Math.min(1, normalizedX));
      const clampedY = Math.max(-1, Math.min(1, normalizedY));

      mouseX.set(clampedX);
      mouseY.set(clampedY);
    };

    const target = containerRef?.current || starFieldRef.current?.parentElement;
    if (target) {
      target.addEventListener("mousemove", handleMouseMove);
      return () => target.removeEventListener("mousemove", handleMouseMove);
    }
  }, [containerRef, mouseX, mouseY]);

  return (
    <motion.div
      ref={starFieldRef}
      className="pointer-events-none absolute inset-0 -z-20"
      style={{
        translateX,
        translateY,
      }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [
              star.opacity,
              Math.min(star.opacity + 0.15, 0.5),
              star.opacity,
            ],
          }}
          transition={{
            duration: star.twinkleDuration,
            delay: star.twinkleDelay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}


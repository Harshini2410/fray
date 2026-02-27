"use client";

import { useEffect, useState } from "react";

const lines = [
  "We are engineers.",
  "We are strategists.",
  "We are growth architects.",
  "We are Fraylon.",
];

export default function TypingHero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[lineIndex];

    let typingSpeed = isDeleting ? 30 : 60; // slower typing

    const handleTyping = () => {
      if (!isDeleting) {
        // typing forward
        setText(currentLine.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentLine.length) {
          // pause at full text
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        // deleting
        setText(currentLine.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLineIndex((prev) => (prev + 1) % lines.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight max-w-2xl">

      {/* Gradient highlight text */}
      <span className="bg-gradient-to-r from-[#021B24] via-[#0B6A8A] to-[#34A2A7] bg-clip-text text-transparent">
        {text}
      </span>

      {/* Cursor */}
      <span className="ml-1 text-[#34A2A7] animate-pulse">|</span>

    </h1>
  );
}
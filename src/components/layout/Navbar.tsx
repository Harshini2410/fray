"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-base font-semibold tracking-tight text-foreground">
          Fraylon Technologies
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className={pathname === "/" ? "text-primary font-semibold" : ""}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "text-primary font-semibold" : ""}>About</Link>
          <Link href="/services" className={pathname === "/services" ? "text-primary font-semibold" : ""}>Services</Link>
          <Link href="/contact" className={pathname === "/contact" ? "text-primary font-semibold" : ""}>Contact</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}>☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}

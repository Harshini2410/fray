"use client";
 FE-08-About-Section
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


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: 0,
          height: isScrolled ? 70 : 88,
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.8, 0.4, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-50/95 backdrop-blur-xl border-b border-slate-200/40 shadow-[0_10px_40px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]"
            : "bg-slate-50/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.5),0_4px_12px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <motion.div
              animate={{ scale: isScrolled ? 0.9 : 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/faylon bckground.png"
                alt="Fraylon Technologies"
                width={360}
                height={120}
                className="h-16 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="relative group">
                  <motion.span
                    className={`text-sm font-medium transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                      active
                        ? "text-cyan-400"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                  </motion.span>

                  {/* Active Line */}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    />
                  )}

                  {/* Hover Line */}
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="relative px-6 py-2 rounded-full text-sm font-semibold text-slate-900 bg-cyan-400 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>

                {/* Glow layer */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-slate-800"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-slate-800"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-slate-800"
            />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[88px] left-0 right-0 bg-slate-50/95 backdrop-blur-xl border-b border-slate-200/40 shadow-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] lg:hidden z-40"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                    pathname === link.href
                      ? "text-cyan-400"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex justify-center px-6 py-3 rounded-full bg-cyan-400 text-slate-900 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
main
  );
}
"use client";

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
        transition={{
          duration: 0.35,
          ease: [0.25, 0.8, 0.4, 1],
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-50/95 backdrop-blur-xl border-b border-slate-200/40 shadow-lg"
            : "bg-slate-50/95 backdrop-blur-md shadow-lg"
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
                    className={`text-sm font-medium transition-colors duration-300 ${
                      active
                        ? "text-cyan-400"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {link.label}
                  </motion.span>

                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-cyan-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA BUTTON */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="px-6 py-2 rounded-full text-sm font-semibold text-slate-900 bg-cyan-400"
              >
                Get Started
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
            className="fixed top-[88px] left-0 right-0 bg-slate-50/95 backdrop-blur-xl border-b border-slate-200/40 shadow-lg lg:hidden z-40"
          >
            <div className="flex flex-col gap-6 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-base font-medium ${
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

      <div className="h-[88px]" />
    </>
  );
}

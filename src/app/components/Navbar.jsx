"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

const navLinks = [
  { title: "About", path: "#about", id: "about" },
  { title: "Skills", path: "#skills", id: "skills" },
  { title: "Projects", path: "#projects", id: "projects" },
  { title: "Stats", path: "#achievements", id: "achievements" },
  { title: "Contact", path: "#contact", id: "contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Active section detection
      const sectionIds = navLinks.map(l => l.id);
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
      if (window.scrollY < 100) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setNavbarOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          transition: "all 0.4s ease",
          background: scrolled
            ? "rgba(5,5,8,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(circle, rgba(124,58,237,0.4), transparent)", filter: "blur(8px)" }}
              />
              <Image
                src={logo}
                alt="Amitesh Logo"
                width={36}
                height={36}
                priority
                className="relative rounded-full"
              />
            </div>
            <span
              className="font-display font-bold text-white text-lg hidden sm:block"
              style={{ letterSpacing: "-0.02em" }}
            >
              Amitesh
              <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                .dev
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full group"
                style={{
                  color: activeSection === link.id ? "#a78bfa" : "#94a3b8",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "rgba(124,58,237,0.12)",
                      border: "1px solid rgba(124,58,237,0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              className="btn-primary text-sm"
              style={{ padding: "9px 22px" }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={navbarOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={navbarOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={navbarOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-white rounded-full"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 490,
              background: "rgba(5,5,8,0.97)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <button
              onClick={closeMenu}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                color: "#94a3b8",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
              }}
              aria-label="Close menu"
            >
              ✕
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.path}
                  onClick={closeMenu}
                  className="block text-3xl font-display font-bold text-white hover:text-violet-400 transition-colors py-3 text-center"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 + 0.1 }}
              className="mt-8"
            >
              <Link
                href="#contact"
                onClick={closeMenu}
                className="btn-primary"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

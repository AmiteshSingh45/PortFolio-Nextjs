"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const TECH_BADGES = [
  { label: "Next.js", color: "#fff", bg: "rgba(255,255,255,0.08)" },
  { label: "React", color: "#61DAFB", bg: "rgba(97,218,251,0.1)" },
  { label: "Python", color: "#F7D560", bg: "rgba(247,213,96,0.1)" },
  { label: "ML / AI", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  { label: "Node.js", color: "#86EFAC", bg: "rgba(134,239,172,0.1)" },
  { label: "MongoDB", color: "#4ADE80", bg: "rgba(74,222,128,0.1)" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/AmiteshSingh45",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amitesh-kumar-251188282/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Amitesh_/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left - rect.width / 2) / rect.width,
        y: (e.clientY - rect.top - rect.height / 2) / rect.height,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: "80px" }}
    >
      {/* Background gradient mesh */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at ${55 + mousePos.x * 10}% ${40 + mousePos.y * 10}%, rgba(124,58,237,0.12) 0%, transparent 60%),
                       radial-gradient(ellipse at ${20 + mousePos.x * -5}% ${70 + mousePos.y * -5}%, rgba(6,182,212,0.07) 0%, transparent 50%)`,
          transition: "background 0.3s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="section-tag">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-display font-bold text-white leading-tight"
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                <span className="block text-white/90">Hi, I&apos;m</span>
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #06b6d4 50%, #10b981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Amitesh Kumar
                </span>
              </h1>
            </motion.div>

            {/* Animated role */}
            <motion.div variants={itemVariants}>
              <div
                className="font-display text-xl md:text-2xl font-medium"
                style={{ color: "#94a3b8", letterSpacing: "-0.01em" }}
              >
                <span style={{ color: "#fff" }}>I build </span>
                <TypeAnimation
                  sequence={[
                    "Full Stack Web Apps", 1800,
                    "AI/ML Systems", 1800,
                    "Data Science Pipelines", 1800,
                    "Intelligent Interfaces", 1800,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg max-w-xl leading-relaxed"
              style={{ color: "#64748b" }}
            >
              Passionate developer at <span className="text-violet-400 font-medium">SVNIT Surat</span> crafting scalable web applications and intelligent ML systems. I combine elegant code with data-driven thinking to build{" "}
              <span className="text-cyan-400 font-medium">impactful, real-world solutions</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
              <Link href="/#contact" className="btn-primary" id="hero-hire-btn">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let&apos;s Talk
              </Link>
              <Link
                href="https://drive.google.com/file/d/18SgJIZ2pgatCdWGSmrI18O_hyXZODKaV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                id="hero-resume-btn"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#334155" }}>
                Find me on
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.05)" }} />
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "38px",
                      height: "38px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                      transition: "all 0.3s ease",
                    }}
                    className="hover:border-violet-500/50 hover:text-violet-400 hover:bg-violet-500/10 hover:-translate-y-1"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center gap-8"
          >
            {/* Profile image ring */}
            <div className="relative" style={{ width: "min(340px, 85vw)", aspectRatio: "1/1" }}>
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #10b981, #7c3aed)",
                  padding: "3px",
                }}
              />
              {/* Inner mask */}
              <div
                style={{
                  position: "absolute",
                  inset: "3px",
                  borderRadius: "50%",
                  background: "#050508",
                  zIndex: 1,
                }}
              />
              {/* Profile image */}
              <div
                style={{
                  position: "absolute",
                  inset: "8px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/hero-image.png"
                  alt="Amitesh Kumar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Glow behind */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)",
                  zIndex: 0,
                  filter: "blur(20px)",
                }}
              />

              {/* Floating badges */}
              {TECH_BADGES.slice(0, 4).map((badge, i) => {
                const angle = (i / 4) * 2 * Math.PI - Math.PI / 2;
                const r = 52;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 200 }}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                      background: badge.bg,
                      border: `1px solid ${badge.color}30`,
                      borderRadius: "100px",
                      padding: "5px 12px",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: badge.color,
                      whiteSpace: "nowrap",
                      backdropFilter: "blur(10px)",
                      boxShadow: `0 0 15px ${badge.color}20`,
                    }}
                    className="animate-float"
                    data-float-delay={i * 0.5}
                  >
                    {badge.label}
                  </motion.div>
                );
              })}
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-6"
            >
              {[
                { value: "450+", label: "LeetCode" },
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-display font-bold text-2xl"
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider mt-1" style={{ color: "#475569" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "#334155" }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "20px",
              height: "34px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "8px",
                borderRadius: "100px",
                background: "linear-gradient(to bottom, #7c3aed, #06b6d4)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const STATS = [
  {
    prefix: "",
    value: 450,
    postfix: "+",
    label: "LeetCode Problems",
    sublabel: "Solved",
    icon: "⚔️",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
  },
  {
    prefix: "",
    value: 10,
    postfix: "+",
    label: "GitHub Repos",
    sublabel: "Public Projects",
    icon: "📦",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    prefix: "",
    value: 3,
    postfix: "",
    label: "Hackathons",
    sublabel: "Participated",
    icon: "🏆",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
  },
  {
    prefix: "",
    value: 1551,
    postfix: "",
    label: "LeetCode Rating",
    sublabel: "Contest Score",
    icon: "⭐",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
  },
];

const StatCard = ({ stat, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.05, y: -6 }}
    style={{
      background: stat.bg,
      border: `1px solid ${stat.border}`,
      borderRadius: "20px",
      padding: "28px 24px",
      textAlign: "center",
      cursor: "default",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
    }}
  >
    {/* Glow */}
    <div
      style={{
        position: "absolute",
        bottom: "-30px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${stat.color}30, transparent)`,
        filter: "blur(20px)",
        pointerEvents: "none",
      }}
    />

    {/* Icon */}
    <div
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "14px",
        background: `${stat.color}15`,
        border: `1px solid ${stat.color}25`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.4rem",
        margin: "0 auto 16px",
      }}
    >
      {stat.icon}
    </div>

    {/* Number */}
    <div
      className="font-display font-bold flex items-center justify-center"
      style={{
        fontSize: "2.5rem",
        color: stat.color,
        letterSpacing: "-0.03em",
        lineHeight: 1,
        marginBottom: "8px",
        textShadow: `0 0 30px ${stat.color}60`,
      }}
    >
      {stat.prefix}
      {inView && (
        <AnimatedNumbers
          includeComma
          animateToNumber={stat.value}
          locale="en-US"
          configs={() => ({ mass: 1, friction: 80, tension: 200 })}
        />
      )}
      {stat.postfix}
    </div>

    {/* Label */}
    <div className="font-display font-bold text-white text-sm mb-1">{stat.label}</div>
    <div className="text-xs font-mono" style={{ color: "#475569" }}>{stat.sublabel}</div>
  </motion.div>
);

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">
            <span>04</span> — Track Record
          </span>
          <h2
            className="font-display font-bold mt-4"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #f8fafc, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            By the Numbers
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm" style={{ color: "#475569" }}>
            Milestones that reflect consistency, curiosity, and a drive to keep building.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* Journey highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: "20px",
            background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.06))",
            border: "1px solid rgba(16,185,129,0.15)",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "2rem" }}>🚀</div>
          <div>
            <div className="font-display font-bold text-white text-base mb-1">
              2+ Years of Building & Learning
            </div>
            <div className="text-sm" style={{ color: "#475569" }}>
              From web development to machine learning — constantly shipping, learning, and growing.
            </div>
          </div>
          <div className="ml-auto flex gap-3 flex-wrap">
            {["NIT Surat", "Full Stack", "ML / AI", "Open Source"].map((badge) => (
              <span
                key={badge}
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#94a3b8",
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;

"use client";
import React from "react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "🎨",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.2)",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    size: "large",
  },
  {
    id: "backend",
    label: "Backend",
    icon: "⚙️",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
    skills: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
    size: "medium",
  },
  {
    id: "aiml",
    label: "AI / ML",
    icon: "🧠",
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.2)",
    skills: ["Machine Learning", "Scikit-learn", "XGBoost", "CatBoost", "SMOTE", "Pandas", "NumPy", "Matplotlib", "DBSCAN"],
    size: "large",
  },
  {
    id: "databases",
    label: "Databases",
    icon: "🗄️",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL"],
    size: "medium",
  },
  {
    id: "languages",
    label: "Languages",
    icon: "💻",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.08)",
    border: "rgba(236,72,153,0.2)",
    skills: ["Python", "JavaScript", "C", "C++"],
    size: "small",
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: "🛠️",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    skills: ["Git", "GitHub", "Vercel", "Postman", "VS Code", "Leaflet.js", "Recharts"],
    size: "medium",
  },
];

const SkillCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.02, y: -4 }}
    style={{
      background: category.bg,
      border: `1px solid ${category.border}`,
      borderRadius: "20px",
      padding: "24px",
      transition: "all 0.3s ease",
      cursor: "default",
    }}
    className="hover:shadow-lg group"
  >
    {/* Header */}
    <div className="flex items-center gap-3 mb-4">
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: `${category.color}20`,
          border: `1px solid ${category.color}30`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.2rem",
          flexShrink: 0,
        }}
      >
        {category.icon}
      </div>
      <h3
        className="font-display font-bold text-white"
        style={{ letterSpacing: "-0.01em" }}
      >
        {category.label}
      </h3>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.08 }}
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "100px",
            fontSize: "0.75rem",
            fontWeight: 500,
            fontFamily: "'JetBrains Mono', monospace",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#94a3b8",
            transition: "all 0.2s ease",
            cursor: "default",
          }}
          className="group-hover:border-white/20 hover:!text-white hover:!border-white/30"
        >
          {skill}
        </motion.span>
      ))}
    </div>

    {/* Glow on hover */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "20px",
        background: `radial-gradient(ellipse at 50% 100%, ${category.color}08, transparent)`,
        pointerEvents: "none",
        opacity: 0,
        transition: "opacity 0.3s ease",
      }}
      className="group-hover:opacity-100"
    />
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
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
            <span>02</span> — Tech Stack
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
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: "#475569" }}>
            A curated stack of technologies I use to craft production-ready applications and intelligent systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {SKILL_CATEGORIES.map((category, i) => (
            <div
              key={category.id}
              style={{ position: "relative" }}
              className={
                category.size === "large" ? "md:col-span-1" : ""
              }
            >
              <SkillCard category={category} index={i} />
            </div>
          ))}
        </div>

        {/* LeetCode highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "20px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.07))",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "20px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div className="flex items-center gap-4">
            <span style={{ fontSize: "2rem" }}>⚔️</span>
            <div>
              <div className="font-display font-bold text-white text-lg">Competitive Programming</div>
              <div className="text-sm" style={{ color: "#64748b" }}>
                Consistent problem solver on LeetCode & GeeksforGeeks
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {[
              { value: "450+", label: "LeetCode Problems" },
              { value: "1551", label: "LeetCode Rating" },
              { value: "100+", label: "GFG Problems" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-display font-bold text-xl"
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs font-mono" style={{ color: "#475569" }}>{stat.label}</div>
              </div>
            ))}
          </div>
          <a
            href="https://leetcode.com/u/Amitesh_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
            style={{ padding: "9px 20px" }}
          >
            View Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

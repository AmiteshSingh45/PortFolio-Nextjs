"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EDUCATION = [
  {
    degree: "B.Tech — Computer Science & Engineering",
    institute: "Sardar Vallabhbhai National Institute of Technology, Surat",
    year: "2023 – 2027",
    badge: "SVNIT",
    color: "#7c3aed",
  },
  {
    degree: "Senior Secondary (PCM)",
    institute: "Sachchidanand Sinha College, Aurangabad, Bihar",
    year: "2021 – 2023",
    badge: "12th",
    color: "#06b6d4",
  },
  {
    degree: "Secondary Education",
    institute: "B. L. Indo-Anglian Public School, Aurangabad, Bihar",
    year: "2021",
    badge: "10th",
    color: "#10b981",
  },
];

const HIGHLIGHTS = [
  { icon: "🏆", text: "450+ LeetCode problems solved" },
  { icon: "💻", text: "100+ GeeksforGeeks problems" },
  { icon: "🚀", text: "3 Hackathons participated" },
  { icon: "⭐", text: "LeetCode Rating: 1551" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
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
            <span>01</span> — About Me
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
            The Developer Behind the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Image + highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Image card */}
            <motion.div variants={itemVariants} className="relative">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "4px",
                }}
              >
                <Image
                  src="/images/about-image.png"
                  alt="Amitesh Kumar"
                  width={500}
                  height={400}
                  className="rounded-xl w-full object-cover"
                  style={{ maxHeight: "340px", objectPosition: "top" }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(to top, rgba(5,5,8,0.8), transparent)",
                    borderRadius: "0 0 12px 12px",
                  }}
                />
              </div>
              {/* Floating badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  background: "rgba(5,5,8,0.8)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: "12px",
                  padding: "10px 16px",
                  zIndex: 10,
                }}
              >
                <div className="text-white font-display font-bold text-sm">SVNIT Surat</div>
                <div className="text-xs font-mono" style={{ color: "#a78bfa" }}>B.Tech CSE · 2023-27</div>
              </div>
            </motion.div>

            {/* Highlights grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -2 }}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "14px",
                    padding: "14px",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <span className="text-xl block mb-1">{h.icon}</span>
                  <span className="text-xs" style={{ color: "#94a3b8" }}>{h.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Story + Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Story */}
            <motion.div variants={itemVariants}>
              <h3
                className="font-display font-bold text-white mb-4 text-xl"
                style={{ letterSpacing: "-0.02em" }}
              >
                A curious builder at heart
              </h3>
              <div className="space-y-4" style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1rem" }}>
                <p>
                  I&apos;m a passionate developer who loves turning real-world challenges into elegant, functional code.
                  With deep experience in <span className="text-violet-400 font-medium">full-stack development</span> using JavaScript, React, Next.js, Node.js, MongoDB and PostgreSQL, I craft solutions that are both beautiful and performant.
                </p>
                <p>
                  Beyond web development, I&apos;m a dedicated <span className="text-cyan-400 font-medium">Data Science & Machine Learning enthusiast</span> — building predictive models, analyzing real-world datasets, and integrating intelligent systems with modern web interfaces.
                </p>
                <p>
                  I&apos;ve sharpened my problem-solving skills with <span className="text-emerald-400 font-medium">450+ LeetCode problems</span> and 100+ GeeksforGeeks challenges. I&apos;m passionate about writing clean, efficient code and continuously learning at the intersection of technology and intelligence.
                </p>
              </div>
            </motion.div>

            {/* Education Timeline */}
            <motion.div variants={itemVariants}>
              <h3
                className="font-display font-bold text-white mb-6 text-xl flex items-center gap-3"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(124,58,237,0.15)",
                    border: "1px solid rgba(124,58,237,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.85rem",
                  }}
                >
                  🎓
                </span>
                Education
              </h3>
              <div className="relative pl-6">
                {/* Timeline line */}
                <div className="timeline-line" />

                <div className="space-y-6">
                  {EDUCATION.map((edu, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="relative"
                    >
                      {/* Dot */}
                      <div
                        className="timeline-dot"
                        style={{
                          background: edu.color,
                          boxShadow: `0 0 10px ${edu.color}80`,
                          top: "8px",
                        }}
                      />
                      <div
                        style={{
                          background: "rgba(255,255,255,0.025)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          borderRadius: "14px",
                          padding: "16px 20px",
                          marginLeft: "12px",
                          transition: "all 0.3s ease",
                        }}
                        className="hover:border-violet-500/20 hover:bg-violet-500/5"
                      >
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <div className="text-white font-semibold text-sm mb-1">{edu.degree}</div>
                            <div className="text-xs" style={{ color: "#64748b" }}>{edu.institute}</div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span
                              className="font-mono text-xs px-2 py-0.5 rounded-full"
                              style={{
                                background: `${edu.color}15`,
                                color: edu.color,
                                border: `1px solid ${edu.color}30`,
                              }}
                            >
                              {edu.badge}
                            </span>
                            <span className="text-xs font-mono" style={{ color: "#475569" }}>
                              {edu.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
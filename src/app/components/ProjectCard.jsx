/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, techStack = [], featured = false }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const x = ((e.clientY - cy) / rect.height) * 10;
    const y = ((e.clientX - cx) / rect.width) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        height: "100%",
      }}
    >
      <div
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: hovered ? "transform 0.1s ease" : "transform 0.4s ease",
          transformStyle: "preserve-3d",
          height: "100%",
          borderRadius: "20px",
          background: hovered
            ? "linear-gradient(135deg, rgba(124,58,237,0.07), rgba(6,182,212,0.04))"
            : "rgba(255,255,255,0.025)",
          border: hovered
            ? "1px solid rgba(124,58,237,0.35)"
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: hovered
            ? "0 30px 60px rgba(0,0,0,0.6), 0 0 30px rgba(124,58,237,0.15)"
            : "0 10px 30px rgba(0,0,0,0.3)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: hovered
            ? "border 0.2s ease, background 0.2s ease, box-shadow 0.2s ease"
            : "all 0.4s ease",
        }}
      >
        {/* Featured badge */}
        {featured && (
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 10,
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              borderRadius: "100px",
              padding: "4px 12px",
              fontSize: "0.65rem",
              fontWeight: 700,
              fontFamily: "'JetBrains Mono', monospace",
              color: "white",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            ⭐ Featured
          </div>
        )}

        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "200px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={imgUrl}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.6s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered
                ? "linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.3) 60%, transparent 100%)"
                : "linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 80%)",
              transition: "background 0.3s ease",
            }}
          />

          {/* Quick action overlay on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                borderRadius: "100px",
                background: "rgba(5,5,8,0.85)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              className="hover:bg-violet-600/60 hover:border-violet-500/50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 18px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "white",
                fontSize: "0.8rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
              className="hover:shadow-violet-500/50"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}>
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live Demo
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
          <h3
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "1rem", letterSpacing: "-0.01em" }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#64748b",
              lineHeight: 1.7,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {description}
          </p>

          {/* Tech badges */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                    background: "rgba(124,58,237,0.1)",
                    color: "#a78bfa",
                    border: "1px solid rgba(124,58,237,0.2)",
                  }}
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span
                  style={{
                    padding: "3px 10px",
                    borderRadius: "100px",
                    fontSize: "0.68rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    background: "rgba(255,255,255,0.04)",
                    color: "#475569",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  +{techStack.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer links */}
          <div className="flex gap-3 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#94a3b8",
                textDecoration: "none",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "12px", height: "12px" }}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Source Code
            </a>
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-medium transition-all duration-200"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(79,70,229,0.15))",
                border: "1px solid rgba(124,58,237,0.3)",
                color: "#a78bfa",
                textDecoration: "none",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "12px", height: "12px" }}>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Live Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

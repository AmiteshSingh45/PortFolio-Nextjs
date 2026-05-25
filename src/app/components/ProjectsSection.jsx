"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A fast and responsive portfolio website built with Next.js, showcasing projects, skills, and experience in a clean and modern UI. It includes a contact form that uses Nodemailer to send responses via form submission.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/PortFolio-Nextjs",
    previewUrl: "https://amitesh-lyart.vercel.app/",
    featured: false,
  },
  {
    id: 2,
    title: "Cupcakery — Full Stack Bakery Platform",
    description: "Bindi Cupcakery is a full-stack bakery website built with Next.js, Node.js, Express, and MongoDB. Features a modern UI with Tailwind CSS, user authentication, order management, real-time order tracking via Twilio, and a seamless experience for browsing and ordering cupcakes.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/Cupcakery",
    previewUrl: "https://cupcakery.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "BlackSpot Detection Pipeline",
    description: "A production-grade full-stack ML platform identifying high-risk highway accident zones using geospatial analytics and adaptive ML. Processes accident datasets through a 5-stage pipeline using DBSCAN spatial clustering, percentile-based thresholds, and MinMaxScaler risk scoring. Built with FastAPI microservices and Next.js dashboard with interactive Leaflet maps.",
    image: "/images/projects/blackspotDetection.jpg",
    tag: ["All", "AI/ML", "Full Stack"],
    gitUrl: "https://github.com/AmiteshSingh45/BlackSpot-Detection",
    previewUrl: "https://black-spot-detection.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Student Performance Prediction",
    description: "An end-to-end ML pipeline predicting student academic performance based on demographic and behavioral features. Trained multiple regression models (Linear, Decision Tree, Random Forest, XGBoost, CatBoost) with RMSE, MAE, R² evaluation. Follows modular architecture with separate training and prediction pipelines. Deployed with a Next.js frontend for real-time predictions.",
    image: "/images/projects/studentPerformance.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/AmiteshSingh45/DSPROJ-SETUP",
    previewUrl: "https://scorepredictor-sigma.vercel.app/",
    featured: false,
  },
  {
    id: 5,
    title: "PowerPlayMart — E-commerce App",
    description: "PowerPlay Mart is a full-featured e-commerce application for sports equipment, built using the MERN stack (MongoDB, Express, React, Node.js). Includes user authentication, product management, secure checkout, order tracking, and an intuitive UI for a smooth online shopping experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/Powerplay-Mart",
    previewUrl: "/",
    featured: false,
  },
  {
    id: 6,
    title: "Color Detection Robot",
    description: "A Color Detection Robot using an IP camera for image capture, removes background using AI, detects the dominant color (Red, Yellow, or Blue), and sends a signal to an Arduino Uno to perform robotic actions like sorting.",
    image: "/images/projects/colorDetectionRobo.jpg",
    tag: ["All", "AI/ML"],
    gitUrl: "https://github.com/AmiteshSingh45/colors-detection",
    previewUrl: "http://youtube.com/watch?v=AUOujnUSj4w&feature=youtu.be",
    featured: false,
  },
  {
    id: 7,
    title: "ASD Prediction System",
    description: "A machine learning–powered web platform for Autism Spectrum Disorder screening and awareness. Applied SMOTE balancing, trained Decision Tree, Random Forest, and XGBoost models with RandomizedSearchCV hyperparameter tuning, achieving 93% accuracy. Integrated with a Next.js web interface for real-time ASD prediction.",
    image: "/images/projects/asdProject.jpg",
    tag: ["All", "Web", "AI/ML"],
    gitUrl: "https://github.com/AmiteshSingh45/Autism-frontend",
    previewUrl: "https://autism-mu.vercel.app/",
    featured: true,
  },
];

const FILTER_TABS = ["All", "Web", "AI/ML", "Full Stack"];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((project) => {
    const matchesTag = project.tag.includes(activeTag);
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-4 inline-flex">
            <span>03</span> — Portfolio
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
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: "#475569" }}>
            A selection of things I&apos;ve built — from full-stack web platforms to production ML systems.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10"
        >
          {/* Filter tabs */}
          <div
            style={{
              display: "flex",
              gap: "4px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "100px",
              padding: "4px",
            }}
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTag(tab)}
                style={{
                  position: "relative",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  color: activeTag === tab ? "white" : "#64748b",
                  background: activeTag === tab
                    ? "linear-gradient(135deg, #7c3aed, #4f46e5)"
                    : "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: activeTag === tab ? "0 0 15px rgba(124,58,237,0.4)" : "none",
                }}
              >
                {tab}
                {activeTag === tab && (
                  <motion.span
                    layoutId="project-filter-indicator"
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "100px",
                      background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      zIndex: -1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative" style={{ width: "min(280px, 100%)" }}>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "100px",
                padding: "9px 16px 9px 38px",
                color: "#f8fafc",
                fontSize: "0.8rem",
                fontFamily: "'Inter', sans-serif",
                outline: "none",
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(124,58,237,0.5)";
                e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.boxShadow = "none";
              }}
            />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                color: "#475569",
                pointerEvents: "none",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "flex" }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  techStack={project.tag.filter((t) => t !== "All")}
                  featured={project.featured}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
            style={{ color: "#475569" }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🔍</div>
            <p className="font-display font-bold text-white text-xl">No projects found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter</p>
          </motion.div>
        )}

        {/* Count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="text-xs font-mono" style={{ color: "#334155" }}>
            Showing {filteredProjects.length} of {projectsData.length} projects
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

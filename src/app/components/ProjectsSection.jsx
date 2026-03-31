"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A fast and responsive portfolio website built with Next.js, showcasing my projects, skills, and experience in a clean and modern UI. It includes a contact form that uses Nodemailer to send responses via form submission.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/PortFolio-Nextjs",
    previewUrl: "https://amitesh-lyart.vercel.app/",
  },
  {
    id: 2,
    title: "Cupcakery Website",
    description: "Bindi Cupcakery is a full-stack bakery website built with Next.js, Node.js, Express, and MongoDB. It features a modern UI with Tailwind CSS, user authentication, order management, real-time order tracking via Twilio, and a seamless experience for browsing, reviewing, and ordering cupcakes.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/Cupcakery",
    previewUrl: "https://cupcakery.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application - PowerPlayMart",
    description: "PowerPlay Mart is a full-featured e-commerce application for sports equipment, built using the MERN stack (MongoDB, Express, React, Node.js). It includes user authentication, product management, secure checkout, order tracking, and an intuitive UI for a smooth online shopping experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/Powerplay-Mart",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Color Detection Robot",
    description: "This project is a Color Detection Robot that uses an IP camera for image capture, removes the background using AI, detects the dominant color (Red, Yellow, or Blue), and sends a signal to an Arduino Uno to perform robotic actions like sorting..",
    image: "/images/projects/colorDetectionRobo.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AmiteshSingh45/colors-detection",
    previewUrl: "http://youtube.com/watch?v=AUOujnUSj4w&feature=youtu.be",
  },
  {
  id: 5,
  title: "Autism Spectrum Disorder (ASD) Prediction System",
  description: "A machine learning–powered web platform for ASD screening and awareness. The project involves preprocessing ASD data using encoding, handling outliers, and analyzing class imbalance. Applied SMOTE for balancing and trained multiple models including Decision Tree, Random Forest, and XGBoost with cross-validation. Performed hyperparameter tuning using RandomizedSearchCV and selected the best-performing model achieving 93% accuracy. Integrated the trained ML model with a Next.js web interface for real-time ASD prediction and user interaction.",
  image: "/images/projects/asdProject.jpg",
  tag: ["All", "Web", "AI/ML"],
  gitUrl: "https://github.com/AmiteshSingh45/Autism-frontend",
  previewUrl: "https://autism-mu.vercel.app/",
},
{
  id: 6,
  title: "Student Performance Prediction System",
  description: "An end-to-end machine learning pipeline designed to predict student academic performance based on demographic and behavioral features. The project includes data ingestion from MySQL, data preprocessing, feature engineering, and exploratory data analysis (EDA). Multiple regression models such as Linear Regression, Decision Tree, Random Forest, Gradient Boosting, XGBoost, and CatBoost were trained and evaluated using metrics like RMSE, MAE, and R² score. The best-performing model was selected and saved for inference. The system follows a modular architecture with separate pipelines for training and prediction, making it scalable and production-ready. Future integration includes deployment with a Next.js frontend for real-time predictions.",
  image: "/images/projects/studentPerformance.jpg",
  tag: ["All", "AI/ML"],
  gitUrl: "https://github.com/AmiteshSingh45/DSPROJ-SETUP",
  previewUrl: "https://scorepredictor-sigma.vercel.app/",
}
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-4 py-6 mb-8">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                techStack={project.tag.filter(tag => tag !== "All")}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;

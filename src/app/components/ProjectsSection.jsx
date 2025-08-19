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
    previewUrl: "/",
  },
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

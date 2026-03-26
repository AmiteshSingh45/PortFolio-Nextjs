"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">

        {/* Development */}
        <div>
          <h3 className="text-lg font-semibold mb-2">💻 Development</h3>
          <div className="flex flex-wrap gap-2">
            {["Node.js","Express","React","Next.js","JavaScript"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-indigo-600 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Data Science & ML */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🧠 Data Science & ML</h3>
          <div className="flex flex-wrap gap-2">
            {["Machine Learning","Data Science","Scikit-learn","XGBoost","Pandas","NumPy","Data Analysis","Data Visualization"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-indigo-600 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🗄️ Databases</h3>
          <div className="flex flex-wrap gap-2">
            {["MongoDB","PostgreSQL","SQL"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-indigo-600 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-lg font-semibold mb-2">⚙️ Languages</h3>
          <div className="flex flex-wrap gap-2">
            {["C","C++","Python"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-gray-800 text-white rounded-full text-sm hover:bg-indigo-600 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li>Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat (2023–2027)</li>
        <li>Sachchidanand Sinha College, Ramdih, Aurangabad, Bihar (2021–23)</li>
        <li>B. L. Indo-Anglian Public School, Aurangabad, Bihar 2021</li>
      </ul>
    ),
  },
  {
    title: "LeetCode",
    id: "leetcode",
    content: (
      <ul className="list-disc pl-2 space-y-1">
        <li>Solved 450+ problems on LeetCode</li>
        <li>Earned multiple achievement badges</li>
        <li>Current rating: 1551</li>
        <li>
          Profile:{" "}
          <a
            href="https://leetcode.com/u/Amitesh_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            https://leetcode.com/u/Amitesh_/
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="About section image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a curious and driven developer who loves turning real-world challenges into functional, elegant code. With hands-on experience in building full-stack applications using JavaScript, React, Next.js, Node.js, MongoDB, and PostgreSQL, I enjoy crafting clean and user-friendly solutions. I&apos;ve solved over 450 problems on LeetCode and 100+ problems on GeeksforGeeks, sharpening my algorithmic thinking and problem-solving skills. I&apos;m also a passionate Data Science and Machine Learning enthusiast, with experience in building predictive models and working with real-world datasets. I&apos;m passionate about building performant web applications and leveraging data-driven approaches to create meaningful digital experiences.
          </p>

          <div className="flex flex-row justify-start mt-8 space-x-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("leetcode")}
              active={tab === "leetcode"}
            >
              LeetCode
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
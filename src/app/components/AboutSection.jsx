"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
  <li>Node.js</li>
  <li>Express</li>
  <li>PostgreSQL</li>
  <li>MongoDB</li>
  <li>JavaScript</li>
  <li>React</li>
  <li>Next.js</li>
  <li>SQL</li>
  <li>C</li>
  <li>C++</li>
  <li>Python</li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <ul className="list-disc pl-4 space-y-1">
  <li>Sardar Vallabhbhai National Institute of Technology, Surat, Gujarat   (2023-2027)</li>
  <li>B. L. Indo-Anglian Public School, Aurangabad, Bihar</li>
</ul>
      </ul>
    ),
  },
  {
  title: "LeetCode",
  id: "leetcode",
  content: (
    <ul className="list-disc pl-2">
      <li>Solved 300+ problems on LeetCode</li>
      <li>Earned many achievement badges</li>
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
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a curious and driven developer who loves turning real-world challenges into functional, elegant code. With hands-on experience in building full-stack applications using JavaScript, React, Next.js, Node.js, MongoDB, and PostgreSQL, I enjoy crafting clean and user-friendly solutions. I’ve solved over 300 problems on LeetCode, sharpening my algorithmic thinking, and regularly participate in Codeforces contests to push my limits in competitive programming. I'm passionate about building performant web applications and constantly exploring new tools and technologies to create meaningful digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
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

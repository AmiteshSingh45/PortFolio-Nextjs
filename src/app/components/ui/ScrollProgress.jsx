"use client";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="scroll-progress"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #7c3aed, #06b6d4, #10b981)",
        zIndex: 9999,
        transition: "width 0.1s linear",
        boxShadow: "0 0 10px rgba(124, 58, 237, 0.6)",
      }}
    />
  );
};

export default ScrollProgress;

"use client";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

// Dynamically import heavy client-side components
const LoadingScreen = dynamic(() => import("./components/ui/LoadingScreen"), { ssr: false });
const CustomCursor = dynamic(() => import("./components/ui/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("./components/ui/ScrollProgress"), { ssr: false });
const ParticleBackground = dynamic(() => import("./components/ui/ParticleBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      {/* Global overlays */}
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />

      {/* Background ambient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      <main
        className="flex min-h-screen flex-col relative"
        style={{ background: "#050508" }}
      >
        <Navbar />
        <HeroSection />

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        <AboutSection />

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.15), transparent)",
          }}
        />

        <SkillsSection />

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        <ProjectsSection />

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.15), transparent)",
          }}
        />

        <AchievementsSection />

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
          }}
        />

        <EmailSection />

        <Footer />
      </main>
    </>
  );
}

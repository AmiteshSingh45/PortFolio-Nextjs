"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if already shown this session
    const shown = sessionStorage.getItem("loadingShown");
    if (shown) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("loadingShown", "true");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            background: "#050508",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Animated logo/name */}
          <div style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Amitesh Kumar
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.85rem",
                color: "#475569",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginTop: "8px",
              }}
            >
              Full Stack Dev · AI Engineer
            </motion.div>
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              width: "200px",
              height: "1px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "100px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
                borderRadius: "100px",
                boxShadow: "0 0 10px rgba(124,58,237,0.8)",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

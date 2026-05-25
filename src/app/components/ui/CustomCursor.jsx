"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.1;
      pos.current.y += (target.current.y - pos.current.y) * 0.1;
      cursor.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterInteractive = () => {
      cursor.style.width = "48px";
      cursor.style.height = "48px";
      cursor.style.borderColor = "rgba(167, 139, 250, 0.8)";
      cursor.style.backgroundColor = "rgba(124, 58, 237, 0.1)";
    };

    const onLeaveInteractive = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.borderColor = "rgba(124, 58, 237, 0.5)";
      cursor.style.backgroundColor = "transparent";
    };

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor]');
    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    document.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      interactiveEls.forEach(el => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(124, 58, 237, 0.5)",
          backgroundColor: "transparent",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Fast dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          boxShadow: "0 0 10px rgba(124,58,237,0.8)",
        }}
      />
    </>
  );
};

export default CustomCursor;

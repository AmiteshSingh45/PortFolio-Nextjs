"use client";
import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouse = { x: width / 2, y: height / 2 };
    let animId;

    const NUM_PARTICLES = 80;
    const particles = [];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        const colors = ["124,58,237", "6,182,212", "16,185,129", "167,139,250"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = Math.random() * 200 + 100;
        this.age = 0;
      }
      update() {
        // Mouse repulsion
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          this.vx += (dx / dist) * force * 0.02;
          this.vy += (dy / dist) * force * 0.02;
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
        this.x += this.vx;
        this.y += this.vy;
        this.age++;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height || this.age > this.life) {
          this.reset();
        }
      }
      draw() {
        const fadeIn = Math.min(this.age / 30, 1);
        const fadeOut = Math.min((this.life - this.age) / 30, 1);
        const alpha = this.opacity * fadeIn * fadeOut;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle());
    }

    // Draw connections
    const drawConnections = () => {
      const maxDist = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawConnections();
      particles.forEach(p => { p.update(); p.draw(); });
      animId = requestAnimationFrame(animate);
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
};

export default ParticleBackground;

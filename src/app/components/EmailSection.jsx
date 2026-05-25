"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "@AmiteshSingh45",
    href: "https://github.com/AmiteshSingh45",
    color: "#f8fafc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Amitesh Kumar",
    href: "https://www.linkedin.com/in/amitesh-kumar-251188282/",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    handle: "@Amitesh_",
    href: "https://leetcode.com/u/Amitesh_/",
    color: "#FFA116",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setEmailSubmitted(true);
      } else {
        throw new Error(resData.error || "Failed to send email.");
      }
    } catch (err) {
      console.error("Send error:", err);
      setError("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient blob */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4 inline-flex">
            <span>05</span> — Contact
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
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm" style={{ color: "#475569" }}>
            Open to new opportunities, collaborations, and interesting conversations.
            My inbox is always open — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div>
              <h3
                className="font-display font-bold text-white text-2xl mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                Ready to connect?
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                Whether you have a project idea, a job opportunity, or just want to say hi —
                I&apos;d love to hear from you. Let&apos;s create something amazing together.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "16px 20px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  className="hover:border-violet-500/30 hover:bg-violet-500/5 group"
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: `${social.color}12`,
                      border: `1px solid ${social.color}25`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: social.color,
                      flexShrink: 0,
                    }}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{social.label}</div>
                    <div className="font-mono text-xs" style={{ color: "#475569" }}>{social.handle}</div>
                  </div>
                  <div className="ml-auto" style={{ color: "#334155" }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 group-hover:text-violet-400 transition-colors">
                      <path d="M7 17l9.2-9.2M17 17V7H7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Email directly */}
            <div
              style={{
                padding: "16px 20px",
                borderRadius: "16px",
                background: "rgba(124,58,237,0.06)",
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <div className="flex items-center gap-3">
                <span style={{ fontSize: "1.3rem" }}>📬</span>
                <div>
                  <div className="text-white font-medium text-sm">Drop me an email</div>
                  <div className="font-mono text-xs" style={{ color: "#a78bfa" }}>
                    amiteshsinghmot@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            {emailSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  height: "100%",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.2)",
                  borderRadius: "24px",
                  padding: "48px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "4rem" }}>✅</div>
                <h3 className="font-display font-bold text-white text-2xl">Message Sent!</h3>
                <p className="text-sm" style={{ color: "#64748b", maxWidth: "300px" }}>
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setEmailSubmitted(false)}
                  className="btn-outline text-sm mt-4"
                  style={{ padding: "10px 24px" }}
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "24px",
                  padding: "36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3
                  className="font-display font-bold text-white text-xl"
                  style={{ letterSpacing: "-0.02em", marginBottom: "4px" }}
                >
                  Send a message
                </h3>

                {/* Email */}
                <div className="input-wrapper">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Your Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="contact-email"
                    required
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="input-wrapper">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Subject *
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="contact-subject"
                    required
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div className="input-wrapper">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    required
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={5}
                    style={{ resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                {/* Error */}
                {error && (
                  <div
                    style={{
                      padding: "12px 16px",
                      borderRadius: "12px",
                      background: "rgba(239,68,68,0.1)",
                      border: "1px solid rgba(239,68,68,0.2)",
                      color: "#f87171",
                      fontSize: "0.85rem",
                    }}
                  >
                    ⚠️ {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{
                    padding: "14px",
                    fontSize: "0.95rem",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

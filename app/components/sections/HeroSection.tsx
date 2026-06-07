"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("../3d/HeroScene"), { ssr: false });

const TYPING_TEXTS = [
  "Java Backend Developer",
  "Spring Boot Architect",
  "Microservices Engineer",
  "Cloud-Native Builder",
];

function TypedText() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPING_TEXTS[textIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIndex < target.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
    }
    setCurrentText(target.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <span
      style={{
        background: "linear-gradient(135deg,#00d4ff,#7b2fff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {currentText}
      <span
        style={{
          WebkitTextFillColor: "#00d4ff",
          animation: "none",
          opacity: Math.sin(Date.now() / 500) > 0 ? 1 : 0,
        }}
      >
        |
      </span>
    </span>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#040509",
      }}
    >
      {/* 3D canvas */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "all",
        }}
      >
        {mounted && <HeroScene />}
      </div>

      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, rgba(4,5,9,0) 0%, rgba(4,5,9,0.65) 65%, rgba(4,5,9,0.95) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Grid */}
      <div
        className="bg-grid"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        className="section-inner"
        style={{
          paddingTop: "8rem",
          paddingBottom: "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00d4ff",
              boxShadow: "0 0 10px #00d4ff",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8892b0",
            }}
          >
            Available for opportunities
          </span>
        </motion.div>

        {/* Hi label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#00d4ff",
            marginBottom: "0.75rem",
          }}
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: "1.5rem" }}
        >
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem,8vw,7rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#eef2ff",
            }}
          >
            Vishwajeet
          </h1>
          <h1
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem,8vw,7rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "#eef2ff",
              position: "relative",
              display: "inline-block",
            }}
          >
            Singh Rathore
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1.2,
                delay: 1.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                position: "absolute",
                bottom: "-6px",
                left: 0,
                height: "3px",
                background: "linear-gradient(90deg,#00d4ff,#7b2fff)",
                borderRadius: "2px",
              }}
            />
          </h1>
        </motion.div>

        {/* Typed subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "clamp(0.85rem,2vw,1.1rem)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8892b0",
            marginBottom: "1.5rem",
            height: "1.8rem",
          }}
        >
          <TypedText />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{
            color: "#8892b0",
            fontSize: "1rem",
            lineHeight: 1.8,
            maxWidth: "520px",
            marginBottom: "2.5rem",
          }}
        >
          Crafting high-performance, scalable backend systems with Java &amp;
          Spring Boot. Specialised in microservices architecture, cloud
          deployments, and building APIs that power modern applications.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary"
            style={{ padding: "0.9rem 2.2rem" }}
          >
            View Projects
          </button>
          <a
            href="/vishwajeet_resume.pdf"
            download
            className="btn-outline"
            style={{ textDecoration: "none" }}
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8892b0",
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(180deg,#00d4ff,transparent)",
            }}
          />
        </motion.div>
      </div>

      {/* Corner info — desktop only */}
      <div className="hero-corner-info">
        <span>INIT_SEQUENCE</span>
        <span>JAVA_DEV.exe</span>
        <span>STATUS: ONLINE</span>
      </div>
    </section>
  );
}

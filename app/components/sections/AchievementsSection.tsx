"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  {
    value: 10,
    suffix: "+",
    label: "Projects Completed",
    desc: "Production-ready applications shipped",
    color: "#00d4ff",
    icon: "🚀",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies Learned",
    desc: "From Java to Kubernetes & beyond",
    color: "#7b2fff",
    icon: "⚙️",
  },
  {
    value: 600,
    suffix: "+",
    label: "DSA Problems Solved",
    desc: "LeetCode & competitive programming",
    color: "#ff6b35",
    icon: "🧠",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years of Journey",
    desc: "From Frontend to Backend Engineering",
    color: "#00d4ff",
    icon: "📈",
  },
];

const badges = [
  "Spring Boot Certified Mindset",
  "Microservices Architect",
  "Cloud Native Enthusiast",
  "Clean Code Advocate",
  "Docker Container Expert",
  "API Design Pro",
  "Agile Practitioner",
  "DSA Problem Solver",
];

function Counter({
  value,
  suffix,
  color,
  inView,
}: {
  value: number;
  suffix: string;
  color: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60,
      dur = 1800;
    const inc = value / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= value) {
        setCount(value);
        clearInterval(t);
      } else setCount(Math.floor(cur));
    }, dur / steps);
    return () => clearInterval(t);
  }, [inView, value]);
  return (
    <span
      style={{
        fontFamily: "'Syne',sans-serif",
        fontWeight: 800,
        fontSize: "clamp(2.8rem,6vw,4.5rem)",
        lineHeight: 1,
        color,
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section
      id="achievements"
      ref={ref}
      style={{
        minHeight: "auto",
        position: "relative",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "7rem",
        background:
          "linear-gradient(180deg,#040509 0%,#060a12 50%,#040509 100%)",
      }}
    >
      <div
        className="bg-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />
      <div
        className="section-blob section-blob-medium"
        style={{
          position: "absolute",
          top: "25%",
          left: "20%",
          background: "rgba(0,212,255,0.05)",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="section-blob section-blob-medium"
        style={{
          position: "absolute",
          bottom: "25%",
          right: "20%",
          background: "rgba(123,47,255,0.05)",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span
            className="label-mono"
            style={{ textAlign: "center", display: "block" }}
          >
            06. Stats
          </span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            By the <span className="gradient-text">Numbers</span>
          </h2>
          <div
            className="section-divider"
            style={{
              marginTop: "1.25rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </motion.div>

        {/* Stats grid */}
        <div className="section-grid-4" style={{ marginBottom: "4rem" }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 36, scale: 0.92 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.14,
                ease: [0.23, 1, 0.32, 1],
              }}
              style={{
                background: "rgba(7,11,20,0.65)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(0,212,255,0.1)",
                padding: "2rem 1.5rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.35s, transform 0.35s",
              }}
              className="glass-card"
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <div style={{ marginBottom: "0.5rem" }}>
                <Counter
                  value={item.value}
                  suffix={item.suffix}
                  color={item.color}
                  inView={inView}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  color: "#eef2ff",
                  marginBottom: "0.4rem",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.65rem",
                  color: "#8892b0",
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "6px",
                  right: "6px",
                  width: "14px",
                  height: "14px",
                  borderRight: `1px solid ${item.color}`,
                  borderBottom: `1px solid ${item.color}`,
                  opacity: 0.25,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Scrolling badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ overflow: "hidden", marginBottom: "4rem" }}
        >
          <div className="marquee-track" style={{ gap: "0.75rem" }}>
            {[...badges, ...badges].map((b, i) => (
              <div
                key={i}
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "0.45rem 1rem",
                  border: "1px solid rgba(0,212,255,0.18)",
                  color: "#8892b0",
                  flexShrink: 0,
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            background: "rgba(7,11,20,0.65)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(0,212,255,0.1)",
            padding: "3.5rem 3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,#00d4ff,transparent)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1px",
              background:
                "linear-gradient(90deg,transparent,#7b2fff,transparent)",
            }}
          />
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#00d4ff",
              marginBottom: "1.5rem",
            }}
          >
            Mission Statement
          </div>
          <blockquote
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.4rem,3vw,2rem)",
              color: "#eef2ff",
              lineHeight: 1.45,
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            "Build systems that scale, code that lasts, and{" "}
            <span className="gradient-text">APIs that developers love</span> to
            use."
          </blockquote>
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.75rem",
              color: "#8892b0",
              marginTop: "1.5rem",
            }}
          >
            — Vishwajeet Singh Rathore
          </div>
        </motion.div>
      </div>
    </section>
  );
}

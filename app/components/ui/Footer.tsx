"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        padding: "2.5rem 0",
        borderTop: "1px solid rgba(0,212,255,0.07)",
        background: "#040509",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              background: "linear-gradient(135deg,#00d4ff,#7b2fff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            VSR
          </span>
          <span
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              color: "#8892b0",
            }}
          >
            /dev
          </span>
        </div>
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.68rem",
            color: "#8892b0",
            textAlign: "center",
          }}
        >
          Designed &amp; Built by{" "}
          <span style={{ color: "#00d4ff" }}>Vishwajeet Singh Rathore</span> ·{" "}
          {new Date().getFullYear()}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontFamily: "'DM Mono',monospace",
            fontSize: "0.68rem",
            color: "#8892b0",
            background: "none",
            border: "none",
            cursor: "none",
            transition: "color 0.25s",
          }}
        >
          Back to top
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↑
          </motion.span>
        </button>
      </div>
    </footer>
  );
}

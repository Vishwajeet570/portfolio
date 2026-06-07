"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
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
            className="footer-dev"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.62rem",
              color: "#8892b0",
            }}
          >
            /dev
          </span>
        </div>

        <div className="footer-center">
          Designed &amp; Built by{" "}
          <span className="footer-name">Vishwajeet Singh Rathore</span> ·{" "}
          {new Date().getFullYear()}
        </div>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="footer-top"
        >
          Back to top
          <motion.span
            className="footer-arrow"
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

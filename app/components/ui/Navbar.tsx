"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          transition: "all 0.4s ease",
          background: scrolled ? "rgba(7,11,20,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0,212,255,0.08)"
            : "1px solid transparent",
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
            height: "70px",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => scrollTo("#hero", "Home")}
            style={{ textDecoration: "none", cursor: "none" }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
            >
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "1.25rem",
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
                  fontSize: "0.65rem",
                  color: "#8892b0",
                  letterSpacing: "0.1em",
                }}
              >
                /dev
              </span>
            </motion.div>
          </a>

          {/* Desktop nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href, item.label)}
                className={`nav-link ${active === item.label ? "active" : ""}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                <span
                  style={{
                    color: "#00d4ff",
                    marginRight: "0.25rem",
                    fontSize: "0.6rem",
                  }}
                >
                  0{i + 1}.
                </span>
                {item.label}
              </motion.button>
            ))}
            <motion.a
              href="/vishwajeet_resume.pdf"
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              whileHover={{ scale: 1.04 }}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0.5rem 1.1rem",
                border: "1px solid #00d4ff",
                color: "#00d4ff",
                textDecoration: "none",
                transition: "background 0.3s",
                cursor: "none",
              }}
            >
              Resume
            </motion.a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              flexDirection: "column",
              gap: "5px",
              background: "none",
              border: "none",
              cursor: "none",
              padding: "4px",
            }}
            aria-label="Menu"
            className="hamburger-btn"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{
                width: "22px",
                height: "1px",
                background: "#00d4ff",
                display: "block",
              }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{
                width: "14px",
                height: "1px",
                background: "#8892b0",
                display: "block",
              }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{
                width: "22px",
                height: "1px",
                background: "#00d4ff",
                display: "block",
              }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 8999,
              background: "rgba(7,11,20,0.97)",
              backdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "3rem 2.5rem",
              gap: "2rem",
            }}
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href, item.label)}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  color: "#eef2ff",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.8rem",
                    color: "#00d4ff",
                    marginRight: "0.75rem",
                  }}
                >
                  0{i + 1}.
                </span>
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`.hamburger-btn { display: none; } @media (max-width: 768px) { .hamburger-btn { display: flex !important; } nav > div > div:nth-child(2) { display: none !important; } }`}</style>
    </>
  );
}

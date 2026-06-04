"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const socials = [
  {
    name: "LinkedIn",
    handle: "vishwajeet-singh-rathore",
    href: "https://linkedin.com/in/vishwajeet-singh-rathore",
    color: "#0a66c2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "vishwajeet-rathore",
    href: "https://github.com",
    color: "#eef2ff",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "vishwajeet@example.com",
    href: "mailto:vishwajeet@example.com",
    color: "#ff6b35",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: "100vh",
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
        style={{ position: "absolute", inset: 0, opacity: 0.45 }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "20%",
          width: "450px",
          height: "450px",
          background: "rgba(123,47,255,0.05)",
          borderRadius: "50%",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          right: "20%",
          width: "450px",
          height: "450px",
          background: "rgba(0,212,255,0.05)",
          borderRadius: "50%",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span
            className="label-mono"
            style={{ display: "block", textAlign: "center" }}
          >
            07. Contact
          </span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <div
            className="section-divider"
            style={{
              marginTop: "1.25rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p
            style={{
              color: "#8892b0",
              fontSize: "0.9rem",
              marginTop: "1.25rem",
              maxWidth: "460px",
              margin: "1.25rem auto 0",
            }}
          >
            Open to new opportunities, collaborations, and interesting backend
            challenges.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3.5rem",
          }}
        >
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              style={{
                background: "rgba(7,11,20,0.65)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(0,212,255,0.14)",
                padding: "2.5rem",
                position: "relative",
              }}
            >
              <div className="corner-tl" />
              <div className="corner-tr" />
              <div className="corner-bl" />
              <div className="corner-br" />

              <h3
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#eef2ff",
                  marginBottom: "1.75rem",
                }}
              >
                Send a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.85rem",
                  }}
                >
                  {[
                    {
                      key: "name",
                      label: "Name",
                      type: "text",
                      placeholder: "John Doe",
                    },
                    {
                      key: "email",
                      label: "Email",
                      type: "email",
                      placeholder: "john@example.com",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#8892b0",
                          display: "block",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, [f.key]: e.target.value }))
                        }
                        className="form-input"
                        style={{ padding: "0.8rem 1rem" }}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8892b0",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, subject: e.target.value }))
                    }
                    className="form-input"
                    style={{ padding: "0.8rem 1rem" }}
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8892b0",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                    className="form-input"
                    style={{ padding: "0.8rem 1rem", resize: "none" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending || sent}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "none",
                    background: sent
                      ? "linear-gradient(135deg,#00ff88,#00d4ff)"
                      : "linear-gradient(135deg,#00d4ff,#7b2fff)",
                    color: "#040509",
                    transition: "opacity 0.3s, transform 0.3s",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  {sent
                    ? "✓ Message Sent!"
                    : sending
                      ? "Transmitting..."
                      : "Send Message →"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {/* Status card */}
            <div
              style={{
                background: "rgba(7,11,20,0.65)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(0,212,255,0.14)",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  marginBottom: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#00ff88",
                    boxShadow: "0 0 10px #00ff88",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.72rem",
                    color: "#00ff88",
                    letterSpacing: "0.12em",
                  }}
                >
                  Available for opportunities
                </span>
              </div>
              <p
                style={{
                  color: "#8892b0",
                  fontSize: "0.85rem",
                  lineHeight: 1.7,
                }}
              >
                Currently open to full-time Java Backend Developer roles,
                interesting freelance projects, and technical collaborations.
                Response time: within 24 hours.
              </p>
            </div>

            {/* Social links */}
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 28 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  background: "rgba(7,11,20,0.65)",
                  backdropFilter: "blur(24px)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  padding: "1.1rem 1.25rem",
                  textDecoration: "none",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "none",
                }}
                className="glass-card"
              >
                <div style={{ color: s.color, flexShrink: 0 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#eef2ff",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.65rem",
                      color: "#8892b0",
                    }}
                  >
                    {s.handle}
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8892b0"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}

            {/* Resume download */}
            <a
              href="/resume.pdf"
              download
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                padding: "1rem",
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#00d4ff",
                border: "1px solid rgba(0,212,255,0.35)",
                textDecoration: "none",
                transition: "background 0.3s, border-color 0.3s",
                background: "transparent",
                cursor: "none",
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timeline = [
  {
    year: "2025 – Present",
    role: "Software Developer L1",
    company: "Tudip Technologies",
    desc: "Developing enterprise-grade backend systems using Java, Spring Boot, Microservices, Redis, Docker, and Kubernetes. Designing secure REST APIs, implementing JWT authentication, optimizing database performance, and building scalable distributed applications.",
    color: "#00d4ff",
  },
  {
    year: "2024",
    role: "Associate Software Developer",
    company: "Tudip Technologies",
    desc: "Started professional backend development journey by building Spring Boot applications, REST APIs, database integrations, Redis caching solutions, and contributing to production deployments and CI/CD workflows.",
    color: "#7b2fff",
  },
  {
    year: "2024 – 2025",
    role: "Data Engineering Platform",
    company: "Databricks Project",
    desc: "Contributed to enterprise-scale data engineering solutions within the Databricks ecosystem. Developed and maintained data pipelines, automated workflows, and scheduled jobs for large-scale data processing. Worked closely with Data Engineers and Data Analysts to optimize data movement, improve pipeline reliability, and support analytics-driven business requirements.",
    color: "#ff6b35",
  },
  {
    year: "2023 – 2024",
    role: "Java Backend Engineering",
    company: "Professional Skill Development",
    desc: "Mastered Core Java, OOP, Collections Framework, Multithreading, JVM Internals, Spring Boot, Database Optimization, REST API Design, Microservices Architecture, and Backend System Design.",
    color: "#00d4ff",
  },
  {
    year: "2019 – 2023",
    role: "Bachelor of Technology (CSE)",
    company: "Mahakal Institute of Technology",
    desc: "Built strong foundations in Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming, and Software Engineering principles.",
    color: "#00d4ff",
  },
];

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "DSA Problems", value: "600+" },
  { label: "Years Journey", value: "2+" },
];

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "7rem",
        background:
          "linear-gradient(180deg, #040509 0%, #060a12 50%, #040509 100%)",
      }}
    >
      {/* Glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          background: "rgba(123,47,255,0.07)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          background: "rgba(0,212,255,0.07)",
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      {/* Grid bg */}
      <div
        className="bg-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2.5rem",
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="label-mono">02. About Me</span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            The Developer
            <br />
            <span className="gradient-text">Behind the Code</span>
          </h2>
          <div className="section-divider" style={{ marginTop: "1.25rem" }} />
        </motion.div>

        {/* ── Two-column grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Holographic identity card */}
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ marginBottom: "2.5rem" }}
            >
              <div
                className="holographic scan-overlay"
                style={{
                  border: "1px solid rgba(0,212,255,0.2)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Corner brackets */}
                <div className="corner-tl" />
                <div className="corner-tr" />
                <div className="corner-bl" />
                <div className="corner-br" />

                {/* Avatar row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div style={{ position: "relative", flexShrink: 0 }}>
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#00d4ff,#7b2fff)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 800,
                        fontSize: "1.35rem",
                        color: "#fff",
                        boxShadow: "0 0 28px rgba(0,212,255,0.35)",
                      }}
                    >
                      VS
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        right: "-2px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "#040509",
                        border: "2px solid #00d4ff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#00d4ff",
                          animation: "pulse-glow 2s ease-in-out infinite",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontWeight: 700,
                        fontSize: "1.15rem",
                        color: "#eef2ff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Vishwajeet S. Rathore
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.68rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#00d4ff",
                      }}
                    >
                      Java Backend Engineer
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.7rem",
                        color: "#8892b0",
                        marginTop: "0.25rem",
                      }}
                    >
                      India 🇮🇳
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                  }}
                >
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      style={{
                        background: "rgba(0,212,255,0.05)",
                        border: "1px solid rgba(0,212,255,0.1)",
                        padding: "0.9rem 1rem",
                      }}
                    >
                      <div
                        className="gradient-text"
                        style={{
                          fontFamily: "'Syne',sans-serif",
                          fontWeight: 800,
                          fontSize: "1.6rem",
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#8892b0",
                          marginTop: "0.35rem",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {[
                <>
                  I&apos;m a passionate{" "}
                  <span style={{ color: "#00d4ff" }}>
                    Java Backend Developer
                  </span>{" "}
                  with a drive to build systems that scale. My journey from QA
                  engineering to backend development has given me a unique
                  perspective on writing code that&apos;s both functional and
                  reliable.
                </>,
                <>
                  Currently specialising in{" "}
                  <span style={{ color: "#7b2fff" }}>
                    Spring Boot microservices
                  </span>
                  , container orchestration with Kubernetes, and building
                  RESTful APIs that serve real-world applications at scale. I
                  believe great backend systems are invisible — they just work.
                </>,
                <>
                  When not coding, I&apos;m sharpening my{" "}
                  <span style={{ color: "#ff6b35" }}>DSA skills</span>,
                  exploring cloud architectures, and contributing to projects
                  that solve real problems.
                </>,
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    color: "#8892b0",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                marginBottom: "2.5rem",
              }}
            >
              <span
                style={{
                  color: "#00d4ff",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.85rem",
                }}
              >
                {"<"}
              </span>
              <h3
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "#eef2ff",
                }}
              >
                Journey
              </h3>
              <span
                style={{
                  color: "#00d4ff",
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.85rem",
                }}
              >
                {"/>"}
              </span>
            </div>

            {/* Timeline list */}
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                className="timeline-line"
                style={{
                  position: "absolute",
                  left: "9px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2.25rem",
                }}
              >
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.4 + i * 0.13 }}
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      paddingLeft: "2.5rem",
                      position: "relative",
                    }}
                    className="group"
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "3px",
                        top: "6px",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        border: `2px solid ${item.color}`,
                        background: item.color,
                        boxShadow: `0 0 10px ${item.color}80`,
                        transition: "transform 0.3s ease",
                        flexShrink: 0,
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.7rem",
                          letterSpacing: "0.12em",
                          color: item.color,
                          marginBottom: "0.35rem",
                        }}
                      >
                        {item.year}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Syne',sans-serif",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#eef2ff",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {item.role}
                      </div>
                      <div
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#8892b0",
                          marginBottom: "0.55rem",
                        }}
                      >
                        {item.company}
                      </div>
                      <p
                        style={{
                          color: "#8892b0",
                          fontSize: "0.85rem",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        {/* end grid */}
      </div>
    </section>
  );
}

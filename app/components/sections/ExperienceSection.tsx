"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    period: "Jan 2025 – Present",
    role: "Software Developer L1",
    company: "Tudip Technologies",
    type: "Full-time",
    color: "#00d4ff",
    highlights: [
      "Developed scalable backend services using Java, Spring Boot, Hibernate, and JPA",
      "Designed and implemented secure REST APIs using Spring Security and JWT",
      "Worked on microservices-based applications serving enterprise clients",
      "Optimized database performance by resolving N+1 query issues and implementing efficient query strategies",
      "Built pagination, filtering, exception handling, and logging frameworks for production systems",
      "Contributed to Dockerized deployments and Kubernetes-based environments",
      "Enhanced backend throughput and application performance through code and database optimizations",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Spring Security",
      "JWT",
      "Hibernate",
      "JPA",
      "Docker",
      "Kubernetes",
      "MySQL",
    ],
  },

  {
    period: "Jan 2024 – Dec 2024",
    role: "Associate Software Developer",
    company: "Tudip Technologies",
    type: "Full-time",
    color: "#7b2fff",
    highlights: [
      "Developed backend modules using Java and Spring Boot for enterprise applications",
      "Implemented RESTful APIs and integrated database operations using Hibernate and JPA",
      "Worked with Redis caching to improve application response times",
      "Participated in microservices development and API integration",
      "Collaborated with QA, DevOps, and product teams throughout the SDLC",
      "Contributed to Docker-based deployments and CI/CD workflows",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Hibernate",
      "JPA",
      "Redis",
      "Docker",
      "Git",
      "MySQL",
    ],
  },

  {
    period: "2024 – 2025",
    role: "Backend Developer (Client Project)",
    company: "Databricks",
    type: "Enterprise Client Engagement",
    color: "#ff6b35",
    highlights: [
      "Contributed to backend and data-focused enterprise solutions for Databricks engagements",
      "Worked with scalable data processing workflows and distributed system concepts",
      "Collaborated with cross-functional teams to support high-performance backend services",
      "Participated in integration, optimization, and maintenance of large-scale enterprise applications",
      "Applied data engineering and backend development best practices in client-facing projects",
    ],
    tech: [
      "Databricks",
      "SQL",
      "Data Engineering",
      "Distributed Systems",
      "Java",
      "Backend Development",
    ],
  },
];

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section
      id="experience"
      ref={ref}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        paddingTop: "8rem",
        paddingBottom: "7rem",
        background:
          "linear-gradient(180deg,#040509 0%,#06090f 50%,#040509 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background: "rgba(0,212,255,0.04)",
          borderRadius: "50%",
          filter: "blur(160px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="bg-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.35 }}
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
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="label-mono">05. Experience</span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <div className="section-divider" style={{ marginTop: "1.25rem" }} />
        </motion.div>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.18 }}
              style={{
                position: "relative",
                background: "rgba(7,11,20,0.65)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(0,212,255,0.1)",
                overflow: "hidden",
                transition: "border-color 0.35s, transform 0.35s",
              }}
              className="glass-card"
            >
              {/* Left colour bar */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: `linear-gradient(180deg,${exp.color},transparent)`,
                }}
              />

              <div
                style={{
                  padding: "2rem 2rem 2rem 2.75rem",
                  display: "grid",
                  gridTemplateColumns: "220px 1fr 1fr",
                  gap: "2.5rem",
                }}
              >
                {/* Col 1 — Meta */}
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.68rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: exp.color,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {exp.period}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#eef2ff",
                      marginBottom: "0.3rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      color: "#8892b0",
                      fontSize: "0.82rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {exp.company}
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.22rem 0.6rem",
                      color: exp.color,
                      background: `${exp.color}14`,
                      border: `1px solid ${exp.color}30`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Col 2 — Highlights */}
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8892b0",
                      marginBottom: "0.9rem",
                    }}
                  >
                    Key Contributions
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.55rem",
                    }}
                  >
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          gap: "0.6rem",
                          color: "#8892b0",
                          fontSize: "0.83rem",
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            color: exp.color,
                            flexShrink: 0,
                            marginTop: "0.3rem",
                            fontSize: "0.6rem",
                          }}
                        >
                          ▶
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3 — Tech */}
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "0.62rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#8892b0",
                      marginBottom: "0.9rem",
                    }}
                  >
                    Technologies
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.45rem",
                    }}
                  >
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.62rem",
                          letterSpacing: "0.08em",
                          padding: "0.28rem 0.65rem",
                          color: exp.color,
                          border: `1px solid ${exp.color}28`,
                          background: `${exp.color}0a`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "20px",
                  height: "20px",
                  borderRight: `1px solid ${exp.color}`,
                  borderBottom: `1px solid ${exp.color}`,
                  opacity: 0.25,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

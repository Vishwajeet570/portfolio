"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    period: "2024 – Present",
    role: "Java Backend Developer",
    company: "Independent / Freelance",
    type: "Full-time",
    color: "#00d4ff",
    highlights: [
      "Built Dubai Posts News Application with microservices architecture",
      "Implemented Role-Based Access Control (RBAC) with Spring Security",
      "Deployed containerised services using Docker and Kubernetes",
      "Designed RESTful APIs with pagination and optimised database queries",
      "Integrated CI/CD pipelines for automated testing and deployment",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    period: "2023",
    role: "Developer",
    company: "Databricks Lab",
    type: "Full-time",
    color: "#7b2fff",
    highlights: [
      "Contributed to data engineering projects and internal tooling",
      "Developed automation solutions using Google Apps Script",
      "Built Jira automation system for Epic/Story/Subtask generation",
      "Collaborated with cross-functional teams on sprint planning",
    ],
    tech: ["Google Apps Script", "Jira APIs", "Automation", "Data Engineering"],
  },
  {
    period: "2022 – 2023",
    role: "Manual Testing Engineer",
    company: "QA Division",
    type: "Full-time",
    color: "#ff6b35",
    highlights: [
      "Executed comprehensive test cases for web and mobile applications",
      "Wrote detailed bug reports with reproduction steps and severity levels",
      "Performed regression and smoke testing for every release cycle",
      "Collaborated with developers to ensure quality throughout SDLC",
    ],
    tech: ["Jira", "Test Cases", "Bug Tracking", "SDLC", "Agile"],
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

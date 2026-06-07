"use client";
import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "Aanchal Dairy Backend Platform",
    subtitle: "Enterprise E-Commerce Backend",
    description:
      "Developed scalable backend services for an e-commerce platform using Spring Boot. Implemented Redis caching, JWT authentication, rate limiting, and optimized database queries for high-performance API delivery.",
    tech: [
      "Java",
      "Spring Boot",
      "Redis",
      "MySQL",
      "Spring Security",
      "JWT",
      "Docker",
    ],
    color: "#00d4ff",
    accent: "#7b2fff",
    icon: "🚀",
    metrics: ["Redis Cache", "JWT Security", "Rate Limiting"],
    featured: true,
  },

  {
    id: 2,
    title: "Dubai Posts News Platform",
    subtitle: "Microservices Content Management System",
    description:
      "Built a microservices-based news platform with secure REST APIs, role-based access control, content management workflows, pagination, and Kubernetes deployment.",
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "RBAC",
    ],
    color: "#7b2fff",
    accent: "#ff6b35",
    icon: "📰",
    metrics: ["Microservices", "K8s", "RBAC"],
    featured: true,
  },

  {
    id: 3,
    title: "Smart API Gateway",
    subtitle: "Centralized Traffic Management",
    description:
      "Designed a centralized API Gateway for request routing, JWT validation, Redis-based rate limiting, API monitoring, and secure communication across microservices.",
    tech: [
      "Spring Cloud Gateway",
      "Redis",
      "JWT",
      "Microservices",
      "Docker",
      "Monitoring",
    ],
    color: "#ff6b35",
    accent: "#00d4ff",
    icon: "🌐",
    metrics: ["1M+ Requests", "Gateway", "Security"],
    featured: true,
  },

  {
    id: 4,
    title: "Real-Time Notification Engine",
    subtitle: "Event-Driven Communication Service",
    description:
      "Developed an asynchronous notification engine capable of processing events and delivering real-time alerts through multiple channels using event-driven architecture.",
    tech: [
      "Java",
      "Spring Boot",
      "Kafka",
      "WebSocket",
      "Docker",
      "Microservices",
    ],
    color: "#00d4ff",
    accent: "#7b2fff",
    icon: "🔔",
    metrics: ["Kafka", "Real-Time", "Async"],
    featured: false,
  },

  {
    id: 5,
    title: "Databricks Analytics Pipeline",
    subtitle: "Big Data Processing Solution",
    description:
      "Built scalable ETL pipelines and optimized distributed data processing workflows using Databricks and Apache Spark for large-scale analytics workloads.",
    tech: [
      "Databricks",
      "Apache Spark",
      "SQL",
      "ETL",
      "Data Engineering",
      "Analytics",
    ],
    color: "#7b2fff",
    accent: "#ff6b35",
    icon: "📊",
    metrics: ["Big Data", "ETL", "Analytics"],
    featured: false,
  },

  {
    id: 6,
    title: "Distributed Authentication Service",
    subtitle: "Identity & Access Management",
    description:
      "Built a centralized authentication and authorization service supporting JWT-based authentication, role-based access control, refresh tokens, and secure API access across distributed systems.",
    tech: [
      "Java",
      "Spring Security",
      "JWT",
      "OAuth2",
      "Redis",
      "Microservices",
    ],
    color: "#ff6b35",
    accent: "#00d4ff",
    icon: "🔐",
    metrics: ["OAuth2", "JWT", "RBAC"],
    featured: false,
  },
];

function TiltCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setTilt({ x: (y - 0.5) * 16, y: (x - 0.5) * -16 });
    setShine({ x: x * 100, y: y * 100 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.18,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setTilt({ x: 0, y: 0 });
        setHovered(false);
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.5s ease",
        position: "relative",
        cursor: "none",
      }}
    >
      {/* Glow border on hover */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: "-1px",
            background: `linear-gradient(135deg,${project.color},${project.accent})`,
            filter: "blur(1px)",
            zIndex: 0,
          }}
        />
      )}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(7,11,20,0.85)",
          backdropFilter: "blur(24px)",
          border: `1px solid ${hovered ? "transparent" : "rgba(0,212,255,0.1)"}`,
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Shine */}
        {hovered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.05) 0%, transparent 60%)`,
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        )}

        {/* Colour top bar */}
        <div
          style={{
            height: "2px",
            background: `linear-gradient(90deg,${project.color},${project.accent})`,
          }}
        />

        <div style={{ padding: "1.75rem" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <div>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
                {project.icon}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: project.color,
                  marginBottom: "0.4rem",
                }}
              >
                {project.subtitle}
              </div>
              <h3
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#eef2ff",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>
            </div>
            {project.featured && (
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.25rem 0.6rem",
                  color: "#00d4ff",
                  border: "1px solid rgba(0,212,255,0.3)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                Featured
              </span>
            )}
          </div>

          {/* Metrics */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1rem",
            }}
          >
            {project.metrics.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.22rem 0.55rem",
                  color: project.color,
                  background: `${project.color}14`,
                  border: `1px solid ${project.color}28`,
                }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Description */}
          <p
            style={{
              color: "#8892b0",
              fontSize: "0.85rem",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.25rem",
            }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.62rem",
                  color: "#8892b0",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "0.22rem 0.55rem",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "1.25rem" }}>
            <a
              href="#"
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#8892b0",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 0.25s",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
            <a
              href="#"
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: project.color,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Live Demo
            </a>
          </div>
        </div>

        {/* Corner accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "24px",
            height: "24px",
            borderRight: `1px solid ${project.color}`,
            borderBottom: `1px solid ${project.color}`,
            opacity: hovered ? 0.8 : 0.2,
            transition: "opacity 0.3s",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section
      id="projects"
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
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
      />
      <div
        className="section-blob section-blob-large"
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          background: "rgba(0,212,255,0.04)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="label-mono">04. Work</span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" style={{ marginTop: "1.25rem" }} />
          <p
            style={{
              color: "#8892b0",
              fontSize: "0.9rem",
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            Real-world systems built with production-grade architecture and best
            practices.
          </p>
        </motion.div>

        <div className="section-grid-3">
          {projects.map((p, i) => (
            <TiltCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00d4ff",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.25s",
            }}
          >
            View All Projects on GitHub
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

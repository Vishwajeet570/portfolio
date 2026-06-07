"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import dynamic from "next/dynamic";

const skills = [
  { name: "Java", level: 90, color: "#f89820", category: "core" },
  { name: "Spring Boot", level: 88, color: "#6db33f", category: "core" },
  {
    name: "Microservices",
    level: 82,
    color: "#00d4ff",
    category: "architecture",
  },
  { name: "REST APIs", level: 90, color: "#00d4ff", category: "core" },
  { name: "MySQL", level: 80, color: "#4479a1", category: "database" },
  { name: "PostgreSQL", level: 75, color: "#336791", category: "database" },
  { name: "Docker", level: 78, color: "#2496ed", category: "devops" },
  { name: "Kubernetes", level: 70, color: "#326ce5", category: "devops" },
  { name: "Git", level: 85, color: "#f05032", category: "tools" },
  { name: "Jira", level: 82, color: "#0052cc", category: "tools" },
  { name: "Flutter", level: 72, color: "#54c5f8", category: "frontend" },
  { name: "React.js", level: 68, color: "#61dafb", category: "frontend" },
];

const CATEGORY_COLORS: Record<string, string> = {
  core: "#00d4ff",
  architecture: "#7b2fff",
  database: "#ff6b35",
  devops: "#00d4ff",
  tools: "#8892b0",
  frontend: "#7b2fff",
};

function SkillOrb({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.012;
    const t = hovered ? 1.4 : 1;
    ref.current.scale.lerp(new THREE.Vector3(t, t, t), 0.1);
  });
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.2}>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.28, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.9 : 0.35}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function SkillSphere() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.003;
  });
  const positions: [number, number, number][] = [
    [2.5, 0, 0],
    [-2.5, 0, 0],
    [0, 2.5, 0],
    [0, -2.5, 0],
    [0, 0, 2.5],
    [0, 0, -2.5],
    [1.8, 1.8, 0],
    [-1.8, 1.8, 0],
    [1.8, -1.8, 0],
    [-1.8, -1.8, 0],
    [0, 1.8, 1.8],
    [0, -1.8, 1.8],
  ];
  return (
    <group ref={groupRef}>
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.12}
          wireframe
        />
      </mesh>
      {skills.map((s, i) => (
        <SkillOrb
          key={s.name}
          position={positions[i] || [0, 0, 0]}
          color={s.color}
        />
      ))}
    </group>
  );
}

function SkillScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#00d4ff" intensity={2} />
      <pointLight position={[-5, -5, -5]} color="#7b2fff" intensity={1.5} />
      <SkillSphere />
    </Canvas>
  );
}
const DynamicSkillScene = dynamic(() => Promise.resolve(SkillScene), {
  ssr: false,
});

const categories = [
  "all",
  "core",
  "architecture",
  "database",
  "devops",
  "tools",
  "frontend",
];

export default function SkillsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
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
        className="section-blob section-blob-xlarge"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "rgba(123,47,255,0.06)",
          filter: "blur(150px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="bg-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="label-mono">03. Skills</span>
          <h2 className="section-title" style={{ color: "#eef2ff" }}>
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="section-divider" style={{ marginTop: "1.25rem" }} />
        </motion.div>

        {/* Two-column layout */}
        <div className="section-grid-2" style={{ gap: "4rem" }}>
          {/* 3D sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="scene-box"
          >
            <DynamicSkillScene />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(4,5,9,0.7) 100%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          {/* Skills list */}
          <div>
            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.75rem",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.35rem 0.85rem",
                    border: "1px solid",
                    cursor: "none",
                    transition: "all 0.25s ease",
                    background:
                      activeCategory === cat ? "#00d4ff" : "transparent",
                    color: activeCategory === cat ? "#040509" : "#8892b0",
                    borderColor:
                      activeCategory === cat
                        ? "#00d4ff"
                        : "rgba(0,212,255,0.18)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Skill rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
            >
              {filtered.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 28 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.05 }}
                  className="skill-chip"
                  style={{
                    background: "rgba(7,11,20,0.65)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    padding: "0.85rem 1.1rem",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  {/* Top row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.55rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.65rem",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: skill.color,
                          boxShadow: `0 0 8px ${skill.color}`,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "'Syne',sans-serif",
                          fontWeight: 600,
                          fontSize: "0.88rem",
                          color: "#eef2ff",
                        }}
                      >
                        {skill.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "0.58rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "0.15rem 0.5rem",
                          color: CATEGORY_COLORS[skill.category],
                          background: `${CATEGORY_COLORS[skill.category]}18`,
                          border: `1px solid ${CATEGORY_COLORS[skill.category]}30`,
                        }}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "0.7rem",
                        color: "#8892b0",
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress */}
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      style={{
                        height: "100%",
                        background: skill.color,
                        boxShadow: `0 0 6px ${skill.color}`,
                        borderRadius: "1px",
                      }}
                      initial={{ width: 0 }}
                      animate={
                        inView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{
                        duration: 1,
                        delay: 0.6 + i * 0.05,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

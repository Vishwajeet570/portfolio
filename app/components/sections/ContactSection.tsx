"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Sphere } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import dynamic from "next/dynamic";

// ── 3D Scene ──────────────────────────────────────────────
function FloatingRing({
  radius,
  tube,
  color,
  speed,
  rotX,
  rotZ,
}: {
  radius: number;
  tube: number;
  color: string;
  speed: number;
  rotX: number;
  rotZ: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x =
      rotX + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    ref.current.rotation.z = rotZ + state.clock.elapsedTime * speed * 0.4;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 80]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.55}
        roughness={0.1}
        metalness={0.9}
      />
    </mesh>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.004;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
  });
  return (
    <Sphere ref={ref} args={[0.9, 64, 64]}>
      <MeshDistortMaterial
        color="#00d4ff"
        emissive="#7b2fff"
        emissiveIntensity={0.35}
        distort={0.35}
        speed={2}
        roughness={0}
        metalness={0.8}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

function OrbitDot({
  angle,
  radius,
  color,
  speed,
}: {
  angle: number;
  radius: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed + angle;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 0.7) * 0.3;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.07, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function ParticleField() {
  const count = 120;
  const positions = useRef(
    Float32Array.from({ length: count * 3 }, () => (Math.random() - 0.5) * 10),
  );
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions.current, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#00d4ff"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

function ContactScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} color="#00d4ff" intensity={3} />
      <pointLight position={[-4, -4, -4]} color="#7b2fff" intensity={2} />
      <pointLight position={[0, 4, 0]} color="#ffffff" intensity={0.6} />

      <ParticleField />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <CoreSphere />
        <FloatingRing
          radius={1.6}
          tube={0.018}
          color="#00d4ff"
          speed={0.6}
          rotX={0.5}
          rotZ={0}
        />
        <FloatingRing
          radius={2.0}
          tube={0.012}
          color="#7b2fff"
          speed={0.45}
          rotX={1.1}
          rotZ={0.8}
        />
        <FloatingRing
          radius={2.5}
          tube={0.009}
          color="#ff6b35"
          speed={0.3}
          rotX={-0.6}
          rotZ={1.4}
        />
      </Float>

      {/* Orbiting dots */}
      {[0, 1.2, 2.4, 3.6, 4.8].map((angle, i) => (
        <OrbitDot
          key={i}
          angle={angle}
          radius={1.6}
          color={["#00d4ff", "#7b2fff", "#ff6b35", "#00d4ff", "#7b2fff"][i]}
          speed={0.5}
        />
      ))}
      {[0, 2.1, 4.2].map((angle, i) => (
        <OrbitDot
          key={`b${i}`}
          angle={angle}
          radius={2.0}
          color={["#7b2fff", "#ff6b35", "#00d4ff"][i]}
          speed={-0.3}
        />
      ))}
    </Canvas>
  );
}

const DynamicContactScene = dynamic(() => Promise.resolve(ContactScene), {
  ssr: false,
});

// ── Social cards data ──────────────────────────────────────
const socials = [
  {
    name: "LinkedIn",
    handle: "vishwajeet-tech",
    href: "https://linkedin.com/in/vishwajeet-tech",
    color: "#0a66c2",
    desc: "Connect professionally & see my work history",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    handle: "Vishwajeet570",
    href: "https://github.com/Vishwajeet570",
    color: "#eef2ff",
    desc: "Browse my repositories & open source work",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    handle: "singhrathorev21@gmail.com",
    href: "mailto:singhrathorev21@gmail.com",
    color: "#ff6b35",
    desc: "Drop me a direct email for quick collaboration",
    icon: (
      <svg
        width="22"
        height="22"
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

function SocialCard({
  item,
  index,
  inView,
}: {
  item: (typeof socials)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.4 + index * 0.14,
        ease: [0.23, 1, 0.32, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration: "none",
        cursor: "none",
        display: "block",
        position: "relative",
      }}
    >
      {/* Glow outline */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "absolute",
              inset: "-1px",
              background: `linear-gradient(135deg,${item.color}80,transparent 60%)`,
              filter: "blur(1px)",
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          y: hovered ? -5 : 0,
          boxShadow: hovered ? `0 16px 48px ${item.color}25` : "none",
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: "relative",
          zIndex: 1,
          background: "rgba(7,11,20,0.88)",
          backdropFilter: "blur(24px)",
          border: `1px solid ${hovered ? item.color + "50" : "rgba(0,212,255,0.1)"}`,
          transition: "border-color 0.3s",
          padding: "1.4rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.1rem",
          overflow: "hidden",
        }}
      >
        {/* Animated top line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(90deg,transparent,${item.color},transparent)`,
            transformOrigin: "center",
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{ boxShadow: hovered ? `0 0 24px ${item.color}60` : "none" }}
          transition={{ duration: 0.3 }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            flexShrink: 0,
            background: `${item.color}18`,
            border: `1px solid ${item.color}35`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.color,
            transition: "background 0.3s",
          }}
        >
          {item.icon}
        </motion.div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#eef2ff",
              marginBottom: "0.2rem",
            }}
          >
            {item.name}
          </div>
          <div
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "0.63rem",
              letterSpacing: "0.1em",
              color: item.color,
              marginBottom: "0.3rem",
            }}
          >
            {item.handle}
          </div>
          <p style={{ color: "#8892b0", fontSize: "0.78rem", lineHeight: 1.5 }}>
            {item.desc}
          </p>
        </div>

        {/* Arrow */}
        <motion.div
          animate={{ x: hovered ? 3 : 0, opacity: hovered ? 1 : 0.35 }}
          transition={{ duration: 0.25 }}
          style={{ color: item.color, flexShrink: 0 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>

        {/* Corner */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "14px",
            height: "14px",
            borderRight: `1px solid ${item.color}40`,
            borderBottom: `1px solid ${item.color}40`,
          }}
        />
      </motion.div>
    </motion.a>
  );
}

// ── Main Section ───────────────────────────────────────────
export default function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

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
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />
      <div
        className="section-blob section-blob-large"
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          background: "rgba(123,47,255,0.05)",
          filter: "blur(160px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="section-blob section-blob-large"
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          background: "rgba(0,212,255,0.05)",
          filter: "blur(160px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
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
              fontSize: "0.92rem",
              marginTop: "1.25rem",
              maxWidth: "480px",
              margin: "1.25rem auto 0",
              lineHeight: 1.75,
            }}
          >
            Open to new opportunities, collaborations, and interesting backend
            challenges. Pick your preferred channel — I respond within 24 hours.
          </p>
        </motion.div>

        {/* Main grid — 3D left, cards right */}
        <div
          className="section-grid-2"
          style={{ gap: "4rem", marginBottom: "2.5rem" }}
        >
          {/* LEFT — 3D model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="scene-box full-height"
          >
            {/* Glow behind canvas */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(123,47,255,0.05) 40%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            <div style={{ position: "relative", zIndex: 1, height: "100%" }}>
              <DynamicContactScene />
            </div>

            {/* Vignette edges */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at center, transparent 45%, rgba(4,5,9,0.75) 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />

            {/* Floating labels */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "12%",
                left: "5%",
                zIndex: 3,
                background: "rgba(7,11,20,0.85)",
                border: "1px solid rgba(0,212,255,0.25)",
                backdropFilter: "blur(12px)",
                padding: "0.5rem 0.85rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#00d4ff",
                }}
              >
                Status
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "0.2rem",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#00ff88",
                    boxShadow: "0 0 8px #00ff88",
                  }}
                />
                Online
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              style={{
                position: "absolute",
                bottom: "14%",
                right: "5%",
                zIndex: 3,
                background: "rgba(7,11,20,0.85)",
                border: "1px solid rgba(123,47,255,0.25)",
                backdropFilter: "blur(12px)",
                padding: "0.5rem 0.85rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#7b2fff",
                }}
              >
                Response
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#eef2ff",
                  marginTop: "0.2rem",
                }}
              >
                &lt; 24h
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              style={{
                position: "absolute",
                bottom: "30%",
                left: "3%",
                zIndex: 3,
                background: "rgba(7,11,20,0.85)",
                border: "1px solid rgba(255,107,53,0.25)",
                backdropFilter: "blur(12px)",
                padding: "0.5rem 0.85rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#ff6b35",
                }}
              >
                Open to
              </div>
              <div
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#eef2ff",
                  marginTop: "0.2rem",
                }}
              >
                Full-time
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Social cards + resume */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {socials.map((item, i) => (
              <SocialCard
                key={item.name}
                item={item}
                index={i}
                inView={inView}
              />
            ))}

            {/* Resume */}
            <motion.a
              href="/vishwajeet_resume.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.85 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                padding: "0.9rem 1.5rem",
                marginTop: "0.25rem",
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00d4ff",
                border: "1px solid rgba(0,212,255,0.3)",
                textDecoration: "none",
                cursor: "none",
                background: "rgba(0,212,255,0.04)",
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

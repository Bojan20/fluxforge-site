import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollReveal, fadeUp, stagger } from "../../hooks/useScrollReveal";
import { useMouseGlow } from "../../hooks/useMouseGlow";
import styles from "./Features.module.css";

const features = [
  {
    icon: "eq",
    title: "64-Band Parametric EQ",
    desc: "Unified EQ with SVF + MZT + oversampling + saturation. TDF-II biquads, linear/hybrid phase. FabFilter Pro-Q level.",
    accent: "blue",
    span: "wide",
  },
  {
    icon: "wave",
    title: "Zero-Allocation DSP",
    desc: "Pure Rust audio thread — no heap allocs, no locks, no panics. Pre-allocated buffers, atomics, SIMD-optimized processing.",
    accent: "orange",
  },
  {
    icon: "brain",
    title: "AI Mastering Engine",
    desc: "Genre-aware processing with LUFS targeting, spectral balance, multiband dynamics, true peak limiting with 8x oversampling.",
    accent: "purple",
  },
  {
    icon: "slot",
    title: "SlotLab Game Audio",
    desc: "Casino-grade deterministic audio with per-reel anticipation, adaptive layers, win tier celebrations, and event sync system.",
    accent: "green",
  },
  {
    icon: "bolt",
    title: "SIMD Processing",
    desc: "Runtime dispatch: AVX-512, AVX2, SSE4.2, NEON, scalar. Every DSP processor is SIMD-optimized for maximum throughput.",
    accent: "cyan",
    span: "wide",
  },
  {
    icon: "plug",
    title: "Plugin Hosting",
    desc: "VST3, Audio Unit, and CLAP plugin scanner & hosting. Full sidechain support, insert/send effects, 6 buses + master.",
    accent: "pink",
  },
  {
    icon: "film",
    title: "Video Engine",
    desc: "Frame-accurate A/V sync with H.264/H.265/ProRes/DNxHD. SMPTE timecode, EDL/AAF import, thumbnail strip generation.",
    accent: "red",
  },
  {
    icon: "code",
    title: "Lua Scripting",
    desc: "Full automation API with access to tracks, clips, parameters, and transport. Custom macros, LFOs, and algorithmic edits.",
    accent: "indigo",
  },
  {
    icon: "neural",
    title: "Neural Processing",
    desc: "DeepFilterNet3 denoising, HTDemucs v4 stem separation, speech enhancement. CUDA/CoreML/tract backends.",
    accent: "violet",
  },
];

const iconMap: Record<string, ReactNode> = {
  eq: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8v8M8 5v14M12 9v6M16 4v16M20 7v10"/></svg>,
  wave: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c1.5-3 3-5 4.5 0s3 3 4.5 0 3-5 4.5 0 3 3 4.5 0"/></svg>,
  brain: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 3c-1 4-4 6-4 9a4 4 0 008 0c0-3-3-5-4-9z"/></svg>,
  slot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 8v8M15 8v8M3 12h18"/></svg>,
  bolt: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>,
  plug: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3v4M16 3v4M5 7h14a1 1 0 011 1v3a7 7 0 01-7 7 7 7 0 01-7-7V8a1 1 0 011-1zM12 18v3"/></svg>,
  film: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>,
  code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>,
  neural: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7.5 7.5l3 3M13.5 13.5l3 3M13.5 10.5l3-3M7.5 16.5l3-3"/></svg>,
};

export default function Features() {
  const { ref, isInView } = useScrollReveal();
  const { ref: gridRef, handleMouseMove } = useMouseGlow();

  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container" ref={ref}>
        <motion.span
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.span>

        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Everything You Need,{" "}
          <span className="gradient-text">Nothing You Don't</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ marginBottom: "3.5rem" }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          From low-level DSP to high-level AI — a complete professional audio
          production environment.
        </motion.p>

        <div
          className={styles.grid}
          ref={gridRef}
          onMouseMove={handleMouseMove}
        >
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              className={`${styles.card} ${f.span === "wide" ? styles.cardWide : ""} spotlight-card`}
              data-accent={f.accent}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, ...stagger(i, 0.06) }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className={styles.cardIcon} data-accent={f.accent}>
                {iconMap[f.icon]}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardAccentLine} data-accent={f.accent} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

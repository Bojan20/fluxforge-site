import { motion } from "framer-motion";
import { useScrollReveal, fadeUp, stagger } from "../../hooks/useScrollReveal";
import styles from "./TechStack.module.css";

const languages = [
  { name: "Rust", pct: 54, color: "#fb923c", desc: "DSP, audio engine, FFI bridge" },
  { name: "Dart", pct: 45, color: "#22d3ee", desc: "Flutter UI, state management" },
  { name: "WGSL", pct: 1, color: "#a78bfa", desc: "GPU shaders (rf-viz)" },
];

const crates = [
  { name: "rf-core", desc: "Shared types & traits", loc: "Core" },
  { name: "rf-dsp", desc: "SIMD DSP processors", loc: "5K+" },
  { name: "rf-engine", desc: "Audio graph & routing", loc: "8K+" },
  { name: "rf-bridge", desc: "Flutter↔Rust FFI", loc: "6K+" },
  { name: "rf-audio", desc: "Audio I/O (cpal)", loc: "2K+" },
  { name: "rf-master", desc: "AI mastering engine", loc: "5K" },
  { name: "rf-ml", desc: "Neural audio (ONNX)", loc: "1.5K" },
  { name: "rf-realtime", desc: "Zero-latency DSP", loc: "5.3K" },
  { name: "rf-restore", desc: "Audio restoration", loc: "550" },
  { name: "rf-ale", desc: "Adaptive layer engine", loc: "4.5K" },
  { name: "rf-wasm", desc: "WebAssembly port", loc: "400" },
  { name: "rf-offline", desc: "Batch processing", loc: "2.9K" },
];

export default function TechStack() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="tech" className={`section ${styles.tech}`}>
      <div className="container" ref={ref}>
        <motion.span
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.span>

        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Built with{" "}
          <span style={{ color: "var(--accent-orange)" }}>Rust</span> &{" "}
          <span style={{ color: "var(--accent-cyan)" }}>Flutter</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ marginBottom: "3.5rem" }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A monorepo workspace with 12+ specialized crates — from real-time DSP
          to neural audio processing.
        </motion.p>

        <motion.div
          className={styles.langSection}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {languages.map((lang) => (
            <div key={lang.name} className={styles.langRow}>
              <div className={styles.langLabel}>
                <span className={styles.langName}>{lang.name}</span>
                <span className={styles.langDesc}>{lang.desc}</span>
              </div>
              <div className={styles.langBarTrack}>
                <motion.div
                  className={styles.langBar}
                  style={{ background: lang.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${lang.pct}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className={styles.langPct}>{lang.pct}%</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.cratesHeader}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={styles.cratesHeading}>Rust Workspace Crates</h3>
          <span className={styles.cratesCount}>{crates.length} crates</span>
        </motion.div>

        <div className={styles.crateGrid}>
          {crates.map((c, i) => (
            <motion.div
              key={c.name}
              className={styles.crateCard}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ...stagger(i, 0.04) }}
            >
              <div className={styles.crateHeader}>
                <span className={styles.crateName}>{c.name}</span>
                <span className={styles.crateLoc}>{c.loc}</span>
              </div>
              <p className={styles.crateDesc}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

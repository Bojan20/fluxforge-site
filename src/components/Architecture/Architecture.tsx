import { motion } from "framer-motion";
import { useScrollReveal, fadeUp, stagger } from "../../hooks/useScrollReveal";
import styles from "./Architecture.module.css";

const layers = [
  { num: "7", name: "Application Shell", tech: "Flutter Desktop", details: "Native macOS/Windows/Linux, file dialogs, project save/load, plugin hosting", color: "var(--accent-blue)" },
  { num: "6", name: "GUI Framework", tech: "Flutter + Dart", details: "Skia/Impeller GPU backend, custom knobs/faders/meters, 120fps, Provider state", color: "var(--accent-cyan)" },
  { num: "5", name: "FFI Bridge", tech: "dart:ffi → Rust", details: "6000+ LOC bindings, lock-free parameter sync, real-time metering data", color: "var(--accent-green)" },
  { num: "4", name: "State Management", tech: "Dart Providers", details: "Undo/Redo command pattern, A/B comparison, preset management, automation", color: "var(--accent-purple)" },
  { num: "3", name: "Audio Engine", tech: "Rust: rf-engine", details: "Dual-path real-time + guard, graph routing, 6 buses + master, sidechain", color: "var(--accent-orange)" },
  { num: "2", name: "DSP Processors", tech: "Rust: rf-dsp", details: "64-band EQ, dynamics, spatial, time, analysis — ALL SIMD optimized", color: "var(--accent-red)" },
  { num: "1", name: "Audio I/O", tech: "Rust: cpal", details: "ASIO/CoreAudio/JACK/PipeWire, 44.1–384kHz, 32–4096 sample buffers", color: "var(--accent-pink)" },
];

export default function Architecture() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="architecture" className={`section ${styles.arch}`}>
      <div className="container" ref={ref}>
        <div className={styles.header}>
          <div>
            <motion.span
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5 }}
            >
              Architecture
            </motion.span>

            <motion.h2
              className="section-title"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              7 Layers of{" "}
              <span className="gradient-text">Audio Excellence</span>
            </motion.h2>

            <motion.p
              className="section-subtitle"
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              From hardware I/O to pixel-perfect UI — every layer is purpose-built
              for professional audio production.
            </motion.p>
          </div>

          <motion.div
            className={styles.diagram}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.diagramInner}>
              <span className={styles.diagramLabel}>Signal Flow</span>
              <svg viewBox="0 0 120 200" fill="none" className={styles.diagramSvg}>
                <line x1="60" y1="10" x2="60" y2="190" stroke="rgba(99,152,255,0.15)" strokeWidth="1"/>
                {layers.map((_, i) => (
                  <g key={i}>
                    <circle cx="60" cy={15 + i * 27} r="4" fill="rgba(99,152,255,0.3)" stroke="rgba(99,152,255,0.5)" strokeWidth="1"/>
                    <line x1="68" y1={15 + i * 27} x2="100" y2={15 + i * 27} stroke="rgba(99,152,255,0.08)" strokeWidth="0.5"/>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        <div className={styles.stack}>
          {layers.map((layer, i) => (
            <motion.div
              key={layer.num}
              className={styles.layer}
              style={{ "--layer-color": layer.color } as React.CSSProperties}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ...stagger(i, 0.07) }}
            >
              <div className={styles.layerAccent} />
              <div className={styles.layerNum}>{layer.num}</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <h3 className={styles.layerName}>{layer.name}</h3>
                  <span className={styles.layerTech}>{layer.tech}</span>
                </div>
                <p className={styles.layerDetails}>{layer.details}</p>
              </div>
              <div className={styles.layerArrow}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useScrollReveal, fadeUp, stagger } from "../../hooks/useScrollReveal";
import styles from "./DSP.module.css";

const panels = [
  { name: "FF-Q 64", full: "64-Band Parametric EQ", ref: "Pro-Q 3", features: "8-band parametric, I/O metering, spectrum analyzer, 7 filter shapes", color: "blue" },
  { name: "FF-C", full: "Compressor", ref: "Pro-C 2", features: "Transfer curve, knee display, 14 styles, sidechain EQ, lookahead", color: "orange" },
  { name: "FF-L", full: "Limiter", ref: "Pro-L 2", features: "LUFS metering, 8 styles, true peak, GR history, 8x oversampling", color: "red" },
  { name: "FF-G", full: "Gate", ref: "Pro-G", features: "State indicator, threshold viz, hysteresis, sidechain filter, range", color: "green" },
  { name: "FF-R", full: "Reverb", ref: "Pro-R", features: "Decay display, pre-delay, 8 space types, EQ, damping, size control", color: "purple" },
  { name: "FF-SAT", full: "Saturation", ref: "Saturn 2", features: "6-band multiband, per-band drive/type/dynamics, crossover editor", color: "pink" },
  { name: "FF-DLY", full: "Delay", ref: "Timeless 3", features: "Ping-pong, tempo sync, modulation, filter, ducking, freeze mode", color: "cyan" },
  { name: "FF-E", full: "De-Esser", ref: "Pro-DS", features: "Frequency display, listen mode, wide/split band, 8 parameters", color: "indigo" },
];

export default function DSP() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="dsp" className={`section ${styles.dsp}`}>
      <div className="container" ref={ref}>
        <motion.span
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          DSP Panels
        </motion.span>

        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          FabFilter-Class{" "}
          <span className="gradient-text">Processing</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ marginBottom: "3.5rem" }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          9 premium DSP panels with A/B snapshot comparison, undo/redo, preset
          browser, and professional-grade UI — all powered by Rust SIMD.
        </motion.p>

        <div className={styles.grid}>
          {panels.map((p, i) => (
            <motion.div
              key={p.name}
              className={styles.panel}
              data-color={p.color}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ...stagger(i, 0.05) }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              <div className={styles.panelHeader}>
                <span className={styles.panelName} data-color={p.color}>{p.name}</span>
                <span className={styles.panelRef}>{p.ref}</span>
              </div>
              <h3 className={styles.panelFull}>{p.full}</h3>
              <p className={styles.panelFeatures}>{p.features}</p>
              <div className={styles.panelControls}>
                <span className={styles.knob} />
                <span className={styles.knob} />
                <span className={styles.knob} />
                <span className={styles.knobSm} />
                <span className={styles.knobSm} />
              </div>
              <div className={styles.panelGlow} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.rules}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className={styles.rulesTitle}>Audio Thread Contract</h3>
          <div className={styles.rulesGrid}>
            <div className={styles.ruleBlock}>
              <div className={styles.ruleIndicator} data-type="forbidden" />
              <div>
                <strong>Forbidden</strong>
                <p>Heap allocations, Mutex/RwLock, System calls, Panic</p>
              </div>
            </div>
            <div className={styles.ruleBlock}>
              <div className={styles.ruleIndicator} data-type="allowed" />
              <div>
                <strong>Allowed</strong>
                <p>Stack allocations, Pre-allocated buffers, Atomics, SIMD</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

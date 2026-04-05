import { motion } from "framer-motion";
import { useScrollReveal, fadeUp, stagger } from "../../hooks/useScrollReveal";
import styles from "./SlotLab.module.css";

const features = [
  { title: "Per-Reel Anticipation", desc: "L1–L4 tension system with musical escalation. Each reel builds anticipation independently with pitch rising, tempo acceleration, and filter sweeps.", tag: "Tension" },
  { title: "Adaptive Layer Engine", desc: "18+ built-in signals, context-aware layering with game chapters (BASE, FREESPINS, HOLDWIN), 16 comparison operators, and 6 stability mechanisms.", tag: "ALE" },
  { title: "Event Sync System", desc: "Stage-to-Event mapping for deterministic audio triggers. Every spin event — scatter, wild, bonus — precisely synced with the audio timeline.", tag: "Events" },
  { title: "Win Celebrations", desc: "Data-driven win tiers with configurable rollup durations, thresholds, and multiplier ranges. From small wins to jackpot celebrations.", tag: "Wins" },
  { title: "8-Bus Mixer", desc: "Master, SFX, Music, Voice, Ambience, UI, Reels, Wins — full bus routing with per-bus DSP chain, volume, and spatial control.", tag: "Mixer" },
  { title: "WASM Runtime", desc: "WebAssembly port with Web Audio API integration, 32-voice pooling, RTPC parameters, and state groups. ~38KB gzipped.", tag: "Web" },
];

const flowSteps = [
  "Spin Event",
  "Reel Animation",
  "Anticipation L1–L4",
  "Stop & Reveal",
  "Win Celebration",
];

export default function SlotLab() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="slotlab" className={`section ${styles.slotlab}`}>
      <div className="container" ref={ref}>
        <motion.span
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
        >
          SlotLab
        </motion.span>

        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Casino-Grade{" "}
          <span style={{ color: "var(--accent-green)" }}>Game Audio</span>
        </motion.h2>

        <motion.p
          className="section-subtitle"
          style={{ marginBottom: "3.5rem" }}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A complete game audio authoring environment for slot machines and
          casino games — from anticipation builds to jackpot celebrations.
        </motion.p>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, ...stagger(i, 0.06) }}
            >
              <div className={styles.cardTag}>{f.tag}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.flowSection}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className={styles.flowTitle}>Signal Flow</h3>
          <div className={styles.flow}>
            {flowSteps.map((step, i) => (
              <div key={step} className={styles.flowItem}>
                <div className={styles.flowNode}>
                  <span className={styles.flowNum}>{i + 1}</span>
                  <span>{step}</span>
                </div>
                {i < flowSteps.length - 1 && (
                  <div className={styles.flowConnector}>
                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                      <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

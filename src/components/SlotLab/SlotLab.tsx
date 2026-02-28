import styles from "./SlotLab.module.css";

const features = [
  {
    title: "Per-Reel Anticipation",
    desc: "L1–L4 tension system with musical escalation. Each reel builds anticipation independently with pitch rising, tempo acceleration, and filter sweeps.",
    tag: "Tension",
  },
  {
    title: "Adaptive Layer Engine",
    desc: "18+ built-in signals, context-aware layering with game chapters (BASE, FREESPINS, HOLDWIN), 16 comparison operators, and 6 stability mechanisms.",
    tag: "ALE",
  },
  {
    title: "Event Sync System",
    desc: "Stage→Event mapping for deterministic audio triggers. Every spin event — scatter, wild, bonus — precisely synced with the audio timeline.",
    tag: "Events",
  },
  {
    title: "Win Celebrations",
    desc: "Data-driven win tiers with configurable rollup durations, thresholds, and multiplier ranges. From small wins to jackpot celebrations.",
    tag: "Wins",
  },
  {
    title: "8-Bus Mixer",
    desc: "Master, SFX, Music, Voice, Ambience, UI, Reels, Wins — full bus routing with per-bus DSP chain, volume, and spatial control.",
    tag: "Mixer",
  },
  {
    title: "WASM Runtime",
    desc: "WebAssembly port with Web Audio API integration, 32-voice pooling, RTPC parameters, and state groups. ~38KB gzipped.",
    tag: "Web",
  },
];

export default function SlotLab() {
  return (
    <section id="slotlab" className={`section ${styles.slotlab}`}>
      <div className="container">
        <span className="section-label">SlotLab</span>
        <h2 className="section-title">
          Casino-Grade{" "}
          <span style={{ color: "var(--accent-green)" }}>Game Audio</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          A complete game audio authoring environment for slot machines and
          casino games — from anticipation builds to jackpot celebrations.
        </p>

        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.cardTag}>{f.tag}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Signal flow diagram */}
        <div className={styles.flowSection}>
          <h3 className={styles.flowTitle}>SlotLab Signal Flow</h3>
          <div className={styles.flow}>
            <div className={styles.flowNode}>Spin Event</div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowNode}>Reel Animation</div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowNode}>Anticipation L1–L4</div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowNode}>Stop &amp; Reveal</div>
            <div className={styles.flowArrow}>&rarr;</div>
            <div className={styles.flowNode}>Win Celebration</div>
          </div>
        </div>
      </div>
    </section>
  );
}

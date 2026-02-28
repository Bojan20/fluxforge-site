import styles from "./TechStack.module.css";

const techItems = [
  {
    category: "Languages",
    items: [
      { name: "Rust", pct: 54, color: "var(--accent-orange)", desc: "DSP, audio engine, FFI bridge" },
      { name: "Dart", pct: 45, color: "var(--accent-cyan)", desc: "Flutter UI, state management" },
      { name: "WGSL", pct: 1, color: "var(--accent-purple)", desc: "GPU shaders (rf-viz)" },
    ],
  },
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
  return (
    <section id="tech" className={`section ${styles.tech}`}>
      <div className="container">
        <span className="section-label">Tech Stack</span>
        <h2 className="section-title">
          Built with{" "}
          <span style={{ color: "var(--accent-orange)" }}>Rust</span> &{" "}
          <span style={{ color: "var(--accent-cyan)" }}>Flutter</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          A monorepo workspace with 12+ specialized crates — from real-time DSP
          to neural audio processing.
        </p>

        {/* Language bars */}
        <div className={styles.langSection}>
          {techItems[0].items.map((item) => (
            <div key={item.name} className={styles.langRow}>
              <div className={styles.langLabel}>
                <span className={styles.langName}>{item.name}</span>
                <span className={styles.langDesc}>{item.desc}</span>
              </div>
              <div className={styles.langBarTrack}>
                <div
                  className={styles.langBar}
                  style={{
                    width: `${item.pct}%`,
                    background: item.color,
                  }}
                />
              </div>
              <span className={styles.langPct}>{item.pct}%</span>
            </div>
          ))}
        </div>

        {/* Crate grid */}
        <h3 className={styles.cratesHeading}>Rust Workspace Crates</h3>
        <div className={styles.crateGrid}>
          {crates.map((c) => (
            <div key={c.name} className={styles.crateCard}>
              <div className={styles.crateHeader}>
                <span className={styles.crateName}>{c.name}</span>
                <span className={styles.crateLoc}>{c.loc} LOC</span>
              </div>
              <p className={styles.crateDesc}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

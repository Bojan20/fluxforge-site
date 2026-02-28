import styles from "./DSP.module.css";

const panels = [
  {
    name: "FF-Q 64",
    full: "64-Band Parametric EQ",
    inspiration: "Pro-Q 3",
    features: "8-band parametric, I/O metering, spectrum analyzer, 7 filter shapes",
    color: "var(--accent-blue)",
  },
  {
    name: "FF-C",
    full: "Compressor",
    inspiration: "Pro-C 2",
    features: "Transfer curve, knee display, 14 styles, sidechain EQ, lookahead",
    color: "var(--accent-orange)",
  },
  {
    name: "FF-L",
    full: "Limiter",
    inspiration: "Pro-L 2",
    features: "LUFS metering, 8 styles, true peak, GR history, 8x oversampling",
    color: "var(--accent-red)",
  },
  {
    name: "FF-G",
    full: "Gate",
    inspiration: "Pro-G",
    features: "State indicator, threshold viz, hysteresis, sidechain filter, range",
    color: "var(--accent-green)",
  },
  {
    name: "FF-R",
    full: "Reverb",
    inspiration: "Pro-R",
    features: "Decay display, pre-delay, 8 space types, EQ, damping, size control",
    color: "var(--accent-purple)",
  },
  {
    name: "FF-SAT",
    full: "Saturation",
    inspiration: "Saturn 2",
    features: "6-band multiband, per-band drive/type/dynamics, crossover editor",
    color: "var(--accent-pink)",
  },
  {
    name: "FF-DLY",
    full: "Delay",
    inspiration: "Timeless 3",
    features: "Ping-pong, tempo sync, modulation, filter, ducking, freeze mode",
    color: "var(--accent-cyan)",
  },
  {
    name: "FF-E",
    full: "De-Esser",
    inspiration: "Pro-DS",
    features: "Frequency display, listen mode, wide/split band, 8 parameters",
    color: "var(--accent-blue)",
  },
];

export default function DSP() {
  return (
    <section id="dsp" className={`section ${styles.dsp}`}>
      <div className="container">
        <span className="section-label">DSP Panels</span>
        <h2 className="section-title">
          FabFilter-Class{" "}
          <span style={{ color: "var(--accent-orange)" }}>Processing</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          9 premium DSP panels with A/B snapshot comparison, undo/redo, preset
          browser, and professional-grade UI — all powered by Rust SIMD.
        </p>

        <div className={styles.grid}>
          {panels.map((p) => (
            <div
              key={p.name}
              className={styles.panel}
              style={{ "--panel-color": p.color } as React.CSSProperties}
            >
              <div className={styles.panelHeader}>
                <span className={styles.panelName}>{p.name}</span>
                <span className={styles.panelInspiration}>{p.inspiration}</span>
              </div>
              <h3 className={styles.panelFull}>{p.full}</h3>
              <p className={styles.panelFeatures}>{p.features}</p>
              <div className={styles.panelControls}>
                <span className={styles.knob} />
                <span className={styles.knob} />
                <span className={styles.knob} />
                <span className={styles.knobSmall} />
                <span className={styles.knobSmall} />
              </div>
            </div>
          ))}
        </div>

        {/* DSP Rules */}
        <div className={styles.rules}>
          <h3 className={styles.rulesTitle}>Audio Thread Rules</h3>
          <div className={styles.rulesGrid}>
            <div className={styles.ruleBlock}>
              <span className={styles.ruleIcon}>&#10060;</span>
              <div>
                <strong>Forbidden</strong>
                <p>Heap allocations, Mutex/RwLock, System calls, Panic</p>
              </div>
            </div>
            <div className={styles.ruleBlock}>
              <span className={styles.ruleIcon}>&#9989;</span>
              <div>
                <strong>Allowed</strong>
                <p>Stack allocations, Pre-allocated buffers, Atomics, SIMD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

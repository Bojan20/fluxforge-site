import styles from "./Architecture.module.css";

const layers = [
  {
    num: "7",
    name: "Application Shell",
    tech: "Flutter Desktop",
    details: "Native macOS/Windows/Linux, file dialogs, project save/load, plugin hosting",
    color: "var(--accent-blue)",
  },
  {
    num: "6",
    name: "GUI Framework",
    tech: "Flutter + Dart",
    details: "Skia/Impeller GPU backend, custom knobs/faders/meters, 120fps, Provider state",
    color: "var(--accent-cyan)",
  },
  {
    num: "5",
    name: "FFI Bridge",
    tech: "dart:ffi → Rust",
    details: "6000+ LOC bindings, lock-free parameter sync, real-time metering data",
    color: "var(--accent-green)",
  },
  {
    num: "4",
    name: "State Management",
    tech: "Dart Providers",
    details: "Undo/Redo command pattern, A/B comparison, preset management, automation",
    color: "var(--accent-purple)",
  },
  {
    num: "3",
    name: "Audio Engine",
    tech: "Rust: rf-engine",
    details: "Dual-path real-time + guard, graph routing, 6 buses + master, sidechain",
    color: "var(--accent-orange)",
  },
  {
    num: "2",
    name: "DSP Processors",
    tech: "Rust: rf-dsp",
    details: "64-band EQ, dynamics, spatial, time, analysis — ALL SIMD optimized",
    color: "var(--accent-red)",
  },
  {
    num: "1",
    name: "Audio I/O",
    tech: "Rust: cpal",
    details: "ASIO/CoreAudio/JACK/PipeWire, 44.1–384kHz, 32–4096 sample buffers",
    color: "var(--accent-pink)",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className={`section ${styles.arch}`}>
      <div className="container">
        <span className="section-label">Architecture</span>
        <h2 className="section-title">
          7 Layers of{" "}
          <span style={{ color: "var(--accent-purple)" }}>Audio Excellence</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
          From hardware I/O to pixel-perfect UI — every layer is purpose-built
          for professional audio production.
        </p>

        <div className={styles.stack}>
          {layers.map((layer) => (
            <div
              key={layer.num}
              className={styles.layer}
              style={{ "--layer-color": layer.color } as React.CSSProperties}
            >
              <div className={styles.layerNum}>{layer.num}</div>
              <div className={styles.layerContent}>
                <div className={styles.layerHeader}>
                  <h3 className={styles.layerName}>{layer.name}</h3>
                  <span className={styles.layerTech}>{layer.tech}</span>
                </div>
                <p className={styles.layerDetails}>{layer.details}</p>
              </div>
              <div className={styles.layerAccent} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

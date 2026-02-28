import styles from "./Features.module.css";

const features = [
  {
    icon: "🎛",
    title: "64-Band Parametric EQ",
    desc: "Unified EQ with SVF + MZT + oversampling + saturation. TDF-II biquads, linear/hybrid phase. FabFilter Pro-Q level.",
    accent: "var(--accent-blue)",
  },
  {
    icon: "🔊",
    title: "Zero-Allocation DSP",
    desc: "Pure Rust audio thread — no heap allocs, no locks, no panics. Pre-allocated buffers, atomics, SIMD-optimized processing.",
    accent: "var(--accent-orange)",
  },
  {
    icon: "🧠",
    title: "AI Mastering Engine",
    desc: "Genre-aware processing with LUFS targeting, spectral balance, multiband dynamics, true peak limiting with 8x oversampling.",
    accent: "var(--accent-purple)",
  },
  {
    icon: "🎰",
    title: "SlotLab Game Audio",
    desc: "Casino-grade deterministic audio with per-reel anticipation, adaptive layers, win tier celebrations, and event sync system.",
    accent: "var(--accent-green)",
  },
  {
    icon: "⚡",
    title: "SIMD Processing",
    desc: "Runtime dispatch: AVX-512 → AVX2 → SSE4.2 → NEON → scalar. Every DSP processor is SIMD-optimized for maximum throughput.",
    accent: "var(--accent-cyan)",
  },
  {
    icon: "🎹",
    title: "Plugin Hosting",
    desc: "VST3, Audio Unit, and CLAP plugin scanner & hosting. Full sidechain support, insert/send effects, 6 buses + master.",
    accent: "var(--accent-pink)",
  },
  {
    icon: "🎬",
    title: "Video Engine",
    desc: "Frame-accurate A/V sync with H.264/H.265/ProRes/DNxHD. SMPTE timecode, EDL/AAF import, thumbnail strip generation.",
    accent: "var(--accent-red)",
  },
  {
    icon: "📜",
    title: "Lua Scripting",
    desc: "Full automation API with access to tracks, clips, parameters, and transport. Custom macros, LFOs, and algorithmic edits.",
    accent: "var(--accent-blue)",
  },
  {
    icon: "🔬",
    title: "Neural Processing",
    desc: "DeepFilterNet3 denoising, HTDemucs v4 stem separation, speech enhancement. CUDA/CoreML/tract backends.",
    accent: "var(--accent-purple)",
  },
];

export default function Features() {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <span className="section-label">Features</span>
        <h2 className="section-title">
          Everything You Need,{" "}
          <span style={{ color: "var(--accent-blue)" }}>Nothing You Don't</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: "3.5rem" }}>
          From low-level DSP to high-level AI — a complete professional audio
          production environment.
        </p>

        <div className={styles.grid}>
          {features.map((f) => (
            <article
              key={f.title}
              className={styles.card}
              style={{ "--card-accent": f.accent } as React.CSSProperties}
            >
              <div className={styles.cardIcon}>{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardGlow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Rust + Flutter + SIMD
        </div>

        <h1 className={styles.headline}>
          Professional Audio
          <br />
          <span className={styles.headlineAccent}>Reimagined</span>
        </h1>

        <p className={styles.subtitle}>
          A 7-layer audio engine with 64-band EQ, AI mastering, and casino-grade
          game audio — built with zero-allocation Rust DSP and GPU-accelerated
          Flutter UI.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>64</span>
            <span className={styles.statLabel}>EQ Bands</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>&lt;1ms</span>
            <span className={styles.statLabel}>Latency</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>384kHz</span>
            <span className={styles.statLabel}>Sample Rate</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>AVX-512</span>
            <span className={styles.statLabel}>SIMD</span>
          </div>
        </div>

        <div className={styles.actions}>
          <a href="#features" className={styles.btnPrimary}>
            Explore Features
          </a>
          <a href="#architecture" className={styles.btnSecondary}>
            View Architecture
          </a>
        </div>
      </div>

      <div className={styles.visualizer}>
        <div className={styles.waveform}>
          {Array.from({ length: 48 }, (_, i) => (
            <div
              key={i}
              className={styles.bar}
              style={{
                height: `${20 + Math.sin(i * 0.3) * 30 + Math.cos(i * 0.7) * 20}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

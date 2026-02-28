import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.logoIcon}>&#9881;</span>
            FluxForge Studio
          </span>
          <p className={styles.tagline}>
            Professional audio production with Rust DSP and Flutter UI.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Product</h4>
            <a href="#features">Features</a>
            <a href="#architecture">Architecture</a>
            <a href="#tech">Tech Stack</a>
            <a href="#dsp">DSP Panels</a>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Audio</h4>
            <a href="#slotlab">SlotLab</a>
            <a href="#dsp">Processing</a>
            <a href="#architecture">Engine</a>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Tech</h4>
            <span className={styles.techTag}>Rust</span>
            <span className={styles.techTag}>Flutter</span>
            <span className={styles.techTag}>SIMD</span>
            <span className={styles.techTag}>WASM</span>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} FluxForge Studio. Built with zero
            compromises.
          </p>
        </div>
      </div>
    </footer>
  );
}

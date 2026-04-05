import { motion } from "framer-motion";
import { useScrollReveal, fadeUp } from "../../hooks/useScrollReveal";
import styles from "./CTA.module.css";

export default function CTA() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className={`section ${styles.cta}`}>
      <div className="container" ref={ref}>
        <motion.div
          className={styles.card}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glow} />

          <motion.span
            className={styles.label}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Get Started
          </motion.span>

          <motion.h2
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to Build the
            <br />
            <span className="gradient-text">Future of Audio?</span>
          </motion.h2>

          <motion.p
            className={styles.desc}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            FluxForge Studio is a professional DAW built from the ground up with Rust
            performance and Flutter elegance. Whether you're mastering tracks or designing
            casino game audio — this is your engine.
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="mailto:contact@fluxforge.studio" className={styles.btnPrimary}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M1 5l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Contact Us
            </a>
            <a href="#features" className={styles.btnSecondary}>
              Explore the Stack
            </a>
          </motion.div>

          <motion.div
            className={styles.stats}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className={styles.stat}>
              <span className={styles.statVal}>40K+</span>
              <span className={styles.statLbl}>Lines of Rust</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>12</span>
              <span className={styles.statLbl}>Crates</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>9</span>
              <span className={styles.statLbl}>DSP Panels</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statVal}>7</span>
              <span className={styles.statLbl}>Arch Layers</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

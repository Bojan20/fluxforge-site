import { motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import styles from "./Hero.module.css";

const stats = [
  { value: "64", label: "EQ Bands" },
  { value: "<1ms", label: "Latency" },
  { value: "384kHz", label: "Sample Rate" },
  { value: "AVX-512", label: "SIMD" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    const count = Math.min(80, Math.floor(window.innerWidth / 15));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x * canvas.width;
      const my = mouseRef.current.y * canvas.height;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 152, 255, ${p.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99, 152, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const dmx = p.x - mx;
        const dmy = p.y - my;
        const dMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (dMouse < 200) {
          const alpha = (1 - dMouse / 200) * 0.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.particleCanvas} />
      <div className={styles.bgGlow} />
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <motion.div
          className={styles.logoContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <div className={styles.logoGlow} />
          <div className={styles.logoRing} />
          <img src="/logo.png" alt="FluxForge Studio" className={styles.heroLogo} />
        </motion.div>

        <motion.div
          className={styles.badge}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
        >
          <span className={styles.badgeDot} />
          Rust + Flutter + SIMD
        </motion.div>

        <motion.h1
          className={styles.headline}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease }}
        >
          Professional Audio
          <br />
          <span className={styles.headlineAccent}>Reimagined</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6, ease }}
        >
          A 7-layer audio engine with 64-band EQ, AI mastering, and casino-grade
          game audio — built with zero-allocation Rust DSP and GPU-accelerated
          Flutter UI.
        </motion.p>

        <motion.div
          className={styles.stats}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className={styles.stat}>
              {i > 0 && <div className={styles.statDivider} />}
              <div className={styles.statInner}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6, ease }}
        >
          <a href="#features" className={styles.btnPrimary}>
            <span>Explore Features</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#architecture" className={styles.btnSecondary}>
            View Architecture
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.visualizer}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8, ease }}
      >
        <div className={styles.vizLabel}>
          <span className={styles.vizDot} />
          Live Audio Engine
        </div>
        <div className={styles.waveform}>
          {Array.from({ length: 64 }, (_, i) => (
            <div
              key={i}
              className={styles.bar}
              style={{
                height: `${15 + Math.sin(i * 0.25) * 35 + Math.cos(i * 0.6) * 25}%`,
                animationDelay: `${i * 0.04}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className={styles.scrollHint}>
        <motion.div
          className={styles.scrollLine}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease }}
        />
      </div>
    </section>
  );
}

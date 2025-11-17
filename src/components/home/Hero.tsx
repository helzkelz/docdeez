import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <span className={styles.heroTag}>Prelaunch 2025</span>
      <h1 className={styles.heroTitle}>
        Neurodivergent isn’t a niche. It’s the nucleus.
      </h1>
      <p className={styles.heroSubtitle}>
        We’re shipping a capsule drop, a ritual voice loop, and an
        operational OS that puts neurodivergent safety first. This hub keeps
        investors, partners, and community locked on the plan.
      </p>
      <div className={styles.heroMeta}>
        <span>Launch Week · Q1 2025</span>
        <span>Capsule Drop · Ritual Voice Mirror · Readiness Ops</span>
      </div>
      <div className={styles.heroActions}>
        <a className={styles.ctaPrimary} href="#waitlist">
          Join the Waitlist
        </a>
        <a
          className={styles.ctaSecondary}
          href="docs/prelaunch/overview/"
        >
          Review the Launch Plan
        </a>
      </div>
    </header>
  );
}

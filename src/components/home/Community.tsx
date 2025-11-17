import React from 'react';
import styles from './Community.module.css';

export default function Community() {
  return (
    <div className={styles.communityBlock}>
      <blockquote className={styles.quote}>
        “Neuronucleus gave me language I never had. The rituals don’t fix
        me—they remind me I was never broken.” — Alex, 28
      </blockquote>
      <p className={styles.stats}>
        Daily rituals · Founding storytellers · Consent-first storytelling
      </p>
      <p>
        Have a voice, platform, or audience that needs the neurodiversity story
        told right? Reach out at{' '}
        <a href="mailto:launch@neuronucleus.com">launch@neuronucleus.com</a> and
        we’ll plug you straight into launch programming.
      </p>
      <div className={styles.heroActions}>
        <a
          className={styles.ctaPrimary}
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter the Ritual Discord
        </a>
        <a
          className={styles.ctaSecondary}
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow the Signal
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './Section.module.css';

export default function Section({
  id,
  title,
  subtitle,
  children,
  isFinal = false,
}) {
  return (
    <section id={id} className={isFinal ? styles.sectionFinal : styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
      {children}
    </section>
  );
}

import React from 'react';
import styles from './Stats.module.css';

export function StatGrid({ children }) {
  return <div className={styles.statGrid}>{children}</div>;
}

export function StatCard({ value, children }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <p>{children}</p>
    </div>
  );
}

import React from 'react';
import styles from './Timeline.module.css';

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map(({ phase, body }) => (
        <div key={phase} className={styles.timelineItem}>
          <div className={styles.timelinePhase}>{phase}</div>
          <p className={styles.timelineBody}>{body}</p>
        </div>
      ))}
    </div>
  );
}

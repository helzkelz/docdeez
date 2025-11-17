import React from 'react';
import styles from './Card.module.css';

export function CardGrid({ children }) {
  return <div className={styles.cardGrid}>{children}</div>;
}

export function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

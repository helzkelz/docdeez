import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './FadeIn.module.css';

export default function FadeIn({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`${styles.fadeIn} ${inView ? styles.visible : ''}`}>
      {children}
    </div>
  );
}

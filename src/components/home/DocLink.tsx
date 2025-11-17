import React from 'react';
import Link from '@docusaurus/Link';
import styles from './DocLink.module.css';

export function DocLinkGrid({ children }) {
  return <div className={styles.linkGrid}>{children}</div>;
}

export function DocLink({ href, title, children }) {
  return (
    <Link className={styles.linkCard} to={href}>
      <div className={styles.linkCardTitle}>{title}</div>
      <p>{children}</p>
    </Link>
  );
}

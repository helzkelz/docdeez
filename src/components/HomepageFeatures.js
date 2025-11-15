import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Neurodivergent-First AI',
    description: (
      <>
        AI-powered automation designed for neurodivergent users, reducing cognitive load
        and fostering growth through structured, supportive workflows.
      </>
    ),
  },
  {
    title: 'Comprehensive Ecosystem',
    description: (
      <>
        Explore the full HelenKella ecosystem, from AI orchestration to
        content moderation and voice integrations.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>What is Neunuc?</h2>
          <p>Built by the excluded for inclusion. The HelenKella Neunuc System transforms niche needs into nucleus capabilities through ethical AI engagement, not exploitation.</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
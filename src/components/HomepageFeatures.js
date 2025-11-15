import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Neurodivergent-First AI',
    description: (
      <>
        Godmode is designed for neurodivergent users, providing AI-powered automation
        that reduces cognitive load and fosters growth through structured, supportive workflows.
      </>
    ),
  },
  {
    title: 'Comprehensive Ecosystem',
    description: (
      <>
        Explore the full HelenKella and Neunuc ecosystems, from AI orchestration to
        content moderation and beyond.
      </>
    ),
  },
  {
    title: 'Open Documentation',
    description: (
      <>
        Built with Docusaurus, this site provides clear, accessible documentation
        for all aspects of the Godmode system and related platforms.
      </>
    ),
  },
];

const OnboardingSteps = [
  {
    step: 1,
    title: 'Understand the Philosophy',
    description: 'Learn about Godmode\'s core principles of cognitive safety and automated executive function.',
    link: '/docs/godmode/godmode-overview',
  },
  {
    step: 2,
    title: 'Explore the Architecture',
    description: 'Dive into the layered system design and how components interact.',
    link: '/docs/godmode/godmode-architecture',
  },
  {
    step: 3,
    title: 'Review Sub-systems',
    description: 'Understand the cognitive and culture sub-systems that power Godmode.',
    link: '/docs/godmode/godmode-subsystems',
  },
  {
    step: 4,
    title: 'Master Plan',
    description: 'Get the complete ecosystem overview and development roadmap.',
    link: '/docs/godmode/ecosystem-master-plan',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function OnboardingStep({step, title, description, link}) {
  return (
    <div className={clsx('col col--3', styles.step)}>
      <div className={styles.stepNumber}>{step}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link className="button button--outline button--primary" to={link}>
        Learn More
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>What is Godmode?</h2>
          <p>The HelenKella Godmode System is an AI-powered framework for neurodivergent users.</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        <div className="text--center margin-top--xl margin-bottom--lg">
          <h2>Get Started</h2>
          <p>Follow these steps to understand and implement Godmode in your workflow.</p>
        </div>
        <div className="row">
          {OnboardingSteps.map((props, idx) => (
            <OnboardingStep key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Section from '../components/home/Section';
import { Card, CardGrid } from '../components/home/Card';
import Timeline from '../components/home/Timeline';
import { StatCard, StatGrid } from '../components/home/Stats';
import { DocLink, DocLinkGrid } from '../components/home/DocLink';
import Waitlist from '../components/home/Waitlist';
import Community from '../components/home/Community';

import styles from './index.module.css';

const pillars = [
  {
    title: 'Signal',
    body: 'A capsule merch drop that lets neurodivergent identity live in full daylight. Badge tee, limited hoodie, launch cap—each one a declaration, not an apology.',
  },
  {
    title: 'Support',
    body: 'Daily ritual voice loop inside Discord. Whisper-backed transcription, consent-aware storage, and prompts built to keep executive function on track.',
  },
  {
    title: 'Systems',
    body: 'Enterprise-grade architecture with BethyOps orchestration, consent ledgers, and automation that proves this isn’t just merch—it’s an operating model.',
  },
  {
    title: 'Safety',
    body: 'Trauma-informed defaults, Safe-Mode UX, and compliance guardrails that make access the priority and harm reduction non-negotiable.',
  },
];

const timelineItems = [
  {
    phase: 'Ignite · Weeks -4 → -2',
    body: 'Finalize assets, QA every ritual flow, lock fulfilment. Exit when the readiness checklist is all green.',
  },
  {
    phase: 'Rally · Weeks -2 → 0',
    body: 'Run the content drumbeat, activate partners, grow the waitlist to 1k, and brief moderators on Safe-Mode playbooks.',
  },
  {
    phase: 'Drop · Launch Week',
    body: 'Daily live programming, merch release, ritual showcases, compliance AMA. Goal: 80% sell-through and >60% ritual adoption.',
  },
  {
    phase: 'Sustain · Weeks +1 → +4',
    body: 'Survey loops, automation tuning, next drop planning, inbound partnerships triage.',
  },
];

const stats = [
  { value: '500+', label: 'Community members already in ritual loops' },
  { value: '7', label: 'Compliance subsystems active at launch' },
  { value: '4', label: 'Launch-week programs scheduled' },
  { value: '12', label: 'Founding storytellers queued for spotlight' },
];

const docLinks = [
  {
    href: '/docs/prelaunch/prelaunch-overview/',
    title: 'Prelaunch Overview',
    copy: 'Narrative, positioning, and go-to-market motions in one place.',
  },
  {
    href: '/docs/prelaunch/prelaunch-readiness/',
    title: 'Readiness Dashboard',
    copy: 'Scoreboard, risks, and checklists for launch sign-off.',
  },
  {
    href: '/docs/godmode/godmode-architecture/',
    title: 'Godmode Architecture',
    copy: 'Layered system design and orchestrator details.',
  },
  {
    href: '/docs/godmode/godmode-integrations/',
    title: 'Voice Ritual Integration',
    copy: 'How the Discord + Whisper flow works and how we safeguard it.',
  },
  {
    href: '/docs/godmode/godmode-neunuc-architecture-reference-guide/',
    title: 'Neunuc Reference Guide',
    copy: 'Deep dive on data flows, modularity, and compliance hooks.',
  },
];

const carouselPlaceholders = [
  {
    title: 'Embed Slot A',
    body: 'Use for the launch-day livestream or hero video embed.',
    hint: 'Replace `<EmbedCarousel slot="A" />` with production iframe when asset is ready.',
  },
  {
    title: 'Embed Slot B',
    body: 'Feature Instagram carousel or community highlight reel here.',
    hint: 'Point to the approved social embed snippet during Rally phase.',
  },
  {
    title: 'Embed Slot C',
    body: 'Reserve for testimonial clips or partner spotlights.',
    hint: 'Swap in partner-provided iframe or video player before launch.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Neunuc nūc"
      description="nūc — From niche to nucleus.">
      <main>
        <header className={clsx('hero hero--dark', styles.heroCustom)}>
          <div className="container">
            <h1 className="hero__title">neunuc</h1>
            <p className="hero__subtitle">
              <span className="nuc-glow">nūc</span> — From niche to nucleus.
            </p>
          </div>
        </header>

        <Section
          title="What goes live at launch"
          subtitle="We’re delivering tangible signal, daily support, systems rigor, and non-negotiable safety. Four pillars, one launch story."
        >
          <CardGrid>
            {pillars.map(({ title, body }) => (
              <Card key={title} title={title}>
                {body}
              </Card>
            ))}
          </CardGrid>
        </Section>

        <Section
          id="waitlist"
          title="Waitlist & community activation"
          subtitle="The waitlist flow connects straight into segmented nurture paths. Every cohort receives language that respects cognitive load and builds excitement without overwhelm."
        >
          <Waitlist />
        </Section>

        <Section
          title="Launch timeline"
          subtitle="We run the same cadence we expect from enterprise programs—clear phases, measurable exit criteria, no hand-wavy hype."
        >
          <Timeline items={timelineItems} />
        </Section>

        <Section
          title="Embed carousel staging"
          subtitle="Drop in livestreams, social highlights, or ritual replays. Replace these placeholders with the EmbedCarousel component once creative is locked."
        >
          <CardGrid>
            {carouselPlaceholders.map(({ title, body, hint }) => (
              <div key={title} className={styles.placeholder}>
                <div className={styles.placeholderTitle}>{title}</div>
                <p className={styles.placeholderBody}>{body}</p>
                <p className={styles.placeholderHint}>{hint}</p>
              </div>
            ))}
          </CardGrid>
        </Section>

        <Section
          title="Operational confidence"
          subtitle="Architecture, compliance, and storytelling already have traction. These are the headlines driving investor trust and community belief."
        >
          <StatGrid>
            {stats.map(({ value, label }) => (
              <StatCard key={label} value={value}>
                {label}
              </StatCard>
            ))}
          </StatGrid>
        </Section>

        <Section
          title="Documentation fast-pass"
          subtitle="Everything an operator, investor, or partner needs before launch. No guessing, no walled gardens."
        >
          <DocLinkGrid>
            {docLinks.map(({ href, title, copy }) => (
              <DocLink key={href} href={href} title={title}>
                {copy}
              </DocLink>
            ))}
          </DocLinkGrid>
        </Section>

        <Section isFinal={true} title="Community + trust">
          <Community />
        </Section>
      </main>
    </Layout>
  );
}

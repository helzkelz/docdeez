---
id: covert-quotient-model
title: Covert Quotient (CQ) Layered Behavioral Model
sidebar_label: Covert Quotient Model
---

## Table of Contents

- [Introduction](#introduction)
- [Layered System Diagram](#layered-system-diagram)
- [1. Personality Typing Frameworks](#1-personality-typing-frameworks)
- [2. Attachment Styles & Resonance](#2-attachment-styles--resonance)
- [3. BDSM Compatibility](#3-bdsm-compatibility)
- [4. Archetype Systems](#4-archetype-systems)
- [5. Trait Recognition from Observable Behavior](#5-trait-recognition-from-observable-behavior)
- [6. Resonance Mechanics](#6-resonance-mechanics)
- [7. Neurodivergent Patterns](#7-neurodivergent-patterns)
- [8. System Layering & Integration Architecture](#8-system-layering--integration-architecture)
- [Glossary](#glossary)
- [Implementation Checklist](#implementation-checklist)

---

## Introduction

> **TL;DR:** The Covert Quotient (CQ) model measures hidden psychological traits and resonance compatibility using a multi-layered approach. It integrates personality, attachment, kink dynamics, archetypes, neurodivergence, and real-world behavior for adaptive, explainable compatibility and resonance analysis.

---

## Layered System Diagram

![CQ Layered Model Diagram](https://ppl-ai-code-interpreter-files.s3.amazonaws.com/web/direct-files/adc9c57d3f692087e82604033954e9b5/8c80de49-6222-40d1-bd88-4cce508ee9f8/168a7680.png)
_Color-coded: [🟢 User], [🔴 Core], [🔵 Infra], [🟠 Automation], [🟣 Compliance], [🟡 External], [MODULAR], [EVENT-DRIVEN], [🧠 ND-FIRST]_

---

## 1. Personality Typing Frameworks

> **Quick Reference:**
>
> - MBTI, Big Five, Enneagram, Jungian Functions, Shadow
> - Cross-mapped for overt/covert trait recognition
> - Compatibility matrix: MBTI ↔ Big Five ↔ Enneagram

| System    | Key Traits | Covert Signals | Compatibility Flags |
| --------- | ---------- | -------------- | ------------------- |
| MBTI      | 16 types   | Shadow stack   | Function match      |
| Big Five  | OCEAN      | Facet scores   | Trait alignment     |
| Enneagram | 9 types    | Motivations    | Growth/stress       |
| Jungian   | Functions  | Shadow         | Persona/Shadow      |

**Example:** INTJ (MBTI) + Type 5 (Enneagram) = Analytical, reserved, covert independence.

---

## 2. Attachment Styles & Resonance

> **Quick Reference:**
>
> - Secure, Anxious, Avoidant, Disorganized
> - Drives emotional resonance and relationship patterns
> - Compatibility matrix: Secure–Secure (high), Anxious–Avoidant (low)

| Style        | Overt Behavior    | Covert Needs | Resonance Impact   |
| ------------ | ----------------- | ------------ | ------------------ |
| Secure       | Open, stable      | Regulation   | High synchrony     |
| Anxious      | Clingy, volatile  | Reassurance  | Amplifies distress |
| Avoidant     | Distant, reserved | Autonomy     | Deflects resonance |
| Disorganized | Inconsistent      | Trust/safety | Volatile           |

**Scenario:** Anxious–Avoidant pairing triggers pursue-distance cycle; Secure partner stabilizes resonance.

---

## 3. BDSM Compatibility

> **Quick Reference:**
>
> - Dom/Sub/Switch roles, archetypes, SSC vs RACK
> - Power dynamics mapped to personality/attachment
> - Compatibility matrix: Role, risk tolerance, aftercare needs

| Role       | Personality | Attachment | Archetype | Risk Profile |
| ---------- | ----------- | ---------- | --------- | ------------ |
| Dominant   | Assertive   | Avoidant   | Ruler     | RACK         |
| Submissive | Agreeable   | Anxious    | Pet/Slave | SSC          |
| Switch     | Flexible    | Secure     | Explorer  | Mixed        |

**Example:** Nurturing Dom (ENFJ, Secure) + Anxious Sub = High compatibility with structured aftercare.

---

## 4. Archetype Systems

> **Quick Reference:**
>
> - Jungian, mythological, narrative archetypes
> - Maps behavior to story roles for resonance prediction
> - Compatibility: Complementary archetypes (Hero–Mentor)

| Archetype | Traits     | Shadow        | Resonance Role |
| --------- | ---------- | ------------- | -------------- |
| Caregiver | Nurturing  | Martyrdom     | Supporter      |
| Warrior   | Protective | Vulnerability | Defender       |
| Creator   | Innovative | Chaos         | Innovator      |
| Rebel     | Nonconform | Isolation     | Challenger     |

**Scenario:** Two Creators collaborate well, but need a Caregiver for emotional balance.

---

## 5. Trait Recognition from Observable Behavior

> **Quick Reference:**
>
> - NLP, nonverbal cues, stress responses, masking
> - Maps behavior to trait signals, flags inconsistencies
> - Audit trail for explainability

**Pseudocode:**

```python
traits = analyze_language(user.text)
nonverbal = analyze_video(user.video)
stress = detect_stress(user.physio)
if traits != user.self_report:
    flag_masking()
```

**Example:** High negative emotion words + forced smile = covert stress.

---

## 6. Resonance Mechanics

> **Quick Reference:**
>
> - Emotional synchrony, psychographic harmonics, cognitive style alignment
> - Empathy bandwidth, mirroring vs deflection
> - Resonance Index for compatibility

| Mechanic     | Measurement     | Impact         |
| ------------ | --------------- | -------------- |
| Synchrony    | Sentiment match | High resonance |
| Harmonics    | Value alignment | Smooth flow    |
| Style Align  | Turn-taking     | Low friction   |
| Empathy Band | Responsiveness  | Depth of bond  |

**Scenario:** Two high empathy users mirror each other’s tone, boosting resonance.

---

## 7. Neurodivergent Patterns

> **Quick Reference:**
>
> - Autism, ADHD, BPD, CPTSD, HSP
> - Masking/unmasking, sensory needs, ND-first explainability
> - Dual profile: public vs private self

| ND Type | Key Patterns       | Resonance Needs    | Model Adjustments |
| ------- | ------------------ | ------------------ | ----------------- |
| Autism  | Masking, interests | Literal cues       | CAT-Q, SQ         |
| ADHD    | Variability        | Structure, play    | Context tracking  |
| BPD     | Volatility         | Stability, repair  | State model       |
| CPTSD   | Triggers, fawn     | Safety, boundaries | Trauma flags      |
| HSP     | Sensory overload   | Quiet, downtime    | Sensory param     |

**Example:** Autistic user resonates via shared interests, not small talk; model adapts feedback.

---

## 8. System Layering & Integration Architecture

> **Quick Reference:**
>
> - Factor weighting, bias loops, feedback calibration, audit trails, explainability
> - Modular layers, adaptive UI, pseudocode logic

**Pseudocode:**

```python
score = weight_traits(personality, attachment, archetype)
adjust_for_nd(user)
resonance = measure_synchrony(interaction)
CQ = compute_CQ(score, resonance)
explain(CQ)
```

**Diagram:** See [Layered System Diagram](#layered-system-diagram)

---

## Glossary

- **Resonance**: Emotional/cognitive alignment between people
- **Shadow**: Repressed or opposite traits in Jungian theory
- **Masking**: Suppressing true traits to fit in
- **Limbic Synchrony**: Shared emotional state via limbic system
- **SSC/RACK**: Safety frameworks in BDSM
- **Empathy Bandwidth**: Range/capacity for empathy
- **ND-First**: Neurodivergent-first design/adaptation

---

## Implementation Checklist

- [x] Table of contents for navigation
- [x] Layered system diagram (color-coded)
- [x] Summary tables for each layer
- [x] Quick reference/TL;DR boxes
- [x] Code/pseudocode blocks for logic flows
- [x] Glossary for key terms
- [x] Cross-linking to related docs
- [x] Accessibility: clear headers, direct language
- [x] Real-world examples/scenarios
- [x] Dual ND profile modeling
- [x] Audit trail and explainability
- [x] Adaptive UI recommendations

---

_For more details, see [Neunuc Architecture Reference](./neunuc-architecture-summary.md) and [ND-First Design](/docs/godmode/godmode-neunuc-architecture-reference-guide)._

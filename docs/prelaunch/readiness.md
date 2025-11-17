---
id: prelaunch-readiness
title: Prelaunch Readiness Dashboard
description: Status scoreboard, open risks, and launch checklist for Neuronucleus.
sidebar_label: Readiness Dashboard
---

# Status Scoreboard

| Area                | Status         | Notes                                                  | Owner          |
| ------------------- | -------------- | ------------------------------------------------------ | -------------- |
| Landing Experience  | ✅ Complete    | Mission-focused homepage with launch CTAs              | Web Experience |
| Documentation       | ✅ Complete    | Prelaunch hub, Godmode + Neunuc references shipped     | Documentation  |
| Merch Capsule       | ⚠️ In Progress | Final QC sign-off pending supplier confirmation        | Brand Studio   |
| Ritual Voice Loop   | ⚠️ In Progress | Discord embedded app deployed, needs latency soak test | Voice Ops      |
| Compliance & Safety | ✅ Complete    | Consent ledger + Safe-Mode flows documented            | Trust          |
| Instrumentation     | ⏳ Planned     | Telemetry dashboards drafted, wiring in progress       | Data           |
| CRM Automations     | ⚠️ In Progress | Waitlist segmentation rules staged, QA tomorrow        | Growth         |

# Critical Risks

- **Merch fulfillment SLA** — Waiting on supplier confirmation for hoodie restock window.
- **Latency spikes** — Discord ritual flow needs 48-hr soak test with real voices to confirm Whisper pipeline stability.
- **Segmentation QA** — CRM rules must prevent neurotypical-framed messaging from hitting ND cohort.
- **Telemetry gaps** — Need production-ready dashboards for ritual completion + support escalations.

# Mitigations

- Double-source the hoodie run and lock buffer inventory in case of supplier slip.
- Run evening + weekend voice tests, capture logs, and validate safe-mode triggers under load.
- QA segmentation with real user personas, confirm inclusive language on nurture flows.
- Prioritize instrumentation wiring during Ignite phase; block sustain planning until dashboards green.

# Launch Checklist

- [ ] Approve merch QC and shipment schedule.
- [ ] Complete Discord ritual soak test with 12 participants.
- [ ] Wire telemetry events (ritual_started, ritual_completed, safe_mode_triggered).
- [ ] Validate CRM automations against inclusive copy guidelines.
- [ ] Publish launch-week programming calendar to community.
- [ ] Sign off on support escalation paths + on-call rotation.

# Communications Plan

- **Internal Standup** — Daily sync during Launch Week at 09:00 PT (Ops lead).
- **Community Broadcast** — Instagram + Discord announcements synchronized at 10:30 PT.
- **Partner Briefings** — Send pre-launch asset kit 72 hours before launch day.
- **Post-Launch Retro** — Schedule 7 days after drop with all functional leads.

# Key Contacts

| Role               | Name / Handle | Contact                   |
| ------------------ | ------------- | ------------------------- |
| Launch Director    | BethyOps      | `launch@neuronucleus.com` |
| Brand & Merch      | Kella         | `brand@neuronucleus.com`  |
| Voice Ops          | Hadi          | `voice@neuronucleus.com`  |
| Compliance & Trust | Alex          | `trust@neuronucleus.com`  |
| Growth & CRM       | Jai           | `growth@neuronucleus.com` |

# Reference Assets

- [Prelaunch Overview](/docs/prelaunch/prelaunch-overview)
- [Offerings & Services](/docs/godmode/offerings-and-services)
- [System Architecture 2025](/docs/godmode/system-architecture-2025)
- [Neunuc System Matrix](/docs/godmode/godmode-neunuc-system-matrix-reference)
- [Discord Voice Integrations](/docs/godmode/discord-voice-integrations)

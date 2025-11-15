---
id: godmode-data-model
title: Data Model & Access Graph
sidebar_label: Data Model
---

The Godmode data model is designed as a **flexible data fabric** with an **Access Graph** at its core.

The goal is to unify:

- Users, identities, and profiles
- Tasks, goals, incidents, and events
- Context (notes, tags, relationships)
- Permissions and consent

---

## Core Entities

### `User`

Represents a human user of the system.

Key fields:

- `id`
- `name`
- `email`
- `time_zone`
- `neuro_profile_id` (FK)

### `NeuroProfile`

Represents neurodivergent-relevant preferences and constraints.

Example fields:

- `sensory_flags` (JSON)
- `executive_function_patterns` (JSON)
- `preferred_support_modes` (JSON)
- `red_flags` (JSON)
- `humor_preferences` (JSON)

### `Goal`

Represents user or team-level goals.

Fields:

- `id`
- `user_id`
- `title`
- `description`
- `horizon` (`daily`, `weekly`, `monthly`, `quarterly`, etc.)
- `status` (`active`, `paused`, `completed`)

### `Task`

Represents work items, synced or created locally.

Fields:

- `id`
- `goal_id` (nullable)
- `user_id`
- `source` (`jira`, `clickup`, `manual`, `calendar`, etc.)
- `external_id` (nullable)
- `title`
- `description`
- `status`
- `priority`
- `effort_estimate`
- `context_tags` (JSON)
- `overwhelm_score` (derived)

### `Session`

Represents an interaction episode with Bethy.

Fields:

- `id`
- `user_id`
- `session_type` (`planning`, `triage`, `debrief`, `recovery`)
- `started_at`
- `ended_at`
- `metadata` (JSON)

### `Intervention`

Represents a specific support action during a session.

Fields:

- `id`
- `session_id`
- `intervention_type` (`task_breakdown`, `reframe`, `humor`, `script`, `boundary`)
- `payload` (JSON)
- `result` (`accepted`, `modified`, `rejected`)

### `Integration`

Represents a connection to an external system.

Fields:

- `id`
- `type` (`jira`, `gcal`, `hris`, `siem`, `terraform`, etc.)
- `config` (JSON)
- `status`

### `Event`

Represents unified events across tools.

Fields:

- `id`
- `source`
- `external_id`
- `start_at`
- `end_at`
- `severity` (for incidents)
- `tags` (JSON)

---

## Access Graph

The **Access Graph** models:

- Which user can see which data
- Where data came from (system of record)
- What transformations or automations have touched it

Edges include:

- `USER -> TASK` (ownership)
- `TASK -> GOAL` (alignment)
- `TASK -> EVENT` (time binding)
- `USER -> NEURO_PROFILE` (cognitive config)
- `USER -> INTEGRATION` (authorship/ownership)

The graph enables:

- Context-aware reasoning
- Permission-aware queries
- Fine-grained audit trails

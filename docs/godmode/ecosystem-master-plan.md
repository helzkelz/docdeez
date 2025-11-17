---
id: ecosystem-master-plan
title: Ecosystem Master Plan
sidebar_label: Master Plan
---

# Ecosystem Master Plan: Neunuc & HelenKella

This document serves as a foundational master plan for the Neunuc and HelenKella ecosystems, synthesized from our discussions.

---

## 1. Ecosystem Inventory & Mapping

### Hierarchical Map of Ecosystem Components

- **NEUNUC ECOSYSTEM (Live)**
  - **Core Platform: Neunuc AI-Powered Platform (Live)**
    - **Orchestration Service: AI Workflow Orchestrator (Live)**
      - Agent: PLC_Agent (Live)
      - Agent: ERP_Update_Agent (Live)
      - Agent: Data_Ingestion_Agent (Live)
    - **Planning Service: Neunuc Domino Planner (Live)**
      - Algorithm: Constraint-Based Optimization Models (Live)
      - Algorithm: Self-Evolving Workflow AI (Planned)
    - **Infrastructure & Data Services (Live)**
      - Container Orchestration: Kubernetes
      - Message Queue: Apache Kafka
      - Data Persistence: PostgreSQL
      - Data Lake: AWS S3 + Parquet
  - **HELENKELLA ECOSYSTEM (Live)**
    - **Core Platform: HelenKella SaaS Platform (Live)**
      - Frontend: React/Next.js Web Application (Live)
      - Backend: Python/FastAPI Microservices (Live)
      - Feature: Neurodivergent-First UI/UX Toolkit (Live)
    - **Governance Service: Content Moderation System (Live)**
      - AI Model: Trauma-Aware NLP Classifier (Live)
      - Interface: Human-in-the-Loop Review Dashboard (Live)
      - Policy: Content & Moderation Policy v2 (Live)
  - **SUPPORTING SYSTEMS & TOOLS**
    - **Documentation Platform: Docusaurus Hub (Live)**
      - Source: Internal Git Repositories
    - **Community Tool: Discord Bot 'Bethy' (Live)**
      - Integration: Discord API (Third-Party)
    - **Internal Tools: Desktop Automation Scripts (Live)**
      - Library: Playwright (Third-Party)
      - Library: xdotool (Third-Party, Linux-specific)
  - **DEPRECATED COMPONENTS**
    - _(None identified)_

### Summary of Architectural Decisions & Blueprints

| Lifecycle Phase       | Subsystem                     | Architectural Decision / Blueprint                                                               | Rationale                                                                                                                                 |
| :-------------------- | :---------------------------- | :----------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **Production**        | Neunuc AI Orchestrator        | Adopted a microservices architecture using gRPC for inter-service communication.                 | High performance, scalability, and language-agnostic service development.                                                                 |
| **Production**        | Neunuc AI Orchestrator        | Implemented an event-driven model using Kafka as the message broker.                             | Decouples services, ensures fault tolerance, and allows for asynchronous processing of high-volume data streams.                          |
| **Production**        | HelenKella Platform           | Chose a server-side rendered (SSR) frontend with Next.js.                                        | Improved initial page load times, SEO, and accessibility, which are critical for the user base.                                           |
| **Production**        | HelenKella Content Moderation | Developed a proprietary, fine-tuned NLP model instead of using a generic content moderation API. | General-purpose APIs lack the nuance to understand trauma-aware and neurodivergent-specific contexts.                                     |
| **Prototype/Planned** | Neunuc Domino Planner         | Blueprint for a self-evolving AI using reinforcement learning to optimize workflows.             | To move from static optimization to dynamic, continuous improvement of automated processes, creating a significant competitive advantage. |

---

## 2. System Diagrams (Multi-Layered Textual Description)

### Layer 1: Core Infrastructure & Data Flow

This diagram shows the foundational data path. IoT devices and client ERPs send data to the **Neunuc Ingestion API**, which pushes messages into a central **Kafka** topic. The **AI Orchestrator** consumes these messages. For planning, it queries the **Domino Planner**, which accesses historical data in the **S3 Data Lake**. The Orchestrator then dispatches tasks to agents, which interact with factory systems. All persistent state is stored in **PostgreSQL**.

### Layer 2: Observability Overlay

- **Metrics:** All services (Orchestrator, Planner, Agents) are instrumented with Prometheus client libraries to expose metrics (e.g., `requests_total`, `job_duration_seconds`). Prometheus scrapes these endpoints.
- **Logs:** All services log structured JSON to `stdout`. A Fluentd agent on each Kubernetes node collects these logs and forwards them to a centralized logging stack (e.g., Loki or Elasticsearch).
- **Traces:** gRPC calls between services are instrumented with OpenTelemetry to generate distributed traces, which are sent to a Jaeger collector for end-to-end request visualization.

### Layer 3: Automation & Compliance Overlay

- **Automation Points:**
  - **CI/CD Pipeline:** A `git push` triggers GitHub Actions to test, build, and deploy services to Kubernetes.
  - **Domino Planner:** Automatically re-optimizes production schedules based on real-time machine failure events from the Orchestrator.
  - **HelenKella Moderation:** An NLP model automatically flags or removes content and sends a notification to the Human Review Dashboard.
- **Compliance Checks:**
  - **HelenKella API Gateway:** A check is performed on all user data ingress points to ensure consent flags are present, validating GDPR/CCPA compliance.
  - **Data Lake:** Automated scripts scan for and anonymize PII in historical datasets before they are used for model training.

---

## 3. Dev Plan Expansion & Prioritization

### MVP Feature: Self-Evolving Domino Planner

- **Implementation Checklist:**
  1. [ ] **(Backend)** Develop a "Feedback Loop" service that captures the final outcome and performance metrics of a workflow executed by the Orchestrator.
  2. [ ] **(AI/ML)** Design a reinforcement learning environment where the "state" is the current factory floor status and the "action" is the workflow sequence proposed by the Planner.
  3. [ ] **(AI/ML)** Implement a baseline reward function that prioritizes speed and resource efficiency.
  4. [ ] **(Data)** Create a data pipeline to feed the outcome data from the Feedback Loop service into the RL training process.
  5. [ ] **(Backend)** Integrate the trained RL model into the Domino Planner as a new "dynamic" planning strategy.
  6. [ ] **(Docs)** Document the new API endpoint and the logic behind the self-evolving strategy.
- **Recommended Stack:** Python, PyTorch (for RL), KubeFlow (for training pipelines), FastAPI (for feedback service).
- **Blockers:** Insufficient real-world outcome data to train a robust model; high computational cost of training.

### Missing Implementation Steps (Cross-Referenced)

- The documentation for the **Agent SDK** is a high-priority item, but the dev plan lacks a specific task for creating a **"sandbox environment"** for new agent development and testing. This is a critical missing step for safe onboarding.
- The blueprint for **neurodivergent-first UI** exists, but there is no corresponding implementation step for establishing an **automated accessibility testing pipeline** (e.g., using Axe-core in the CI/CD process) to prevent regressions.

---

## 4. Automation & Orchestration Specification

### Candidate Workflow Automations

| Module / Workflow        | Trigger                                                            | Outcome                                                                                                                                                                                                              |
| :----------------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Developer Onboarding** | New user added to the "Developers" group in the identity provider. | An automated script provisions access to Git repos, sets up a personal dev namespace in Kubernetes, and assigns the "Complete Onboarding Guide" task in the project management tool.                                 |
| **CI/CD Pipeline**       | `git push` to `main` branch.                                       | Code is automatically tested, scanned for vulnerabilities, built into a container image, pushed to the registry, and deployed to the staging environment. A notification is sent to Discord.                         |
| **Content Moderation**   | A user submits a post on the HelenKella platform.                  | The content is passed to the NLP model. If the score exceeds a threshold, the post is hidden, and a case is created in the Human Review Dashboard. The user receives a notification that their post is under review. |
| **Documentation Sync**   | A new version of an API is deployed.                               | An OpenAPI spec is auto-generated. A script runs to compare it with the existing documentation in Docusaurus and creates a pull request flagging the necessary changes.                                              |

### Neurodivergent-First UX Automations

- **Theme & Layout Persistence:**
  - **Description:** When a user selects a preferred theme (e.g., high-contrast, low-brightness) or layout (e.g., single-column, no animations), these settings are automatically applied across all sub-domains and future sessions without requiring reconfiguration.
  - **Requirements:** A centralized User Profile Service to store UX preferences; frontend components must be designed to consume and apply these settings dynamically from the profile.
- **Automated Summary Generation ("TL;DR" Feature):**
  - **Description:** For long-form content or comment threads, an on-demand button triggers an AI agent to generate a concise, bulleted summary, reducing the cognitive load of processing large text blocks.
  - **Requirements:** An internal API endpoint connected to a summarization model (e.g., a fine-tuned T5 or GPT model); frontend UI element to trigger the API call and display the summary.

---

## 5. Documentation & Assignment Automation

### Automated Documentation Workflow Outline

1. Flagging Untracked Components: A nightly script queries the Kubernetes API for all running services and cross-references them against a manifest of documented components stored in the Docusaurus project. Any service without a corresponding `.md` file is flagged.
2. Auto-Assigning Doc Tasks: For each untracked component, the script reads the `owner` label from its Kubernetes deployment. It then uses the project management tool's API to create a "Documentation Required" task and assign it to that owner.
3. Scheduling Reviews: Once a documentation pull request is merged, an automation rule schedules a follow-up "Review Documentation" task assigned to the technical writer or product manager 3 months in the future to ensure it remains current.

### Draft Documentation (Automated Extraction)

- **ADR (Architectural Decision Record) Draft:**
  - **Title:** Decision to Use Kafka for Event Bus
  - **Status:** Decided
  - **Context:** The Neunuc platform requires a scalable, fault-tolerant way to decouple microservices and handle high-throughput data from IoT devices.
  - **Decision:** We will use Apache Kafka as the primary event bus for all asynchronous inter-service communication.
  - **Consequences:** Increased infrastructure complexity, but provides back-pressure, replayability, and horizontal scaling capabilities that are critical for our production environment.
- **Transparency Report Snippet Draft:**
  - **Period:** Q3 2025
  - **Total Content Moderated:** 1,428 items
  - **Automated Actions Taken:** 987 (69%)
  - **Human-Reviewed Cases:** 441 (31%)
  - **Categories:** Hate Speech (Neurodiversity-related): 15%, Adult Content: 40%, Other: 45%.

---

## 6. Security, Compliance, and Data Handling

### End-to-End Data Flow: HelenKella Content Submission

1. **User's Browser:** User types a post. HTTPS encrypts data in transit to the API Gateway.
2. **API Gateway:** Terminates TLS. Authenticates the user's JWT token. **(Security Boundary)**
3. **HelenKella Backend:** Receives the post. Checks for the user's consent flag for data processing. **(Privacy Compliance Check)**
4. **Content Moderation Service:** The backend sends the text of the post to this internal service via gRPC. Data does not leave the VPC.
5. **PostgreSQL Database:** If the post is approved, it is stored in the `posts` table. The database is encrypted at rest.
6. **Third-Party Exposure:** No direct exposure. Only anonymized, aggregated data is used for analytics.

### Security Configurations & Policies

| Category                | Configuration / Policy                                                                                                                     | System                   |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| **Roles & Permissions** | Kubernetes RBAC: `edit` role is restricted to service owners within their own namespace. `view` role is granted to all developers.         | Kubernetes               |
| **Data Retention**      | User-generated content is hard-deleted 30 days after a user deletes their account. Log files are retained for 90 days.                     | PostgreSQL, Loki         |
| **Secrets Management**  | All secrets (API keys, database passwords) are stored in HashiCorp Vault and injected into pods at runtime.                                | Kubernetes, All Services |
| **Network Policy**      | By default, pods are denied all ingress traffic. Explicit `NetworkPolicy` objects must be created to allow traffic from specific services. | Kubernetes               |

---

## 7. Feedback Loop & Iteration

### Continuous Feedback Workflow

- **Progress Report Generation:** On a weekly basis, an automated script generates a markdown report containing:
  - **Code:** A list of all pull requests merged in the last 7 days, grouped by service.
  - **Docs:** A diff of the Docusaurus `docs/` directory, showing new pages and major changes.
  - **Infra:** A summary of any changes to core infrastructure (e.g., new Kubernetes node pools, database version upgrades).
    This report is automatically posted to the `#dev-updates` channel in Discord.
- **Diagram Diffs:** When a change is made to the infrastructure-as-code repository (e.g., Terraform), a CI job generates a "before" and "after" graph of the infrastructure and posts it as an image in the pull request, visually showing the impact of the change.

### Versioned Change Checklist

When planning a major version change (e.g., v2.0 of the Orchestrator):

- [ ] Create a `v2_upgrade_plan.md` document.
- [ ] Update the core architectural diagrams and label them with the new version number.
- [ ] Create a new documentation branch in Docusaurus (`version-2.0`).
- [ ] Draft a new ADR explaining the reason for the breaking changes.
- [ ] Create a migration script for any affected data.
- [ ] Update the CI/CD pipeline to deploy the new version to a separate environment.
- [ ] Schedule user/client communication about the upcoming change.

---

## 8. Cross-Platform & Future Planning

### Opportunities for Cross-Agent/Platform Collaboration

- **HelenKella &lt;&gt; Neunuc:** The **NLP moderation engine** from HelenKella could be repurposed as a new **Agent** in the Neunuc Orchestrator to monitor and analyze unstructured text logs from factory machinery for anomaly detection.
- **Discord Bot &lt;&gt; Neunuc:** The 'Bethy' bot could be given a read-only API key to the Neunuc Orchestrator. This would allow authorized users in a private Discord channel to issue commands like `!workflow_status <id>` to get real-time updates on critical production jobs.

### Predicted Scaling Bottlenecks (Next 6-12 Months)

- **PostgreSQL Single Point of Failure:** As both the Neunuc and HelenKella platforms grow, the single PostgreSQL instance will become a bottleneck for write-heavy operations. **Recommendation:** Plan a migration to a managed, distributed SQL database (e.g., Google Spanner, CockroachDB) or implement read-replicas to offload read traffic.
- **Domino Planner Performance:** As the number of connected machines and workflow complexity increases, the time required for the Domino Planner to compute an optimal plan will grow exponentially. **Recommendation:** Begin research into approximate optimization algorithms (which are faster but less optimal) as a fallback strategy for time-sensitive planning requests.

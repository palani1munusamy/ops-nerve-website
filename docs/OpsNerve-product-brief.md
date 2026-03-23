# OpsNerve — Product Brief

## What is OpsNerve?

OpsNerve is an AI-powered, tool-agnostic operations agent that continuously monitors systems, detects anomalies in real time, and automatically identifies root cause — reducing operational overhead by 50–80%.

**Tagline:** From alert to root cause in minutes, not hours.

**Subtitle:** AI Powered Tool-Agnostic Ops — Monitoring, Triaging, and Root Cause Intelligence

---

## The Problem

- P1/P2 incidents drive up ops costs and engineer burnout
- Teams spend hours on bridge calls just to triage issues
- Root cause identification is slow, manual, and error-prone
- Incident tickets are triaged manually with no system context
- Existing tools are siloed — no single view across the stack

---

## The Solution

OpsNerve connects to your existing observability stack and does four things automatically:

1. **Discovers** your service topology and learns what normal looks like
2. **Detects** anomalies the moment behavior deviates
3. **Identifies** the most probable root cause with a confidence score
4. **Acts** — triggers alerts, raises incident tickets, and triages open tickets

---

## Core Engines

### Discovery Engine
- Ingests logs from any observability platform
- Builds a live service topology map — services, endpoints, and dependencies
- Computes 28-day behavioral baselines per endpoint
- Maintains a Knowledge Graph of service relationships

### Anomaly Engine
- Runs continuously on a configurable schedule
- Uses Seasonal Z-score + Isolation Forest (ML) detectors
- Detects error rate spikes, latency spikes, traffic drops and surges
- Deduplicates signals across detection methods

### Causal AI Engine
- Correlates anomaly signals across the service dependency graph
- Uses Claude AI (LLM) for root cause reasoning
- Delivers structured analysis: Signals → Impact → Root Cause + Confidence → Action Recommended
- Identifies blast radius — which services are affected downstream

### Action Engine
- Sends real-time alerts to Slack, Teams, and other channels
- Automatically creates incident tickets in Jira and ServiceNow
- Posts AI-generated incident summaries with root cause and recommended actions

### Ticket Triage Engine
- Reads open human-reported tickets from Jira / ServiceNow
- Matches ticket context to known services in the Knowledge Graph
- Fetches recent anomaly signals for matched services
- Posts structured AI triage analysis directly inside the ticket:
  - 📊 Signals — key metrics and observations
  - 🔴 Impact — what is failing and who is affected
  - 🔍 Root Cause — most probable cause with confidence score
  - ⚡ Action Recommended — immediate next steps and owning team

---

## Key Capabilities

| Capability | Description |
|---|---|
| Tool-agnostic | Works with any observability stack |
| Zero-config topology | Automatically discovers services from logs |
| Real-time detection | Catches deviations as they happen |
| AI root cause | LLM-powered analysis with confidence scoring |
| Automated ticketing | Creates and triages tickets without human intervention |
| Blast radius mapping | Shows which services are impacted downstream |
| Topology Explorer | Interactive service graph UI with anomaly highlighting |

---

## Supported Integrations

**Observability & Monitoring**
CloudWatch · Azure Monitor · GCP Ops · Datadog · Splunk · Dynatrace · New Relic · ELK

**Incident & Ticketing**
Jira · ServiceNow · PagerDuty

**Alert Channels**
Slack · Microsoft Teams

**Knowledge Base**
Confluence · SharePoint

20+ integrations supported.

---

## Signal Types Monitored

- Logs
- Infrastructure metrics
- Deployment events
- Incidents
- Runbooks

---

## Topology Explorer

An interactive, real-time service graph UI that shows:
- Full service topology with dependency edges
- Root cause nodes (highlighted in red)
- Blast radius / impacted services (highlighted in amber)
- Endpoint-level drill-down with error rate and latency
- Search and filter by service prefix or anomaly status

---

## Value Proposition

| Before OpsNerve | After OpsNerve |
|---|---|
| Hours on bridge calls to triage | Root cause in minutes |
| Manual ticket triage | Automatic AI enrichment |
| Siloed observability tools | Unified operations intelligence |
| Reactive incident response | Proactive anomaly detection |
| Engineer burnout from alert noise | Confidence-scored, actionable signals |

**Estimated operational overhead reduction: 50–80%**

---

## Demo Flow (End-to-End)

1. **Initialize** — Reset system and ingest service logs
2. **Discovery Engine** — Build service topology, relationships and behavioural history
3. **Inject Faults** — Controlled fault scenarios across services
4. **Anomaly Engine** — Detect deviations in real time
5. **Causal AI Engine** — Identify the most probable root cause
6. **Action Engine** — Trigger alerts and create incident tickets
7. **Simulate Defect** — Create a human-reported ticket in Jira
8. **Ticket Triage** — AI automatically triages and enriches the ticket

---

## Narration Hook (for website / video)

> Are P1 and P2 incidents driving up your ops costs?
> Are your teams spending hours on bridge calls just to triage issues?
> Are your tickets still being triaged manually?
>
> Meet OpsNerve — the AI agent that detects, diagnoses, and acts.
>
> **From alert to root cause — in minutes, not hours.**

---

## Target Audience

- Engineering Leaders (VP Engineering, CTO)
- Site Reliability Engineering (SRE) Teams
- Platform & Operations Teams
- DevOps and Infrastructure Teams

---

## Technology

- **AI / LLM:** Claude (Anthropic) — incident summarization, root cause analysis, ticket triage
- **Detection:** Seasonal Z-score + Isolation Forest (unsupervised ML)
- **Knowledge Graph:** Service topology and dependency mapping
- **Time-Series Store:** Metric baselines and anomaly signals
- **Log Store:** Elasticsearch-compatible log ingestion
- **UI:** Interactive D3.js force-directed service graph

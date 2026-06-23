import type { PreviewConfig, PreviewNote } from "./preview-types";

export const previewConfig: PreviewConfig = {
  pi: "PI-2026.1",
  status: "review",
  publishedAt: "2026-03-28",
  overview:
    "This program increment delivers the Unified Customer Data Platform, Intelligent Workflow Automation foundations, and significant reliability investments across all Agile Release Trains. Three capabilities are fully shipped; one feature carries forward into PI-2026.2.",
};

export const previewNotes: PreviewNote[] = [
  // ── New Features ─────────────────────────────────────────────────────
  {
    id: "FEAT-201",
    title: "Real-time customer profile synchronisation",
    summary:
      "Customer profiles now update within seconds of any interaction, ensuring all downstream systems operate on current data without the previous 24-hour batch lag.",
    components: ["Customer Data Platform", "Profile Service", "Event Bus"],
    section: "features",
    art: "Core Platform",
  },
  {
    id: "FEAT-202",
    title: "Cross-channel identity resolution",
    summary:
      "Automatically links customer records across web, mobile, and in-store channels using probabilistic and deterministic matching, providing a single 360° view.",
    components: ["Identity Service", "Customer Data Platform"],
    section: "features",
    art: "Customer Experience",
  },
  {
    id: "FEAT-204",
    title: "Automated invoice matching and exception routing",
    summary:
      "Machine learning model matches 92% of incoming invoices to purchase orders without human intervention, routing exceptions to the appropriate finance workflow.",
    components: ["Finance Automation", "ML Pipeline", "Workflow Engine"],
    section: "features",
    art: "Core Platform",
  },
  {
    id: "FEAT-208",
    title: "Automated deployment rollback on error-rate spike",
    summary:
      "Deployments that cause error rates to exceed a configurable threshold are automatically rolled back within 60 seconds, minimising blast radius.",
    components: ["Deployment Service", "Observability Platform"],
    section: "features",
    art: "Core Platform",
  },

  // ── Enhancements ─────────────────────────────────────────────────────
  {
    id: "FEAT-203",
    title: "GDPR consent propagation across all touchpoints",
    summary:
      "Consent preferences captured at any channel are propagated to all connected systems within minutes rather than overnight, reducing compliance risk significantly.",
    components: ["Consent Service", "Customer Data Platform", "Marketing Hub"],
    section: "enhancements",
    art: "Customer Experience",
  },
  {
    id: "FEAT-205",
    title: "Smart task prioritisation engine",
    summary:
      "Surfaces the highest-impact tasks to each agent based on SLA deadlines, customer value tier, and predicted resolution time. Early pilots show 22% SLA improvement.",
    components: ["Task Manager", "ML Pipeline", "Agent Desktop"],
    section: "enhancements",
    art: "Customer Experience",
  },
  {
    id: "FEAT-207",
    title: "Distributed tracing across all microservices",
    summary:
      "End-to-end request tracing is now available for all 47 production microservices with a unified dashboard, reducing mean time to detect incidents from 18 min to under 3 min.",
    components: ["Observability Platform", "API Gateway", "Service Mesh"],
    section: "enhancements",
    art: "Data & Analytics",
  },
  {
    id: "FEAT-211",
    title: "API rate-limit headers on all public endpoints",
    summary:
      "All public-facing APIs now return `X-RateLimit-Remaining` and `X-RateLimit-Reset` headers, enabling consumers to implement adaptive backoff without guessing.",
    components: ["API Gateway", "Developer Portal"],
    section: "enhancements",
    art: "Integrations",
  },

  // ── Bug Fixes ─────────────────────────────────────────────────────────
  {
    id: "BUG-188",
    title: "Profile merge incorrectly de-duplicating active sessions",
    summary:
      "A race condition in the identity resolution pipeline was terminating active sessions belonging to merged profiles. Affected approximately 0.3% of daily active users.",
    components: ["Identity Service", "Session Manager"],
    section: "bug-fixes",
    art: "Core Platform",
  },
  {
    id: "BUG-194",
    title: "Dashboard widget data not refreshing after filter change",
    summary:
      "Stale cache entries were being served when a user changed dashboard filters without a full page reload. Cache invalidation logic has been corrected.",
    components: ["Analytics Dashboard", "Cache Layer"],
    section: "bug-fixes",
    art: "Data & Analytics",
  },
  {
    id: "BUG-197",
    title: "Webhook delivery retry storm on transient 503 responses",
    summary:
      "Exponential backoff was not applied correctly for downstream 503 responses, causing retry bursts that amplified transient outages. Corrected with jitter-based backoff.",
    components: ["Webhook Delivery", "Integrations Engine"],
    section: "bug-fixes",
    art: "Integrations",
  },

  // ── Technical Improvements ────────────────────────────────────────────
  {
    id: "FEAT-209",
    title: "Database query performance regression alerts",
    summary:
      "Continuous benchmarking now detects query regressions introduced by schema migrations before they reach production, preventing slow-query incidents.",
    components: ["Database Platform", "CI/CD Pipeline"],
    section: "tech-debt",
    art: "Core Platform",
  },
  {
    id: "TECH-043",
    title: "Node.js runtime upgraded to v22 LTS across all services",
    summary:
      "All backend services have been migrated from Node 18 to Node 22 LTS, gaining V8 performance improvements and ensuring continued security patch coverage.",
    components: ["Core Services", "Data Services", "Integration Services"],
    section: "tech-debt",
    art: "Core Platform",
  },

  // ── Breaking Changes ──────────────────────────────────────────────────
  {
    id: "BREAK-012",
    title: "Legacy `/v1/customers` endpoint removed",
    summary:
      "The `/v1/customers` REST endpoint deprecated in PI-2025.3 has been removed. All consumers must migrate to `/v2/customers` which supports cursor-based pagination and returns the unified profile schema.",
    components: ["Customer API", "Developer Portal"],
    section: "breaking-changes",
    art: "Integrations",
  },
  {
    id: "BREAK-013",
    title: "Auth token expiry reduced from 24 h to 1 h",
    summary:
      "Access token lifetime has been reduced to 1 hour as part of the security hardening initiative. Refresh token flow is unchanged. Long-lived tokens issued before this release will be revoked at 00:00 UTC on 1 April 2026.",
    components: ["Auth Service", "Developer Portal", "Mobile SDK"],
    section: "breaking-changes",
    art: "Core Platform",
  },
];


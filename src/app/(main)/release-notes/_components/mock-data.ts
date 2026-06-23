import type { ReleaseNotes } from "./types";

export const mockReleaseNotes: ReleaseNotes = {
  version: "PI 26.1",
  piName: "Program Increment 26.1",
  releaseDate: "28 March 2026",
  teams: ["Platform", "Data", "UX", "Integrations"],
  overallStatus: "In Progress",
  capabilities: [
    {
      key: "CAP-101",
      summary: "Unified Customer Data Platform",
      description:
        "Consolidate customer data from all touchpoints into a single, reliable source of truth accessible across all business units.",
      status: "Done",
      features: [
        {
          key: "FEAT-201",
          summary: "Real-time customer profile synchronisation",
          description:
            "Customer profiles now update within seconds of any interaction, ensuring all downstream systems operate on current data.",
          businessValue:
            "Eliminates the 24-hour data lag that previously caused customer service agents to work with stale information, reducing repeat contact rates by an estimated 18%.",
          status: "Done",
          tag: "New",
          storiesTotal: 8,
          storiesDone: 8,
          carryForward: false,
        },
        {
          key: "FEAT-202",
          summary: "Cross-channel identity resolution",
          description:
            "Automatically links customer records across web, mobile, and in-store channels using probabilistic and deterministic matching.",
          businessValue:
            "Provides a complete view of customer behaviour across all channels, enabling more accurate lifetime value calculations and personalised marketing.",
          status: "Done",
          tag: "New",
          storiesTotal: 11,
          storiesDone: 11,
          carryForward: false,
        },
        {
          key: "FEAT-203",
          summary: "GDPR consent propagation",
          description:
            "Consent preferences captured at any touchpoint are immediately propagated to all connected systems.",
          businessValue:
            "Reduces compliance risk by ensuring marketing suppression lists are honoured within minutes rather than overnight batch runs.",
          status: "Done",
          tag: "Enhancement",
          storiesTotal: 5,
          storiesDone: 5,
          carryForward: false,
        },
      ],
    },
    {
      key: "CAP-102",
      summary: "Intelligent Workflow Automation",
      description:
        "Introduce AI-assisted automation across core operational workflows to reduce manual effort and accelerate cycle times.",
      status: "In Progress",
      features: [
        {
          key: "FEAT-204",
          summary: "Automated invoice matching and exception routing",
          description:
            "Machine learning model matches 92% of incoming invoices to purchase orders without human intervention.",
          businessValue:
            "Finance teams recover approximately 3 hours per day previously spent on manual matching, and payment cycle times drop from 12 days to under 4.",
          status: "Done",
          tag: "New",
          storiesTotal: 13,
          storiesDone: 13,
          carryForward: false,
        },
        {
          key: "FEAT-205",
          summary: "Smart task prioritisation engine",
          description:
            "Surfaces the highest-impact tasks to each agent based on SLA deadlines, customer value tier, and predicted resolution time.",
          businessValue:
            "Early pilots show a 22% improvement in first-response SLA adherence without increasing headcount.",
          status: "In Progress",
          tag: "New",
          storiesTotal: 9,
          storiesDone: 6,
          carryForward: false,
        },
        {
          key: "FEAT-206",
          summary: "Document classification pipeline",
          description:
            "Automatically categorises incoming documents and routes them to the correct team and workflow.",
          businessValue:
            "Removes the manual triage step for incoming correspondence, freeing team leads to focus on escalations and coaching.",
          status: "To Do",
          tag: "New",
          storiesTotal: 7,
          storiesDone: 0,
          carryForward: true,
        },
      ],
    },
    {
      key: "CAP-103",
      summary: "Platform Reliability & Observability",
      description:
        "Improve system resilience and provide engineering teams with the visibility needed to detect and resolve incidents faster.",
      status: "Done",
      features: [
        {
          key: "FEAT-207",
          summary: "Distributed tracing across all microservices",
          description:
            "End-to-end request tracing is now available for all 47 production microservices, with a unified dashboard.",
          businessValue:
            "Mean time to detect (MTTD) for production incidents reduced from 18 minutes to under 3 minutes, directly improving customer-facing uptime.",
          status: "Done",
          tag: "Enhancement",
          storiesTotal: 10,
          storiesDone: 10,
          carryForward: false,
        },
        {
          key: "FEAT-208",
          summary: "Automated rollback on error-rate spike",
          description:
            "Deployments that cause error rates to exceed a configurable threshold are automatically rolled back within 60 seconds.",
          businessValue:
            "Reduces blast radius of bad deployments, giving teams the confidence to ship more frequently without extended monitoring windows.",
          status: "Done",
          tag: "New",
          storiesTotal: 6,
          storiesDone: 6,
          carryForward: false,
        },
        {
          key: "FEAT-209",
          summary: "Database query performance regression alerts",
          description:
            "Continuous benchmarking detects query regressions introduced by schema migrations or ORM changes before they reach production.",
          businessValue:
            "Prevents slow-query incidents that previously required emergency hotfixes and caused user-visible latency spikes.",
          status: "Done",
          tag: "Tech Debt",
          storiesTotal: 4,
          storiesDone: 4,
          carryForward: false,
        },
      ],
    },
  ],
};


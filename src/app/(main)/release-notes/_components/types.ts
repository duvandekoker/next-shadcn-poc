export type JiraStatus = "Done" | "In Progress" | "To Do" | "Blocked";
export type FeatureTag = "New" | "Enhancement" | "Bug Fix" | "Tech Debt";

export interface Feature {
  key: string;
  summary: string;
  description: string;
  businessValue: string;
  status: JiraStatus;
  tag: FeatureTag;
  storiesTotal: number;
  storiesDone: number;
  carryForward: boolean;
}

export interface Capability {
  key: string;
  summary: string;
  description: string;
  status: JiraStatus;
  features: Feature[];
}

export interface ReleaseNotes {
  version: string;
  piName: string;
  releaseDate: string;
  teams: string[];
  overallStatus: JiraStatus;
  capabilities: Capability[];
}


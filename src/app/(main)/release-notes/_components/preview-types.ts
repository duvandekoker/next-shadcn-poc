export type ReleaseSection =
  | "features"
  | "enhancements"
  | "bug-fixes"
  | "tech-debt"
  | "breaking-changes";

export const RELEASE_SECTIONS: ReleaseSection[] = [
  "features",
  "enhancements",
  "bug-fixes",
  "tech-debt",
  "breaking-changes",
];

export interface SectionMeta {
  label: string;
  description: string;
}

export const SECTION_META: Record<ReleaseSection, SectionMeta> = {
  features: {
    label: "New Features",
    description: "Newly delivered capabilities available this PI.",
  },
  enhancements: {
    label: "Enhancements",
    description: "Improvements and refinements to existing functionality.",
  },
  "bug-fixes": {
    label: "Bug Fixes",
    description: "Resolved defects and stability improvements.",
  },
  "tech-debt": {
    label: "Technical Improvements",
    description: "Infrastructure, performance, and quality updates.",
  },
  "breaking-changes": {
    label: "Breaking Changes",
    description: "Changes that require consumer action before upgrading.",
  },
};

export interface PreviewNote {
  id: string;
  title: string;
  summary: string;
  components: string[];
  section: ReleaseSection;
  art: string;
}

export interface PreviewConfig {
  pi: string;
  status: "draft" | "review" | "published";
  publishedAt?: string;
  overview: string;
}


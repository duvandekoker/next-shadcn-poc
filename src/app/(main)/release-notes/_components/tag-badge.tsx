import { Badge } from "@/components/ui/badge";
import type { FeatureTag } from "./types";

export function TagBadge({ tag }: { tag: FeatureTag }) {
  return <Badge variant="secondary">{tag}</Badge>;
}


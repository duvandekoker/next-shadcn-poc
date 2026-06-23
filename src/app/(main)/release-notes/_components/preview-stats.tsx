import { Badge } from "@/components/ui/badge";
import type { PreviewNote } from "./preview-types";
import { RELEASE_SECTIONS, SECTION_META } from "./preview-types";

export function PreviewStats({ notes }: { notes: PreviewNote[] }) {
  const breakingCount = notes.filter((n) => n.section === "breaking-changes").length;
  const arts = [...new Set(notes.map((n) => n.art))].length;

  const sectionCounts = RELEASE_SECTIONS.map((s) => ({
    section: s,
    label: SECTION_META[s].label,
    count: notes.filter((n) => n.section === s).length,
  })).filter((s) => s.count > 0);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">
        <span className="tabular-nums">{notes.length}</span>
        <span className="ml-1 font-normal">items</span>
      </Badge>
      <Badge variant="secondary">
        <span className="tabular-nums">{arts}</span>
        <span className="ml-1 font-normal">ART{arts !== 1 ? "s" : ""}</span>
      </Badge>
      {sectionCounts.map((s) =>
        s.section === "breaking-changes" && breakingCount > 0 ? (
          <Badge key={s.section} variant="destructive">
            <span className="tabular-nums">{s.count}</span>
            <span className="ml-1 font-normal">breaking</span>
          </Badge>
        ) : (
          <Badge key={s.section} variant="outline" className="font-normal text-muted-foreground">
            <span className="tabular-nums font-medium text-foreground">{s.count}</span>
            <span className="ml-1">{s.label.toLowerCase()}</span>
          </Badge>
        ),
      )}
    </div>
  );
}

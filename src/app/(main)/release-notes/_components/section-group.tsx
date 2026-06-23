"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Bug,
  ChevronRight,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type { PreviewNote, ReleaseSection } from "./preview-types";
import { SECTION_META } from "./preview-types";
import { ReleaseNoteCard } from "./release-note-card";

const SECTION_ICONS: Record<ReleaseSection, React.ReactNode> = {
  features: <Sparkles className="h-4 w-4" />,
  enhancements: <Zap className="h-4 w-4" />,
  "bug-fixes": <Bug className="h-4 w-4" />,
  "tech-debt": <Wrench className="h-4 w-4" />,
  "breaking-changes": <AlertTriangle className="h-4 w-4" />,
};

export function SectionGroup({
  section,
  notes,
  highlight = "",
}: {
  section: ReleaseSection;
  notes: PreviewNote[];
  highlight?: string;
}) {
  const [open, setOpen] = useState(true);
  const meta = SECTION_META[section];
  const isBreaking = section === "breaking-changes";

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="mb-3 flex w-full items-center gap-3 text-left"
        >
          <div
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
              isBreaking
                ? "bg-destructive/10 text-destructive"
                : "bg-secondary text-secondary-foreground",
            )}
          >
            {SECTION_ICONS[section]}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "text-sm font-semibold",
                  isBreaking && "text-destructive",
                )}
              >
                {meta.label}
              </span>
              <Badge variant="secondary" className="h-5 text-xs tabular-nums">
                {notes.length}
              </Badge>
            </div>
            {open && (
              <p className="text-xs text-muted-foreground">{meta.description}</p>
            )}
          </div>
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform",
              open && "rotate-90",
            )}
          />
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="flex flex-col gap-2.5 pl-11">
          {notes.map((note) => (
            <ReleaseNoteCard key={note.id} note={note} highlight={highlight} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

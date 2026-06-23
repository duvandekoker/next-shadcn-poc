import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { PreviewNote } from "./preview-types";

/** Wraps matching substrings in a <mark> element. */
function Highlight({ text, query }: { text: string; query: string }): ReactNode {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        re.test(part) ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static split parts
          <mark key={i} className="rounded-sm bg-yellow-200 px-px text-inherit dark:bg-yellow-700/50">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function ReleaseNoteCard({
  note,
  highlight = "",
}: {
  note: PreviewNote;
  highlight?: string;
}) {
  const isBreaking = note.section === "breaking-changes";

  return (
    <Card
      className={
        isBreaking
          ? "gap-0 py-0 shadow-none border-destructive/30 bg-destructive/5"
          : "gap-0 py-0 shadow-none"
      }
    >
      <CardContent className="px-4 py-4">
        {/* Title + ID */}
        <div className="mb-1.5 flex flex-wrap items-start justify-between gap-2">
          <p className="text-sm font-medium leading-snug">
            <Highlight text={note.title} query={highlight} />
          </p>
          <Badge variant="outline" className="font-mono text-xs font-normal shrink-0">
            {note.id}
          </Badge>
        </div>

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          <Highlight text={note.summary} query={highlight} />
        </p>

        {/* Components + ART */}
        {note.components.length > 0 && (
          <>
            <Separator className="my-3" />
            <div className="flex flex-wrap items-center gap-1.5">
              {note.components.map((c) => (
                <Badge key={c} variant="secondary" className="font-normal">
                  <Highlight text={c} query={highlight} />
                </Badge>
              ))}
              <span className="ml-auto text-xs text-muted-foreground shrink-0">
                {note.art}
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

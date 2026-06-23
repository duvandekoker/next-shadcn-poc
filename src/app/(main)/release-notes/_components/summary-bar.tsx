import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ReleaseNotes } from "./types";

export function SummaryBar({ notes }: { notes: ReleaseNotes }) {
  const features = notes.capabilities.flatMap((c) => c.features);
  const stories = features.reduce((s, f) => s + f.storiesTotal, 0);
  const done = features.reduce((s, f) => s + f.storiesDone, 0);
  const pct = stories > 0 ? Math.round((done / stories) * 100) : 0;

  const capsDone = notes.capabilities.filter((c) => c.status === "Done").length;
  const featShipped = features.filter((f) => !f.carryForward).length;

  const stats = [
    {
      label: "Capabilities delivered",
      display: `${capsDone} / ${notes.capabilities.length}`,
      pct: notes.capabilities.length > 0 ? Math.round((capsDone / notes.capabilities.length) * 100) : 0,
    },
    {
      label: "Features shipped",
      display: `${featShipped} / ${features.length}`,
      pct: features.length > 0 ? Math.round((featShipped / features.length) * 100) : 0,
    },
    {
      label: "Story completion",
      display: `${pct}%`,
      pct,
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <Card key={s.label} className="gap-3 py-4 shadow-none">
          <CardContent className="px-4 py-0">
            <p className="text-2xl font-semibold tabular-nums">{s.display}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <Progress value={s.pct} className="mt-3 h-1.5" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

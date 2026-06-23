"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockReleaseNotes } from "./mock-data";
import { SummaryBar } from "./summary-bar";
import { CapabilityBlock } from "./capability-block";
import { StatusPill } from "./status-pill";
import { PreviewStep } from "./preview-step";

function PISummary() {
  const notes = mockReleaseNotes;
  return (
    <div className="flex flex-col gap-0">
      {/* PI header */}
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            {notes.piName}
          </p>
          <p className="text-sm text-muted-foreground">Released {notes.releaseDate}</p>
        </div>
        <StatusPill status={notes.overallStatus} />
      </div>

      {/* Summary stats */}
      <SummaryBar notes={notes} />

      {/* Capabilities */}
      <div>
        {notes.capabilities.map((cap, i) => (
          <CapabilityBlock
            key={cap.key}
            cap={cap}
            index={i}
            total={notes.capabilities.length}
          />
        ))}
      </div>
    </div>
  );
}

export function ReleaseNotesContent() {
  return (
    <Tabs defaultValue="summary">
      <TabsList variant="line" className="mb-4">
        <TabsTrigger value="summary">PI Summary</TabsTrigger>
        <TabsTrigger value="preview">Feature Preview</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <PISummary />
      </TabsContent>

      <TabsContent value="preview">
        <PreviewStep />
      </TabsContent>
    </Tabs>
  );
}


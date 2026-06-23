import { ReleaseNotesContent } from "./_components/release-notes-content";

export default function ReleaseNotesPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Release Notes</h1>
        <p className="text-muted-foreground text-sm">
          Stakeholder summary of delivered capabilities and features per program increment.
        </p>
      </div>
      <ReleaseNotesContent />
    </div>
  );
}


import { YellowLineContent } from "./_components/yellow-line-content";

export default function YellowLinePage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Yellow Line</h1>
        <p className="text-muted-foreground text-sm">Overview of the yellow-line layout.</p>
      </div>
      <YellowLineContent />
    </div>
  );
}

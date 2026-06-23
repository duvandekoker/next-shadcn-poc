import { PageSectionDemo } from "./_components/page-section-demo";

export default function PageSectionPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Page Section (text-2xl)</h1>
        <p className="text-muted-foreground text-sm">
          A compound component for organizing page content into distinct sections.
        </p>
      </div>
      <PageSectionDemo />
    </div>
  );
}

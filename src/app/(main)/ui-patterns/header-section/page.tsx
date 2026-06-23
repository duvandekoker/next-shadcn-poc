import { Separator } from "@/components/ui/separator";

import { HeaderSectionDemo } from "./_components/header-section-demo";

export default function HeaderSectionPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Header Section (text-2xl)</h1>
        <p className="text-muted-foreground text-sm">
          Page header layout pattern with breadcrumbs, actions and navigation tabs.
        </p>
      </div>
      <Separator />
      <HeaderSectionDemo />
    </div>
  );
}

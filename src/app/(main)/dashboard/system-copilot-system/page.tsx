import { ChevronRightIcon } from "lucide-react";

import { SystemCopilotContent } from "./_components/system-copilot-content";

export default function SystemCopilotSystemPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="flex items-center gap-1 font-semibold text-xl">
          System Copilot <ChevronRightIcon className="size-5 text-muted-foreground/40" /> System
        </h1>
        <p className="text-muted-foreground text-sm">
          A vehicle system serves a specific purpose by linking technical functions to achieve the customer's desired
          product behavior.
        </p>
      </div>
      <SystemCopilotContent />
    </div>
  );
}

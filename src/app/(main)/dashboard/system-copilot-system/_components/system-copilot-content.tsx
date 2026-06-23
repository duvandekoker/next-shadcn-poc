"use client";

import data from "./data.json";
import { SystemCopilotSystemDataTable } from "./data-table";

export function SystemCopilotContent() {
  return (
    <div className="flex flex-col gap-6">
      <SystemCopilotSystemDataTable data={data} />
    </div>
  );
}

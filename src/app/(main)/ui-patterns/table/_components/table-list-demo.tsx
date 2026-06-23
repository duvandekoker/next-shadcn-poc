"use client";

import expandableData from "./expandable-datatable/data.json";
import { ExpandableDataTable } from "./expandable-datatable/data-table";
import nestedData from "./nested-datatable/data.json";
import { NestedDataTable } from "./nested-datatable/data-table";

export function TableListDemo() {
  return (
    <div className="flex flex-col gap-12">
      {/* Nested Table */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-xl">Nested Datatable</h2>
          <p className="text-muted-foreground text-sm">
            Nested three-level expandable rows representing system, sub-system, and system function hierarchy.
          </p>
        </div>
        <NestedDataTable data={nestedData} />
      </div>
      {/* Expandable Table */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-xl">Expandable Datatable</h2>
          <p className="text-muted-foreground text-sm">
            Expandable rows with a tabbed panel showing System Functions and Effect Chain views.
          </p>
        </div>
        <ExpandableDataTable data={expandableData} />
      </div>
    </div>
  );
}

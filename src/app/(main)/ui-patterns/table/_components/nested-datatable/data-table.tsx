"use client";
import * as React from "react";
import { PanelRightOpenIcon, Plus } from "lucide-react";
import type { z } from "zod";
import { DataTable as DataTablePrimitive } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";
import { columns } from "./columns";
import type { sectionSchema } from "./schema";
type Row = z.infer<typeof sectionSchema>;
function buildNestedData(rows: Row[]): Row[] {
  return rows.map((row) => ({
    ...row,
    name: `[SC] ${row.name}`,
    subRows: Array.from({ length: 2 }, (_, i) => {
      const childId = row.id * 100 + (i + 1);
      return {
        ...row,
        id: childId,
        name: `[S] ${row.name}.${i + 1}`,
        subRows: Array.from({ length: 2 }, (_, j) => ({
          ...row,
          id: childId * 100 + (j + 1),
          name: `[SF] ${row.name}.${i + 1}.${j + 1}`,
          subRows: undefined,
        })),
      } satisfies Row;
    }),
  }));
}
export function NestedDataTable({ data: initialData }: { data: Row[] }) {
  "use no memo";
  const data = React.useMemo(() => buildNestedData(initialData), [initialData]);
  const tableColumns = columns;
  const table = useDataTableInstance({
    data,
    columns: tableColumns,
    getRowId: (row) => row.id.toString(),
    defaultColumnVisibility: {},
    getRowCanExpand: (row) => (row.subRows?.length ?? 0) > 0,
    getSubRows: (row) => row.subRows,
    paginateExpandedRows: false,
  });
  const [copilotOpen, setCopilotOpen] = React.useState(false);
  return (
    <>
      <Sheet open={copilotOpen} onOpenChange={setCopilotOpen}>
        <SheetContent side="right" className="w-[25%] sm:max-w-none">
          <SheetHeader>
            <SheetTitle className="text-xl">Copilot</SheetTitle>
            <SheetDescription>AI-powered assistant for analysis.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-end gap-2">
          <Button variant="outline" size="sm">
            <Plus />
            <span className="hidden lg:inline">Agentic Task</span>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCopilotOpen(true)}>
            <PanelRightOpenIcon />
            <span className="hidden lg:inline">Copilot</span>
          </Button>
          <DataTableViewOptions table={table} />
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border [&_td]:px-1.5 [&_td]:py-2.5 [&_th]:h-10 [&_th]:px-1.5">
            <DataTablePrimitive table={table} columns={tableColumns} />
          </div>
          <DataTablePagination table={table} />
        </div>
      </div>
    </>
  );
}

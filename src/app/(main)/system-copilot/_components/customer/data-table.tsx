"use client";

import * as React from "react";

import { PanelRightOpenIcon, Plus } from "lucide-react";

import { DataTable as DataTablePrimitive } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";

import { columns } from "./columns";
import { ExpandedRowPanel } from "./expanded-row-panel";
import type { Section } from "./schema";

type Row = Section;

const COLUMN_LABELS: Record<string, string> = {
  name: "Name",
  description: "Description",
  responsible: "Responsible",
  systemManager: "System Manager",
  systemOwner: "System Owner",
  responsibleE4: "Responsible E4",
};

export function CustomerDataTable({ data }: { data: Row[] }) {
  "use no memo";
  const tableColumns = columns;
  const table = useDataTableInstance({
    data,
    columns: tableColumns,
    getRowId: (row) => row.id.toString(),
    defaultColumnVisibility: {},
    getRowCanExpand: () => true,
  });

  const [copilotOpen, setCopilotOpen] = React.useState(false);

  return (
    <>
      <Sheet open={copilotOpen} onOpenChange={setCopilotOpen}>
        <SheetContent side="right" className="w-[25%] sm:max-w-none">
          <SheetHeader>
            <SheetTitle className="text-xl">Copilot</SheetTitle>
            <SheetDescription>AI-powered assistant for Customer Function analysis.</SheetDescription>
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
          <DataTableViewOptions table={table} columnLabels={COLUMN_LABELS} />
        </div>
        <div className="relative flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border [&_td:not([data-slot='expanded-cell'])]:px-1.5 [&_td:not([data-slot='expanded-cell'])]:py-2.5 [&_th]:h-10 [&_th]:px-1.5">
            <DataTablePrimitive table={table} columns={tableColumns} renderSubRow={() => <ExpandedRowPanel />} />
          </div>
          <DataTablePagination table={table} />
        </div>
      </div>
    </>
  );
}

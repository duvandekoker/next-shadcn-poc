"use client";
import { Plus } from "lucide-react";
import type { z } from "zod";
import { DataTable as DataTablePrimitive } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";
import { columns } from "./columns";
import { ExpandedRowPanel } from "./expanded-row-panel";
import type { sectionSchema } from "./schema";
type Row = z.infer<typeof sectionSchema>;
export function ExpandableDataTable({ data }: { data: Row[] }) {
  "use no memo";
  const tableColumns = columns;
  const table = useDataTableInstance({
    data,
    columns: tableColumns,
    getRowId: (row) => row.id.toString(),
    defaultColumnVisibility: {},
    getRowCanExpand: () => true,
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-end gap-2">
        <Button variant="outline" size="sm">
          <Plus />
          <span className="hidden lg:inline">Action</span>
        </Button>
        <DataTableViewOptions table={table} />
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg border [&_td:not([data-slot='expanded-cell'])]:px-1.5 [&_td:not([data-slot='expanded-cell'])]:py-2.5 [&_th]:h-10 [&_th]:px-1.5">
          <DataTablePrimitive table={table} columns={tableColumns} renderSubRow={() => <ExpandedRowPanel />} />
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

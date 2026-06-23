"use client";
"use no memo";

import * as React from "react";

import { flexRender } from "@tanstack/react-table";
import { CircleCheck, Download, Loader, Plus, X } from "lucide-react";
import type { z } from "zod";

import { DataTableFacetedFilter } from "@/components/data-table/data-table-faceted-filter";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDataTableInstance } from "@/hooks/use-data-table-instance";
import { cn } from "@/lib/utils";

import { dashboardColumns } from "./columns";
import type { sectionSchema } from "./schema";

const COLUMN_LABELS: Record<string, string> = {
  header: "Header",
  type: "Section Type",
  status: "Status",
  target: "Target",
  limit: "Limit",
  reviewer: "Reviewer",
};

const STATUS_OPTIONS = [
  { label: "Done", value: "Done", icon: CircleCheck },
  { label: "In Process", value: "In Process", icon: Loader },
];

const TYPE_OPTIONS = [
  { label: "Narrative", value: "Narrative" },
  { label: "Technical content", value: "Technical content" },
  { label: "Planning", value: "Planning" },
  { label: "Research", value: "Research" },
  { label: "Legal", value: "Legal" },
  { label: "Financial", value: "Financial" },
  { label: "Visual", value: "Visual" },
  { label: "Plain language", value: "Plain language" },
  { label: "Cover page", value: "Cover page" },
  { label: "Table of contents", value: "Table of contents" },
];

export function DefaultDataTable({ data }: { data: z.infer<typeof sectionSchema>[] }) {
  const tableColumns = dashboardColumns;
  const table = useDataTableInstance({
    data,
    columns: tableColumns,
    getRowId: (row) => row.id.toString(),
    defaultColumnVisibility: {},
  });

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-1 items-center gap-2">
          <Input
            placeholder="Filter headers..."
            value={(table.getColumn("header")?.getFilterValue() as string) ?? ""}
            onChange={(e) => table.getColumn("header")?.setFilterValue(e.target.value)}
            className="h-8 w-[150px] lg:w-[250px]"
          />
          <DataTableFacetedFilter column={table.getColumn("status")} title="Status" options={STATUS_OPTIONS} />
          <DataTableFacetedFilter column={table.getColumn("type")} title="Type" options={TYPE_OPTIONS} />
          {isFiltered && (
            <Button variant="ghost" size="sm" className="h-8 px-2" onClick={() => table.resetColumnFilters()}>
              Reset
              <X className="ml-1" />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-2">
          <DataTableViewOptions table={table} columnLabels={COLUMN_LABELS} />
          <Button variant="outline" size="sm">
            <Download data-icon="inline-start" />
            <span className="hidden lg:inline">Export</span>
          </Button>
          <Button variant="outline" size="sm">
            <Plus data-icon="inline-start" />
            <span className="hidden lg:inline">Add Section</span>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const meta = header.column.columnDef.meta as { className?: string; width?: string } | undefined;
                    return (
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                        className={cn("h-10 px-1.5", meta?.className)}
                        style={meta?.width ? { width: meta.width } : undefined}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => {
                      const meta = cell.column.columnDef.meta as { className?: string; width?: string } | undefined;
                      return (
                        <TableCell
                          key={cell.id}
                          className={cn("px-1.5 py-1", meta?.className)}
                          style={meta?.width ? { width: meta.width } : undefined}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={table.getVisibleLeafColumns().length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} />
      </div>
    </div>
  );
}

"use client";
"use no memo";

import * as React from "react";

import { FunnelIcon, ListFilterIcon, PanelRightOpenIcon, Plus, SearchIcon, Settings2Icon, XIcon } from "lucide-react";
import type { z } from "zod";

import { DataTable as DataTablePrimitive } from "@/components/data-table/data-table";
import { DataTablePagination } from "@/components/data-table/data-table-pagination";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent } from "@/components/ui/tabs";
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

export function SystemCopilotSystemDataTable({ data: initialData }: { data: Row[] }) {
  const [copilotOpen, setCopilotOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedResponsible, setSelectedResponsible] = React.useState<string[]>([]);

  const responsibleOptions = React.useMemo(
    () => Array.from(new Set(initialData.map((r) => r.responsible))).sort(),
    [initialData],
  );

  function toggleOption(values: string[], value: string) {
    return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
  }

  const filteredData = React.useMemo(() => {
    let result = initialData;
    if (selectedResponsible.length > 0) {
      result = result.filter((r) => selectedResponsible.includes(r.responsible));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((r) => r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));
    }
    return result;
  }, [initialData, selectedResponsible, searchQuery]);

  const data = React.useMemo(() => buildNestedData(filteredData), [filteredData]);
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

  return (
    <>
      <Sheet open={copilotOpen} onOpenChange={setCopilotOpen}>
        <SheetContent side="right" className="w-[25%] sm:max-w-none">
          <SheetHeader>
            <SheetTitle className="text-xl">Copilot</SheetTitle>
            <SheetDescription>AI-powered assistant for KLH System analysis.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Tabs defaultValue="outline" className="w-full flex-col justify-start gap-6">
        <div className="flex flex-row items-center gap-3">
          <Label htmlFor="klh-system-view-selector" className="sr-only">
            View
          </Label>
          <Field className="min-w-0 flex-1">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon aria-hidden="true" />
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <InputGroupAddon align="inline-end" className="gap-1">
                {searchQuery.length > 0 ? (
                  <InputGroupButton
                    aria-label="Clear search"
                    size="icon-xs"
                    variant="ghost"
                    onClick={() => setSearchQuery("")}
                  >
                    <XIcon aria-hidden="true" />
                  </InputGroupButton>
                ) : null}
                <Popover>
                  <PopoverTrigger asChild>
                    <InputGroupButton variant="ghost" size="xs" className="gap-1.5" aria-label="Filter by">
                      <ListFilterIcon strokeWidth={2.5} className="size-3.5 text-muted-foreground" aria-hidden="true" />

                      {selectedResponsible.length > 0 ? (
                        <span className="text-muted-foreground tabular-nums">{selectedResponsible.length}</span>
                      ) : null}
                    </InputGroupButton>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-48 p-3">
                    <div className="flex flex-col gap-2">
                      {responsibleOptions.map((name) => (
                        <div key={name} className="flex items-center gap-2.5">
                          <Checkbox
                            id={`responsible-${name}`}
                            checked={selectedResponsible.includes(name)}
                            onCheckedChange={() => setSelectedResponsible((prev) => toggleOption(prev, name))}
                          />
                          <Label htmlFor={`responsible-${name}`} className="text-sm font-normal">
                            {name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setCopilotOpen(true)}>
              <PanelRightOpenIcon />
              <span className="hidden lg:inline">Copilot</span>
            </Button>
            <DataTableViewOptions table={table} />
          </div>
        </div>
        <TabsContent value="outline" className="relative flex flex-col gap-4">
          <div className="overflow-hidden rounded-lg border [&_td]:px-1.5 [&_td]:py-2.5 [&_th]:h-10 [&_th]:px-1.5">
            <DataTablePrimitive table={table} columns={tableColumns} />
          </div>
          <DataTablePagination table={table} />
        </TabsContent>
      </Tabs>
    </>
  );
}

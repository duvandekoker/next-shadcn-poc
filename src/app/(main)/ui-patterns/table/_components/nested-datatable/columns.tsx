import type { ColumnDef } from "@tanstack/react-table";
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import type { z } from "zod";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";

import { PersonCell } from "./person-cell";
import type { sectionSchema } from "./schema";

export const columns: ColumnDef<z.infer<typeof sectionSchema>>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div className="pl-7">
        <DataTableColumnHeader column={column} title="Name" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex min-w-0 items-center gap-1" style={{ paddingLeft: `${row.depth * 1.25}rem` }}>
        {row.getCanExpand() ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={row.getToggleExpandedHandler()}
            className="size-6 shrink-0 text-muted-foreground"
            aria-label={row.getIsExpanded() ? "Collapse row" : "Expand row"}
          >
            {row.getIsExpanded() ? <ChevronDownIcon className="size-3.5" /> : <ChevronRightIcon className="size-3.5" />}
          </Button>
        ) : (
          <span className="size-6 shrink-0" />
        )}
        <span className="truncate font-medium text-sm">{row.original.name}</span>
      </div>
    ),
    enableSorting: true,
    meta: { className: "overflow-hidden", width: "18%" },
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => (
      <span className="block truncate text-muted-foreground text-sm" title={row.original.description}>
        {row.original.description}
      </span>
    ),
    enableSorting: false,
    meta: { className: "overflow-hidden", width: "38%" },
  },
  {
    accessorKey: "responsible",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Responsible" />,
    cell: ({ row }) => <PersonCell name={row.original.responsible} />,
    enableSorting: false,
    meta: { className: "overflow-hidden", width: "11%" },
  },
  {
    accessorKey: "systemManager",
    header: ({ column }) => <DataTableColumnHeader column={column} title="System Manager" />,
    cell: ({ row }) => <PersonCell name={row.original.systemManager} />,
    enableSorting: false,
    meta: { className: "overflow-hidden", width: "11%" },
  },
  {
    accessorKey: "systemOwner",
    header: ({ column }) => <DataTableColumnHeader column={column} title="System Owner" />,
    cell: ({ row }) => <PersonCell name={row.original.systemOwner} />,
    enableSorting: false,
    meta: { className: "overflow-hidden", width: "11%" },
  },
  {
    accessorKey: "responsibleE4",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Responsible E4" />,
    cell: ({ row }) => <PersonCell name={row.original.responsibleE4} />,
    enableSorting: false,
    meta: { className: "overflow-hidden", width: "11%" },
  },
];

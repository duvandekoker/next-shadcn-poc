"use client";

import type { Editor } from "prosekit/core";
import type { TableExtension } from "prosekit/extensions/table";
import { useEditorDerivedValue } from "prosekit/react";
import {
  TableHandleColumnRoot,
  TableHandleColumnTrigger,
  TableHandleDragPreview,
  TableHandleDropIndicator,
  TableHandlePopoverContent,
  TableHandlePopoverItem,
  TableHandleRoot,
  TableHandleRowRoot,
  TableHandleRowTrigger,
} from "prosekit/react/table-handle";

function getTableHandleState(editor: Editor<TableExtension>) {
  return {
    addTableColumnBefore: {
      canExec: editor.commands.addTableColumnBefore.canExec(),
      command: () => editor.commands.addTableColumnBefore(),
    },
    addTableColumnAfter: {
      canExec: editor.commands.addTableColumnAfter.canExec(),
      command: () => editor.commands.addTableColumnAfter(),
    },
    deleteCellSelection: {
      canExec: editor.commands.deleteCellSelection.canExec(),
      command: () => editor.commands.deleteCellSelection(),
    },
    deleteTableColumn: {
      canExec: editor.commands.deleteTableColumn.canExec(),
      command: () => editor.commands.deleteTableColumn(),
    },
    addTableRowAbove: {
      canExec: editor.commands.addTableRowAbove.canExec(),
      command: () => editor.commands.addTableRowAbove(),
    },
    addTableRowBelow: {
      canExec: editor.commands.addTableRowBelow.canExec(),
      command: () => editor.commands.addTableRowBelow(),
    },
    deleteTableRow: {
      canExec: editor.commands.deleteTableRow.canExec(),
      command: () => editor.commands.deleteTableRow(),
    },
    deleteTable: {
      canExec: editor.commands.deleteTable.canExec(),
      command: () => editor.commands.deleteTable(),
    },
  };
}

interface Props {
  dir?: "ltr" | "rtl";
}

export default function TableHandle(props: Props) {
  const state = useEditorDerivedValue(getTableHandleState);

  return (
    <TableHandleRoot className="contents">
      <TableHandleDragPreview />
      <TableHandleDropIndicator />
      <TableHandleColumnRoot className="box-border flex h-[1.2em] w-[1.5em] translate-y-[80%] scale-100 starting:scale-95 items-center justify-center overflow-hidden rounded-sm border border-border border-solid bg-background p-0 text-muted-foreground/50 opacity-100 starting:opacity-0 transition transition-discrete duration-150 hover:bg-accent data-[state=closed]:scale-95 data-[state=closed]:opacity-0">
        <TableHandleColumnTrigger className="flex items-center justify-center">
          <div className="i-lucide-grip-horizontal block size-5" />
        </TableHandleColumnTrigger>
        <TableHandlePopoverContent className="relative z-10 box-border block max-h-100 min-w-32 select-none overflow-auto whitespace-nowrap rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg [&:not([data-state])]:hidden">
          {state.addTableColumnBefore.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.addTableColumnBefore.command}
            >
              <span>Insert Left</span>
            </TableHandlePopoverItem>
          )}
          {state.addTableColumnAfter.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.addTableColumnAfter.command}
            >
              <span>Insert Right</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteCellSelection.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.deleteCellSelection.command}
            >
              <span>Clear Contents</span>
              <span className="text-muted-foreground text-xs tracking-widest">Del</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteTableColumn.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.deleteTableColumn.command}
            >
              <span>Delete Column</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteTable.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              data-danger=""
              onSelect={state.deleteTable.command}
            >
              <span>Delete Table</span>
            </TableHandlePopoverItem>
          )}
        </TableHandlePopoverContent>
      </TableHandleColumnRoot>
      <TableHandleRowRoot
        placement={props.dir === "rtl" ? "right" : "left"}
        className="box-border flex h-[1.5em] w-[1.2em] scale-100 starting:scale-95 items-center justify-center overflow-hidden rounded-sm border border-border border-solid bg-background p-0 text-muted-foreground/50 opacity-100 starting:opacity-0 transition transition-discrete duration-150 hover:bg-accent data-[state=closed]:scale-95 data-[state=closed]:opacity-0 ltr:translate-x-[80%] rtl:translate-x-[-80%]"
      >
        <TableHandleRowTrigger className="flex items-center justify-center">
          <div className="i-lucide-grip-vertical block size-5" />
        </TableHandleRowTrigger>
        <TableHandlePopoverContent className="relative z-10 box-border block max-h-100 min-w-32 select-none overflow-auto whitespace-nowrap rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg [&:not([data-state])]:hidden">
          {state.addTableRowAbove.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.addTableRowAbove.command}
            >
              <span>Insert Above</span>
            </TableHandlePopoverItem>
          )}
          {state.addTableRowBelow.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.addTableRowBelow.command}
            >
              <span>Insert Below</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteCellSelection.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.deleteCellSelection.command}
            >
              <span>Clear Contents</span>
              <span className="text-muted-foreground text-xs tracking-widest">Del</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteTableRow.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              onSelect={state.deleteTableRow.command}
            >
              <span>Delete Row</span>
            </TableHandlePopoverItem>
          )}
          {state.deleteTable.canExec && (
            <TableHandlePopoverItem
              className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between gap-8 whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-[disabled=true]:pointer-events-none data-focused:bg-accent data-danger:text-red-500 data-[disabled=true]:opacity-50 hover:data-[disabled=true]:opacity-50"
              data-danger=""
              onSelect={state.deleteTable.command}
            >
              <span>Delete Table</span>
            </TableHandlePopoverItem>
          )}
        </TableHandlePopoverContent>
      </TableHandleRowRoot>
    </TableHandleRoot>
  );
}

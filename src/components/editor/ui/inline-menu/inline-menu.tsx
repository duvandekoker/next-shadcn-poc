"use client";

import { useState } from "react";

import type { BasicExtension } from "prosekit/basic";
import type { Editor } from "prosekit/core";
import type { LinkAttrs } from "prosekit/extensions/link";
import type { EditorState } from "prosekit/pm/state";
import { useEditor, useEditorDerivedValue } from "prosekit/react";
import { InlinePopover } from "prosekit/react/inline-popover";

import { Button } from "../button";

function getInlineMenuItems(editor: Editor<BasicExtension>) {
  return {
    bold: editor.commands.toggleBold
      ? {
          isActive: editor.marks.bold.isActive(),
          canExec: editor.commands.toggleBold.canExec(),
          command: () => editor.commands.toggleBold(),
        }
      : undefined,
    italic: editor.commands.toggleItalic
      ? {
          isActive: editor.marks.italic.isActive(),
          canExec: editor.commands.toggleItalic.canExec(),
          command: () => editor.commands.toggleItalic(),
        }
      : undefined,
    underline: editor.commands.toggleUnderline
      ? {
          isActive: editor.marks.underline.isActive(),
          canExec: editor.commands.toggleUnderline.canExec(),
          command: () => editor.commands.toggleUnderline(),
        }
      : undefined,
    strike: editor.commands.toggleStrike
      ? {
          isActive: editor.marks.strike.isActive(),
          canExec: editor.commands.toggleStrike.canExec(),
          command: () => editor.commands.toggleStrike(),
        }
      : undefined,
    code: editor.commands.toggleCode
      ? {
          isActive: editor.marks.code.isActive(),
          canExec: editor.commands.toggleCode.canExec(),
          command: () => editor.commands.toggleCode(),
        }
      : undefined,
    link: editor.commands.addLink
      ? {
          isActive: editor.marks.link.isActive(),
          canExec: editor.commands.addLink.canExec({ href: "" }),
          command: () => editor.commands.expandLink(),
          currentLink: getCurrentLink(editor.state) || "",
        }
      : undefined,
  };
}

function getCurrentLink(state: EditorState): string | undefined {
  const { $from } = state.selection;
  const marks = $from.marksAcross($from);
  if (!marks) {
    return;
  }
  for (const mark of marks) {
    if (mark.type.name === "link") {
      return (mark.attrs as LinkAttrs).href;
    }
  }
}

export default function InlineMenu() {
  const editor = useEditor<BasicExtension>();
  const items = useEditorDerivedValue(getInlineMenuItems);

  const [linkMenuOpen, setLinkMenuOpen] = useState(false);
  const toggleLinkMenuOpen = () => setLinkMenuOpen((open) => !open);

  const handleLinkUpdate = (href?: string) => {
    if (href) {
      editor.commands.addLink({ href });
    } else {
      editor.commands.removeLink();
    }

    setLinkMenuOpen(false);
    editor.focus();
  };

  return (
    <>
      <InlinePopover
        data-testid="inline-menu-main"
        className="relative z-10 box-border flex min-w-32 space-x-1 overflow-auto whitespace-nowrap rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg [&:not([data-state])]:hidden"
        onOpenChange={(open) => {
          if (!open) {
            setLinkMenuOpen(false);
          }
        }}
      >
        {items.bold && (
          <Button
            pressed={items.bold.isActive}
            disabled={!items.bold.canExec}
            onClick={items.bold.command}
            tooltip="Bold"
          >
            <div className="i-lucide-bold block size-5" />
          </Button>
        )}
        {items.italic && (
          <Button
            pressed={items.italic.isActive}
            disabled={!items.italic.canExec}
            onClick={items.italic.command}
            tooltip="Italic"
          >
            <div className="i-lucide-italic block size-5" />
          </Button>
        )}
        {items.underline && (
          <Button
            pressed={items.underline.isActive}
            disabled={!items.underline.canExec}
            onClick={items.underline.command}
            tooltip="Underline"
          >
            <div className="i-lucide-underline block size-5" />
          </Button>
        )}
        {items.strike && (
          <Button
            pressed={items.strike.isActive}
            disabled={!items.strike.canExec}
            onClick={items.strike.command}
            tooltip="Strikethrough"
          >
            <div className="i-lucide-strikethrough block size-5" />
          </Button>
        )}
        {items.code && (
          <Button
            pressed={items.code.isActive}
            disabled={!items.code.canExec}
            onClick={items.code.command}
            tooltip="Code"
          >
            <div className="i-lucide-code block size-5" />
          </Button>
        )}
        {items.link?.canExec && (
          <Button
            pressed={items.link.isActive}
            onClick={() => {
              items.link?.command?.();
              toggleLinkMenuOpen();
            }}
            tooltip="Link"
          >
            <div className="i-lucide-link block size-5" />
          </Button>
        )}
      </InlinePopover>

      {items.link && (
        <InlinePopover
          placement="bottom"
          defaultOpen={false}
          open={linkMenuOpen}
          onOpenChange={setLinkMenuOpen}
          data-testid="inline-menu-link"
          className="relative z-10 box-border flex w-xs flex-col items-stretch gap-y-2 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg [&:not([data-state])]:hidden"
        >
          {linkMenuOpen && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                const target = event.target as HTMLFormElement | null;
                const href = target?.querySelector("input")?.value?.trim();
                handleLinkUpdate(href);
              }}
            >
              <input
                placeholder="Paste the link..."
                defaultValue={items.link.currentLink}
                className="box-border flex h-9 w-full rounded-md border border-border border-solid bg-background px-3 py-2 text-foreground text-sm outline-hidden ring-0 ring-transparent transition file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </form>
          )}
          {items.link.isActive && (
            <button
              type="button"
              onClick={() => handleLinkUpdate()}
              onMouseDown={(event) => event.preventDefault()}
              className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border-0 bg-primary px-3 font-medium text-primary-foreground text-sm ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Remove link
            </button>
          )}
        </InlinePopover>
      )}
    </>
  );
}

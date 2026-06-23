"use client";

import type { BasicExtension } from "prosekit/basic";
import type { Union } from "prosekit/core";
import type { MentionExtension } from "prosekit/extensions/mention";
import { useEditor } from "prosekit/react";
import {
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopover,
} from "prosekit/react/autocomplete";

const regex = /#[\da-z]*$/i;

export default function TagMenu(props: { tags: { id: number; label: string }[] }) {
  const editor = useEditor<Union<[MentionExtension, BasicExtension]>>();

  const handleTagInsert = (id: number, label: string) => {
    editor.commands.insertMention({
      id: id.toString(),
      value: `#${label}`,
      kind: "tag",
    });
    editor.commands.insertText({ text: " " });
  };

  return (
    <AutocompletePopover
      regex={regex}
      className="relative z-10 box-border block max-h-100 min-w-60 select-none overflow-auto whitespace-nowrap rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg [&:not([data-state])]:hidden"
    >
      <AutocompleteList>
        <AutocompleteEmpty className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-focused:bg-accent">
          No results
        </AutocompleteEmpty>

        {props.tags.map((tag) => (
          <AutocompleteItem
            key={tag.id}
            className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-focused:bg-accent"
            onSelect={() => handleTagInsert(tag.id, tag.label)}
          >
            #{tag.label}
          </AutocompleteItem>
        ))}
      </AutocompleteList>
    </AutocompletePopover>
  );
}

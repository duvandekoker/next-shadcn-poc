"use client";

import type { BasicExtension } from "prosekit/basic";
import { canUseRegexLookbehind, type Union } from "prosekit/core";
import type { MentionExtension } from "prosekit/extensions/mention";
import { useEditor } from "prosekit/react";
import {
  AutocompleteEmpty,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopover,
} from "prosekit/react/autocomplete";

// Match inputs like "@", "@foo", "@foo bar" etc. Do not match "@ foo".
const regex = canUseRegexLookbehind() ? /(?<!\S)@(\S.*)?$/u : /@(\S.*)?$/u;

export default function UserMenu(props: {
  users: { id: number; name: string }[];
  loading?: boolean;
  onQueryChange?: (query: string) => void;
  onOpenChange?: (open: boolean) => void;
}) {
  const editor = useEditor<Union<[MentionExtension, BasicExtension]>>();

  const handleUserInsert = (id: number, username: string) => {
    editor.commands.insertMention({
      id: id.toString(),
      value: `@${username}`,
      kind: "user",
    });
    editor.commands.insertText({ text: " " });
  };

  return (
    <AutocompletePopover
      regex={regex}
      className="relative z-10 box-border block max-h-100 min-w-60 select-none overflow-auto whitespace-nowrap rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg [&:not([data-state])]:hidden"
      onQueryChange={props.onQueryChange}
      onOpenChange={props.onOpenChange}
    >
      <AutocompleteList>
        <AutocompleteEmpty className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-focused:bg-accent">
          {props.loading ? "Loading..." : "No results"}
        </AutocompleteEmpty>

        {props.users.map((user) => (
          <AutocompleteItem
            key={user.id}
            className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-focused:bg-accent"
            onSelect={() => handleUserInsert(user.id, user.name)}
          >
            <span className={props.loading ? "opacity-50" : undefined}>{user.name}</span>
          </AutocompleteItem>
        ))}
      </AutocompleteList>
    </AutocompletePopover>
  );
}

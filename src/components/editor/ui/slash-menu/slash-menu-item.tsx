"use client";

import { AutocompleteItem } from "prosekit/react/autocomplete";

export default function SlashMenuItem(props: { label: string; kbd?: string; onSelect: () => void }) {
  return (
    <AutocompleteItem
      onSelect={props.onSelect}
      className="relative box-border flex min-w-32 cursor-default select-none scroll-my-1 items-center justify-between whitespace-nowrap rounded-sm px-3 py-1.5 outline-hidden data-focused:bg-accent"
    >
      <span>{props.label}</span>
      {props.kbd && <kbd className="font-mono text-muted-foreground text-xs">{props.kbd}</kbd>}
    </AutocompleteItem>
  );
}

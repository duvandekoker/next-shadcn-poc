"use client";

import type { MouseEventHandler, ReactNode } from "react";

import { TooltipContent, TooltipRoot, TooltipTrigger } from "prosekit/react/tooltip";

export default function Button(props: {
  pressed?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  tooltip?: string;
  children: ReactNode;
}) {
  return (
    <TooltipRoot>
      <TooltipTrigger className="block">
        <button
          type="button"
          data-state={props.pressed ? "on" : "off"}
          disabled={props.disabled}
          onClick={props.onClick}
          onMouseDown={(event) => {
            // Prevent the editor from being blurred when the button is clicked
            event.preventDefault();
          }}
          className="flex min-h-9 min-w-9 items-center justify-center rounded-md bg-transparent p-2 font-medium text-foreground text-sm outline-unset transition hover:bg-accent focus-visible:outline-unset focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:text-foreground/50 data-[state=on]:bg-accent"
        >
          {props.children}
          {props.tooltip ? <span className="sr-only">{props.tooltip}</span> : null}
        </button>
      </TooltipTrigger>
      {props.tooltip ? (
        <TooltipContent className="motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[side=bottom]:slide-in-from-top-2 motion-safe:data-[side=bottom]:slide-out-to-top-2 motion-safe:data-[side=left]:slide-in-from-right-2 motion-safe:data-[side=left]:slide-out-to-right-2 motion-safe:data-[side=right]:slide-in-from-left-2 motion-safe:data-[side=right]:slide-out-to-left-2 motion-safe:data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[side=top]:slide-out-to-bottom-2 z-50 overflow-hidden rounded-md border border-solid bg-foreground px-3 py-1.5 text-background text-xs shadow-xs will-change-transform motion-safe:data-[state=closed]:animate-duration-200 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:animate-duration-150 motion-safe:data-[state=open]:animate-in [&:not([data-state])]:hidden">
          {props.tooltip}
        </TooltipContent>
      ) : null}
    </TooltipRoot>
  );
}

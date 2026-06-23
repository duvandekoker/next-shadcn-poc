"use client";

import { BlockHandleAdd, BlockHandleDraggable, BlockHandlePopover } from "prosekit/react/block-handle";

interface Props {
  dir?: "ltr" | "rtl";
}

export default function BlockHandle(props: Props) {
  return (
    <BlockHandlePopover
      placement={props.dir === "rtl" ? "right" : "left"}
      className="motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:zoom-out-95 box-border flex flex-row items-center justify-center border-0 transition will-change-transform motion-safe:data-[state=closed]:animate-duration-200 motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:animate-duration-150 motion-safe:data-[state=open]:animate-in [&:not([data-state])]:hidden"
    >
      <BlockHandleAdd className="box-border flex h-[1.5em] w-[1.5em] cursor-pointer items-center justify-center rounded-sm text-muted-foreground/50 hover:bg-accent">
        <div className="i-lucide-plus block size-5" />
      </BlockHandleAdd>
      <BlockHandleDraggable className="box-border flex h-[1.5em] w-[1.2em] cursor-grab items-center justify-center rounded-sm text-muted-foreground/50 hover:bg-accent">
        <div className="i-lucide-grip-vertical block size-5" />
      </BlockHandleDraggable>
    </BlockHandlePopover>
  );
}

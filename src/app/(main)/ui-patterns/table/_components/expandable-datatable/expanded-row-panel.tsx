"use client";

import { Tabs } from "radix-ui";

import { EffectChainFlow } from "./effect-chain-flow";

export function ExpandedRowPanel() {
  return (
    <div className="border-t bg-muted/30">
      <Tabs.Root defaultValue="system-functions">
        <div className="border-b px-4">
          <Tabs.List className="flex items-center gap-4">
            <Tabs.Trigger
              value="system-functions"
              className="-mb-px border-transparent border-b-2 py-2.5 font-medium text-muted-foreground text-sm outline-none transition-colors hover:text-foreground data-[state=active]:border-foreground data-[state=active]:text-foreground"
            >
              System Functions
            </Tabs.Trigger>
            <Tabs.Trigger
              value="effect-chain"
              className="-mb-px border-transparent border-b-2 py-2.5 font-medium text-muted-foreground text-sm outline-none transition-colors hover:text-foreground data-[state=active]:border-foreground data-[state=active]:text-foreground"
            >
              Effect Chain
            </Tabs.Trigger>
          </Tabs.List>
        </div>
        <Tabs.Content value="system-functions" className="px-4 py-3">
          <div className="rounded-lg border border-dashed p-4 text-muted-foreground text-sm">
            System Functions content
          </div>
        </Tabs.Content>
        <Tabs.Content value="effect-chain" className="px-4 py-3">
          <EffectChainFlow />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

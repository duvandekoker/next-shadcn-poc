"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EffectChainFlow } from "./effect-chain-flow";

export function ExpandedRowPanel() {
  return (
    <div className="pt-0.5 bg-muted/30">
      <Tabs defaultValue="system-functions">
        <div className="border-b px-4">
          <TabsList variant="line" className="gap-4">
            <TabsTrigger value="system-functions">System Functions</TabsTrigger>
            <TabsTrigger value="effect-chain">Effect Chain</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="system-functions" className="px-4 py-3">
          <div className="rounded-lg border border-dashed p-4 text-muted-foreground text-sm">
            System Functions content
          </div>
        </TabsContent>
        <TabsContent value="effect-chain" className="px-4 py-3">
          <EffectChainFlow />
        </TabsContent>
      </Tabs>
    </div>
  );
}


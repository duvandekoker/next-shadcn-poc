"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import type { Capability } from "./types";
import { FeatureCard } from "./feature-card";
import { StatusPill } from "./status-pill";

export function CapabilityBlock({
  cap,
  index,
  total,
}: {
  cap: Capability;
  index: number;
  total: number;
}) {
  const [open, setOpen] = useState(true);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mb-6">
      {/* Divider row */}
      <div className="mb-3 flex items-center gap-3">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
          {index + 1} of {total}
        </span>
        <Separator className="flex-1" />
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={open ? "Collapse capability" : "Expand capability"}
          >
            <ChevronRight
              className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-90")}
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="space-y-2.5">
        {/* Capability header */}
        <Card className="gap-0 py-0 shadow-none">
          <CardContent className="px-4 py-4 flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <p className="font-medium leading-snug">{cap.summary}</p>
              {cap.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              )}
            </div>
            <StatusPill status={cap.status} />
          </CardContent>
        </Card>

        {/* Features */}
        {cap.features.length > 0 && (
          <div className="ml-4 flex flex-col gap-2 border-l pl-4">
            <div className="flex items-center gap-2 py-1">
              <span className="text-xs text-muted-foreground">Features</span>
              <Badge variant="secondary" className="h-5 text-xs tabular-nums">
                {cap.features.length}
              </Badge>
            </div>
            {cap.features.map((f) => (
              <FeatureCard key={f.key} feature={f} />
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
}

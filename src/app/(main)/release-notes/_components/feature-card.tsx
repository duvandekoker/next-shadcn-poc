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
import type { Feature } from "./types";
import { TagBadge } from "./tag-badge";

const dotColor: Record<string, string> = {
  Done: "bg-green-500",
  "In Progress": "bg-amber-400",
  "To Do": "bg-muted-foreground/40",
  Blocked: "bg-destructive",
};

export function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(!feature.carryForward);
  const hasBusinessValue = Boolean(feature.businessValue);

  const storyLabel =
    feature.storiesTotal > 0
      ? feature.carryForward
        ? "Carrying forward to next PI"
        : `${feature.storiesDone} / ${feature.storiesTotal} stories`
      : null;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="gap-0 py-0 shadow-none overflow-hidden">
        {/* Header / trigger */}
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full text-left px-4 py-3.5 flex items-start gap-3 hover:bg-muted/40 transition-colors"
          >
            <span
              className={cn(
                "mt-1.5 h-2 w-2 shrink-0 rounded-full",
                dotColor[feature.status],
              )}
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium leading-snug">{feature.summary}</p>
              {feature.description && (
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              )}
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <TagBadge tag={feature.tag} />
                {storyLabel && (
                  <Badge
                    variant="outline"
                    className="font-normal text-muted-foreground"
                  >
                    {storyLabel}
                  </Badge>
                )}
              </div>
            </div>
            {hasBusinessValue && (
              <ChevronRight
                className={cn(
                  "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                  open && "rotate-90",
                )}
              />
            )}
          </button>
        </CollapsibleTrigger>

        {/* Business value panel */}
        {hasBusinessValue && (
          <CollapsibleContent>
            <Separator />
            <CardContent className="px-4 py-3 bg-muted/30">
              <p className="mb-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Business value
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.businessValue}
              </p>
            </CardContent>
          </CollapsibleContent>
        )}
      </Card>
    </Collapsible>
  );
}

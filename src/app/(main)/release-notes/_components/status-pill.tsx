import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { JiraStatus } from "./types";

const dotColor: Record<JiraStatus, string> = {
  Done: "bg-green-500",
  "In Progress": "bg-amber-400",
  "To Do": "bg-muted-foreground/40",
  Blocked: "bg-destructive",
};

const badgeColor: Record<JiraStatus, string> = {
  Done: "border-green-200 text-green-800 dark:border-green-800 dark:text-green-300",
  "In Progress": "border-amber-200 text-amber-800 dark:border-amber-800 dark:text-amber-300",
  "To Do": "",
  Blocked: "border-destructive/40 text-destructive",
};

export function StatusPill({ status }: { status: JiraStatus }) {
  return (
    <Badge variant="outline" className={cn("gap-1.5 shrink-0", badgeColor[status])}>
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor[status])} />
      {status}
    </Badge>
  );
}

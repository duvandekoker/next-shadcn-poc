import { BotIcon } from "lucide-react";

export function VirtualAssistantContent() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted">
        <BotIcon className="size-8 text-muted-foreground" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold text-lg">Virtual Assistant</h2>
        <p className="max-w-sm text-muted-foreground text-sm">
          This feature is coming soon. The virtual assistant will be available here.
        </p>
      </div>
    </div>
  );
}

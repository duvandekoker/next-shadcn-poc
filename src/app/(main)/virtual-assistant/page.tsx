import { VirtualAssistantContent } from "./_components/virtual-assistant-content";

export default function VirtualAssistantPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Virtual Assistant</h1>
        <p className="text-muted-foreground text-sm">AI-powered assistant.</p>
      </div>
      <VirtualAssistantContent />
    </div>
  );
}

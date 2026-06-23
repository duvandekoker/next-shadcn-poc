import EditorClient from "./_components/editor-client";

export default function EditorPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Editor</h1>
        <p className="text-muted-foreground text-sm">
          Full-featured rich text editor with slash commands and inline formatting.
        </p>
      </div>
      <div className="h-[calc(100dvh-12rem)]">
        <EditorClient />
      </div>
    </div>
  );
}

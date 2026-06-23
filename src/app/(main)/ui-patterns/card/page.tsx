import { Separator } from "@/components/ui/separator";

import { CardListDemo } from "./_components/card-list-demo";

export default function CardPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Card</h1>
        <p className="text-muted-foreground text-sm">Displays a card with header, content, and footer.</p>
      </div>
      <Separator />
      <CardListDemo />
    </div>
  );
}

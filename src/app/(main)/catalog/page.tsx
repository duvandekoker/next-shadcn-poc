import { CatalogCardListDemo } from "./_components/catalog-card-list-demo";

export default function CatalogPage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Catalog</h1>
        <p className="text-muted-foreground text-sm">Browse and manage your product catalog.</p>
      </div>
      <CatalogCardListDemo />
    </div>
  );
}

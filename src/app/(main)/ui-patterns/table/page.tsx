import { TableListDemo } from "./_components/table-list-demo";

export default function TablePage() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-2xl">Table</h1>
        <p className="text-muted-foreground text-sm">
          Displays a table with sortable columns, pagination, and filtering.
        </p>
      </div>
      <TableListDemo />
    </div>
  );
}

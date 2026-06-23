import data from "./data.json";
import { CustomerDataTable } from "./data-table";
export function CustomerContent() {
  return (
    <div className="flex flex-col gap-6">
      <CustomerDataTable data={data} />
    </div>
  );
}

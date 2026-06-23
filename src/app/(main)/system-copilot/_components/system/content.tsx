import data from "./data.json";
import { SystemDataTable } from "./data-table";
export function SystemContent() {
  return (
    <div className="flex flex-col gap-6">
      <SystemDataTable data={data} />
    </div>
  );
}

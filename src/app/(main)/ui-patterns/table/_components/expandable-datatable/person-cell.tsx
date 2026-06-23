interface PersonCellProps {
  name: string;
}

export function PersonCell({ name }: PersonCellProps) {
  return <span className="block truncate text-sm">{name}</span>;
}

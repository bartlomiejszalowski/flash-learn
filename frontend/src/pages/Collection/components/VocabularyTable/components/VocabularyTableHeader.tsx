import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const VocabularyTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Polski </TableHead>
        <TableHead>Angielski</TableHead>
        <TableHead className="text-right">Poziom Trudnośći</TableHead>
      </TableRow>
    </TableHeader>
  );
};

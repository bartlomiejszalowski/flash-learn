import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const VocabularyTableHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className="border-r-2">Angielski</TableHead>
        <TableHead className="border-r-2">Polski </TableHead>
        <TableHead className="text-right">Poziom Trudnośći</TableHead>
      </TableRow>
    </TableHeader>
  );
};

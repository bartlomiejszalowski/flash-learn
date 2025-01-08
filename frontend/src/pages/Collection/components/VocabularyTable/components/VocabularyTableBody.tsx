import { CheckCircle, XCircle } from "lucide-react";
import React from "react";

import { VocabularyType } from "@/@Types/general";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";

interface Props {
  vocabulary: VocabularyType[];
}
export const VocabularyTableBody: React.FC<Props> = ({ vocabulary }) => {
  return (
    <TableBody>
      {vocabulary.map((item) => (
        <TableRow key={item.word}>
          <TableCell>{item.word}</TableCell>
          <TableCell>{item.translation}</TableCell>
          <TableCell className="flex justify-end w-full">
            {item.word.length > 5 ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

import React from "react";

import { VocabularyType } from "@/@Types/general";
import { Table } from "@/components/ui/table";

import { VocabularyTableBody } from "./components/VocabularyTableBody";
import { VocabularyTableHeader } from "./components/VocabularyTableHeader";

interface Props {
  vocabulary: VocabularyType[];
}
export const VocabularyTable: React.FC<Props> = ({ vocabulary }) => {
  return (
    <Table className="border-2 ">
      <VocabularyTableHeader />
      <VocabularyTableBody vocabulary={vocabulary} />
    </Table>
  );
};

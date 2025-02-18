import { Table } from "@/components/ui/table";
import { useCollectionStore } from "@/store/Collection/collectionStore";

import { VocabularyTableBody } from "./components/VocabularyTableBody";
import { VocabularyTableHeader } from "./components/VocabularyTableHeader";

export const VocabularyTable = () => {
  const collection = useCollectionStore((state) => state.selectedCollection);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <Table className="border-2 ">
      <VocabularyTableHeader />
      <VocabularyTableBody vocabulary={collection.vocabulary} />
    </Table>
  );
};

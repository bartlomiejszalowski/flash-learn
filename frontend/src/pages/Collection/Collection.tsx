import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

import { availableCollections } from "@/constants/avaiableCollections";
import { useCollectionStore } from "@/store/Collection/collectionStore";

import { CollectionProgress } from "./components/CollectionProgress/CollectionProgress";
import { StartLearning } from "./components/StartLearning/StartLearning";
import { VocabularyTable } from "./components/VocabularyTable/VocabularyTable";

export const Collection = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId",
    select: (params) => params.collectionId,
  });

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
    }
  }, [collectionId, selectCollection]);

  const collection = availableCollections.find((c) => c.id === collectionId);

  if (!collection) return <div>Collection not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <CollectionProgress />
      <StartLearning />
      <VocabularyTable />
    </div>
  );
};

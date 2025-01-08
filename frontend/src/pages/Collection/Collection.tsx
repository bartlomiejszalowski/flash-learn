import { useParams } from "@tanstack/react-router";

import { availableCollections } from "@/constants/avaiableCollections";

import { CollectionProgress } from "./components/CollectionProgress/CollectionProgress";
import { StartLearning } from "./components/StartLearning/StartLearning";
import { VocabularyTable } from "./components/VocabularyTable/VocabularyTable";

export const Collection = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId",
    select: (params) => params.collectionId,
  });

  const collection = availableCollections.find((c) => c.id === collectionId);

  if (!collection) return <div>Collection not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <CollectionProgress collection={collection} />
      <StartLearning />
      <VocabularyTable vocabulary={collection.vocabulary} />
    </div>
  );
};

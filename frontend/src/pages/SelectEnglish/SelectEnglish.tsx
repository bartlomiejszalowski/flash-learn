import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

import { useCollectionStore } from "@/store/collectionStore";
import { useLearningModesStore } from "@/store/learningModesStore";

export const SelectEnglish = () => {
  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  // Extract collectionId and learningMode from URL
  const { collectionId, learningMode } = useParams({
    from: "/collections/$collectionId/learn/$learningMode",
    select: (params) => ({
      collectionId: params.collectionId,
      learningMode: params.learningMode,
    }),
  });

  useEffect(() => {
    loadLearningVocabulary();
    selectCollection(collectionId);
  }, [collectionId, selectCollection, loadLearningVocabulary]);

  //   return <SelectMode />;
  return (
    <div>
      <h1>{collectionId}</h1>
      <h2>{learningMode}</h2>
    </div>
  );
};

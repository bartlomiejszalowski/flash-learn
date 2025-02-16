import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

import { SelectMode } from "@/components/SelectMode/SelectMode";
import { useCollectionStore } from "@/store/collectionStore";
import { useLearningModesStore } from "@/store/learningModesStore";

export const SelectEnglish = () => {
  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  // zmienic sposob dosatwiania params
  const { collectionId } = useParams({
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

  return <SelectMode />;
};

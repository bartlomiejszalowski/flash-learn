import { useParams } from "@tanstack/react-router";
import { useEffect } from "react";

import { SelectMode } from "@/components/SelectMode/SelectMode";
import { useCollectionStore } from "@/store/collectionStore";
import { useLearningModesStore } from "@/store/learningModesStore";

export const SelectPolish = () => {
  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const collectionId = useParams({
    from: "/collections/$collectionId/learn/$learningMode",
    select: (params) => params.collectionId,
  });

  useEffect(() => {
    loadLearningVocabulary();
    selectCollection(collectionId);
  }, [collectionId, selectCollection, loadLearningVocabulary]);

  return <SelectMode />;
};

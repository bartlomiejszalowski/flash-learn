import { useEffect } from "react";

import { SelectMode } from "@/components/SelectMode/SelectMode";
import { learnModePage } from "@/router/router";
import { useCollectionStore } from "@/store/Collection/collectionStore";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const SelectPolish = () => {
  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const { collectionId, learningMode } = learnModePage.useParams();

  useEffect(() => {
    loadLearningVocabulary(learningMode as LearningModes);
    selectCollection(collectionId);
  }, [collectionId, selectCollection, loadLearningVocabulary]);

  return <SelectMode />;
};

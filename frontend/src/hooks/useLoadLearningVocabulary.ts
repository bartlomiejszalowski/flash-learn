import { useEffect } from "react";

import { learnModePage } from "@/router/router";
import { useCollectionStore } from "@/store/Collection/collectionStore";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const useLoadLearningVocabulary = () => {
  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const { collectionId, learningMode } = learnModePage.useParams();

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
    }
  }, [collectionId, selectCollection]);

  useEffect(() => {
    loadLearningVocabulary(learningMode as LearningModes);
  }, [collectionId, learningMode, loadLearningVocabulary]);

  useEffect(() => {});
};

import { useEffect } from "react";

import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const useLoadLearningVocabulary = () => {
  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const { collectionId, learningMode } = learnModePage.useParams();

  useEffect(() => {
    loadLearningVocabulary(learningMode as LearningModes);
  }, [collectionId, learningMode, loadLearningVocabulary]);
};

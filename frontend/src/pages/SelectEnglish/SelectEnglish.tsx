import { useEffect } from "react";

import { SelectMode } from "@/components/SelectMode/SelectMode";
import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

console.log("render in SelectEnglish");

export const SelectEnglish = () => {
  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const { collectionId, learningMode } = learnModePage.useParams();

  useEffect(() => {
    loadLearningVocabulary(learningMode as LearningModes);
  }, [collectionId, loadLearningVocabulary, learningMode]);

  return <SelectMode />;
};

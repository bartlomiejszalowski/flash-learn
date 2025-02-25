import { SelectMode } from "@/components/SelectMode/SelectMode";
import { useLoadLearningVocabulary } from "@/hooks/useLoadLearningVocabulary";

export const HearEnglishSelect = () => {
  useLoadLearningVocabulary();

  return <SelectMode />;
};

import { SelectMode } from "@/components/SelectMode/SelectMode";
import { useLoadLearningVocabulary } from "@/hooks/useLoadLearningVocabulary";

export const SelectPolish = () => {
  useLoadLearningVocabulary();

  return <SelectMode />;
};

import { WriteMode } from "@/components/WriteMode/WriteMode";
import { useLoadLearningVocabulary } from "@/hooks/useLoadLearningVocabulary";

export const WritePolish = () => {
  useLoadLearningVocabulary();
  return <WriteMode />;
};

import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";

import { FlashCards } from "../FlashCards/FlashCards";
import { NotFound } from "../NotFound/NotFound";
import { SelectEnglish } from "../SelectEnglish/SelectEnglish";
import { SelectPolish } from "../SelectPolish/SelectPolish";
import { WritePolish } from "../WritePolish/WritePolish";

const learningModes: Record<LearningModes, React.FC> = {
  [LearningModes.Flashcards]: FlashCards,
  [LearningModes.SelectPolish]: SelectPolish,
  [LearningModes.SelectEnglish]: SelectEnglish,
  [LearningModes.WritePolish]: WritePolish,
  [LearningModes.WriteEnglish]: () => <div>WriteEnglish</div>,
  [LearningModes.HearPolish]: () => <div>HearPolish</div>,
  [LearningModes.HearEnglish]: () => <div>HearEnglish</div>,
  [LearningModes.WriteFromHearEnglish]: () => <div>WriteFromHearEnglish</div>,
  [LearningModes.WriteFromHearPolish]: () => <div>WriteFromHearPolish</div>,
};

export const LearnModes = () => {
  const { learningMode } = learnModePage.useParams();

  if (!(learningMode in learningModes)) {
    return <NotFound />;
  }

  const Component = learningModes[learningMode as LearningModes];

  return <Component />;
};

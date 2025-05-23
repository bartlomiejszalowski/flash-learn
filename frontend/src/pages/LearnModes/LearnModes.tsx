import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";

import { FlashCards } from "../FlashCards/FlashCards";
import { HearEnglishSelect } from "../HearEnglishSelect/HearEnglishSelect";
import { HearEnglishWrite } from "../HearEnglishWrite/HearEnglishWrite";
import { HearPolishSelect } from "../HearPolishSelect/HearPolishSelect";
import { HearPolishWrite } from "../HearPolishWrite/HearPolishWrite";
import { NotFound } from "../NotFound/NotFound";
import { SelectEnglish } from "../SelectEnglish/SelectEnglish";
import { SelectPolish } from "../SelectPolish/SelectPolish";
import { WriteEnglish } from "../WriteEnglish/WriteEnglish";
import { WritePolish } from "../WritePolish/WritePolish";

const learningModes: Record<LearningModes, React.FC> = {
  [LearningModes.Flashcards]: FlashCards,
  [LearningModes.SelectPolish]: SelectPolish,
  [LearningModes.SelectEnglish]: SelectEnglish,
  [LearningModes.WritePolish]: WritePolish,
  [LearningModes.WriteEnglish]: WriteEnglish,
  [LearningModes.HearPolishSelect]: HearPolishSelect,
  [LearningModes.HearEnglishSelect]: HearEnglishSelect,
  [LearningModes.WriteFromHearEnglish]: HearEnglishWrite,
  [LearningModes.WriteFromHearPolish]: HearPolishWrite,
};

export const LearnModes = () => {
  const { learningMode } = learnModePage.useParams();

  if (!(learningMode in learningModes)) {
    return <NotFound />;
  }

  const Component = learningModes[learningMode as LearningModes];

  return <Component />;
};

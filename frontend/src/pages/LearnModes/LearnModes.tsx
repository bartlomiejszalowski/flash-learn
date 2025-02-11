import { learnModePage } from "@/router/router";

import { FlashCards } from "../FlashCards/FlashCards";
import { NotFound } from "../NotFound/NotFound";
import { SelectEnglish } from "../SelectEnglish/SelectEnglish";
import { SelectPolish } from "../SelectPolish/SelectPolish";

export const LearnModes = () => {
  const { learningMode } = learnModePage.useParams(); // Correct way to access params

  //refactor this as perpexlity suggested
  switch (learningMode) {
    case "flashcards":
      return <FlashCards />;
    case "selectPolish":
      return <SelectPolish />;
    case "selectEnglish":
      return <SelectEnglish />;
    default:
      return <NotFound />;
  }
};

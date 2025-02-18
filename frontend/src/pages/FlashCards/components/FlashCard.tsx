import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

import { FlashCardBack } from "./FlashCardBack";
import { FlashCardFront } from "./FlashCardFront";

export const FlashCard = () => {
  const isFlipped = useLearningModesStore((state) => state.isFlipped);

  return (
    <div className="w-full max-w-md aspect-[3/4] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <FlashCardFront />
        <FlashCardBack />
      </div>
    </div>
  );
};

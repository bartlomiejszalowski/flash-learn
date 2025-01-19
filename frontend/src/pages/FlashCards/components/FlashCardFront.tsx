import React from "react";

import { VocabularyType } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";

interface Props {
  flipCard: () => void;
  currentVocabulary: VocabularyType;
}

export const FlashCardFront: React.FC<Props> = ({
  flipCard,
  currentVocabulary,
}) => {
  return (
    <div
      className="w-full h-full absolute [backface-visibility:hidden] flex flex-col items-center justify-center p-6 cursor-pointer"
      onClick={flipCard}
    >
      <CustomCard type="flashCardFront" prop={currentVocabulary} />
    </div>
  );
};

import React from "react";

import { VocabularyType } from "@/@Types/general";
import { Slider } from "@/components/ui/slider";

import { SliderNavigation } from "./components/SliderNavigation";

interface Props {
  cards: VocabularyType[];
  nextCard: () => void;
  prevCard: () => void;
  handleSliderChange: (value: number[]) => void;
  currentCardIndex: number;
}

export const FlashCardSlider: React.FC<Props> = ({
  nextCard,
  prevCard,
  handleSliderChange,
  currentCardIndex,
  cards,
}) => {
  return (
    <div className="w-full max-w-md ">
      <SliderNavigation
        nextCard={nextCard}
        prevCard={prevCard}
        cards={cards}
        currentCardIndex={currentCardIndex}
      />
      <Slider
        value={[currentCardIndex]}
        min={0}
        max={cards.length - 1}
        step={1}
        onValueChange={handleSliderChange}
        className="w-full"
      />
    </div>
  );
};

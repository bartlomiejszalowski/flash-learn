import { ChevronLeft, ChevronRight } from "lucide-react";

import { VocabularyType } from "@/@Types/general";
import { Button } from "@/components/ui/button";

interface Props {
  nextCard: () => void;
  prevCard: () => void;
  currentCardIndex: number;
  cards: VocabularyType[];
}

export const SliderNavigation: React.FC<Props> = ({
  nextCard,
  prevCard,
  currentCardIndex,
  cards,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={prevCard} disabled={currentCardIndex === 0}>
        <ChevronLeft className="mr-2 h-4 w-4" /> Poprzednia
      </Button>
      <span className="text-lg font-semibold">
        {currentCardIndex + 1} / {cards.length}
      </span>
      <Button
        onClick={nextCard}
        disabled={currentCardIndex === cards.length - 1}
      >
        Następna <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

import { useParams } from "@tanstack/react-router";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { availableCollections } from "@/constants/avaiableCollections";

import { FlashCardBack } from "./components/FlashCardBack";
import { FlashCardFront } from "./components/FlashCardFront";
import { FlashCardSlider } from "./components/FlashCardSlider/FlashCardSlider";

export const FlashCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const collectionId = useParams({
    from: "/collections/$collectionId/learn/flashcards",
    select: (params) => params.collectionId,
  });

  const cards = availableCollections.find(
    (c) => c.id === collectionId
  )?.vocabulary;

  if (!cards) return <div>Collection not found</div>;

  const currentCard = cards[currentCardIndex];

  const flipCard = () => setIsFlipped(!isFlipped);

  const nextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleSliderChange = (value: number[]) => {
    setCurrentCardIndex(value[0]);
    setIsFlipped(false);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white  flex flex-col items-center justify-be">
      <h1 className="text-3xl font-bold mt-6">Flash Cards</h1>

      {/* CREATE HERE COMPONENT 'FLASHCARD' */}
      <div className="w-full max-w-md aspect-[3/4] [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <FlashCardFront flipCard={flipCard} currentVocabulary={currentCard} />
          <FlashCardBack flipCard={flipCard} currentVocabulary={currentCard} />
        </div>
      </div>
      <FlashCardSlider
        cards={cards}
        prevCard={prevCard}
        nextCard={nextCard}
        handleSliderChange={handleSliderChange}
        currentCardIndex={currentCardIndex}
      />
      <Button variant="outline" onClick={() => {}} className="mt-6">
        Zakończ naukę
      </Button>
    </div>
  );
};

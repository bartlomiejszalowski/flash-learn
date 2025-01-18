import { useParams } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { availableCollections } from "@/constants/avaiableCollections";

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Flash Cards</h1>
      <div className="w-full max-w-md aspect-[3/4] [perspective:1000px]">
        <div
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          <Card
            className="w-full h-full absolute [backface-visibility:hidden] flex flex-col items-center justify-center p-6 cursor-pointer"
            onClick={flipCard}
          >
            <CardContent className="text-center">
              <h2 className="text-4xl font-bold mb-4">{currentCard.word}</h2>
              {currentCard.image && (
                <div className="relative w-full aspect-video mb-4">
                  <img
                    src={currentCard.image || "/flamingo.jpg"}
                    alt={currentCard.word}
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-500">Kliknij, aby obrócić</p>
            </CardContent>
          </Card>
          <Card
            className="w-full h-full absolute [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-6 cursor-pointer"
            onClick={flipCard}
          >
            <CardContent className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                {currentCard.translation}
              </h2>
              {currentCard.image && (
                <div className="relative w-full aspect-video mb-4">
                  <img
                    src={currentCard.image || "/flamingo.jpg"}
                    alt={currentCard.word}
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-500">Kliknij, aby obrócić z powrotem</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full max-w-md mt-8">
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
        <Slider
          value={[currentCardIndex]}
          min={0}
          max={cards.length - 1}
          step={1}
          onValueChange={handleSliderChange}
          className="w-full"
        />
      </div>
      <Button variant="outline" onClick={() => {}} className="mt-8">
        Zakończ naukę
      </Button>
    </div>
  );
};

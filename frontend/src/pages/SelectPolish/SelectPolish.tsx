import { useParams } from "@tanstack/react-router";
import { shuffle } from "lodash";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FlashCard {
  id: number;
  english: string;
  polish: string;
}

interface SelectPolishLearningProps {
  cards: FlashCard[];
  onExit: () => void;
}

export const SelectPolishLearning = ({
  cards: initialCards,
  onExit,
}: SelectPolishLearningProps) => {
  const [cards, setCards] = useState<FlashCard[]>(initialCards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [progress, setProgress] = useState(0);

  const collectionId = useParams({
    from: "/collections/$collectionId/learn/selectPolish",
    select: (params) => params.collectionId,
  });

  useEffect(() => {
    generateOptions();
  }, [cards]); // Removed unnecessary dependency: currentCardIndex

  const generateOptions = () => {
    const correctAnswer = cards[currentCardIndex].polish;
    const otherOptions = shuffle(
      cards
        .filter((card) => card.id !== cards[currentCardIndex].id)
        .map((card) => card.polish)
    ).slice(0, 3);
    setOptions(shuffle([correctAnswer, ...otherOptions]));
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    const correct = option === cards[currentCardIndex].polish;
    setIsCorrect(correct);

    if (!correct) {
      // Move the card to the end of the deck
      setCards((prevCards) => {
        const updatedCards = [...prevCards];
        const [movedCard] = updatedCards.splice(currentCardIndex, 1);
        return [...updatedCards, movedCard];
      });
    } else {
      setProgress(
        (prevProgress) => prevProgress + (1 / initialCards.length) * 100
      );
    }

    // Move to the next card after a short delay
    setTimeout(() => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex((prevIndex) => prevIndex + 1);
      } else {
        // All cards have been reviewed
        setCurrentCardIndex(0);
      }
      setSelectedOption(null);
      setIsCorrect(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Wybierz polskie tłumaczenie</h1>
      <div className="w-full max-w-2xl">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              {cards[currentCardIndex].english}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={selectedOption !== null}
                  className={`h-20 text-lg ${
                    selectedOption === option
                      ? isCorrect
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                      : ""
                  }`}
                >
                  {option}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="mb-8">
          <Progress value={progress} className="w-full h-4" />
          <p className="text-center mt-2">Postęp: {Math.round(progress)}%</p>
        </div>
        <Button variant="outline" onClick={onExit} className="w-full">
          Zakończ naukę
        </Button>
      </div>
    </div>
  );
};

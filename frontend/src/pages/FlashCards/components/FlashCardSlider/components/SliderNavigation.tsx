import { useRouter } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCollectionStore } from "@/store/Collection/collectionStore";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const SliderNavigation = () => {
  const { history } = useRouter();

  const currentCardIndex = useLearningModesStore((state) => state.currentIndex);
  const prevCard = useLearningModesStore((state) => state.prevCard);
  const nextCard = useLearningModesStore((state) => state.nextCard);
  const cards = useCollectionStore(
    (state) => state.selectedCollection?.vocabulary
  );

  if (!cards) return <div>Collection not found</div>;

  return (
    <div className="flex justify-between items-center mb-4">
      <Button onClick={prevCard} disabled={currentCardIndex === 0}>
        <ChevronLeft className="mr-2 h-4 w-4" /> Poprzednia
      </Button>
      <span className="text-lg font-semibold">
        {currentCardIndex + 1} / {cards.length}
      </span>
      {currentCardIndex === cards.length - 1 ? (
        <Button
          onClick={() => history.go(-1)}
          className="bg-green-500 hover:bg-green-600"
        >
          Completed 🫡
        </Button>
      ) : (
        <Button onClick={nextCard}>
          Następna <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

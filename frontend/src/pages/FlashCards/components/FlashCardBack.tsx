import { CustomCard } from "@/components/CustomCard/CustomCard";
import { useCollectionStore } from "@/store/Collection/collectionStore";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const FlashCardBack = () => {
  const currentCardIndex = useLearningModesStore((state) => state.currentIndex);
  const flipCard = useLearningModesStore((state) => state.flipCard);
  const cards = useCollectionStore(
    (state) => state.selectedCollection?.vocabulary
  );

  if (!cards) return <div>Collection not found</div>;

  const currentCard = cards[currentCardIndex];
  return (
    <div
      className="w-full h-full absolute [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-6 cursor-pointer"
      onClick={flipCard}
    >
      <CustomCard type="flashCardBack" prop={currentCard} />
    </div>
  );
};

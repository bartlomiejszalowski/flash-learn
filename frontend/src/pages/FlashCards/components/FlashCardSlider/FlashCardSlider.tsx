import { Slider } from "@/components/ui/slider";
import { useCollectionStore } from "@/store/collectionStore";
import { useLearningModesStore } from "@/store/learningModesStore";

import { SliderNavigation } from "./components/SliderNavigation";

export const FlashCardSlider = () => {
  const currentCardIndex = useLearningModesStore((state) => state.currentIndex);
  const setIsFlipped = useLearningModesStore((state) => state.setIsFlipped);
  const setCurrentCardIndex = useLearningModesStore(
    (state) => state.setCurrentIndex
  );
  const cards = useCollectionStore(
    (state) => state.selectedCollection?.vocabulary
  );

  const handleSliderChange = (value: number[]) => {
    setCurrentCardIndex(value[0]);
    setIsFlipped(false);
  };

  if (!cards) return <div>Collection not found</div>;
  return (
    <div className="w-full max-w-md ">
      <SliderNavigation />
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

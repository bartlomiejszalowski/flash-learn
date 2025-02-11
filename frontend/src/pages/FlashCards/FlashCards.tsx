import { useParams, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useCollectionStore } from "@/store/collectionStore";
import {
  LearningModes,
  useLearningModesStore,
} from "@/store/learningModesStore";

import { FlashCard } from "./components/FlashCard";
import { FlashCardSlider } from "./components/FlashCardSlider/FlashCardSlider";

export const FlashCards = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId/learn/$learningMode",
    select: (params) => params.collectionId,
  });

  const resetStore = useLearningModesStore((state) => state.resetStore);

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
      resetStore(LearningModes.Flashcards);
    }
  }, [collectionId, selectCollection, resetStore]);

  const { history } = useRouter();

  const handleFinish = () => {
    history.go(-1);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white  flex flex-col items-center justify-be">
      <h1 className="text-3xl font-bold mt-6">Flash Cards</h1>

      <FlashCard />

      <FlashCardSlider />
      <Button variant="outline" onClick={handleFinish} className="mt-6">
        Zakończ naukę
      </Button>
    </div>
  );
};

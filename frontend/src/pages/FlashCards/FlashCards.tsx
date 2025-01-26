import { useParams, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useCollectionStore } from "@/store/collectionStore";

import { FlashCard } from "./components/FlashCard";
import { FlashCardSlider } from "./components/FlashCardSlider/FlashCardSlider";

export const FlashCards = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId/learn/flashcards",
    select: (params) => params.collectionId,
  });

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
    }
  }, [collectionId, selectCollection]);

  const { history } = useRouter();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white  flex flex-col items-center justify-be">
      <h1 className="text-3xl font-bold mt-6">Flash Cards</h1>

      <FlashCard />

      <FlashCardSlider />
      <Button variant="outline" onClick={() => history.go(-1)} className="mt-6">
        Zakończ naukę
      </Button>
    </div>
  );
};

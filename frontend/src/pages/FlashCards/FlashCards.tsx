import { useParams } from "@tanstack/react-router";

export const FlashCards = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId/learn/flashcards",
    select: (params) => params.collectionId,
  });

  return <div>doing FlashCards for {collectionId}</div>;
};

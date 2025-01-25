import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCollectionStore } from "@/store/collectionStore";

export const StartLearning = () => {
  const collection = useCollectionStore((state) => state.selectedCollection);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="flex justify-between items-center my-6">
      <h2 className="text-2xl font-bold">Słówka w kolekcji</h2>
      <Link
        to="/collections/$collectionId/learn"
        params={{ collectionId: collection.id }}
      >
        <Button className="flex items-center bg-green-600 hover:bg-green-700">
          <Play className="mr-2 h-4 w-4" /> Przejdz do panelu nauki
        </Button>
      </Link>
    </div>
  );
};

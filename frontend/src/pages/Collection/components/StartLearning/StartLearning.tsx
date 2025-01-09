import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";

import { AvaiableCollectionType } from "@/@Types/general";
import { Button } from "@/components/ui/button";

interface Prop {
  collection: AvaiableCollectionType;
}

export const StartLearning: React.FC<Prop> = ({ collection }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <h2 className="text-2xl font-bold">Słówka w kolekcji</h2>
      <Link
        to="/collections/$collectionId/learn"
        params={{ collectionId: collection.id }}
      >
        <Button className="flex items-center bg-green-600 hover:bg-green-700">
          <Play className="mr-2 h-4 w-4" /> Rozpocznij naukę
        </Button>
      </Link>
    </div>
  );
};

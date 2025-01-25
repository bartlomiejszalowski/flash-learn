import { useParams } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

import { LearningMode } from "@/@Types/general";
import { Button } from "@/components/ui/button";
import { learningModes } from "@/constants/learningMode";
import { useCollectionStore } from "@/store/collectionStore";

import { LearnHeader } from "./components/LearnHeader";
import { LearningEfficiency } from "./components/LearningEfficiency/LearningEfficiency";
import { LearnModeCard } from "./components/LearnModeCard/LearnModeCard";
import { LearnProgressCard } from "./components/LearnProgressCard/LearnProgressCard";

interface LearningModesViewProps {
  onExit: () => void;
}

export const Learn: React.FC<LearningModesViewProps> = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId/learn",
    select: (params) => params.collectionId,
  });

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
      console.log("works");
    }
  }, [collectionId, selectCollection]);

  const selectedCollection = useCollectionStore(
    (state) => state.selectedCollection
  );

  if (!selectedCollection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-2xl mx-auto">
        <LearnHeader collectionName={selectedCollection.name} />

        <LearnProgressCard />

        <div className="flex justify-between mt-4">
          <Button variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" /> Powrót do kolekcji
          </Button>
          <Button>Rozpocznij naukę</Button>
        </div>

        <div className="space-y-3 mb-8 mt-8">
          {learningModes.map((mode: LearningMode) => (
            <LearnModeCard key={mode.id} mode={mode} />
          ))}
        </div>

        <LearningEfficiency />
      </div>
    </div>
  );
};

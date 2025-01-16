import { useParams } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";

import { AvaiableCollectionType, LearningMode } from "@/@Types/general";
import { Button } from "@/components/ui/button";
import { availableCollections } from "@/constants/avaiableCollections";
import { learningModes } from "@/constants/learningMode";

import { LearnHeader } from "./components/LearnHeader";
import { LearningEfficiency } from "./components/LearningEfficiency/LearningEfficiency";
import { LearnModeCard } from "./components/LearnModeCard/LearnModeCard";
import { LearnProgressCard } from "./components/LearnProgressCard/LearnProgressCard";

interface LearningModesViewProps {
  collection: AvaiableCollectionType;
  onExit: () => void;
}

export const Learn: React.FC<LearningModesViewProps> = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId/learn",
    select: (params) => params.collectionId,
  });

  const collection = availableCollections.find((c) => c.id === collectionId);

  if (!collection) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-2xl mx-auto">
        <LearnHeader collectionName={collection.name} />

        <LearnProgressCard />

        <div className="flex justify-between mt-4">
          <Button variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" /> Powrót do kolekcji
          </Button>
          <Button>Rozpocznij naukę</Button>
        </div>

        <div className="space-y-3 mb-8 mt-8">
          {learningModes.map((mode: LearningMode) => (
            <LearnModeCard key={mode.id} mode={mode} collection={collection} />
          ))}
        </div>

        <LearningEfficiency />
      </div>
    </div>
  );
};

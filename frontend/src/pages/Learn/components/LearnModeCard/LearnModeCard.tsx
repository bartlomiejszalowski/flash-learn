import { Link } from "@tanstack/react-router";
import React from "react";

import { LearningMode } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";
import { useCollectionStore } from "@/store/Collection/collectionStore";

interface Props {
  mode: LearningMode;
}

export const LearnModeCard: React.FC<Props> = ({ mode }) => {
  const collection = useCollectionStore((state) => state.selectedCollection);

  if (!collection) return <div>Collection not found</div>;

  return (
    <div>
      <Link
        to={`/collections/$collectionId/learn/${mode.href}`}
        params={{ collectionId: collection.id }}
        className="cursor-pointer transition-all duration-300 "
      >
        <CustomCard type="learningMode" prop={mode} />
      </Link>
    </div>
  );
};

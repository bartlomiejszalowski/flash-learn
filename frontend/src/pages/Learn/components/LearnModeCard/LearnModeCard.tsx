import { Link } from "@tanstack/react-router";
import React from "react";

import { AvaiableCollectionType, LearningMode } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";

interface Props {
  mode: LearningMode;
  collection: AvaiableCollectionType;
}

export const LearnModeCard: React.FC<Props> = ({ mode, collection }) => {
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

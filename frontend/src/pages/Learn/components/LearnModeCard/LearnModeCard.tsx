import React from "react";

import { LearningMode } from "@/@Types/general";
import { CustomCard } from "@/components/CustomCard/CustomCard";

interface Props {
  mode: LearningMode;
}

export const LearnModeCard: React.FC<Props> = ({ mode }) => {
  return (
    <div className="cursor-pointer transition-all duration-300">
      <CustomCard type="learningMode" prop={mode} />
    </div>
  );
};

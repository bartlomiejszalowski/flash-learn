import { Trophy } from "lucide-react";

import { LearningMode } from "@/@Types/general";

interface Props {
  mode: LearningMode;
}

export const LearnModeCardHeader: React.FC<Props> = ({ mode }) => {
  return (
    <div className="flex flex-row justify-between">
      <span className="flex items-center">
        {mode.icon}
        <span className="ml-2">{mode.name}</span>
      </span>
      <span className="text-sm font-normal flex items-center">
        <Trophy className="h-4 w-4 mr-1 text-yellow-500" />
        {mode.points} pkt
      </span>
    </div>
  );
};

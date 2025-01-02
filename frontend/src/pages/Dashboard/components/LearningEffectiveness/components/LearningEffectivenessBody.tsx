import { learningEffectivenessItems } from "@/constants/learningEffectiveness";
import { LearningEffectivenessItemType } from "@/types/general";

import { LearningEffectivenessItem } from "./LearningEffectivenessItem";

export const LearningEffectivenessBody: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {learningEffectivenessItems.map(
        (item: LearningEffectivenessItemType, index) => (
          <LearningEffectivenessItem key={index} item={item} />
        )
      )}
    </div>
  );
};

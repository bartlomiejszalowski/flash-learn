import { Brain } from "lucide-react";

import { CustomCardHeader } from "@/pages/Landing/components/CustomCard/CustomCardHeader";

export const LearningEffectivenessHeader = () => {
  return (
    <CustomCardHeader
      Icon={<Brain className="h-6 w-6 mr-2 text-purple-500" />}
      children={<span>Efektywność nauki z FlashLearn</span>}
    />
  );
};

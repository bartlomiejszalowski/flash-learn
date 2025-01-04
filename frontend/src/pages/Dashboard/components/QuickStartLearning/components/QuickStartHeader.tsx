import { Zap } from "lucide-react";

import { CustomCardHeader } from "@/pages/Landing/components/CustomCard/CustomCardHeader";

export const QuickStartHeader = () => {
  return (
    <CustomCardHeader
      Icon={<Zap className="h-6 w-6 mr-2 text-yellow-500" />}
      children={<span>Szybka nauka</span>}
    />
  );
};

import { Zap } from "lucide-react";

import { CardTitle } from "@/components/ui/card";

export const QuickStartHeader = () => {
  return (
    <CardTitle className="flex items-center">
      <Zap className="h-6 w-6 mr-2 text-yellow-500" />
      Szybka nauka
    </CardTitle>
  );
};

import { Brain, Clock, Target } from "lucide-react";

import { LearningEffectivenessItemType } from "@/types/general";

export const learningEffectivenessItems: LearningEffectivenessItemType[] = [
  {
    Icon: <Clock className="h-8 w-8 mr-3 text-blue-500 mt-1" />,
    label: "Oszczędność czasu",
    description:
      " Nauka z fiszkami jest nawet o 50% szybsza niż tradycyjne metody.",
  },
  {
    Icon: <Target className="h-8 w-8 mr-3 text-green-500 mt-1" />,
    label: "Zwiększona retencja",
    description: "Aktywne przypominanie zwiększa zapamiętywanie nawet o 80%.",
  },
  {
    Icon: <Brain className="h-8 w-8 mr-3 text-purple-500 mt-1" />,
    label: "Personalizacja nauki",
    description:
      "Algorytm dostosowuje częstotliwość powtórek do Twoich potrzeb.",
  },
];

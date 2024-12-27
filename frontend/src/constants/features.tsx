import { BookOpen, Brain, Layers, Zap } from "lucide-react";

import { FeatureType } from "@/types/general";

export const features: FeatureType[] = [
  {
    icon: <Layers className="h-8 w-8 text-blue-500" />,
    title: "Custom Collections",
    description:
      "Create and organize your flashcards into themed collections for efficient learning.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-500" />,
    title: "Interactive Flashcards",
    description:
      "Flip cards with a click, revealing translations and testing your knowledge instantly.",
  },
  {
    icon: <Brain className="h-8 w-8 text-purple-500" />,
    title: "Spaced Repetition",
    description:
      "Our smart algorithm ensures you review cards at optimal intervals for maximum retention.",
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Progress Tracking",
    description:
      "Monitor your learning journey with detailed statistics and performance insights.",
  },
];

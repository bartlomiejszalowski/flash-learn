import { BookOpen, CheckSquare, Edit, Headphones, Volume2 } from "lucide-react";

import { LearningMode } from "@/@Types/general";

export const learningModes: LearningMode[] = [
  {
    id: 1,
    name: "Fiszki",
    description: "Angielskie słowo z jednej strony, polskie z drugiej",
    icon: <BookOpen className="h-6 w-6" />,
    completed: false,
    points: 10,
  },
  {
    id: 2,
    name: "Wybierz polskie",
    description: "Wybierz polskie znaczenie spośród 4 opcji",
    icon: <CheckSquare className="h-6 w-6" />,
    completed: false,
    points: 20,
  },
  {
    id: 3,
    name: "Wybierz angielskie",
    description: "Wybierz angielskie znaczenie spośród 4 opcji",
    icon: <CheckSquare className="h-6 w-6" />,
    completed: false,
    points: 30,
  },
  {
    id: 4,
    name: "Wpisz polskie",
    description: "Wpisz polskie znaczenie słówka",
    icon: <Edit className="h-6 w-6" />,
    completed: false,
    points: 40,
  },
  {
    id: 5,
    name: "Wpisz angielskie",
    description: "Wpisz angielskie znaczenie słówka",
    icon: <Edit className="h-6 w-6" />,
    completed: false,
    points: 50,
  },
  {
    id: 6,
    name: "Wybierz ze słuchu (ang)",
    description: "Wybierz angielskie znaczenie usłyszanego słowa",
    icon: <Headphones className="h-6 w-6" />,
    completed: false,
    points: 60,
  },
  {
    id: 7,
    name: "Wybierz ze słuchu (pl)",
    description: "Wybierz polskie znaczenie usłyszanego słowa",
    icon: <Headphones className="h-6 w-6" />,
    completed: false,
    points: 70,
  },
  {
    id: 8,
    name: "Wpisz ze słuchu (ang)",
    description: "Wpisz angielskie znaczenie usłyszanego słowa",
    icon: <Volume2 className="h-6 w-6" />,
    completed: false,
    points: 80,
  },
  {
    id: 9,
    name: "Wpisz ze słuchu (pl)",
    description: "Wpisz polskie znaczenie usłyszanego słowa",
    icon: <Volume2 className="h-6 w-6" />,
    completed: false,
    points: 90,
  },
];

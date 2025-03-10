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
    href: "flashcards",
  },
  {
    id: 2,
    name: "Wybierz polskie",
    description: "Wybierz polskie znaczenie spośród 4 opcji",
    icon: <CheckSquare className="h-6 w-6" />,
    completed: false,
    points: 20,
    href: "selectPolish",
  },
  {
    id: 3,
    name: "Wybierz angielskie",
    description: "Wybierz angielskie znaczenie spośród 4 opcji",
    icon: <CheckSquare className="h-6 w-6" />,
    completed: false,
    points: 30,
    href: "selectEnglish",
  },
  {
    id: 4,
    name: "Wpisz polskie",
    description: "Wpisz polskie znaczenie słówka",
    icon: <Edit className="h-6 w-6" />,
    completed: false,
    points: 40,
    href: "writePolish",
  },
  {
    id: 5,
    name: "Wpisz angielskie",
    description: "Wpisz angielskie znaczenie słówka",
    icon: <Edit className="h-6 w-6" />,
    completed: false,
    points: 50,
    href: "writeEnglish",
  },
  {
    id: 6,
    name: "Wybierz ze słuchu (ang)",
    description: "Wybierz angielskie znaczenie usłyszanego słowa",
    icon: <Headphones className="h-6 w-6" />,
    completed: false,
    points: 60,
    href: "hearEnglishSelect",
  },
  {
    id: 7,
    name: "Wybierz ze słuchu (pl)",
    description: "Wybierz polskie znaczenie usłyszanego słowa",
    icon: <Headphones className="h-6 w-6" />,
    completed: false,
    points: 70,
    href: "hearPolishSelect",
  },
  {
    id: 8,
    name: "Wpisz ze słuchu (ang)",
    description: "Wpisz angielskie znaczenie usłyszanego słowa",
    icon: <Volume2 className="h-6 w-6" />,
    completed: false,
    points: 80,
    href: "writeFromHearEnglish",
  },
  {
    id: 9,
    name: "Wpisz ze słuchu (pl)",
    description: "Wpisz polskie znaczenie usłyszanego słowa",
    icon: <Volume2 className="h-6 w-6" />,
    completed: false,
    points: 90,
    href: "writeFromHearPolish",
  },
];

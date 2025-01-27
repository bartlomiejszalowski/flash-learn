import { BookOpen } from "lucide-react";

export const availableCollections = [
  {
    id: "a1",
    name: "Angielski dla początkujących",
    Icon: <BookOpen className="h-6 w-6 mr-2 text-blue-500" />,
    cardCount: 100,
    description: "Opis kolekcji",
    collectionProgress: 50,
    vocabulary: [
      {
        id: "v1",
        word: "Hello",
        translation: "Cześć",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v2",
        word: "Goodbye",
        translation: "Do widzenia",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v3",
        word: "Thank you",
        translation: "Dziękuję",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v4",
        word: "Yes",
        translation: "Tak",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v5",
        word: "No",
        translation: "Nie",
      },
      {
        id: "v6",
        word: "Please",
        translation: "Proszę",
      },
    ],
  },
  {
    id: "a2",
    name: "Biznesowy angielski",
    Icon: <BookOpen className="h-6 w-6 mr-2 text-blue-500" />,
    cardCount: 150,
    description: "Opis kolekcji",
    collectionProgress: 50,
    vocabulary: [
      {
        id: "v7",
        word: "Meeting",
        translation: "Spotkanie",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v8",
        word: "Deadline",
        translation: "Termin wykonania",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v9",
        word: "Invoice",
        translation: "Faktura",
        image: "/flamingo.jpg", // link to public folder
      },
      {
        id: "v10",
        word: "Contract",
        translation: "Umowa",
      },
      {
        id: "v11",
        word: "Client",
        translation: "Klient",
      },
      {
        id: "v12",
        word: "Profit",
        translation: "Zysk",
      },
    ],
  },
  {
    id: "a3",
    name: "Idiomy i przysłowia",
    Icon: <BookOpen className="h-6 w-6 mr-2 text-blue-500" />,
    cardCount: 75,
    description: "Opis kolekcji",
    collectionProgress: 50,
    vocabulary: [
      {
        id: "v13",
        word: "Piece of cake",
        translation: "Bułka z masłem",
      },
      {
        id: "v14",
        word: "Break the ice",
        translation: "Przełamać lody",
      },
      {
        id: "v15",
        word: "Burn the midnight oil",
        translation: "Pracować po nocach",
      },
      {
        id: "v16",
        word: "Hit the nail on the head",
        translation: "Trafić w sedno",
      },
      {
        id: "v17",
        word: "A blessing in disguise",
        translation: "Błogosławieństwo w przebraniu",
      },
      {
        id: "v18",
        word: "Cost an arm and a leg",
        translation: "Kosztować majątek",
      },
    ],
  },
  {
    id: "a4",
    name: "Czasowniki nieregularne",
    Icon: <BookOpen className="h-6 w-6 mr-2 text-blue-500" />,
    cardCount: 50,
    description: "Opis kolekcji",
    collectionProgress: 50,
    vocabulary: [
      {
        id: "v19",
        word: "Go",
        translation: "Iść",
      },
      {
        id: "v20",
        word: "Eat",
        translation: "Jeść",
      },
      {
        id: "v21",
        word: "Run",
        translation: "Biec",
      },
      {
        id: "v22",
        word: "Write",
        translation: "Pisać",
      },
      {
        id: "v23",
        word: "Speak",
        translation: "Mówić",
      },
      {
        id: "v24",
        word: "Have",
        translation: "Mieć",
      },
    ],
  },
  {
    id: "a5",
    name: "Słownictwo zaawansowane",
    Icon: <BookOpen className="h-6 w-6 mr-2 text-blue-500" />,
    cardCount: 200,
    description: "Opis kolekcji",
    collectionProgress: 50,
    vocabulary: [
      {
        id: "v25",
        word: "Comprehensive",
        translation: "Wszechstronny",
      },
      {
        id: "v26",
        word: "Ambiguous",
        translation: "Dwuznaczny",
      },
      {
        id: "v27",
        word: "Noteworthy",
        translation: "Warty uwagi",
      },
      {
        id: "v28",
        word: "Feasible",
        translation: "Wykonalny",
      },
      {
        id: "v29",
        word: "Meticulous",
        translation: "Skrupulatny",
      },
      {
        id: "v30",
        word: "Predominant",
        translation: "Dominujący",
      },
    ],
  },
];

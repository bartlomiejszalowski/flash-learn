import { TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = [
  ["available-collections", "Dostępne kolekcje"],
  ["my-collections", "Moje kolekcje"],
  ["leaderboard", "Tablica liderów"],
  ["new-users", "Nowi użytkownicy"],
];

export const TabsTriggers = () => {
  return (
    <TabsList>
      {tabs.map(([value, text]) => (
        <TabsTrigger key={value} value={value}>
          {text}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

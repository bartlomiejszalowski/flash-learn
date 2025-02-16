import { Trophy } from "lucide-react";

export const ScoreCardHeader = () => {
  return (
    <div className="flex">
      <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
      Twój wynik dziś
    </div>
  );
};

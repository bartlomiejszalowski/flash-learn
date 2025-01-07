import { TabsContent } from "@/components/ui/tabs";

import { LeaderboardTable } from "../LeaderboardTable/LeaderboardTable";

export const Leaderboard = () => {
  return (
    <TabsContent value="leaderboard">
      <h2 className="text-2xl font-bold mb-4">Tablica liderów</h2>
      <LeaderboardTable />
    </TabsContent>
  );
};

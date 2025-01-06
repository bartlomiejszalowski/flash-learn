import { Table, TableBody } from "@/components/ui/table";
import { leaderboardData } from "@/constants/leaderboardData";
import { LeaderboardType } from "@/types/general";

import { TableHeader } from "../Table/TableHeader";
import TableItem from "../Table/TableItem";

export const LeaderboardTable = () => {
  return (
    <Table>
      <TableHeader
        firstHead="Miejsce"
        secondHead="Użytkownik"
        thirdHead="Punkty"
      />
      <TableBody>
        {leaderboardData.map((user: LeaderboardType) => (
          <TableItem
            key={user.rank}
            firstCell={user.rank}
            secondCell={user.points}
            user={user}
          />
        ))}
      </TableBody>
    </Table>
  );
};

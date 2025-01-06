import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import { LeaderboardType, NewUserType } from "@/types/general";

interface Props {
  key: number | string;
  firstCell?: number;
  user: LeaderboardType | NewUserType;
  secondCell: number | string;
}

const TableItem: React.FC<Props> = ({ key, firstCell, user, secondCell }) => {
  return (
    <TableRow key={key}>
      {firstCell && <TableCell className="font-medium">{firstCell}</TableCell>}

      <TableCell className="w-full">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2 text-left">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {user.name}
        </div>
      </TableCell>
      <TableCell className="text-right min-w-40">{secondCell}</TableCell>
    </TableRow>
  );
};

export default TableItem;

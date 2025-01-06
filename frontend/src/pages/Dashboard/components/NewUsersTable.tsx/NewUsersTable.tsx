import { Table, TableBody } from "@/components/ui/table";
import { newUsersData } from "@/constants/newUsers";
import { NewUserType } from "@/types/general";

import { TableHeader } from "../Table/TableHeader";
import TableItem from "../Table/TableItem";

const NewUsersTable = () => {
  return (
    <Table>
      <TableHeader firstHead="Użytkownik" thirdHead="Data dołączenia" />
      <TableBody>
        {newUsersData.map((user: NewUserType) => (
          <TableItem key={user.name} secondCell={user.joinedDate} user={user} />
        ))}
      </TableBody>
    </Table>
  );
};

export default NewUsersTable;

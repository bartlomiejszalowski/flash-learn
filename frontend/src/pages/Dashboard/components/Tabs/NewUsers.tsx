import { TabsContent } from "@/components/ui/tabs";

import NewUsersTable from "../NewUsersTable.tsx/NewUsersTable";

export const NewUsers = () => {
  return (
    <TabsContent value="new-users">
      <h2 className="text-2xl font-bold mb-4">Nowi użytkownicy</h2>
      <NewUsersTable />
    </TabsContent>
  );
};

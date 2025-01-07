import { TabsContent } from "@/components/ui/tabs";

import { AvailableCollectionsList } from "../AvailableCollectionList/AvailableCollectionsList";

export const AvaiableCollections = () => {
  return (
    <>
      <TabsContent value="available-collections">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Dostępne kolekcje</h2>
        </div>
        <AvailableCollectionsList />
      </TabsContent>
    </>
  );
};

export default AvaiableCollections;

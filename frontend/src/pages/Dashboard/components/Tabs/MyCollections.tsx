import { CollectionType } from "@/@Types/general";
import { TabsContent } from "@/components/ui/tabs";

import { CollectionsList } from "../CollectionsList/CollectionsList";
import { CreateCollectionDialog } from "../CreateCollectionDialog/CreateCollectionDialog";

interface Props {
  addCollection: (name: string) => void;
  collections: CollectionType[];
}

export const MyCollections: React.FC<Props> = ({
  collections,
  addCollection,
}) => {
  return (
    <TabsContent value="my-collections">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Moje kolekcje</h2>
        <CreateCollectionDialog onCreateCollection={addCollection} />
      </div>
      <CollectionsList collections={collections} />
    </TabsContent>
  );
};

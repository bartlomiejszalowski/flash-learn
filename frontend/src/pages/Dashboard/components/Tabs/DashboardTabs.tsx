import { CollectionType } from "@/@Types/general";
import { Tabs } from "@/components/ui/tabs";

import AvaiableCollections from "./AvaiableCollections";
import { Leaderboard } from "./Leaderboard";
import { MyCollections } from "./MyCollections";
import { NewUsers } from "./NewUsers";
import { TabsTriggers } from "./TabsTriggers";

interface Props {
  addCollection: (name: string) => void;
  collections: CollectionType[];
}

export const DashboardTabs: React.FC<Props> = ({
  addCollection,
  collections,
}) => {
  return (
    <Tabs defaultValue="available-collections" className="space-y-4 pt-4">
      <TabsTriggers />

      {/* available collections */}
      <AvaiableCollections />

      {/* my collections */}
      <MyCollections collections={collections} addCollection={addCollection} />

      {/* leaderboard */}
      <Leaderboard />

      {/* new users */}
      <NewUsers />
    </Tabs>
  );
};

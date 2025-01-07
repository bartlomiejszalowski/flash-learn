import { useState } from "react";

import { LearningEffectiveness } from "./components/LearningEffectiveness/LearningEffectiveness";
import { DashboardTabs } from "./components/Tabs/DashboardTabs";
import { TopRow } from "./components/TopRow/TopRow";

export const Dashboard = () => {
  const [collections, setCollections] = useState([
    { id: "1", name: "Podstawowe słownictwo", cardCount: 50 },
    { id: "2", name: "Czasowniki nieregularne", cardCount: 30 },
    { id: "3", name: "Idiomy", cardCount: 25 },
  ]);

  const addCollection = (name: string) => {
    const newCollection = {
      id: (collections.length + 1).toString(),
      name,
      cardCount: 0,
    };
    setCollections([...collections, newCollection]);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <TopRow />
        <LearningEffectiveness />
        <DashboardTabs
          collections={collections}
          addCollection={addCollection}
        />
      </main>
    </div>
  );
};

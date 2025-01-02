import { Trophy, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { LearningEffectiveness } from "./components/LearningEffectiveness/LearningEffectiveness";
import { QuickStartLearning } from "./components/QuickStartLearning/QuickStartLearning";

export const Dashboard = () => {
  // const [collections, setCollections] = useState([
  //   { id: "1", name: "Podstawowe słownictwo", cardCount: 50 },
  //   { id: "2", name: "Czasowniki nieregularne", cardCount: 30 },
  //   { id: "3", name: "Idiomy", cardCount: 25 },
  // ]);

  // const addCollection = (name: string) => {
  //   const newCollection = {
  //     id: (collections.length + 1).toString(),
  //     name,
  //     cardCount: 0,
  //   };
  //   setCollections([...collections, newCollection]);
  // };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <QuickStartLearning />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="h-6 w-6 mr-2 text-yellow-500" />
                Twój wynik dziś
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">250 punktów</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-green-500" />
                Aktywni użytkownicy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234</p>
            </CardContent>
          </Card>
        </div>

        <LearningEffectiveness />

        <Tabs defaultValue="available-collections" className="space-y-4">
          <TabsList>
            <TabsTrigger value="available-collections">
              Dostępne kolekcje
            </TabsTrigger>
            <TabsTrigger value="my-collections">Moje kolekcje</TabsTrigger>
            <TabsTrigger value="leaderboard">Tablica liderów</TabsTrigger>
            <TabsTrigger value="new-users">Nowi użytkownicy</TabsTrigger>
          </TabsList>
          <TabsContent value="available-collections">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Dostępne kolekcje</h2>
            </div>
            {/* <AvailableCollectionsList /> */}
          </TabsContent>
          <TabsContent value="my-collections">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Moje kolekcje</h2>
              {/* <CreateCollectionDialog onCreateCollection={addCollection} /> */}
            </div>
            {/* <CollectionsList collections={collections} /> */}
          </TabsContent>
          <TabsContent value="leaderboard">
            <h2 className="text-2xl font-bold mb-4">Tablica liderów</h2>
            {/* <LeaderboardTable /> */}
          </TabsContent>
          <TabsContent value="new-users">
            <h2 className="text-2xl font-bold mb-4">Nowi użytkownicy</h2>
            {/* <NewUsersTable /> */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

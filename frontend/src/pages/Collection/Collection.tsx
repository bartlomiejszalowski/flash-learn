// import { useParams } from "@tanstack/react-router";
// import { useEffect } from "react";

import { Link, useParams } from "@tanstack/react-router";
import { BookOpen, Play } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { availableCollections } from "@/constants/avaiableCollections";
import { useCollectionStore } from "@/store/Collection/collectionStore";

import { VocabularyTable } from "./VocabularyTable";

// import { availableCollections } from "@/constants/avaiableCollections";
// import { useCollectionStore } from "@/store/Collection/collectionStore";

// import { CollectionProgress } from "./components/CollectionProgress/CollectionProgress";
// import { StartLearning } from "./components/StartLearning/StartLearning";
// import { VocabularyTable } from "./components/VocabularyTable/VocabularyTable";

// export const Collection = () => {
//   const collectionId = useParams({
//     from: "/collections/$collectionId",
//     select: (params) => params.collectionId,
//   });

//   const selectCollection = useCollectionStore(
//     (state) => state.selectCollection
//   );

//   useEffect(() => {
//     if (collectionId) {
//       selectCollection(collectionId);
//     }
//   }, [collectionId, selectCollection]);

//   const collection = availableCollections.find((c) => c.id === collectionId);

//   if (!collection) return <div>Collection not found</div>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
//       <CollectionProgress />
//       <StartLearning />
//       <VocabularyTable />
//     </div>
//   );
// };

export const Collection = () => {
  const collectionId = useParams({
    from: "/collections/$collectionId",
    select: (params) => params.collectionId,
  });

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  useEffect(() => {
    if (collectionId) {
      selectCollection(collectionId);
    }
  }, [collectionId, selectCollection]);

  const collection = availableCollections.find((c) => c.id === collectionId);

  if (!collection) return <div>Collection not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <Card className="mb-8">
        <CardHeader className="w-full  flex flex-row justify-between">
          <CardTitle className="flex items-center text-2xl">
            <BookOpen className="h-6 w-6 mr-2 text-blue-500" />
            {collection.name}
          </CardTitle>
          <Link
            to="/collections/$collectionId/learn"
            params={{ collectionId: collection.id }}
          >
            <Button className="flex items-center bg-green-600 hover:bg-green-700">
              <Play className="mr-2 h-4 w-4" /> Rozpocznij naukę
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{collection.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <Progress value={30} className="w-full" />
            </div>
            <span className="text-sm font-medium">
              {/* {collection.learnedWords} / {collection.totalWords} słów */}
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Słówka w kolekcji</h2>
      </div>

      <VocabularyTable />
    </div>
  );
};

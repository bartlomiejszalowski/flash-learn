import { useParams, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useCollectionStore } from "@/store/collectionStore";
import {
  LearningModes,
  useLearningModesStore,
} from "@/store/learningModesStore";

export const SelectPolish = () => {
  // const [cards, setCards] = useState<FlashCard[]>(initialCards);
  const learningVocabulary = useLearningModesStore(
    (state) => state.learningVocabulary
  );

  const { history } = useRouter();

  const currentIndex = useLearningModesStore((state) => state.currentIndex);

  const answersOptions = useLearningModesStore((state) => state.answersOptions);

  const resetStore = useLearningModesStore((state) => state.resetStore);

  const progress = useLearningModesStore((state) => state.progress);

  const selectCollection = useCollectionStore(
    (state) => state.selectCollection
  );

  const isCorrect = useLearningModesStore((state) => state.isCorrect);

  const selectedAnswer = useLearningModesStore((state) => state.selectedAnswer);

  const setSelectedAnswer = useLearningModesStore(
    (state) => state.setSelectedAnswer
  );

  const loadLearningVocabulary = useLearningModesStore(
    (state) => state.loadLearningVocabulary
  );

  const generateAnswersOptions = useLearningModesStore(
    (state) => state.generateAnswersOptions
  );

  const collectionId = useParams({
    from: "/collections/$collectionId/learn/selectPolish",
    select: (params) => params.collectionId,
  });

  useEffect(() => {
    generateAnswersOptions();
  }, []);

  useEffect(() => {
    loadLearningVocabulary();
    selectCollection(collectionId);
  }, [collectionId, selectCollection, loadLearningVocabulary]);

  const handleFinish = () => {
    history.go(-1);
    resetStore(LearningModes.SelectPolish);
  };

  if (!learningVocabulary) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Wybierz kolekcję</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-500">
        Wybierz polskie tłumaczenie
      </h1>
      <div className="w-full max-w-2xl">
        {progress === 100 ? (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-4xl font-bold text-center mb-8">
                Koniec nauki!
              </h2>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-4xl font-bold text-center mb-8">
                {learningVocabulary[currentIndex].word}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {answersOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedAnswer(option)}
                    disabled={selectedAnswer !== null}
                    className={`h-20 text-lg ${
                      selectedAnswer === option
                        ? isCorrect
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-red-500 hover:bg-red-600"
                        : ""
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        <div className="mb-8">
          <Progress value={progress} className="w-full h-4" />
          <p className="text-center mt-2">Postęp: {Math.round(progress)}%</p>
        </div>
        <Button variant="outline" onClick={handleFinish} className="w-full">
          Zakończ naukę
        </Button>
      </div>
    </div>
  );
};

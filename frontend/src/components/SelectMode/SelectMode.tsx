import { useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";

export const SelectMode = () => {
  const { history } = useRouter();

  const { learningMode } = learnModePage.useParams();

  const learningVocabulary = useLearningModesStore(
    (state) => state.learningVocabulary
  );

  const resetStore = useLearningModesStore((state) => state.resetStore);

  const progress = useLearningModesStore((state) => state.progress);

  const currentIndex = useLearningModesStore((state) => state.currentIndex);

  const answersOptions = useLearningModesStore((state) => state.answersOptions);

  const isCorrect = useLearningModesStore((state) => state.isCorrect);

  const selectedAnswer = useLearningModesStore((state) => state.selectedAnswer);

  // const generateAnswersOptions = useLearningModesStore(
  //   (state) => state.generateAnswersOptions
  // );

  const setSelectedAnswer = useLearningModesStore(
    (state) => state.setSelectedAnswer
  );

  // useEffect(() => {
  //   generateAnswersOptions(learningMode as LearningModes);
  // }, [generateAnswersOptions, learningMode]);

  useEffect(() => {
    return () => {
      resetStore(LearningModes.SelectPolish);
    };
  }, []);

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
        {learningMode === LearningModes.SelectPolish
          ? "Select Polish"
          : "Select English"}
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
                {learningMode === LearningModes.SelectPolish
                  ? learningVocabulary[currentIndex].word
                  : learningVocabulary[currentIndex].translation}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {answersOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() =>
                      setSelectedAnswer(option, learningMode as LearningModes)
                    }
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

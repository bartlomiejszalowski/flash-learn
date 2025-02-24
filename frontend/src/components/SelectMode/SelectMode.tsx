import { useRouter } from "@tanstack/react-router";
import { Volume2 } from "lucide-react";
import { useCallback, useEffect } from "react";

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

  const isHearPolish = learningMode === LearningModes.HearPolishSelect;
  const isAudioMode =
    learningMode === LearningModes.HearEnglishSelect || isHearPolish;

  const isSelectMode =
    learningMode === LearningModes.SelectPolish ||
    learningMode === LearningModes.SelectEnglish;

  const setSelectedAnswer = useLearningModesStore(
    (state) => state.setSelectedAnswer
  );

  const speakWord = useCallback(() => {
    if (learningVocabulary) {
      const wordToSpeak = isHearPolish
        ? learningVocabulary[currentIndex].translation
        : learningVocabulary[currentIndex].word;

      const utterance = new SpeechSynthesisUtterance(wordToSpeak);
      utterance.lang = isHearPolish ? "pl-PL" : "en-US";
      window.speechSynthesis.speak(utterance);
    }
  }, [learningVocabulary, currentIndex, isHearPolish]);

  useEffect(() => {
    return () => {
      resetStore(LearningModes.SelectPolish);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (learningVocabulary) {
        speakWord();
      }

      return;
    }, 500);

    return () => clearTimeout(timer); // Usunięcie timera przy kolejnej zmianie
  }, [currentIndex, learningVocabulary, isAudioMode, speakWord]);

  const handleFinish = () => {
    history.go(-1);
    resetStore(LearningModes.SelectPolish);
  };

  if (!learningVocabulary) return <div>no vocabulary</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-500">
        {/* REFACTOR -> SWITCH HERE */}
        {isSelectMode
          ? learningMode === LearningModes.SelectPolish
            ? "Select Polish"
            : "Select English"
          : isHearPolish
            ? "Wybierz angieslskie znaczenie słowka które słyszysz"
            : "wybierz polskie znaczenie słowka które słyszysz"}
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
              {!isAudioMode && (
                <h2 className="text-4xl font-bold text-center mb-8">
                  {learningMode === LearningModes.SelectPolish
                    ? learningVocabulary[currentIndex].word
                    : learningVocabulary[currentIndex].translation}
                </h2>
              )}
              {isAudioMode && (
                <div className="flex justify-center mb-8">
                  <Button onClick={speakWord} variant="outline" size="lg">
                    <Volume2 className="mr-2 h-6 w-6" />
                  </Button>
                </div>
              )}
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

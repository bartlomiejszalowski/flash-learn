import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, XCircle } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { AnswerForm } from "@/form/forms";
import { answerSchema } from "@/form/schema";
import { learnModePage } from "@/router/router";
import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

export const WriteMode = () => {
  const { learningMode } = learnModePage.useParams();

  const setSelectedAnswer = useLearningModesStore(
    (state) => state.setSelectedAnswer
  );

  const correctAnswer = useLearningModesStore((state) => state.correctAnswer);

  const progress = useLearningModesStore((state) => state.progress);

  const currentIndex = useLearningModesStore((state) => state.currentIndex);

  const learningVocabulary = useLearningModesStore(
    (state) => state.learningVocabulary
  );

  const resetStore = useLearningModesStore((state) => state.resetStore);

  const selectDontknow = useLearningModesStore((state) => state.selectDontknow);

  const isCorrect = useLearningModesStore((state) => state.isCorrect);

  const isWritePolish = learningMode === LearningModes.WritePolish;

  const form = useForm<AnswerForm>({
    resolver: zodResolver(answerSchema),
    defaultValues: {
      answer: "",
    },
  });

  useEffect(() => {
    return () => {
      resetStore(LearningModes.SelectPolish);
    };
  }, []);

  const handleFormSubmit = form.handleSubmit((data) => {
    if (!data.answer) return;

    setSelectedAnswer(data.answer, learningMode as LearningModes);

    setTimeout(() => form.reset(), 2000);
  });

  const handleDontKnow = () => {
    selectDontknow(learningMode as LearningModes);
    form.reset();
  };

  if (!learningVocabulary) return;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">
        {isWritePolish
          ? "Wpisz polskie tłumaczenie"
          : "Wpisz angielskie tłumaczenie"}
      </h1>
      <div className="w-full max-w-2xl">
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              {isWritePolish
                ? learningVocabulary[currentIndex].word
                : learningVocabulary[currentIndex].translation}
            </h2>
            <Form {...form}>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  {...form.register("answer")}
                  placeholder="Wpisz tłumaczenie"
                  className="w-full"
                  disabled={isCorrect !== null}
                />
                <div className="flex space-x-2">
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={isCorrect !== null}
                  >
                    Sprawdź
                  </Button>
                  <Button
                    type="button"
                    onClick={handleDontKnow}
                    className="flex-1"
                    variant="secondary"
                    disabled={isCorrect !== null}
                  >
                    Nie wiem
                  </Button>
                </div>
                {isCorrect !== null && (
                  <div
                    className={`mt-4 flex items-center justify-center p-2 rounded-md ${
                      isCorrect
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {isCorrect ? (
                      <CheckCircle className="mr-2 h-5 w-5" />
                    ) : (
                      <XCircle className="mr-2 h-5 w-5" />
                    )}
                    {isCorrect
                      ? "Poprawna odpowiedź!"
                      : `Niepoprawnie. Prawidłowa odpowiedź: ${correctAnswer}`}
                  </div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
        <div className="mb-8">
          <Progress value={progress} className="w-full h-4" />
          <p className="text-center mt-2">{progress}</p>
        </div>
        <Button variant="outline" onClick={() => {}} className="w-full">
          Zakończ naukę
        </Button>
      </div>
    </div>
  );
};

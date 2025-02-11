import { shuffle } from "lodash";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { VocabularyType } from "@/@Types/general";

import { useCollectionStore } from "./collectionStore";

// Create an enum for LearningModes
export enum LearningModes {
  Flashcards = "flashcards",
  SelectPolish = "selectPolish",
  SelectEnglish = "selectEnglish",
  WritePolish = "writePolish",
  WriteEnglish = "writeEnglish",
  HearPolish = "hearPolish",
  HearEnglish = "hearEnglish",
  WriteFromHearEnglish = "writeFromHearEnglish",
  WriteFromHearPolish = "writeFromHearPolish",
}

// Define the shape of the Zustand store
type LearningModesStore = {
  learningVocabulary: VocabularyType[] | null;
  totalVocabularyCount: number;
  currentLearningMode: LearningModes;
  currentIndex: number;
  isFlipped: boolean;
  answersOptions: string[];
  selectedAnswer: string | null;
  isCorrect: boolean | null;
  progress: number;
  selectLearningMode: (mode: LearningModes) => void;
  setCurrentIndex: (index: number) => void;
  flipCard: () => void;
  setIsFlipped: (flipped: boolean) => void;
  nextCard: () => void;
  prevCard: () => void;
  resetStore: (defaultMode: LearningModes) => void;
  loadLearningVocabulary: () => void;
  setSelectedAnswer: (answer: string, mode?: LearningModes) => void;
  setIsCorrect: (correct: boolean) => void;
  setProgress: (progress: number) => void;
  generateAnswersOptions: () => void;
};

// Zustand store creation
export const useLearningModesStore = create<LearningModesStore>()(
  devtools((set) => ({
    learningVocabulary: null,
    currentLearningMode: LearningModes.Flashcards, // Default mode
    currentIndex: 0,
    isFlipped: false,
    answersOptions: [],
    selectedAnswer: null,
    isCorrect: null,
    progress: 0,
    totalVocabularyCount: 0,
    selectLearningMode: (mode: LearningModes) =>
      set({ currentLearningMode: mode }),
    setCurrentIndex: (index: number) => set({ currentIndex: index }),
    flipCard: () =>
      set((state) => ({
        isFlipped: !state.isFlipped, // Toggle isFlipped
      })),
    setIsFlipped: (flipped: boolean) => set({ isFlipped: flipped }),
    nextCard: () =>
      set((state) => ({
        currentIndex: state.currentIndex + 1,
        isFlipped: false,
      })),
    prevCard: () =>
      set((state) => ({
        currentIndex: state.currentIndex - 1,
        isFlipped: false,
      })),
    resetStore: (defaultMode: LearningModes) =>
      set(() => ({
        currentLearningMode: defaultMode,
        currentIndex: 0,
        isFlipped: false,
        progress: 0,
      })),
    //use it also in other app parts
    loadLearningVocabulary: () => {
      const selectedCollection =
        useCollectionStore.getState().selectedCollection;
      if (selectedCollection) {
        set({ learningVocabulary: selectedCollection.vocabulary });
        set({ totalVocabularyCount: selectedCollection.vocabulary.length });
      } else {
        console.log("Collection not found");
      }
    },
    // setSelectedAnswer: (answer: string) => {
    //  set((state) => {
    //   const {learningVocabulary, currentIndex, isCorrect} = state;

    //    if(answer) {
    //     return { selectedAnswer: answer };
    //    }

    //    if(learningVocabulary) {
    //     const answerIsCorrect = learningVocabulary[currentIndex].translation === answer;
    //     return {isCorrect: answerIsCorrect}
    //    }

    //    if(!isCorrect) {
    //     return {learningVocabulary:}
    //    }

    //  })
    // },
    setSelectedAnswer: (answer) =>
      set((state) => {
        const {
          learningVocabulary,
          currentIndex,
          totalVocabularyCount,
          generateAnswersOptions,
        } = state;
        if (!learningVocabulary || learningVocabulary.length === 0)
          return state; // Fallback to current state

        // const correctAnswer = learningVocabulary[currentIndex].translation;
        const correctAnswer = learningVocabulary[0].translation;
        const isCorrect = answer === correctAnswer;
        set({ isCorrect });

        const updatedVocabulary = [...learningVocabulary];
        // let newProgress = progress;

        if (!isCorrect) {
          const [incorrectAnswer] = updatedVocabulary.splice(currentIndex, 1); // Remove the incorrect answer
          updatedVocabulary.push(incorrectAnswer); // Add the incorrect answer back
        } else {
          updatedVocabulary.splice(currentIndex, 1); // Remove the correct answer
        }

        const completedCount = totalVocabularyCount - updatedVocabulary.length;
        const newProgress = Math.round(
          (completedCount / totalVocabularyCount) * 100
        );

        setTimeout(() => {
          set({
            selectedAnswer: null,
            isCorrect: null, // Jednoczesny reset
          });
          generateAnswersOptions();
        }, 1000);

        return {
          learningVocabulary: updatedVocabulary,
          selectedAnswer: answer,
          isCorrect,
          progress: newProgress,
        };
      }),

    setIsCorrect: (correct: boolean) => set({ isCorrect: correct }),
    setProgress: (progress: number) => set({ progress }),
    generateAnswersOptions: () => {
      set((state) => {
        const { learningVocabulary, currentIndex } = state;

        if (
          !learningVocabulary ||
          learningVocabulary.length === 0 ||
          currentIndex >= learningVocabulary.length
        ) {
          console.error("No vocabulary loaded or invalid index!");
          return { answersOptions: [] };
        }

        const correctAnswer = learningVocabulary[currentIndex].translation;
        const allVocabularies =
          useCollectionStore
            .getState()
            .collections?.flatMap((collection) => collection.vocabulary) || [];

        const incorrectAnswers = shuffle(
          allVocabularies
            .filter(
              (vocabulary) =>
                vocabulary.id !== learningVocabulary[currentIndex].id
            )
            .map((vocabulary) => vocabulary.translation)
        ).slice(0, 3);

        const options = shuffle([correctAnswer, ...incorrectAnswers]);
        return { answersOptions: options };
      });
    },
  }))
);

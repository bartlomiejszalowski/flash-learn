import { shuffle } from "lodash";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { VocabularyType } from "@/@Types/general";

import { useCollectionStore } from "../Collection/collectionStore";
import { LearningModes, modeSettings } from "./learningModeService";

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
  correctAnswer: string;
  progress: number;
  selectLearningMode: (mode: LearningModes) => void;
  setCurrentIndex: (index: number) => void;
  flipCard: () => void;
  setIsFlipped: (flipped: boolean) => void;
  nextCard: () => void;
  prevCard: () => void;
  resetStore: (defaultMode: LearningModes) => void;
  loadLearningVocabulary: (mode: LearningModes) => void;
  setSelectedAnswer: (answer: string, mode: LearningModes) => void;
  setIsCorrect: (correct: boolean) => void;
  setProgress: (progress: number) => void;
  generateAnswersOptions: (learningMode: LearningModes) => void;
  selectDontknow: (mode: LearningModes) => void;
};

// Zustand store creation
export const useLearningModesStore = create<LearningModesStore>()(
  devtools((set, get) => ({
    learningVocabulary: null,
    currentLearningMode: LearningModes.Flashcards, // Default mode
    currentIndex: 0,
    isFlipped: false,
    answersOptions: [],
    selectedAnswer: null,
    isCorrect: null,
    correctAnswer: "",
    activeAnswer: null,
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
    loadLearningVocabulary: (mode) => {
      const selectedCollection =
        useCollectionStore.getState().selectedCollection;
      if (selectedCollection) {
        const shuffledVocabulary = shuffle([...selectedCollection.vocabulary]); // Tworzenie kopii przed tasowaniem
        set({
          learningVocabulary: shuffledVocabulary,
          totalVocabularyCount: shuffledVocabulary.length,
        });

        if (
          mode === LearningModes.SelectEnglish ||
          mode === LearningModes.SelectPolish ||
          mode === LearningModes.HearEnglishSelect ||
          mode === LearningModes.HearPolishSelect ||
          mode === LearningModes.WriteFromHearEnglish ||
          mode === LearningModes.WriteFromHearPolish ||
          mode === LearningModes.WriteEnglish ||
          mode === LearningModes.WritePolish
        ) {
          get().generateAnswersOptions(mode);
        }
      } else {
        console.log("Nie znaleziono kolekcji");
      }
    },

    setSelectedAnswer: (answer, mode) =>
      set((state) => {
        const {
          learningVocabulary,
          currentIndex,
          totalVocabularyCount,
          generateAnswersOptions,
        } = state;

        if (!learningVocabulary?.length) return state; // Fallback to current state

        const currentWord = learningVocabulary[currentIndex];

        if (!mode) console.log("Nie wybrano modułu");

        const { timeout, getCorrectAnswer } =
          modeSettings[mode as LearningModes];

        const correctAnswer: string = getCorrectAnswer(currentWord);

        const isCorrect =
          answer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();

        set({ correctAnswer, isCorrect });

        const updatedVocabulary = [...learningVocabulary];

        setTimeout(() => {
          if (!isCorrect) {
            const [incorrectAnswer] = updatedVocabulary.splice(currentIndex, 1); // Remove the incorrect answer
            updatedVocabulary.push(incorrectAnswer); // Add the incorrect answer back
          } else {
            updatedVocabulary.splice(currentIndex, 1); // Remove the correct answer
          }

          const progress = Math.round(
            ((totalVocabularyCount - updatedVocabulary.length) /
              totalVocabularyCount) *
              100
          );

          set({
            learningVocabulary: updatedVocabulary,
            selectedAnswer: null,
            isCorrect: null,
            progress,
          });
          generateAnswersOptions(mode);
        }, timeout);

        return { selectedAnswer: answer, isCorrect };
      }),

    setIsCorrect: (correct: boolean) => set({ isCorrect: correct }),
    setProgress: (progress: number) => set({ progress }),
    // generateAnswersOptions: (learningMode: LearningModes) => {
    //   set((state) => {
    //     const { learningVocabulary, currentIndex } = state;

    //     if (
    //       !learningVocabulary ||
    //       learningVocabulary.length === 0 ||
    //       currentIndex >= learningVocabulary.length
    //     ) {
    //       return { answersOptions: [] };
    //     }

    //     const currentVocab = learningVocabulary[currentIndex];
    //     const allVocabularies =
    //       useCollectionStore
    //         .getState()
    //         .collections?.flatMap((collection) => collection.vocabulary) || [];

    //     let correctAnswer;
    //     //refactor
    //     switch (learningMode) {
    //       case LearningModes.SelectEnglish:
    //       case LearningModes.HearPolishSelect:
    //       case LearningModes.WriteEnglish:
    //         correctAnswer = currentVocab.word;
    //         break;
    //       case LearningModes.SelectPolish:
    //       case LearningModes.HearEnglishSelect:
    //       case LearningModes.WritePolish:
    //         correctAnswer = currentVocab.translation;
    //         break;
    //       default:
    //         console.error("Nieprawidłowy tryb nauki!");
    //         return { answersOptions: [] };
    //     }

    //     const shouldUseWord = new Set([
    //       LearningModes.SelectEnglish,
    //       LearningModes.HearPolishSelect,
    //     ]);

    //     // Tworzenie głębokiej kopii tablicy i filtrowanie bieżącego słowa
    //     const availableAnswers = allVocabularies
    //       .filter((vocab) => vocab.id !== currentVocab.id)
    //       .map((vocabulary) =>
    //         shouldUseWord.has(learningMode)
    //           ? vocabulary.word
    //           : vocabulary.translation
    //       );

    //     // Pobranie 3 losowych niepoprawnych odpowiedzi
    //     const incorrectAnswers = shuffle(availableAnswers).slice(0, 3);

    //     // Upewnienie się, że poprawna odpowiedź jest zawsze uwzględniona
    //     const options = shuffle([correctAnswer, ...incorrectAnswers]);

    //     return {
    //       answersOptions: options,
    //       correctAnswer, // Zapisanie poprawnej odpowiedzi w stanie
    //     };
    //   });
    // },
    generateAnswersOptions: (learningMode: LearningModes) => {
      set((state) => {
        const { learningVocabulary, currentIndex } = state;

        if (
          !learningVocabulary ||
          learningVocabulary.length === 0 ||
          currentIndex >= learningVocabulary.length
        ) {
          return { answersOptions: [] };
        }

        const currentVocab = learningVocabulary[currentIndex];
        const allVocabularies =
          useCollectionStore
            .getState()
            .collections?.flatMap((collection) => collection.vocabulary) || [];

        let correctAnswer;
        switch (learningMode) {
          case LearningModes.SelectEnglish:
          case LearningModes.HearPolishSelect:
          case LearningModes.WriteEnglish:
          case LearningModes.WriteFromHearPolish:
            correctAnswer = currentVocab.word;
            break;
          case LearningModes.SelectPolish:
          case LearningModes.HearEnglishSelect:
          case LearningModes.WritePolish:
          case LearningModes.WriteFromHearEnglish:
            correctAnswer = currentVocab.translation;
            break;
          default:
            console.error("Nieprawidłowy tryb nauki!");
            return { answersOptions: [] };
        }

        // Tryby, które powinny zwrócić tylko poprawną odpowiedź
        const singleAnswerModes = new Set([
          LearningModes.HearEnglishSelect,
          LearningModes.HearPolishSelect,
          LearningModes.WriteFromHearEnglish,
          LearningModes.WriteFromHearPolish,
        ]);

        if (singleAnswerModes.has(learningMode)) {
          return {
            answersOptions: [correctAnswer],
            correctAnswer,
          };
        }

        // Tworzenie głębokiej kopii tablicy i filtrowanie bieżącego słowa
        const availableAnswers = allVocabularies
          .filter((vocab) => vocab.id !== currentVocab.id)
          .map((vocabulary) =>
            learningMode === LearningModes.WriteEnglish
              ? vocabulary.word
              : vocabulary.translation
          );

        // Pobranie 3 losowych niepoprawnych odpowiedzi
        const incorrectAnswers = shuffle(availableAnswers).slice(0, 3);

        // Upewnienie się, że poprawna odpowiedź jest zawsze uwzględniona
        const options = shuffle([correctAnswer, ...incorrectAnswers]);

        return {
          answersOptions: options,
          correctAnswer,
        };
      });
    },

    selectDontknow: (mode) => {
      set((state) => {
        const { learningVocabulary, currentIndex, generateAnswersOptions } =
          state;

        if (!learningVocabulary) return state;

        const updatedVocabulary = [...learningVocabulary];

        setTimeout(() => {
          const [incorrectAnswer] = updatedVocabulary.splice(currentIndex, 1);
          updatedVocabulary.push(incorrectAnswer);

          set({
            learningVocabulary: updatedVocabulary,
            isCorrect: null,
          });
          generateAnswersOptions(mode);
        }, 1500);

        return { isCorrect: false };
      });
    },
  }))
);

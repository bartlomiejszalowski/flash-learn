import { create } from "zustand";

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
  currentLearningMode: LearningModes;
  currentIndex: number;
  isFlipped: boolean;
  selectLearningMode: (mode: LearningModes) => void;
  setCurrentIndex: (index: number) => void;
  flipCard: () => void;
  setIsFlipped: (flipped: boolean) => void;
  nextCard: () => void;
  prevCard: () => void;
  resetStore: (defaultMode: LearningModes) => void;
  loadLearningVocabulary: () => void;
};

// Zustand store creation
export const useLearningModesStore = create<LearningModesStore>()((set) => ({
  learningVocabulary: null,
  currentLearningMode: LearningModes.Flashcards, // Default mode
  currentIndex: 0,
  isFlipped: false,
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
    })),
  //use it also in other app parts
  loadLearningVocabulary: () => {
    const selectedCollection = useCollectionStore.getState().selectedCollection;
    if (selectedCollection) {
      set({ learningVocabulary: selectedCollection.vocabulary });
    } else {
      console.log("Collection not found");
    }
  },
}));

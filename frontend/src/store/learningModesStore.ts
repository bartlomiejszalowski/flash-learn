import { create } from "zustand";

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
  currentLearningMode: LearningModes;
  currentIndex: number;
  isFlipped: boolean;
  selectLearningMode: (mode: LearningModes) => void;
  setCurrentIndex: (index: number) => void;
  flipCard: () => void;
  setIsFlipped: (flipped: boolean) => void;
  nextCard: () => void;
  prevCard: () => void;
};

// Zustand store creation
export const useLearningModesStore = create<LearningModesStore>()((set) => ({
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
}));

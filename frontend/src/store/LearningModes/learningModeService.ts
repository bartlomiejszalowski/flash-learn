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

type ModeSetting = {
  timeout: number;
  getCorrectAnswer: (word: { word: string; translation: string }) => string;
};

export const modeSettings: Record<LearningModes, ModeSetting> = {
  [LearningModes.SelectPolish]: {
    timeout: 1000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.SelectEnglish]: {
    timeout: 1000,
    getCorrectAnswer: (word) => word.word,
  },
  [LearningModes.WriteEnglish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.word,
  },
  [LearningModes.WritePolish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.HearPolish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.HearEnglish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.WriteFromHearEnglish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.WriteFromHearPolish]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
  [LearningModes.Flashcards]: {
    timeout: 2000,
    getCorrectAnswer: (word) => word.translation,
  },
};

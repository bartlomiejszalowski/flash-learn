import { useCallback, useEffect } from "react";

import { LearningModes } from "@/store/LearningModes/learningModeService";
import { useLearningModesStore } from "@/store/LearningModes/learningModesStore";

interface Props {
  learningMode: LearningModes;
}

export const useAudio = ({ learningMode }: Props) => {
  const learningVocabulary = useLearningModesStore(
    (state) => state.learningVocabulary
  );
  const currentIndex = useLearningModesStore((state) => state.currentIndex);

  // Określamy tryby audio, które mają wspólną logikę
  const audioModes = new Set([
    LearningModes.HearPolishSelect,
    LearningModes.WriteFromHearPolish,
    LearningModes.HearEnglishSelect,
    LearningModes.WriteFromHearEnglish,
  ]);

  // Sprawdzamy, czy dany tryb jest jednym z trybów audio
  const isAudioMode = audioModes.has(learningMode);

  // Określamy, czy tryb jest "select" (do wyboru)
  const isSelectMode =
    learningMode === LearningModes.SelectPolish ||
    learningMode === LearningModes.SelectEnglish;

  const speakWord = useCallback(() => {
    if (learningVocabulary) {
      window.speechSynthesis.cancel(); // Zatrzymujemy wszelkie aktualne odczyty

      const wordToSpeak =
        learningMode === LearningModes.HearPolishSelect ||
        learningMode === LearningModes.WriteFromHearPolish
          ? learningVocabulary[currentIndex].translation
          : learningVocabulary[currentIndex].word;

      const utterance = new SpeechSynthesisUtterance(wordToSpeak);
      utterance.lang =
        learningMode === LearningModes.HearPolishSelect ||
        learningMode === LearningModes.WriteFromHearPolish
          ? "pl-PL"
          : "en-US";
      utterance.rate = 1;

      // Funkcja do ustawienia głosu i mówienia
      const setupVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        // Jeśli lista głosów jest pusta, może to oznaczać, że głosy jeszcze się nie załadowały
        if (voices.length > 0) {
          const preferredVoice = voices.find(
            (voice) =>
              (utterance.lang === "pl-PL" && voice.lang.includes("pl")) ||
              (utterance.lang === "en-US" &&
                voice.name.includes("Google US English"))
          );

          if (preferredVoice) {
            utterance.voice = preferredVoice;
          }
          window.speechSynthesis.speak(utterance);
        } else {
          // Jeśli głosy nie są jeszcze dostępne, poczekajmy na zdarzenie onvoiceschanged
          window.speechSynthesis.onvoiceschanged = () => {
            setupVoiceAndSpeak();
            // Czyścimy handler po użyciu
            window.speechSynthesis.onvoiceschanged = null;
          };
        }
      };

      // Wywołanie funkcji
      setupVoiceAndSpeak();
    }
  }, [learningVocabulary, currentIndex, learningMode]);

  useEffect(() => {
    if (learningVocabulary && isAudioMode) {
      const timer = setTimeout(() => {
        speakWord();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, learningVocabulary, isAudioMode, speakWord]);

  return { speakWord, isAudioMode, isSelectMode };
};

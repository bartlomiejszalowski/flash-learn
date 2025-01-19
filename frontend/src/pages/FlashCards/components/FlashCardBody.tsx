import React from "react";

import { VocabularyType } from "@/@Types/general";

interface Props {
  type: "front" | "back";
  currentVocabulary: VocabularyType;
}

export const FlashCardBody: React.FC<Props> = ({ currentVocabulary, type }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">
        {type === "front"
          ? currentVocabulary.word
          : currentVocabulary.translation}
      </h2>

      <div className="relative w-full aspect-video mb-4">
        <img
          src={currentVocabulary.image || "/default-cover.jpg"}
          alt={currentVocabulary.word}
          // layout="fill"
          // objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <p className="text-gray-500">Kliknij, aby obrócić</p>
    </div>
  );
};

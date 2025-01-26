//store odpowiadajacy za przechowywanie wartosci ktora kolekcja jest aktywna
import { create } from "zustand";

import { AvaiableCollectionType } from "@/@Types/general";
import { availableCollections } from "@/constants/avaiableCollections";

type CollectionStore = {
  collections: AvaiableCollectionType[];
  selectedCollection: AvaiableCollectionType | null;
  selectCollection: (collectionId: string) => void; // Wybór kolekcji na podstawie ID
  getCollection: (collectionId: string) => AvaiableCollectionType;
};

export const useCollectionStore = create<CollectionStore>()((set) => ({
  collections: availableCollections,
  selectedCollection: null,
  selectCollection: (collectionId: string) => {
    const collection = availableCollections.find((c) => c.id === collectionId);
    set({ selectedCollection: collection });
  },
  getCollection: (collectionId: string) => {
    const collection = availableCollections.find((c) => c.id === collectionId);
    if (!collection) {
      throw new Error("Collection not found");
    }
    return collection;
  },
}));

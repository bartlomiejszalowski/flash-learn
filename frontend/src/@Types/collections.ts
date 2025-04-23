export type NewCollectionType = {
  name: string;
  description?: string;
  collectionImage?: File | string | null;
};

export type CollectionType = {
  _id: string;
  authorId: string;
  image: string;
  name: string;
  description: string;
  vocabulary: string[];
  createdAt: Date;
};

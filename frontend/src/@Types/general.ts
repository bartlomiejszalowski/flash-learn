export type FeatureType = {
  Icon: JSX.Element;
  title: string;
  description: string;
};

export type TestimonialType = {
  name: string;
  avatar: string;
  role: string;
  content: string;
};

export type LearningEffectivenessItemType = {
  Icon: JSX.Element;
  label: string;
  description: string;
};

export type VocabularyType = {
  id: string;
  word: string;
  translation: string;
  image?: string;
};

export type AvaiableCollectionType = {
  id: string;
  name: string;
  Icon: JSX.Element;
  cardCount: number;
  description: string;
  vocabulary: VocabularyType[];
  collectionProgress: number;
};

export type CollectionType = {
  id: string;
  name: string;
  cardCount: number;
};

export type LeaderboardType = {
  rank: number;
  name: string;
  points: number;
  avatar: string;
};

export type NewUserType = {
  name: string;
  joinedDate: string;
  avatar: string;
};

export type LearningMode = {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
  points: number;
  href: string;
};

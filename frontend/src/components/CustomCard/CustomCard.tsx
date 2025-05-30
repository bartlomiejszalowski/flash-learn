import {
  AvaiableCollectionType,
  CollectionType,
  FeatureType,
  LearningMode,
  TestimonialType,
  VocabularyType,
} from "@/@Types/general";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { customCardCreator } from "@/creators/customCardCreator";

type Props = {
  //stworzyc tutaj typ
  type:
    | "feature"
    | "testimonial"
    | "quickStartLearning"
    | "learningEffectiveness"
    | "avaiableCollection"
    | "collectionList"
    | "scoreCard"
    | "activeUsersCard"
    | "collectionProgress"
    | "learnProgress"
    | "learningMode"
    | "learningEfficiency"
    | "flashCardFront"
    | "flashCardBack";
  prop?:
    | FeatureType
    | TestimonialType
    | AvaiableCollectionType
    | CollectionType
    | LearningMode
    | VocabularyType;
};

export const CustomCard: React.FC<Props> = ({ type, prop }) => {
  const { header, body } = customCardCreator(type, prop);

  return (
    <Card>
      {header && <CardHeader>{header}</CardHeader>}
      <CardContent>{body}</CardContent>
    </Card>
  );
};

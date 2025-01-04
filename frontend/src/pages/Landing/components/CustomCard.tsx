import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { customCardCreator } from "@/creators/customCardCreator";
import {
  AvaiableCollectionType,
  FeatureType,
  TestimonialType,
} from "@/types/general";

type Props = {
  //stworzyc tutaj typ
  type:
    | "feature"
    | "testimonial"
    | "quickStartLearning"
    | "learningEffectiveness"
    | "avaiableCollection";
  prop?: FeatureType | TestimonialType | AvaiableCollectionType;
};

export const CustomCard: React.FC<Props> = ({ type, prop }) => {
  const { header, body } = customCardCreator(type, prop);

  return (
    <Card>
      <CardHeader>{header}</CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
};

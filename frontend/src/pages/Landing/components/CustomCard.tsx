import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { customCardCreator } from "@/creators/customCardCreator";
import { FeatureType, TestimonialType } from "@/types/general";

type Props = {
  //stworzyc tutaj typ
  type:
    | "feature"
    | "testimonial"
    | "quickStartLearning"
    | "learningEffectiveness";
  prop?: FeatureType | TestimonialType;
};

export const CustomCard: React.FC<Props> = ({ type, prop }) => {
  const { header, body } = customCardCreator(type, prop);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{header}</CardTitle>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
};

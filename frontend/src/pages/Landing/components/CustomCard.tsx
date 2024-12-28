import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuickStartHeader } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickStartHeader";
import { FeatureType, TestimonialType } from "@/types/general";

import { FeatureHeader } from "../sections/Feature/components/FeatureHeader";
import { TestimonialHeader } from "../sections/Testimonial/components/TestimonialHeader";

type Props = {
  type: "feature" | "testimonial" | "quickStartLearning";
  prop?: FeatureType | TestimonialType;
};

export const CustomCard: React.FC<Props> = ({ type, prop }) => {
  let header;
  let body;

  switch (type) {
    case "feature":
      header = <FeatureHeader feature={prop as FeatureType} />;
      body = <p>{(prop as FeatureType).description}</p>;
      break;
    case "testimonial":
      header = <TestimonialHeader testimonial={prop as TestimonialType} />;
      body = <p className="italic">{(prop as TestimonialType).content}</p>;
      break;
    case "quickStartLearning":
      header = <QuickStartHeader />;
      body = (
        <>
          <p className="mb-4">Rozpocznij naukę z losową kolekcją fiszek!</p>
          <Button>Rozpocznij teraz</Button>
        </>
      );
      break;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{header}</CardTitle>
      </CardHeader>
      <CardContent>{body}</CardContent>
    </Card>
  );
};

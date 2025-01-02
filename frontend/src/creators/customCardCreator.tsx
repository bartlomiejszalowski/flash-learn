import { LearningEffectivenessBody } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessBody";
import { LearningEffectivenessHeader } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessHeader";
import { QuickStartLearningBody } from "@/pages/Dashboard/components/QuickStartLearning/components/quickSartLearningBody";
import { QuickStartHeader } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickStartHeader";
import { FeatureBody } from "@/pages/Landing/sections/Feature/components/FeatureBody";
import { FeatureHeader } from "@/pages/Landing/sections/Feature/components/FeatureHeader";
import { TestimonialBody } from "@/pages/Landing/sections/Testimonial/components/TestimonialBody";
import { TestimonialHeader } from "@/pages/Landing/sections/Testimonial/components/TestimonialHeader";
import {
  FeatureType,
  LearningEffectivenessItemType,
  TestimonialType,
} from "@/types/general";

export const customCardCreator = (
  type: string,
  prop?: FeatureType | TestimonialType | LearningEffectivenessItemType
) => {
  let header;
  let body;

  switch (type) {
    //dla bardziej rozbudowanych body stworzyc komponenty
    case "feature":
      header = <FeatureHeader feature={prop as FeatureType} />;
      body = <FeatureBody description={(prop as FeatureType).description} />;
      break;
    case "testimonial":
      header = <TestimonialHeader testimonial={prop as TestimonialType} />;
      body = <TestimonialBody content={(prop as TestimonialType).content} />;
      break;
    case "quickStartLearning":
      header = <QuickStartHeader />;
      body = <QuickStartLearningBody />;

      break;
    case "learningEffectiveness":
      header = <LearningEffectivenessHeader />;
      body = <LearningEffectivenessBody />;
      break;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }

  return { header, body };
};

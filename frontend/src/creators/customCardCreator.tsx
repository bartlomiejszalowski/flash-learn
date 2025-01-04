import { AvaiableCollectionListBody } from "@/pages/Dashboard/components/AvailableCollectionList/components/AvaiableCollectionListBody";
import { AvaiableCollectionListHeader } from "@/pages/Dashboard/components/AvailableCollectionList/components/AvaiableCollectionListHeader";
import { LearningEffectivenessBody } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessBody";
import { LearningEffectivenessHeader } from "@/pages/Dashboard/components/LearningEffectiveness/components/LearningEffectivenessHeader";
import { QuickStartLearningBody } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickSartLearningBody";
import { QuickStartHeader } from "@/pages/Dashboard/components/QuickStartLearning/components/QuickStartHeader";
import { FeatureBody } from "@/pages/Landing/sections/Feature/components/FeatureBody";
import { FeatureHeader } from "@/pages/Landing/sections/Feature/components/FeatureHeader";
import { TestimonialBody } from "@/pages/Landing/sections/Testimonial/components/TestimonialBody";
import { TestimonialHeader } from "@/pages/Landing/sections/Testimonial/components/TestimonialHeader";
import {
  AvaiableCollectionType,
  FeatureType,
  LearningEffectivenessItemType,
  TestimonialType,
} from "@/types/general";

export const customCardCreator = (
  type: string,
  prop?:
    | FeatureType
    | TestimonialType
    | LearningEffectivenessItemType
    | AvaiableCollectionType
) => {
  let header;
  let body;

  switch (type) {
    //dla bardziej rozbudowanych body stworzyc komponenty
    //add here ENUM
    case "feature":
      header = <FeatureHeader feature={prop as FeatureType} />;
      body = <FeatureBody description={(prop as FeatureType).description} />;
      break;
    //add here ENUM
    case "testimonial":
      header = <TestimonialHeader testimonial={prop as TestimonialType} />;
      body = <TestimonialBody content={(prop as TestimonialType).content} />;
      break;
    //add here ENUM
    case "quickStartLearning":
      header = <QuickStartHeader />;
      body = <QuickStartLearningBody />;

      break;
    //add here ENUM
    case "learningEffectiveness":
      header = <LearningEffectivenessHeader />;
      body = <LearningEffectivenessBody />;
      break;
    case "avaiableCollection":
      header = (
        <AvaiableCollectionListHeader
          avaiableCollection={prop as AvaiableCollectionType}
        />
      );
      body = (
        <AvaiableCollectionListBody
          cardCount={(prop as AvaiableCollectionType).cardCount}
        />
      );
      break;
    default:
      throw new Error(`Unsupported type: ${type}`);
  }

  return { header, body };
};
